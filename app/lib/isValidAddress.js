import { base58_to_binary } from "base58-js" // as required for decoding Ergo wallet addresses

/**
 * Checks given string against any of the supported (Cardano, Ergo and Ethereum) wallet address formats.
 *
 * @method isAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 */
export function isValidAddress(address) {
  if (isErgoAddress(address)) {
    return true
  }

  if (isEthereumAddress(address)) {
    return true
  }

  return false
}

var isCardanoAddress = function (address) {}

/**
 * Simply regex to detect Ergo P2PK addresses on mainnet.
 *
 * @method isErgoAddress
 * @param {string} address the given wallet address
 * @return {boolean}
 * @see {@link https://ergoplatform.org/en/blog/2019_07_24_ergo_address/}
 */
var isErgoAddress = function (address) {
  // P2PK addresses on mainnet have 51 chars
  if (address.length !== 51) {
    return false
  }

  const binary = base58_to_binary(address)

  if (binary[0] !== 1) {
    return false // mainnet if first byte is 1
  }

  return true
}

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
