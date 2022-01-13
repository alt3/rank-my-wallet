import { bech32, Decoded } from "bech32"
import isEqual from "lodash.isequal"
import { BlockchainAddress } from "./blockhain-address"
import { byteToBits, getLeadingBits, getTrailingBits } from "./utils"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
 */
const shelleyAddressTypes = [
  {
    type: 0,
    name: "type-00",
    bits: [0, 0, 0, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "StakeKeyHash",
  },
  {
    type: 1,
    name: "type-01",
    bits: [1, 0, 0, 0],
    paymentPart: "ScriptHash",
    delegationPart: "StakeKeyHash",
  },
  {
    type: 2,
    name: "type-02",
    bits: [0, 1, 0, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "ScriptHash",
  },
  {
    type: 3,
    name: "type-03",
    bits: [1, 1, 0, 0],
    paymentPart: "ScriptHash",
    delegationPart: "ScriptHash",
  },
  {
    type: 4,
    name: "type-04",
    bits: [0, 0, 1, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "Pointer",
  },
  {
    type: 5,
    name: "type-05",
    bits: [1, 0, 1, 0],
    paymentPart: "ScriptHash",
    delegationPart: "Pointer",
  },
  {
    type: 6,
    name: "type-06",
    bits: [0, 1, 1, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: null,
  },
  {
    type: 7,
    name: "type-07",
    bits: [1, 1, 1, 0],
    paymentPart: "ScriptHash",
    delegationPart: null,
  },
  {
    type: 14,
    name: "type-14",
    bits: [0, 1, 1, 1],
    stakeReference: "StakeKeyHash",
  },
  {
    type: 15,
    name: "type-15",
    bits: [1, 1, 1, 1],
    stakeReference: "ScriptHash",
  },
]

/**
 * Extended class that parses Bech32 address during initialization.
 */
export class Bech32Address extends BlockchainAddress {
  decoded: Decoded
  bytes: Array<number> | undefined
  blockchainVersion: string
  type: object | undefined
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

    this.decoded = decoded
    this.encoding = "bech32"
    this.blockchain = prefixToBlockchain(decoded.prefix)
    this.bytes = wordsToBytes(decoded.words)

    if (this.bytes !== undefined) {
      this.blockchainVersion = "Shelley"
      const headerByte = getFirstByte(this.bytes)

      const headerBits = byteToBits(headerByte, 8)

      this.header = {
        byte: headerByte,
        bits: headerBits,
        leading: {
          bits: getLeadingBits(headerBits),
          type: "type",
        },
        trailing: {
          bits: getTrailingBits(headerBits),
          type: "network",
        },
      }

      this.type = getType(this.header.leading.bits)
    }

    this.network = getNetwork(this.header.trailing.bits, decoded.prefix)
  }
}

/**
 * Returns the blockchain name by looking at the Bech32 prefix.
 *
 * @param bytes - Bech32 prefix
 */
function prefixToBlockchain(prefix: string): string {
  if (["addr", "stake", "addr_test", "stake_test"].includes(prefix)) {
    return "Cardano"
  }
  if (["bc", "tb"].includes(prefix)) {
    return "Bitcoin"
  }
  return "Unknown"
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
 * Returns the first byte found in the byte array.
 *
 * @param bytes - Array with bytes
 */
function getFirstByte(bytes: Array<number>): number {
  if (bytes[0] === undefined) {
    return 0
  }
  return bytes[0]
}

/**
 * Returns the blockchain network by parsing Shelly header bits or the Bech32 prefix.
 *
 * @param headerBits - Array with 8 bits
 */
function getNetwork(networkBits: Array<number> | undefined, prefix: string): string {
  // try Shelley network header bits
  if (networkBits !== undefined) {
    if (networkBits.reduce((a, b) => a + b) === 0) {
      return "testnet" // Sum of network header bits is 0
    }

    if (networkBits.reduce((a, b) => a + b) === 1) {
      return "mainnet" // Sum of network header bits is 1
    }

    return "unknown"
  }

  // use decoded bech32 prefix otherwise
  if (["bc", "tb"].includes(prefix)) {
    return "mainnet"
  }
  if (["tb"].includes(prefix)) {
    return "testnet"
  }

  return "Unknown"
}

/**
 * Returns the Shelley address 'type' object matching the Shelley type header bits.
 *
 * @param headerBits - Array with 8 bits
 */
function getType(typeBits: Array<number>): object | undefined {
  return shelleyAddressTypes.find(({ bits }) => isEqual(bits, typeBits))
}
