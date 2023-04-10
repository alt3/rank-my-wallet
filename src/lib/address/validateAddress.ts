import { Base58Address, Bech32Address, RegexAddress, UnrecognizedAddress } from "./formats"

type UnsupportedAddressTypes = {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
}

/**
 * Insert type property for unsupported addresses.
 *
 * @param parsedAddress - The fully parsed blockchain address
 */
export const validateAddress = function (
  parsedAddress: RegexAddress | Bech32Address | Base58Address | UnrecognizedAddress
) {
  // unrecognized addresses
  if (!parsedAddress.blockchain.name) {
    parsedAddress.unsupported = {
      type: "UnrecognizedAddress",
    }

    return parsedAddress
  }

  // non cardano/ergo blockchains
  if (!["Cardano", "Ergo"].includes(parsedAddress.blockchain.name)) {
    parsedAddress.unsupported = {
      type: "UnsupportedBlockchain",
    }

    return parsedAddress
  }

  // still here so we have a cardano or ergo address
  if (parsedAddress.blockchain.network !== "Mainnet") {
    parsedAddress.unsupported = {
      type: "UnsupportedNetwork",
    }

    return parsedAddress
  }

  // not a Cardano Type-00 address
  if (parsedAddress.blockchain.name === "Cardano" && parsedAddress.type.type !== 0) {
    parsedAddress.unsupported = {
      type: "UnsupportedType",
    }

    return parsedAddress
  }

  // not an Ergo P2PK address
  if (parsedAddress.blockchain.name === "Ergo" && parsedAddress.type.type !== 1) {
    parsedAddress.unsupported = {
      type: "UnsupportedType",
    }

    return parsedAddress
  }

  // still here so address is valid
  return parsedAddress
}

export default validateAddress
