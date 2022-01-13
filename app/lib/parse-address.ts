import { Bech32Address } from "./bech32-address"

import { bech32 } from "bech32"

/**
 * Helper function that parses the given blockchain against all of the supported formats.
 *
 * @param address - The given blockchain address
 */
export const parseAddress = function (address: string): Bech32Address | boolean {
  const decoded = bech32.decodeUnsafe(address.toLocaleLowerCase(), 250)

  if (decoded !== undefined) {
    const parsedBech32 = new Bech32Address(address, decoded)

    return parsedBech32
  }

  return true
}
