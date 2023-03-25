import { useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import getAddressDetails from "src/core/queries/getAddressDetails"
import SupportedAddressDetails from "./SupportedAddressDetails"
import UnsupportedAddressDetails from "./UnsupportedAddressDetails"

export const AddressDetails = () => {
  const router = useRouter()
  const { address } = router.query

  const [addressDetails] = useQuery(getAddressDetails, address, {
    staleTime: Infinity,
  })

  if (process && process.env.NODE_ENV !== "production") {
    console.log(addressDetails)
  }

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
