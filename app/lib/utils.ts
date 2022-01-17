import species from "../constants/species"

/**
 * Returns the first byte from an array of bytes.
 *
 * @param bits - Array with bytes
 */
export const getFirstByte = function (bytes: Array<number>): number {
  return <number>bytes[0]
}

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
 * Returns an array with the 4 trailing bits.
 *
 * @param bits - Array with 8 bits
 */
export const getLeadingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(-4)
}

/**
 * Returns an array with the 4 leading bits.
 *
 * @param bits - Array with 8 bits
 */
export const getTrailingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(0, 4)
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

/**
 * Capitalizes a word by uppercasing the fisrst character.
 *
 * @param word - The given word as string
 */
export const capitalize = function (word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/**
 * Helper function to make Typescript recognize hasOwnProperty logic.
 *
 * @see {@link https://fettblog.eu/typescript-hasownproperty/}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop)
}

/**
 * Returns the blockchain species for given wallet balance..
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */
export const getSpecies = function (blockchain: "cardano" | "ergo", balance: number): object {
  const match = species[blockchain]
    .slice()
    .reverse()
    .find((element) => balance >= element.startsAt)

  if (match === undefined) {
    throw `Unable to determine ${blockchain} species index for wallet balance ${balance}`
  }

  return match
}
