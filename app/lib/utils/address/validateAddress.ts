import {
  Base58Address,
  Bech32Address,
  RegexAddress,
  UnrecognizedAddress,
} from "../../classes/addresses"
import { regexReplace } from "app/lib/utils"

type TUnsupportedAddressReasons = {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  message: string
}

const reasons: TUnsupportedAddressReasons[] = [
  {
    type: "UnrecognizedAddress",
    message: "Sorry, but we are unable to recognize this address.",
  },
  {
    type: "UnsupportedBlockchain",
    message: "Sorry, but we do not support __BLOCKCHAIN__.",
  },
  {
    type: "UnsupportedNetwork",
    message: "Sorry, but we do not support __BLOCKCHAIN__ __NETWORK__ addresses.",
  },
  {
    type: "UnsupportedType",
    message: 'Sorry, but we do not support __BLOCKCHAIN__ "__ADDRESS_TYPE__" address types.',
  },
]

/**
 * Helper function to lookup reason object in list of reasons at top of script.
 *
 * @param errorClass - Class of error (e.g. `UnrecognizedAddress`)
 */
const getReason = (errorClass): TUnsupportedAddressReasons => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return reasons.find((element) => element.type === errorClass)!
}

/**
 * Insert reason properties for unsupported addresses.
 *
 * @param parsedAddress - The fully parsed blockchain address
 */
export const validateAddress = function (
  parsedAddress: RegexAddress | Bech32Address | Base58Address | UnrecognizedAddress
) {
  // let reason = {} as TUnsupportedAddressReasons

  if (parsedAddress.blockchain.name) {
    // blockchain but not cardano or erg
    if (!["cardano", "ergo"].includes(parsedAddress.blockchain.name)) {
      const reason = getReason("UnsupportedBlockchain")

      parsedAddress.unsupported = {
        type: reason.type,
        message: regexReplace(reason.message, {
          __BLOCKCHAIN__: parsedAddress.blockchain.name,
        }),
      }

      return parsedAddress
    }

    // // not mainnet
    if (parsedAddress.blockchain.network !== "mainnet") {
      const reason = getReason("UnsupportedNetwork")

      if (!parsedAddress.blockchain.network) {
        throw "Reached non-mainnet logic but getUnsupportedAddressServerSideProps() did not return a network"
      }

      parsedAddress.unsupported = {
        type: reason.type,
        message: regexReplace(reason.message, {
          __BLOCKCHAIN__: parsedAddress.blockchain.name,
          __NETWORK__: parsedAddress.blockchain.network,
        }),
      }

      return parsedAddress
    }

    // // not a normal Cardano Type-00 address
    if (parsedAddress.blockchain.name === "cardano" && parsedAddress.type.type !== 0) {
      const reason = getReason("UnsupportedType")

      parsedAddress.unsupported = {
        type: reason.type,
        message: regexReplace(reason.message, {
          __BLOCKCHAIN__: parsedAddress.blockchain.name,
          __ADDRESS_TYPE__: parsedAddress.type.name,
        }),
      }

      return parsedAddress
    }

    // not a normal Ergo P2PK address
    if (parsedAddress.blockchain.name === "ergo" && parsedAddress.type.type !== 1) {
      const reason = getReason("UnsupportedType")

      parsedAddress.unsupported = {
        type: reason.type,
        message: regexReplace(reason.message, {
          __BLOCKCHAIN__: parsedAddress.blockchain.name,
          __ADDRESS_TYPE__: parsedAddress.type.name,
        }),
      }

      return parsedAddress
    }
  }

  // unrecognized catch-all
  if (!parsedAddress.isSupported) {
    const reason = getReason("UnrecognizedAddress")

    parsedAddress.unsupported = reason

    return parsedAddress
  }

  // valid
  return parsedAddress
}

export default validateAddress
