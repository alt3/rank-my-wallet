/**
 * Returns an array with the 4 trailing bits.
 *
 * @param bits - Array with 8 bits
 */
export const getLeadingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(0, 4)
}
