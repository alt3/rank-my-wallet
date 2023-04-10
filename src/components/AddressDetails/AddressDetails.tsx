import SupportedAddressDetails from "./SupportedAddressDetails"
import UnsupportedAddressDetails from "./UnsupportedAddressDetails"

export const AddressDetails = ({ addressDetails }) => {
  return (
    <>
      {addressDetails.parsed.isSupported === false && (
        <UnsupportedAddressDetails parsed={addressDetails.parsed} />
      )}

      {addressDetails.parsed.isSupported === true && (
        <SupportedAddressDetails parsed={addressDetails.parsed} />
      )}
    </>
  )
}

export default AddressDetails
