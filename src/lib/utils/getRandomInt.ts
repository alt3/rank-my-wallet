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
