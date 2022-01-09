import { isShelleyBaseAddress, isShelleyMainnet } from "./cardano"
import { isErgoP2PKAddress, isErgoMainnet } from "./ergo"
import { isEthereumAddress } from "./ethereum"

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
    console.log("Ethereum address")
    return true
  }
  console.log("no matches")

  return false
}

module.exports = {
  validateAddress,
}
