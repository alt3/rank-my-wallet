import { bech32 } from "bech32"

/**
 * Checks if given string is a Shelley base address.
 *
 * @param address - The given wallet address
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#network-tag}
 */
export const isShelleyBaseAddress = function (address: string): boolean {
  const binary = bech32.decodeUnsafe(address, 200)

  if (binary === undefined) {
    return false
  }

  const bytes = bech32.fromWords(binary.words)

  return bytes[0] === 0 || bytes[0] === 1
}

/**
 * Checks if given Shelley address is on the Cardano mainnet.
 *
 * @param address - The given wallet address
 * @see {@link https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0019/#network-tag}
 */
export const isShelleyMainnet = function (address: string): boolean {
  const binary = bech32.decodeUnsafe(address, 200)

  if (binary?.words === undefined) {
    return false
  }

  const bytes = bech32.fromWords(binary.words)

  return bytes[0] === 1
}
