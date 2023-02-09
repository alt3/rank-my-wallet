import { nanoToTicker } from "src/lib"
import fetchCardanoAddressCount from "./fetchCardanoAddressCount"
import fetchCardanoRankings from "./fetchCardanoRankings"
import fetchErgoAddressCount from "./fetchErgoAddressCount"
import fetchErgoRankings from "./fetchErgoRankings"

export default async function fetchData(parsedAddress) {
  if (parsedAddress.blockchain.name !== "cardano" && parsedAddress.blockchain.name !== "ergo") {
    throw `Async function getAccount called for non-supported blockchain ${parsedAddress.blockchain.name}`
  }

  let addressCount
  let rankings
  let nano
  let ticker

  if (parsedAddress.blockchain.name === "cardano") {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[addressCount, rankings] = await Promise.all([
      fetchCardanoAddressCount(),
      fetchCardanoRankings({ ...parsedAddress }),
    ])

    if (rankings.balance !== 0) {
      nano = rankings.find(({ position }) => position === "current").balance.toString()
      ticker = nanoToTicker(nano, 6)
    }
  }

  if (parsedAddress.blockchain.name === "ergo") {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
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
