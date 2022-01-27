import { bech32, Decoded } from "bech32"
import isEqual from "lodash.isequal"
import { BlockchainAddress } from "./blockhain-address"
import { getFirstByte, byteToBits, getLeadingBits, getTrailingBits } from "../utils"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
 */
const shelleyAddressTypes = [
  {
    type: 0,
    bits: [0, 0, 0, 0],
    name: "type-00 (Base Address)",
  },
  {
    type: 1,
    name: "type-01",
    bits: [1, 0, 0, 0],
  },
  {
    type: 2,
    name: "type-02",
    bits: [0, 1, 0, 0],
  },
  {
    type: 3,
    name: "type-03",
    bits: [1, 1, 0, 0],
  },
  {
    type: 4,
    name: "type-04",
    bits: [0, 0, 1, 0],
  },
  {
    type: 5,
    name: "type-05",
    bits: [1, 0, 1, 0],
  },
  {
    type: 6,
    name: "type-06",
    bits: [0, 1, 1, 0],
  },
  {
    type: 7,
    name: "type-07",
    bits: [1, 1, 1, 0],
  },
  {
    type: 14,
    name: "type-14",
    bits: [0, 1, 1, 1],
  },
  {
    type: 15,
    name: "type-15",
    bits: [1, 1, 1, 1],
  },
]

/**
 * Extended class that parses Bech32 address during initialization.
 */
export class Bech32Address extends BlockchainAddress {
  decoded: Decoded
  bytes: Array<number> | undefined
  version: string
  header: {
    byte: number
    bits: Array<number>
    leading: {
      bits: Array<number>
      type: string
    }
    trailing: {
      bits: Array<number>
      type: string
    }
  }

  constructor(address: string, decoded: Decoded) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name

    this.encoding = "bech32"
    this.decoded = decoded

    this.bytes = wordsToBytes(decoded.words)

    if (this.bytes !== undefined) {
      this.blockchain = "cardano"
      this.currencySymbol = "₳"
      this.ticker = "ADA"

      this.version = "shelley"

      const headerByte = getFirstByte(this.bytes)
      const headerBits = byteToBits(headerByte, 8)

      this.header = {
        byte: headerByte,
        bits: headerBits,
        leading: {
          bits: getLeadingBits(headerBits),
          type: "network type",
        },
        trailing: {
          bits: getTrailingBits(headerBits),
          type: "address type",
        },
      }

      this.network = getShelleyNetwork(this.header.leading.bits)

      const typeObject = getType(this.header.trailing.bits)

      Object.assign(this, { type: typeObject })

      return
    }
  }
}

/**
 * Converts the Bech32 words array to an array of bytes.
 *
 * @param bytes - Bech32 words
 */
function wordsToBytes(words: number[]): Array<number> | undefined {
  let bytes
  try {
    bytes = bech32.fromWords(words)
  } catch (e) {}

  return bytes
}

/**
 * Returns the Shelley network by calculating the sum of network header bits.
 *
 * @param networkBits - Array with 4 network bits
 */
function getShelleyNetwork(networkBits: Array<number>) {
  const sum = networkBits.reduce((a, b) => a + b)

  if (sum === 0) {
    return "testnet"
  }

  if (sum === 1) {
    return "mainnet"
  }

  throw `Unable to determine Shelley network using network header bits ${networkBits.join()}`
}

/**
 * Returns the Shelley address 'type' object matching the Shelley type header bits.
 *
 * @param typeBits - Array with 4 bits
 */
function getType(typeBits: Array<number>): object {
  const type = shelleyAddressTypes.find(({ bits }) => isEqual(bits, typeBits))

  if (type === undefined) {
    throw `Unable to determine Shelley address type using header bits ${typeBits.join()}`
  }

  return type
}
