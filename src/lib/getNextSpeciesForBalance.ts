import { MessageDescriptor } from "@lingui/core"
import Big from "big.js"
import species from "src/core/constants/species"

/**
 * Returns next blockchain species information for the given wallet balance.
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */

export const getNextSpeciesForBalance = function (
  blockchain: "Cardano" | "Ergo",
  balance: Big,
  currentSpeciesName: MessageDescriptor
): { name: MessageDescriptor; icon: string; startsAt: number; requires: Big } | undefined {
  const currentIndex = species[blockchain].findIndex(
    (element) => currentSpeciesName === element.name // Linqui MessageDescriptor
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
    name: nextSpecies.name, // Lingui MessageDescriptor
    icon: nextSpecies.icon,
    startsAt: nextSpecies.startsAt,
    requires: new Big(nextSpecies.startsAt - balance),
  }

  return result
}
