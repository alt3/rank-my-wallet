import { StringOrNumber } from "@chakra-ui/utils"
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

/**
 * Returns an array with the 4 trailing bits.
 *
 * @param bits - Array with 8 bits
 */
export const getLeadingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(0, 4)
}

/**
 * Returns an array with the 4 leading bits.
 *
 * @param bits - Array with 8 bits
 */
export const getTrailingBits = function (bits: Array<number>): Array<number> {
  return bits.slice(-4)
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
export const getSpecies = function (
  blockchain: "cardano" | "ergo",
  balance: number
): { startsAt: number; name: string } {
  const match = species[blockchain]
    .slice()
    .reverse()
    .find((element) => balance >= element.startsAt)

  if (match === undefined) {
    throw `Unable to determine ${blockchain} species index for wallet balance ${balance}`
  }

  return match
}

/**
 * Returns the blockchain species for given wallet balance..
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */
export const getNextSpecies = function (
  blockchain: "cardano" | "ergo",
  currentSpecies: StringOrNumber
): { startsAt: number; name: string } | undefined {
  const currentIndex = species[blockchain].findIndex((element) => currentSpecies === element.name)

  if (currentIndex === undefined) {
    throw `Unable to determine next ${blockchain} species index for currenct species name ${currentSpecies}`
  }

  if (currentIndex === species[blockchain].length - 1) {
    return undefined
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return species[blockchain][currentIndex + 1]!
}

/**
 * Replaces one or more placeholders with capitalized passed string.
 *
 * @param placeholders - Object with placeholder/new value pair
 */
interface regexReplacePlaceholderProps {
  [key: string]: string
}

export const regexReplace = function (string: string, placeholders: regexReplacePlaceholderProps) {
  for (const [key, value] of Object.entries(placeholders)) {
    const cappedValue = capitalize(value)
    string = string.replace(key, cappedValue)
  }
  console.log(string)

  return string
}

export const getIntegerSeparator = (locale?: string) => {
  const numberWithIntegerSeparator = 10000 // use 10.000 for e.g. India
  const intlParts = Intl.NumberFormat(locale).formatToParts(numberWithIntegerSeparator)

  const intlPart1 = intlParts[1]

  if (intlPart1 === undefined) {
    throw `Could not determine intl integer separator parts[1] for locale ${locale}`
  }

  const separator = intlPart1["value"]

  if (separator === undefined) {
    throw `Could not determine intl integer separator parts[1].value for locale ${locale}`
  }

  return separator
}
