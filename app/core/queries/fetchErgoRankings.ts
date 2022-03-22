import axios from "axios"

export default async function fetchErgoRankings(parsedAddress) {
  const url = `https://ergo.watch/api/v0/ranking/${parsedAddress.address}`
  const config = {}

  return await axios.get(url, config).then((response) => {
    const rankings = [
      {
        position: "current",
        rank: response.data.target.rank,
        balance: response.data.target.balance,
        address: response.data.target.address,
      },
    ]

    if (response.data.above !== null) {
      rankings.push({
        position: "next",
        rank: response.data.above.rank,
        balance: response.data.above.balance,
        address: response.data.above.address,
      })
    }

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
}
