/**
 * Returns the integer separator for the given locale.
 *
 * @remarks
 *
 * Best used in combination with https://github.com/wojtekmaj/get-user-locale
 *
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
