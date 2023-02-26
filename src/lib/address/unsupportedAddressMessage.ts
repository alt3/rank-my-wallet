import { t } from "@lingui/macro"

interface Props {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  blockchain: string
  network?: string
  addressType?: string
}

export const unsupportedAddressMessage = ({
  type,
  blockchain,
  network,
  addressType,
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
