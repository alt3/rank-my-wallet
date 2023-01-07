/**
 * Converts given number into an 'n' bits array.
 *
 * @param number - Number to convert into bits array
 * @param bits - Number of bits to convert to (e.g. 8 or 16)
 */
export const byteToBits = function (number: number, bits: number): Array<number> {
  return [...Array(bits)].map((x, i) => (number >> i) & 1)
}
