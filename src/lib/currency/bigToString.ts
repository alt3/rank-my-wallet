import Big from "big.js"
import { getUserLocale } from "get-user-locale"
import { getNumberSeparators } from "src/lib"
import toFormat from "toformat"

/**
 * Converts currency number to localized string without rounding.
 *
 * @see {@link https://github.com/MikeMcl/toFormat}
 * @param big - Big object
 * @param fractions - Optional number of fractions to return
 */
export const bigToString = (
  big: Big,
  fractions?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
): string => {
  toFormat(Big) // attach toFormat
  Big.RM = Big.roundDown // never ever round the fractions

  const formattedBig = new Big(big) // new because bigs are immutable

  if (fractions === undefined) {
    fractions = formattedBig.dp
  }

  const integerSeparators = getNumberSeparators(getUserLocale())

  return formattedBig.toFormat(fractions, {
    groupSeparator: integerSeparators.group,
    decimalSeparator: integerSeparators.decimal,
  })
}

export default bigToString