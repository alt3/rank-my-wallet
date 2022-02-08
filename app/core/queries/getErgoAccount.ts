import axios from "axios"
import { nanoToTicker } from "app/lib/utils"

export default async function getErgoAccount(parsedAddress) {
  const url = `https://api.ergoplatform.com/api/v1/addresses/${parsedAddress.address}/balance/total`
  const config = {}

  return await axios.get(url, config).then((response) => {
    const balance = {
      nano: response.data.confirmed.nanoErgs,
      ticker: nanoToTicker(response.data.confirmed.nanoErgs, 9),
    }

    response.data.balance = balance

    return {
      account: response.data,
    }
  })
}
