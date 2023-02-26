import axios from "axios"
import { throwError } from "src/lib"

/**
 * Fetches the total number of all (non-zero) P2PK addresses from the ErgoWatch API.
 *
 * @returns number
 */
export default async function fetchErgoAddressCount() {
  const url = `https://api.ergo.watch/p2pk/count`
  const config = {}

  return await axios
    .get(url, config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        // The request was made but the server responded with a non-2xx status code.
        throwError(error.response.data.detail[0].msg, error.response.status)
      } else if (error.request) {
        // The request was made but no response was received. E.g. when using non-existent domain
        throwError(error.message)
      } else {
        // Something happened in setting up the request that triggered an Error
        throwError(error.message)
      }
    })
}
