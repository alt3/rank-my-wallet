import getAddressDetails from "app/core/queries/getAddressDetails"
import { useParam, useQuery } from "blitz"
import SupportedAddressDetails from "./SupportedAddressDetails"
import UnsupportedAddressDetails from "./UnsupportedAddressDetails"

export const AddressDetails = () => {
  const address = useParam("address", "string")
  const [addressDetails] = useQuery(getAddressDetails, address, {
    staleTime: Infinity,
  })

  return (
    <>
      {addressDetails.parsed.isSupported === false && (
        <UnsupportedAddressDetails parsed={addressDetails.parsed} />
      )}

      {addressDetails.parsed.isSupported === true && (
        <SupportedAddressDetails
          parsed={addressDetails.parsed}
          account={addressDetails.account}
          rank={addressDetails.rank}
          species={addressDetails.species}
        />
      )}
    </>
  )
}

export default AddressDetails
