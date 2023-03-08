import { MessageDescriptor } from "@lingui/core"
import species from "src/core/constants/species"

/**
 * Returns current blockchain species information for the given wallet balance.
 *
 * @param blockchain - Name of the blockchain
 * @param balance - Wallet balance with or without decimals
 */
export const getSpecies = function (
  blockchain: "Cardano" | "Ergo",
  balance: number
): { name: MessageDescriptor; icon: string; startsAt: number } {
  const match = species[blockchain]
    .slice()
    .reverse()
    .find((element) => balance >= element.startsAt)

  if (match === undefined) {
    throw `Unable to determine ${blockchain} species index for wallet balance ${balance}`
  }

  return {
    name: match.name,
    icon: match.icon,
    startsAt: match.startsAt,
  }
}
