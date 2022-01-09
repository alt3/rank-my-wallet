/**
 * Checks if the given string is an Ethereum address.
 *
 * @remarks Just for fun so no checksums etc.
 * @param address - The given wallet address
 */
export const isEthereumAddress = function (address: string): boolean {
  if (!address.match(/^(0x)?[0-9a-f]{40}$/i)) {
    return false
  }
  return true
}
