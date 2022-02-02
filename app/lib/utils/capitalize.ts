/**
 * Capitalizes a word by uppercasing the fisrst character.
 *
 * @param word - The given word as string
 */
export const capitalize = function (word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
