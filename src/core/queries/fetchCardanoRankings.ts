import axios from "axios"

/**
 * Dummy function until we can fetch rankings for Cardano
 */
export default async function fetchCardanoRankings(parsedAddress) {
  const url = `https://mainnet.blockfrost.io/api/v0/accounts/${parsedAddress.stakeAddress.bech32}`

  const config = {
    headers: {
      project_id: "mainnet8Kzd0kkF8okh0Z5pD8woequ8SZpPZm5O",
    },
  }

  return await axios
    .get(url, config)
    .then((response) => {
      const rankings = [
        {
          position: "current",
          rank: undefined,
          balance: response.data.controlled_amount,
          address: undefined,
        },
      ]

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
