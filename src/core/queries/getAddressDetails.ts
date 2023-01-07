import { getNextSpecies, getSpecies, parseAddress, validateAddress } from "src/core/lib/utils"
import fetchData from "./fetchData"

export default async function getAddressDetails(address) {
  const parsedAddress = parseAddress(address)
  const validatedAddress = validateAddress(parsedAddress)

  if (validatedAddress.isSupported === false) {
    return {
      parsed: validatedAddress,
      addressCount: undefined,
      balance: undefined,
      species: undefined,
      rankings: undefined,
    }
  }

  // still here, supported address
  if (
    validatedAddress.blockchain.name !== "cardano" &&
    validatedAddress.blockchain.name !== "ergo"
  ) {
    throw "we should never reach this point without being Cardano or Ergo"
  }

  // fetch API data, errors caught automatically
  const apiData = await fetchData(validatedAddress)

  // we now have API data, generate remaining properties
  const currentSpecies = getSpecies(validatedAddress.blockchain.name, apiData.balance.ticker)
  const nextSpecies = getNextSpecies(
    validatedAddress.blockchain.name,
    apiData.balance.ticker,
    currentSpecies.name
  )

  // prepare result
  const result = {
    parsed: validatedAddress,
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
