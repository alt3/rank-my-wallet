import fetchData from "src/core/queries/fetchData"
import { getCurrentSpeciesForBalance } from "src/lib/getCurrentSpeciesForBalance"
import { getNextSpeciesForBalance } from "src/lib/getNextSpeciesForBalance"

export default async function getAddressDetails(parsed) {
  // fetch API data, errors caught automatically
  const apiData = await fetchData(parsed)

  // we now have API data, generate remaining properties
  const currentSpecies = getCurrentSpeciesForBalance(parsed.blockchain.name, apiData.balance.ticker)
  const nextSpecies = getNextSpeciesForBalance(
    parsed.blockchain.name,
    apiData.balance.ticker,
    currentSpecies.name
  )

  // prepare result
  const result = {
    parsed,
    addressCount: apiData.addressCount,
    balance: apiData.balance,
    species: {
      current: currentSpecies,
      next: nextSpecies,
    },
    rankings: apiData.rankings,
  }

  return result
}
