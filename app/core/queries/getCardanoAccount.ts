import axios from "axios"
import { nanoToTicker } from "app/lib/utils"

export default async function getCardanoAccount(parsedAddress) {
  const url = `https://mainnet.blockfrost.io/api/v0/accounts/${parsedAddress.stakeAddress.bech32}`
  const config = {
    headers: {
      project_id: "mainnet8Kzd0kkF8okh0Z5pD8woequ8SZpPZm5O",
    },
  }

  return await axios.get(url, config).then((response) => {
    const balance = {
      nano: response.data.controlled_amount,
      ticker: nanoToTicker(response.data.controlled_amount, 6),
    }

    response.data.balance = balance

    return {
      account: response.data,
    }
  })
}
