import { t } from "@lingui/macro"
import { bech32, Decoded } from "bech32"
import isEqual from "lodash.isequal"
import { BaseAddress } from "src/lib/addressClasses/BaseAddress"
import { getLeadingBits } from "src/lib/bits/getLeadingBits"
import { getTrailingBits } from "src/lib/bits/getTrailingBits"
import { byteToBits } from "src/lib/bytes/byteToBits"
import { getFirstByte } from "src/lib/bytes/getFirstByte"

/**
 * Shelley address types.
 *
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#shelley-addresses}
 */
type TCardanoAddressType = {
  type: number
  name: string
  bits: Array<number>
}

const shelleyAddressTypes = [
  {
    type: 0,
    bits: [0, 0, 0, 0],
    name: "Type-00 (Base Address)",
  },
  {
    type: 1,
    name: "Type-01",
    bits: [1, 0, 0, 0],
  },
  {
    type: 2,
    name: "Type-02",
    bits: [0, 1, 0, 0],
  },
  {
    type: 3,
    name: "Type-03",
    bits: [1, 1, 0, 0],
  },
  {
    type: 4,
    name: "Type-04",
    bits: [0, 0, 1, 0],
  },
  {
    type: 5,
    name: "Type-05",
    bits: [1, 0, 1, 0],
  },
  {
    type: 6,
    name: "Type-06",
    bits: [0, 1, 1, 0],
  },
  {
    type: 7,
    name: "Type-07",
    bits: [1, 1, 1, 0],
  },
  {
    type: 14,
    name: "Type-14 (Stake Address)",
    bits: [0, 1, 1, 1],
  },
  {
    type: 15,
    name: "Type-15",
    bits: [1, 1, 1, 1],
  },
]

/**
 * Extended class that parses Bech32 address during initialization.
 */
export class Bech32Address extends BaseAddress {
  version: string // shelley
  accountAddress: {
    bytes: Array<number>
    hex: string
  }
  stakeAddress: {
    bytes: Array<number>
    hex: string
    bech32: string
  }

  constructor(address: string, decoded: Decoded) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name

    this.encoding = "Bech32"

    const prefix = decoded.prefix
    const words = decoded.words
    const bytesBuffer = wordsToBytesBuffer(words)

    this.decoded = {
      prefix: prefix,
      words: words,
    }

    // bech 32 decoded address
    if (words !== undefined) {
      // reject bitcoin addresses
      if (["bc", "tb"].includes(prefix)) {
        this.blockchain.name = "Bitcoin"
        return
      }

      // reject non-cardano prefixes
      if (["addr", "addr_test"].includes(prefix)) {
        this.blockchain.name = "Unrecognized Bech32"
      }

      // still here so must be a supported cardano address
      this.isSupported = true
      this.blockchain.name = "Cardano"
      this.blockchain.explorerUrl = `https://pool.pm/`
      this.version = "Shelley"
      this.decoded.bytes = Array.from(bytesBuffer)
      this.currency = {
        decimals: 6,
        ticker: "ADA",
        tickerSymbol: "₳",
        nano: "lovelace",
      }

      // add hex conversion
      if (bytesBuffer) {
        this.decoded.hex = bytesBuffer.toString("hex")

        // get account address (last 28 bytes)
        const accountAddressBuffer = bytesBuffer.slice(-28)
        const accountAddressBytes = Array.from(accountAddressBuffer)
        const accountAddressHex = accountAddressBuffer.toString("hex")

        this.accountAddress = {
          bytes: accountAddressBytes,
          hex: accountAddressHex,
        }

        // stake address = account hex + added header '1e' (225)
        // we do not need bytes for this but we render it anyway for a property-complete object
        const stakeAddressBytes = [225, ...this.accountAddress.bytes]
        const stakeAddressHex = "e1" + this.accountAddress.hex
        const stakeAddressWords = bech32.toWords(Buffer.from(stakeAddressHex, "hex"))

        this.stakeAddress = {
          bytes: stakeAddressBytes,
          hex: stakeAddressHex,
          bech32: bech32.encode("stake", stakeAddressWords, 200),
        }

        // analyze the header byte
        const headerByteBuffer = getFirstByte(bytesBuffer)
        const headerByte = parseInt(Buffer.from(headerByteBuffer).toString("hex"), 16)
        const headerBits = byteToBits(headerByte, 8)

        this.payload.prefix = {
          byte: headerByte,
          hex: Buffer.from(headerByteBuffer).toString("hex"),
          bits: headerBits,
          leading: {
            bits: getLeadingBits(headerBits),
            type: t`Network Type`,
          },
          trailing: {
            bits: getTrailingBits(headerBits),
            type: t`Address Type`,
          },
        }

        if (this.payload.prefix.leading && this.payload.prefix.trailing) {
          this.blockchain.network = getShelleyNetwork(this.payload.prefix.leading.bits)

          const typeObject = getType(this.payload.prefix.trailing.bits)

          // invalidate address if type not base or stake
          if (typeObject.type !== 0 && typeObject.type !== 14) {
            this.isSupported = false
          }

          // invalidate address if not mainnet or not Type-00
          if (this.blockchain.network !== "Mainnet") {
            this.isSupported = false
          }

          Object.assign(this, { type: typeObject })
        }
      }
    }
  }
}

/**
 * Converts the Bech32 words array to an array of bytes.
 *
 * @param bytes - Bech32 words
 */
function wordsToBytesBuffer(words: number[]): Buffer {
  let result

  try {
    result = Buffer.from(bech32.fromWords(words))
  } catch (e) {}

  return result
}

/**
 * Returns the Shelley network by calculating the sum of network header bits.
 *
 * @param networkBits - Array with 4 network bits
 */
function getShelleyNetwork(networkBits: Array<number>) {
  const sum = networkBits.reduce((a, b) => a + b)

  if (sum === 0) {
    return "Testnet"
  }

  if (sum === 1) {
    return "Mainnet"
  }

  throw `Unable to determine Shelley network using network header bits ${networkBits.join()}`
}

/**
 * Returns the Shelley address 'type' object matching the Shelley type header bits.
 *
 * @param typeBits - Array with 4 bits
 */
function getType(typeBits: Array<number>): TCardanoAddressType {
  const type = shelleyAddressTypes.find(({ bits }) => isEqual(bits, typeBits))

  if (type === undefined) {
    throw `Unable to determine Shelley address type using header bits ${typeBits.join()}`
  }

  return type
}
