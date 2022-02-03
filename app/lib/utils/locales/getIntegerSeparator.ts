/**
 * Returns the integer separator for the given locale.
 *
 * @remarks
 *
 * Beware of Javascript limitation of 15 significant digits.
 *
 * http://rxaviers.github.io/javascript-globalization/
 * https://stackoverflow.com/questions/68848954/how-to-format-a-big-number-represented-by-string-in-javascript-with-currency-a
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
 *
 * @see {@link https://github.com/wojtekmaj/get-user-locale}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales}
 * @param locale - Locale as an IETF language tag like 'en/US'
 */
export const getIntegerSeparator = (locale: string) => {
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
