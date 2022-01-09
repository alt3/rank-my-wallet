/**
 * Simply regex to detect Ethereum addresses. Just for fun so no checksums etc.
 *
 * @method isEthereumAddress
 * @param {string} address the given wallet address
 * @return {boolean}
 */
export const isEthereumAddress = function (address) {
  return address.match(/^(0x)?[0-9a-f]{40}$/i)
}
