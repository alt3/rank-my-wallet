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

  return await axios.get(url, config).then((response) => {
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
}
