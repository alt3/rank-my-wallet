/**
 * Capitalizes a word by uppercasing the fisrst character.
 *
 * @param address - Any blockchain address
 */
export const abbreviateAddress = function (address: string) {
  if (address.length <= 20) {
    return address
  }

  const regex = /^(.{10}).+(.{10})/

  return address.replace(regex, "$1...$2")
}
