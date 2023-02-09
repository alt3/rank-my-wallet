import { bech32 } from "bech32"
import bs58 from "bs58"
import { Base58Address, Bech32Address, RegexAddress, UnrecognizedAddress } from "./formats"

/**
 * Helper function that parses the given blockchain address against all of the supported formats.
 *
 * @param address - The given blockchain address
 */
export const parseAddress = function (
  address: string
): RegexAddress | Bech32Address | Base58Address | UnrecognizedAddress {
  // Bech32
  const bech32decoded = bech32.decodeUnsafe(address.toLowerCase(), 250) // bech32 requires all lowercase

  if (bech32decoded !== undefined) {
    const parsedBech32 = new Bech32Address(address.toLowerCase(), bech32decoded)

    if (parsedBech32.blockchain.name !== undefined) {
      return parsedBech32
    }
  }

  // Base58
  try {
    const base58decoded = bs58.decode(address)
    const parsedBase58 = new Base58Address(address, base58decoded)

    if (parsedBase58.blockchain.name !== undefined) {
      return parsedBase58
    }
  } catch (e) {}

  // Regexes first, just for fun
  const parsedRegex = new RegexAddress(address)

  if (parsedRegex.blockchain.name !== undefined) {
    return parsedRegex
  }

  // still here so return unknown format
  return new UnrecognizedAddress(address)
}
