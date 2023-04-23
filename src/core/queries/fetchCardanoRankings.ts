import axios from "axios"
import { throwError } from "src/lib/throwError"

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
    .catch((error) => {
      if (error.response) {
        // The request was made but the server responded with a non-2xx status code.
        // Note that we do not throw on 404 because it means no Blockfrost record exists for the given (valid) address.
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

        throwError(
          `${error.response.data.error} - ${error.response.data.message}`,
          error.response.data.status_code
        )
      } else if (error.request) {
        // The request was made but no response was received. E.g. when using non-existent domain
        throwError(error.message)
      } else {
        // Something happened in setting up the request that triggered an Error
        throwError(error.message)
      }
    })
}
