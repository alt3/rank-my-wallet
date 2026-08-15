import { bech32 } from "bech32"
import bs58 from "bs58"
import { UnrecognizedAddress } from "src/lib/addressClasses/UnrecognizedAddress"
import { Base58Address } from "src/lib/addressClasses/Base58Address"
import { Bech32Address } from "src/lib/addressClasses/Bech32Address"
import { RegexAddress } from "src/lib/addressClasses/RegexAddress"

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

  // Base58. Only the decode is allowed to fail quietly -- bs58 throws for any
  // input that is not Base58, which is the normal way this branch is skipped.
  // The constructor is deliberately outside the try: a throw in there is a bug,
  // and swallowing it silently misclassifies a valid address as unrecognized.
  let base58decoded: Uint8Array | undefined

  try {
    base58decoded = bs58.decode(address)
  } catch {
    base58decoded = undefined
  }

  if (base58decoded !== undefined) {
    const parsedBase58 = new Base58Address(address, base58decoded)

    if (parsedBase58.blockchain.name !== undefined) {
      return parsedBase58
    }
  }

  // Regexes first, just for fun
  const parsedRegex = new RegexAddress(address)

  if (parsedRegex.blockchain.name !== undefined) {
    return parsedRegex
  }

  // still here so return unknown format
  return new UnrecognizedAddress(address)
}
