import { byteToBits, getFirstByte, getLeadingBits, getTrailingBits } from "app/lib/utils"
import blake from "blakejs"
import isEqual from "lodash.isequal"
import { BlockchainAddress } from "./BlockhainAddress"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
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
  decoded: {
    bytes: Array<number>
    hex: string
  }

  constructor(address: string, decoded: Buffer) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name
    this.encoding = "base58"

    this.decoded = {
      bytes: Array.from(decoded),
      hex: decoded.toString("hex"),
    }

    // generate header
    const headerByteBuffer = getFirstByte(decoded)
    const headerByte = parseInt(headerByteBuffer.toString("hex"))
    const headerBits = byteToBits(headerByte, 8)

    // generate checksum property
    const checksumBytes = getErgoChecksum(decoded)

    this.payload.checksum = {
      bytes: Array.from(Buffer.from(checksumBytes)),
      hex: checksumBytes.toString("hex"),
    }

    // generate content
    const contentBytes = getErgoContent(decoded)
    this.payload.content = {
      bytes: Array.from(Buffer.from(contentBytes)),
      hex: contentBytes.toString("hex"),
    }

    if (isErgoAddress(decoded)) {
      this.isSupported = true
      this.blockchain.name = "ergo"
      this.currency = {
        decimals: 9,
        ticker: "ERG",
        tickerSymbol: "Σ",
        nano: "nanoERG",
      }

      this.payload.prefix = {
        byte: headerByte,
        hex: headerByteBuffer.toString("hex"),
        bits: headerBits,
        leading: {
          bits: getLeadingBits(headerBits),
          type: "address type",
        },
        trailing: {
          bits: getTrailingBits(headerBits),
          type: "network type",
        },
      }

      if (this.payload.prefix.trailing !== undefined) {
        this.blockchain.network = getErgoNetwork(this.payload.prefix.trailing.bits)

        // invalidate if not mainnet
        if (this.blockchain.network !== "mainnet") {
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
 * @param decoded - Buffer with the full decoded address
 */
function getErgoContent(decoded: Buffer): Buffer {
  const size = decoded.length

  const result = decoded.slice(0, size - 4) // remove last four (checksum) bytes

  return result.slice(1) // remove first (header) byte
}

/**
 * Returns the last four bytes of the Ergo address (which is the checksum payload).
 *
 * @param decoded - Buffer with the full decoded address
 */
function getErgoChecksum(decoded: Buffer): Buffer {
  const size = decoded.length

  return decoded.slice(size - 4, size)
}

/**
 * Returns true if this is an Ergo address.
 *
 * @param decoded - Array with 8 bits
 */
function isErgoAddress(decoded: Buffer): boolean {
  const size = decoded.length
  const script = decoded.slice(0, size - 4)
  const checksum = decoded.slice(size - 4, size)

  const calculatedChecksum = Buffer.from(blake.blake2b(script, undefined, 32)).slice(0, 4)

  return calculatedChecksum.toString("hex") === checksum.toString("hex")
}

/**
 * Returns the blockchain network by calculating the sum of network header bits.
 *
 * @param networkBits - Array with 4 network bits
 */
function getErgoNetwork(networkBits: Array<number>) {
  const sum = networkBits.reduce((a, b) => a + b)

  if (sum === 0) {
    return "mainnet"
  }

  if (sum === 1) {
    return "testnet"
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
