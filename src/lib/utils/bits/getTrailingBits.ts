/**
 * Returns an array with the 4 leading bits.
 *
 * @param bits - Array with 8 bits
 */
export const getTrailingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(-4)
}
