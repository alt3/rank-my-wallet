import getCardanoAccount from "./getCardanoAccount"
import getErgoAccount from "./getErgoAccount"

export default async function getAccount(parsedAddress) {
  if (parsedAddress.blockchain === "cardano") {
    return getCardanoAccount({ ...parsedAddress })
  }

  if (parsedAddress.blockchain === "ergo") {
    return getErgoAccount({ ...parsedAddress })
  }

  throw `Async function getAccount should called for non-cardano/non-ergo blockchain ${parsedAddress.blockchain}`
}
