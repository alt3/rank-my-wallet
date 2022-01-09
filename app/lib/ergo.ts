import blake from "blakejs"
import bs58 from "bs58"

/**
 * Checks if given string is an Ergo P2PK address.
 *
 * @param address - The given wallet address
 * @see {@link https://ergoplatform.org/en/blog/2019_07_24_ergo_address/}
 */
export const isErgoP2PKAddress = function (address: string): boolean {
  try {
    const bytes = bs58.decode(address)
    const size = bytes.length
    const script = bytes.slice(0, size - 4)
    const checksum = bytes.slice(size - 4, size)
    const calculatedChecksum = Buffer.from(blake.blake2b(script, undefined, 32)).slice(0, 4)

    return calculatedChecksum.toString("hex") === checksum.toString("hex")
  } catch (e) {
    return false
  }
}

/**
 * Checks if given address is on the Ergo mainnet.
 *
 * @param address - The given wallet address
 * @see {@link https://ergoplatform.org/en/blog/2019_07_24_ergo_address/}
 */
export const isErgoMainnet = function (address: string): boolean {
  const bytes = bs58.decode(address)

  return bytes[0] === 1
}
