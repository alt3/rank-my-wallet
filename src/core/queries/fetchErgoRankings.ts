import axios from "axios"
import { throwError } from "src/lib/throwError"

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
    .catch((error) => {
      if (error.response) {
        // The request was made but the server responded with a non-2xx status code.
        // Note that we do not throw on 404 because it means no Ergo Watch record exists for the given (valid) address.
        if (error.response.status === 404) {
          return [
            {
              position: "current",
              rank: undefined,
              balance: 0,
              address: parsedAddress.address,
            },
          ]
        }

        throwError(error.response.data.detail[0].msg, error.response.status)
      } else if (error.request) {
        // The request was made but no response was received. E.g. when using non-existent domain
        throwError(error.message)
      } else {
        // Something happened in setting up the request that triggered an Error
        throwError(error.message)
      }
    })
}
