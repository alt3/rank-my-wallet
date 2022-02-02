import axios from "axios"
import { nanoToTicker } from "app/lib/utils"

export default async function getErgoAccount(parsedAddress): Promise<any> {
  const url = `https://api.ergoplatform.com/api/v1/addresses/${parsedAddress.address}/balance/total`
  const config = {}

  return await axios
    .get(url, config)
    .then((response) => {
      // insert balance into the response
      const balance = {
        nano: response.data.confirmed.nanoErgs,
        ticker: nanoToTicker(response.data.confirmed.nanoErgs, 9),
      }

      response.data.balance = balance

      return {
        account: response.data,
      }
    })
    // https://stackoverflow.com/a/51768316/9850103
    .catch((error) => {
      if (error.response) {
        return {
          error: { message: error.message, ...error.response.data },
        }
      } else {
        return { error }
      }
    })
}
