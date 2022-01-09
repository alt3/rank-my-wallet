import { bech32 } from "bech32"
import { isErgoP2PKAddress, isErgoMainnet } from "./ergo"

/**
 * Checks if given string matches any of the supported (Cardano, Ergo and Ethereum) wallet address formats.
 *
 * @method isAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 */
export function validateAddress(address) {
  if (isShelleyAddress(address)) {
    console.log("Shelley base address on mainnet") // todo: mainnet check
    return true
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
 * Checks if given string is a Cardano PaymentKeyHash/StakeKeyHash address on mainnet.
 *
 * @method isAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#network-tag}
 */
var isShelleyAddress = function (address) {
  if (!address.match(/addr1[a-z0-9]{98}/)) {
    return false
  }

  const binary = bech32.decodeUnsafe(address, 103)

  if (binary === undefined) {
    return false
  }

  const bytes = bech32.fromWords(binary.words)

  if (bytes[0] !== 1) {
    return false
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

module.exports = {
  validateAddress,
}
