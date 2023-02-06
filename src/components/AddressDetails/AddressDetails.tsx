import { useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { MetaTags } from "src/components"
import { capitalize } from "src/core/lib/utils"
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
      <MetaTags
        title={`Rank My Wallet - Your ${capitalize(addressDetails.parsed.blockchain.name)} Rank`}
        description={`Your ${capitalize(
          addressDetails.parsed.blockchain.name
        )} blockchain ranking and address analysis`}
        keywords={`blockchain, ${addressDetails.parsed.blockchain.name}, wallets, rankings, species, address-analyzer`}
      />

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
