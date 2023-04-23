/**
 * Returns the integer separators for the given locale.
 *
 * @remarks
 *
 * Beware of Javascript limitation of 15 significant digits.
 *
 * @see {@link http://rxaviers.github.io/javascript-globalization/}
 * @see {@link https://stackoverflow.com/questions/68848954/how-to-format-a-big-number-represented-by-string-in-javascript-with-currency-a }
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString}
 * @see {@link https://github.com/wojtekmaj/get-user-locale}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales}
 *
 * @param locale - Locale as an IETF language tag like 'en-ES'
 */

export const getNumberSeparators = (
  locale: string
): {
  group: string
  decimal: string
} => {
  const numberWithIntegerSeparator = 100000.1 // 100.000 so we can also get e.g. Indian 1,00,000 (hi-IN)
  const intlParts = Intl.NumberFormat(locale).formatToParts(numberWithIntegerSeparator)

  const groupSeparator = intlParts.find((part) => part.type === "group")

  if (groupSeparator === undefined) {
    throw `Could not determine number group separator for locale ${locale}`
  }

  const decimalSeparator = intlParts.find((part) => part.type === "decimal")

  if (decimalSeparator === undefined) {
    throw `Could not determine number decimal separator for locale ${locale}`
  }

  return {
    group: groupSeparator.value,
    decimal: decimalSeparator.value,
  }
}

export default getNumberSeparators
