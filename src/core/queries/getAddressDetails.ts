import { getNextSpecies, getSpecies, parseAddress, validateAddress } from "src/lib"
import fetchData from "./fetchData"

export default async function getAddressDetails(parsed) {
  // fetch API data, errors caught automatically
  const apiData = await fetchData(parsed)

  // we now have API data, generate remaining properties
  const currentSpecies = getSpecies(parsed.blockchain.name, apiData.balance.ticker)
  const nextSpecies = getNextSpecies(
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
