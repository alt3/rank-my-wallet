/**
 * Returns the first byte from an array of bytes.
 *
 * @param bytes - Uint8Array with bytes array
 */
export const getFirstByte = function (bytes: Uint8Array): Uint8Array {
  return bytes.slice(0, 1)
}
