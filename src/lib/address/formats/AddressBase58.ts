import { t } from "@lingui/macro"
import blake from "blakejs"
import isEqual from "lodash.isequal"
import { byteToBits, getFirstByte, getLeadingBits, getTrailingBits } from "src/lib"
import { BlockchainAddress } from "./BlockhainAddress"

/**
 * Ergo address types.
 *
 * @see {@link https://docs.ergoplatform.com/dev/wallet/address/}
 */
type TErgoAddressType = {
  type: number
  bits: Array<number>
  name: string
}

const ergoAddressTypes = [
  {
    type: 1,
    bits: [1, 0, 0, 0],
    name: "Pay-to-PublicKey (P2PK)",
  },
  {
    type: 2,
    bits: [0, 1, 0, 0],
    name: "Pay-to-Script-Hash (P2SH)",
  },
  {
    type: 3,
    bits: [1, 1, 0, 0],
    name: "Pay-to-Script (P2S)",
  },
]

/**
 * Extended class that parses Bech32 address during initialization.
 */
export class Base58Address extends BlockchainAddress {
  constructor(address: string, decoded: Uint8Array) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name
    this.encoding = "Base58"

    this.decoded = {
      bytes: Array.from(decoded),
      hex: Buffer.from(decoded).toString("hex"),
    }

    // generate header
    const headerByteArray = getFirstByte(decoded)

    const headerByte = parseInt(Buffer.from(headerByteArray).toString("hex"), 16)
    const headerBits = byteToBits(headerByte, 8)

    // generate checksum property
    const checksumBytes = getErgoChecksum(decoded)

    this.payload.checksum = {
      bytes: Array.from(Buffer.from(checksumBytes)),
      hex: Buffer.from(checksumBytes).toString("hex"),
    }

    // generate content
    const contentBytes = getErgoContent(decoded)
    this.payload.content = {
      bytes: Array.from(Buffer.from(contentBytes)),
      hex: Buffer.from(contentBytes).toString("hex"),
    }

    if (isErgoAddress(decoded)) {
      this.isSupported = true
      this.blockchain.name = "Ergo"
      this.blockchain.explorerUrl = `https://explorer.ergoplatform.com/en/addresses/`
      this.currency = {
        decimals: 9,
        ticker: "ERG",
        tickerSymbol: "Σ",
        nano: "nanoERG",
      }

      this.payload.prefix = {
        byte: headerByte,
        hex: Buffer.from(headerByteArray).toString("hex"),
        bits: headerBits,
        leading: {
          bits: getLeadingBits(headerBits),
          type: t`Address Type`,
        },
        trailing: {
          bits: getTrailingBits(headerBits),
          type: t`Network Type`,
        },
      }

      if (this.payload.prefix.trailing !== undefined) {
        this.blockchain.network = getErgoNetwork(this.payload.prefix.trailing.bits)

        // invalidate if not mainnet
        if (this.blockchain.network !== "Mainnet") {
          this.isSupported = false
        }
      }

      if (this.payload.prefix.leading !== undefined) {
        const typeObject = getErgoType(this.payload.prefix.leading.bits)

        Object.assign(this, { type: typeObject })

        // invalidate if not mainnet
        if (typeObject.type !== 1) {
          this.isSupported = false
        }
      }
    }
  }
}

/**
 * Returns the content bytes last four bytes of the Ergo address (which is the checksum payload).
 *
 * @param decoded - Uint8Array with the full decoded address
 */
function getErgoContent(decoded: Uint8Array): Uint8Array {
  const size = decoded.length

  const result = decoded.slice(0, size - 4) // remove last four (checksum) bytes

  return result.slice(1) // remove first (header) byte
}

/**
 * Returns the last four bytes of the Ergo address (which is the checksum payload).
 *
 * @param decoded - Uint8Array with the full decoded address
 */
function getErgoChecksum(decoded: Uint8Array): Uint8Array {
  const size = decoded.length

  return decoded.slice(size - 4, size)
}

/**
 * Returns true if this is an Ergo address.
 *
 * @param decoded - Array with 8 bits
 */
function isErgoAddress(decoded: Uint8Array): boolean {
  const size = decoded.length
  const script = decoded.slice(0, size - 4)
  const checksum = decoded.slice(size - 4, size)

  const calculatedChecksum = Buffer.from(blake.blake2b(script, undefined, 32)).slice(0, 4)

  return calculatedChecksum.toString("hex") === Buffer.from(checksum).toString("hex")
}

/**
 * Returns the blockchain network by calculating the sum of network header bits.
 *
 * @param networkBits - Array with 4 network bits
 */
function getErgoNetwork(networkBits: Array<number>) {
  const sum = networkBits.reduce((a, b) => a + b)

  if (sum === 0) {
    return "Mainnet"
  }

  if (sum === 1) {
    return "Testnet"
  }

  throw `Unable to determine Ergo network using network header bits ${networkBits.join()}`
}

/**
 * Returns the Ergo address 'type' object matching the type header bits.
 *
 * @param typeBits - Array with 4 type bits
 */
function getErgoType(typeBits: Array<number>): TErgoAddressType {
  const type = ergoAddressTypes.find(({ bits }) => isEqual(bits, typeBits))

  if (type === undefined) {
    throw `Unable to determine Ergo address type using header bits ${typeBits.join()}`
  }

  return type
}
