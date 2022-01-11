import { isShelleyBaseAddress, isShelleyMainnet } from "./cardano"
import { isErgoP2PKAddress, isErgoMainnet } from "./ergo"
import { isEthereumAddress } from "./ethereum"

/**
 * Checks if given string matches any of the supported wallet address formats (Cardano, Ergo, Ethereum).
 *
 * @param address - True if the given wallet address is valid, react-hook-form error message otherwise
 */
export const validateAddress = function (address: string): boolean | string {
  if (address.match(/^\$.+/)) {
    return "We will support Adahandle addresses once their API becomes available"
  }

  if (isShelleyBaseAddress(address)) {
    if (isShelleyMainnet(address)) {
      return true
    }
    return "We do not support Cardano testnet addresses"
  }

  if (isErgoP2PKAddress(address)) {
    if (isErgoMainnet(address)) {
      return true
    }
    return "We do not support Ergo testnet addresses"
  }

  if (isEthereumAddress(address)) {
    return true
  }

  return "Unsupported wallet address"
}
