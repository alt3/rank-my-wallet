import { isShelleyBaseAddress, isShelleyMainnet } from "./cardano"
import { isErgoP2PKAddress, isErgoMainnet } from "./ergo"

/**
 * Checks if given string matches any of the supported (Cardano, Ergo and Ethereum) wallet address formats.
 *
 * @method isAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 */
export function validateAddress(address) {
  if (isShelleyBaseAddress(address)) {
    if (isShelleyMainnet(address)) {
      console.log("Shelley base address on mainnet")
      return true
    }
  }

  if (isErgoP2PKAddress(address)) {
    if (isErgoMainnet(address)) {
      console.log("Ergo P2PK address on mainnet")
      return true
    }
  }

  if (isEthereumAddress(address)) {
    return true
  }
  console.log("no matches")

  return false
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

module.exports = {
  validateAddress,
}
