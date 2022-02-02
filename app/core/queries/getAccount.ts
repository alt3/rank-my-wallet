import getCardanoAccount from "./getCardanoAccount"
import getErgoAccount from "./getErgoAccount"

export default async function getAccount(parsedAddress) {
  if (parsedAddress.blockchain.name === "cardano") {
    return getCardanoAccount({ ...parsedAddress })
  }

  if (parsedAddress.blockchain.name === "ergo") {
    return getErgoAccount({ ...parsedAddress })
  }

  throw `Async function getAccount called for non-cardano/non-ergo blockchain ${parsedAddress.blockchain.name}`
}
