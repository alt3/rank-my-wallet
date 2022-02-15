/**
 * Returns the first byte from an array of bytes.
 *
 * @param bytes - Buffer with bytes array
 */
export const getFirstByte = function (bytes: Buffer): Buffer {
  return bytes.slice(0, 1)
}
