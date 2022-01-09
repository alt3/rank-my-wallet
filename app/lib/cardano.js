import { bech32 } from "bech32"

/**
 * Checks if given string is a Cardano base address.
 *
 * @method isShelleyBaseAddress
 * @param {string} address the given wallet address
 * @return {boolean} if address is supported
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#network-tag}
 */
export const isShelleyBaseAddress = function (address) {
  const binary = bech32.decodeUnsafe(address, 200)

  if (binary === undefined) {
    return false
  }

  const bytes = bech32.fromWords(binary.words)

  if (bytes[0] !== 0 && bytes[0] !== 1) {
    return false // not a base address
  }

  return true
}

/**
 * Checks if given Shelley address is on the Cardano mainnet.
 *
 * @method isShelleyMainnet
 * @param {string} address the given wallet address
 * @return {boolean}
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#network-tag}
 */
export const isShelleyMainnet = function (address) {
  const binary = bech32.decodeUnsafe(address, 200)
  const bytes = bech32.fromWords(binary.words)

  if (bytes[0] !== 1) {
    return false
  }

  return true
}
