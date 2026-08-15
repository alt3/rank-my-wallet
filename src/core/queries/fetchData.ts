import { nanoToTicker } from "src/lib/nanoToTicker"
import fetchCardanoAddressCount from "./fetchCardanoAddressCount"
import fetchCardanoRankings from "./fetchCardanoRankings"
import fetchErgoAddressCount from "./fetchErgoAddressCount"
import fetchErgoRankings from "./fetchErgoRankings"

export default async function fetchData(parsedAddress) {
  if (parsedAddress.blockchain.name !== "Cardano" && parsedAddress.blockchain.name !== "Ergo") {
    throw `Async function getAccount called for non-supported blockchain ${parsedAddress.blockchain.name}`
  }

  let addressCount
  let rankings
  let nano
  let ticker

  if (parsedAddress.blockchain.name === "Cardano") {
    ;[addressCount, rankings] = await Promise.all([
      fetchCardanoAddressCount(),
      fetchCardanoRankings({ ...parsedAddress }),
    ])

    if (rankings.balance !== 0) {
      nano = rankings.find(({ position }) => position === "current").balance.toString()
      ticker = nanoToTicker(nano, 6)
    }
  }

  if (parsedAddress.blockchain.name === "Ergo") {
    ;[addressCount, rankings] = await Promise.all([
      fetchErgoAddressCount(),
      fetchErgoRankings({ ...parsedAddress }),
    ])

    if (rankings.balance !== 0) {
      nano = rankings.find(({ position }) => position === "current").balance.toString()
      ticker = nanoToTicker(nano, 9)
    }
  }

  const result = {
    addressCount: addressCount,
    rankings,
    balance: {
      nano,
      ticker,
    },
  }

  return result
}
