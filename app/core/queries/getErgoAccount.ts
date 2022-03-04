import axios from "axios"
import { nanoToTicker } from "app/lib/utils"

export default async function getErgoAccount(parsedAddress) {
  const url = `https://ergo.watch/api/v0/api/v0/addresses/p2pk/rank/${parsedAddress.address}`
  const config = {}

  return await axios.get(url, config).then((response) => {
    const balance = {
      nano: response.data.target.balance,
      ticker: nanoToTicker(response.data.target.balance, 9),
    }

    response.data.balance = balance

    return {
      account: response.data,
    }
  })
}
