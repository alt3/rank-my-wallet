/**
 * Checks given string against any of the supported wallet address formats.
 *
 * @method isAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 */
const isValidAddress = function (address) {
  console.log("validating address: " + address)

  if (isEthereumAddress(address)) {
    return true
  }

  return false
}

var isCardanoAddress = function (address) {}

var isErgoAddress = function (address) {}

/**
 * Simply regex to detect Ethereum addresses. Just for fun so no checksums etc.
 *
 * @method isEthereumAddress
 * @param {string} address the given wallet address
 * @return {boolean}
 */
const isEthereumAddress = function (address) {
  if (!address.match(/^(0x)?[0-9a-f]{40}$/i)) {
    return false
  }

  return true
}

module.exports = {
  isValidAddress,
}
