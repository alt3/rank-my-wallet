import { BlockchainAddress } from "./blockhain-address"
import blake from "blakejs"
import isEqual from "lodash.isequal"
import { getFirstByte, byteToBits, getLeadingBits, getTrailingBits } from "./utils"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
 */
const ergoAddressTypes = [
  {
    type: 1,
    bits: [1, 0, 0, 0],
    name: "Pay-to-PublicKey",
    abbreviation: "P2PK",
  },
  {
    type: 2,
    bits: [0, 1, 0, 0],
    name: "Pay-to-Script-Hash",
    abbreviation: "P2SH",
  },
  {
    type: 3,
    bits: [1, 1, 0, 0],
    name: "Pay-to-Script",
    abbreviation: "P2S",
  },
]

/**
 * Extended class that parses Bech32 address during initialization.
 */
export class Base58Address extends BlockchainAddress {
  bytes: Array<number>
  blockchainVersion: string
  header: {
    byte: number
    bits: Array<number>
    leading?: {
      bits: Array<number>
      type: string
    }
    trailing?: {
      bits: Array<number>
      type: string
    }
  }

  constructor(address: string, decoded: Buffer) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name
    this.encoding = "base58"

    this.bytes = Array.from(decoded)
    const headerByte = getFirstByte(this.bytes)
    const headerBits = byteToBits(headerByte, 8)

    if (isErgoAddress(decoded)) {
      this.blockchain = "ergo"

      this.header = {
        byte: headerByte,
        bits: headerBits,
        leading: {
          bits: getLeadingBits(headerBits),
          type: "network",
        },
        trailing: {
          bits: getTrailingBits(headerBits),
          type: "type",
        },
      }
      if (this.header.leading !== undefined) {
        this.network = getErgoNetwork(this.header.leading.bits)
      }

      if (this.header.trailing !== undefined) {
        const typeObject = getErgoType(this.header.trailing.bits)

        Object.assign(this, { type: typeObject })
      }

      return
    }
  }
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
function getErgoType(typeBits: Array<number>): object {
  const type = ergoAddressTypes.find(({ bits }) => isEqual(bits, typeBits))

  if (type === undefined) {
    throw `Unable to determine Ergo address type using header bits ${typeBits.join()}`
  }

  return type
}
