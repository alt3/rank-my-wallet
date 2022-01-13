/**
 * Converts given number into an 'n' bits array.
 *
 * @param number - Number to convert into bits array
 * @param bits - Number of bits to convert to (e.g. 8 or 16)
 */
export const byteToBits = function (number: number, bits: number): Array<number> {
  return [...Array(bits)].map((x, i) => (number >> i) & 1)
}

/**
 * Return an pseudo random number.
 *
 * @param min - Lowest possible number, must be be higher or equal
 * @param min - Highest possible number, must be lower or equal
 */
export const getRandomInt = function (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
