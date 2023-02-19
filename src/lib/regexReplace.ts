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
    string = string.replace(key, value)
  }

  return string
}
