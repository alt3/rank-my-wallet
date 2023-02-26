import species from "src/core/constants/species"

/**
 * Returns the blockchain species for given wallet balance.
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */
export const getSpecies = function (
  blockchain: "Cardano" | "Ergo",
  balance: number
): { name: string; startsAt: number } {
  const match = species[blockchain]
    .slice()
    .reverse()
    .find((element) => balance >= element.startsAt)

  if (match === undefined) {
    throw `Unable to determine ${blockchain} species index for wallet balance ${balance}`
  }

  return match
}
