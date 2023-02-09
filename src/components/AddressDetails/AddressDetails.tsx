import { useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import getAddressDetails from "src/core/queries/getAddressDetails"
import SupportedAddressDetails from "./SupportedAddressDetails"
import UnsupportedAddressDetails from "./UnsupportedAddressDetails"

export const AddressDetails = () => {
  const address = useParam("address", "string")
  const [addressDetails] = useQuery(getAddressDetails, address, {
    staleTime: Infinity,
  })

  // console.log(addressDetails)

  return (
    <>
      {addressDetails.parsed.isSupported === false && (
        <UnsupportedAddressDetails parsed={addressDetails.parsed} />
      )}

      {addressDetails.parsed.isSupported === true && (
        <SupportedAddressDetails
          parsed={addressDetails.parsed}
          addressCount={addressDetails.addressCount}
          balance={addressDetails.balance}
          species={addressDetails.species}
          rankings={addressDetails.rankings}
        />
      )}
    </>
  )
}

export default AddressDetails
