import { bech32, Decoded } from "bech32"
import isEqual from "lodash.isequal"
import { BlockchainAddress } from "./blockhain-address"
import { byteToBits } from "./utils"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
 */
const shelleyHeaderTypes = [
  {
    type: 0,
    bits: [0, 0, 0, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "StakeKeyHash",
  },
  {
    type: 1,
    bits: [1, 0, 0, 0],
    paymentPart: "ScriptHash",
    delegationPart: "StakeKeyHash",
  },
  {
    type: 2,
    bits: [0, 1, 0, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "ScriptHash",
  },
  {
    type: 3,
    bits: [1, 1, 0, 0],
    paymentPart: "ScriptHash",
    delegationPart: "ScriptHash",
  },
  {
    type: 4,
    bits: [0, 0, 1, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: "Pointer",
  },
  {
    type: 5,
    bits: [1, 0, 1, 0],
    paymentPart: "ScriptHash",
    delegationPart: "Pointer",
  },
  {
    type: 6,
    bits: [0, 1, 1, 0],
    paymentPart: "PaymentKeyHash",
    delegationPart: null,
  },
  {
    type: 7,
    bits: [1, 1, 1, 0],
    paymentPart: "ScriptHash",
    delegationPart: null,
  },
  {
    type: 14,
    bits: [0, 1, 1, 1],
    stakeReference: "StakeKeyHash",
  },
  {
    type: 15,
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
  firstByte: number
  headerBits: Array<number>
  headerBitsNetwork: Array<number>
  headerBitsType: Array<number>
  type: object | undefined

  constructor(address: string, decoded: Decoded) {
    super(address) // sets address property in the base class (lowercased there)
    this.decoded = decoded
    this.encoding = "bech32"
    this.blockchain = prefixToBlockchain(decoded.prefix)
    this.bytes = wordsToBytes(decoded.words)

    if (this.bytes !== undefined) {
      this.blockchainVersion = "Shelley"
      this.firstByte = getFirstByte(this.bytes)
      this.headerBits = byteToBits(this.firstByte, 8)
      this.headerBitsNetwork = getHeaderBitsNetwork(this.headerBits)
      this.headerBitsType = getHeaderBitsType(this.headerBits)
      this.type = getType(this.headerBitsType)
    }

    this.network = getNetwork(this.headerBitsNetwork, decoded.prefix)
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
 * Returns an array with the 4 leading header bits (yielding the Shelley network).
 *
 * @param headerBits - Array with 8 bits
 */
function getHeaderBitsNetwork(headerBits: Array<number>): Array<number> {
  return headerBits.slice(0, 4)
}

/**
 * Returns an array with the 4 trailing header bits (yielding the Shelley address type).
 *
 * @param headerBits - Array with 8 bits
 */
function getHeaderBitsType(headerBits: Array<number>): Array<number> {
  return headerBits.slice(-4)
}

/**
 * Returns the blockchain network by parsing Shelly header bits or the Bech32 prefix.
 *
 * @param headerBits - Array with 8 bits
 */
function getNetwork(headerBitsNetwork: Array<number> | undefined, prefix: string): string {
  // try Shelley network header bits
  if (headerBitsNetwork !== undefined) {
    if (headerBitsNetwork.reduce((a, b) => a + b) === 0) {
      return "Testnet" // Sum of network header bits is 0
    }

    if (headerBitsNetwork.reduce((a, b) => a + b) === 1) {
      return "Mainnet" // Sum of network header bits is 1
    }

    return "Unknown"
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
function getType(headerBitsType: Array<number>): object | undefined {
  return shelleyHeaderTypes.find(({ bits }) => isEqual(bits, headerBitsType))
}
