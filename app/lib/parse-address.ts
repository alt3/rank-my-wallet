import { bech32 } from "bech32"
import { Bech32Address } from "./address-bech32"
import { Base58Address } from "./address-base58"
import { UnknownAddress } from "./address-unknown"
import blake from "blakejs"
import bs58 from "bs58"

/**
 * Helper function that parses the given blockchain against all of the supported formats.
 *
 * @param address - The given blockchain address
 */
export const parseAddress = function (
  address: string
): Bech32Address | Base58Address | object | UnknownAddress {
  // Bech32
  const bech32decoded = bech32.decodeUnsafe(address.toLowerCase(), 250) // bech32 requires all lowercase

  if (bech32decoded !== undefined) {
    const parsedBech32 = new Bech32Address(address.toLowerCase(), bech32decoded)

    return parsedBech32
  }

  // Base58
  try {
    const base58decoded = bs58.decode(address)
    const parsedBase58 = new Base58Address(address, base58decoded)

    return parsedBase58
  } catch (e) {}

  // Ethereum (just for fun so nothing fancy)
  if (address.match(/^(0x)?[0-9a-f]{40}$/i)) {
    return {
      address: address,
      blockchain: "ethereum",
    }
  }

  // unknown encoding
  return new UnknownAddress(address)
}
