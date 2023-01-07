import species from "app/constants/species"
import Big from "big.js"

/**
 * Returns the next blockchain species for given wallet balance..
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */

export const getNextSpecies = function (
  blockchain: "cardano" | "ergo",
  balance: Big,
  currentSpeciesName: string
): { name: string; startsAt: number; requires: Big } | undefined {
  const currentIndex = species[blockchain].findIndex(
    (element) => currentSpeciesName === element.name
  )

  if (currentIndex === undefined) {
    throw `Unable to determine next ${blockchain} species index for currenct species name ${currentSpeciesName}`
  }

  if (currentIndex === species[blockchain].length - 1) {
    return undefined
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const nextSpecies = species[blockchain][currentIndex + 1]!

  const result = {
    name: nextSpecies.name,
    startsAt: nextSpecies.startsAt,
    requires: new Big(nextSpecies.startsAt - balance),
  }

  return result
}
