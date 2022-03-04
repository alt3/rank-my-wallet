import {
  getNextSpecies,
  getRandomInt,
  getSpecies,
  parseAddress,
  validateAddress,
} from "app/lib/utils"
import getAccount from "./getAccount"

export default async function getAddressDetails(address) {
  const parsedAddress = parseAddress(address)
  const validatedAddress = validateAddress(parsedAddress)

  if (validatedAddress.isSupported === false) {
    return {
      parsed: validatedAddress,
      account: undefined,
      rank: undefined,
      species: undefined,
    }
  }

  // still here, supported address
  if (
    validatedAddress.blockchain.name !== "cardano" &&
    validatedAddress.blockchain.name !== "ergo"
  ) {
    throw "we should never reach this point without being Cardano or Ergo"
  }

  // fetch account data from API, errors caught auto-magically
  const account = await getAccount(validatedAddress)

  // we have the API data, calculate all others
  const currentSpecies = getSpecies(
    validatedAddress.blockchain.name,
    account.account.balance.ticker
  )
  const nextSpecies = getNextSpecies(
    validatedAddress.blockchain.name,
    account.account.balance.ticker,
    currentSpecies.name
  )

  // random rank until implemented
  const totalAccounts = parsedAddress.blockchain.name === "cardano" ? 2500000 : 87000

  // if ergo, extract rank from API response
  let rank = getRandomInt(1, totalAccounts)

  if (validatedAddress.blockchain.name === "ergo") {
    rank = account.account.target.rank
  }

  return {
    parsed: validatedAddress,
    ...account,
    rank: {
      totalAccounts: totalAccounts,
      rank,
      next: "account-id-of-next-rank",
      previous: "account-id-of-previous-rank",
    },
    species: {
      current: currentSpecies,
      next: nextSpecies,
    },
  }
}
