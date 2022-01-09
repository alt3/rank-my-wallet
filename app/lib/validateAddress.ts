import { isShelleyBaseAddress, isShelleyMainnet } from "./cardano"
import { isErgoP2PKAddress, isErgoMainnet } from "./ergo"
import { isEthereumAddress } from "./ethereum"

/**
 * Checks if given string matches any of the supported wallet address formats (Cardano, Ergo, Ethereum).
 *
 * @param address - The given wallet address
 */
export const validateAddress = function (address: string): boolean {
  if (isShelleyBaseAddress(address)) {
    if (isShelleyMainnet(address)) {
      return true
    }
  }

  if (isErgoP2PKAddress(address)) {
    if (isErgoMainnet(address)) {
      return true
    }
  }

  if (isEthereumAddress(address)) {
    return true
  }
  console.log("given address not supported")

  return false
}
