import axios from "axios"

/**
 * Fetches the total number of all (non-zero) P2PK addresses from the ErgoWatch API.
 *
 * @returns number
 */
export default async function fetchErgoAddressCount() {
  const url = `https://ergo.watch/api/v0/p2pk/count`
  const config = {}

  return await axios.get(url, config).then((response) => {
    return response.data
  })
}
