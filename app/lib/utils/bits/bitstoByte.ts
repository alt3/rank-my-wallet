/**
 * Converts an 8-bit array into a number.
 *
 * @param bits - Array with bits to convert
 */
export const bitsToByte = (bits: Array<number | null>): number => {
  let value = 0
  for (let i = bits.length - 1; i >= 0; i--) {
    value = value * 2 + (bits[i] ?? 0) // escape to null to silence Typescript "possibly undefined index"
  }

  return value
}
