import axios from "axios"

interface Rank {
  position: string
  rank: number
  balance: number
  address: string
}

type RankItems = Array<Rank>

export default async function fetchErgoRankings(parsedAddress) {
  const url = `https://api.ergo.watch/ranking/${parsedAddress.address}`
  const config = {}

  return await axios
    .get(url, config)
    .then((response) => {
      const rankings = [] as RankItems

      if (response.data.above !== null) {
        rankings.push({
          position: "next",
          rank: response.data.above.rank,
          balance: response.data.above.balance,
          address: response.data.above.address,
        })
      }

      rankings.push({
        position: "current",
        rank: response.data.target.rank,
        balance: response.data.target.balance,
        address: response.data.target.address,
      })

      if (response.data.under !== null) {
        rankings.push({
          position: "previous",
          rank: response.data.under.rank,
          balance: response.data.under.balance,
          address: response.data.under.address,
        })
      }

      return rankings
    })
    .catch((err) => {
      // 404 means no balance
      if (err.response.status === 404) {
        return [
          {
            position: "current",
            rank: undefined,
            balance: 0,
            address: parsedAddress.address,
          },
        ]
      }
      // not a 404, rethrow
      throw err
    })
}
