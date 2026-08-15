import { t } from "@lingui/core/macro"

interface Props {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  blockchain: string
  network?: string
  addressType?: string
}

// `network` and `addressType` default to "" so the placeholders stay bare
// identifiers: Lingui derives placeholder names from the expression, so any
// inline fallback would renumber them and invalidate the existing catalogs.
export const getUnsupportedAddressMessage = ({
  type,
  blockchain,
  network = "",
  addressType = "",
}: Props): string => {
  if (type === "UnsupportedBlockchain") {
    return t`Sorry, but we do not support ${blockchain}.`
  }

  if (type === "UnsupportedNetwork") {
    return t`Sorry, but we do not support ${blockchain} ${network} addresses.`
  }

  if (type === "UnsupportedType") {
    return t`Sorry, but we do not support ${blockchain} ${addressType} addresses.`
  }

  return t`Sorry, but we are unable to recognize this address.`
}
