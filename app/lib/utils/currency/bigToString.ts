import Big from "big.js"
import toFormat from "toformat"

/**
 * Converts currency number to localized string without rounding.
 *
 * @see {@link} https://github.com/MikeMcl/toFormat
 * @param big - Big object
 * @param fractions - Optional number of fractions to return
 */
export const bigToString = (big: Big, fractions?: number): string => {
  toFormat(Big) // attach toFormat
  Big.RM = Big.roundDown // never ever round the fractions

  const formattedBig = new Big(big) // new because bigs are immutable

  if (fractions === undefined) {
    fractions = formattedBig.dp
  }

  return formattedBig.toFormat(fractions, {
    decimalSeparator: ".",
    groupSeparator: ",",
  })
}

export default bigToString
