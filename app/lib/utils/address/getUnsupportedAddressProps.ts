import addressErrors from "app/constants/address-errors"
import {
  Base58Address,
  Bech32Address,
  RegexAddress,
  UnrecognizedAddress,
} from "../../classes/addresses"
import { regexReplace } from "app/lib/utils"

/**
 * Helper function to return GetServerSideProps compatible error props for unsupported addresses.
 *
 * @param address - The given blockchain address
 */
export const getUnsupportedAddressProps = function (
  parsedAddress: RegexAddress | Bech32Address | Base58Address | UnrecognizedAddress
) {
  if (parsedAddress.blockchain) {
    // detected a blockchain but it is not Cardano or Ergo
    if (!["cardano", "ergo"].includes(parsedAddress.blockchain)) {
      const props = getInvalidAddressProps("UnsupportedBlockchain", parsedAddress)

      props.props.data.parsedAddress.unsupported.message = regexReplace(
        props.props.data.parsedAddress.unsupported.message,
        {
          __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
        }
      )

      return props
    }

    // not mainnet
    if (parsedAddress.network !== "mainnet") {
      const props = getInvalidAddressProps("UnsupportedNetwork", parsedAddress)

      props.props.data.parsedAddress.unsupported.message = regexReplace(
        props.props.data.parsedAddress.unsupported.message,
        {
          __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
          __NETWORK__: props.props.data.parsedAddress.network,
        }
      )

      return props
    }

    // not a normal Cardano Type-00 address
    if (parsedAddress.blockchain === "cardano" && parsedAddress.type.type !== 0) {
      const props = getInvalidAddressProps("UnsupportedType", parsedAddress)

      props.props.data.parsedAddress.unsupported.message = regexReplace(
        props.props.data.parsedAddress.unsupported.message,
        {
          __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
          __ADDRESS_TYPE__: props.props.data.parsedAddress.type.name,
        }
      )

      return props
    }

    // not a normal Ergo P2PK address
    if (parsedAddress.blockchain === "ergo" && parsedAddress.type.type !== 1) {
      const props = getInvalidAddressProps("UnsupportedType", parsedAddress)

      props.props.data.parsedAddress.unsupported.message = regexReplace(
        props.props.data.parsedAddress.unsupported.message,
        {
          __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
          __ADDRESS_TYPE__: props.props.data.parsedAddress.type.name,
        }
      )

      return props
    }
  }

  // unrecognized catch-all
  return getInvalidAddressProps("UnrecognizedAddress", parsedAddress)
}

/**
 * DRY helper for producing the error props.
 */
const getInvalidAddressProps = function (
  errorType:
    | "UnrecognizedAddress"
    | "UnsupportedBlockchain"
    | "UnsupportedNetwork"
    | "UnsupportedType",
  parsedAddress: Bech32Address | Base58Address | RegexAddress | UnrecognizedAddress
) {
  const errorObject = addressErrors.find((element) => element.type === errorType)

  if (!errorObject) {
    throw "We need to fix this: errorObject could not be fetched from constants, perhaps add UnknownAddressError?"
  }

  parsedAddress.unsupported = errorObject

  return {
    props: {
      data: {
        parsedAddress,
      },
    },
  }
}

export default getUnsupportedAddressProps
