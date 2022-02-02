/**
 * Returns the first byte from an array of bytes.
 *
 * @param bytes - Array with bytes
 */
export const getFirstByte = function (bytes: Array<number>): number {
  return <number>bytes[0]
}
