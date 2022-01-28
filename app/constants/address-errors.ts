interface addressErrorProps {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  message: string
}

const addressErrors: addressErrorProps[] = [
  {
    type: "UnrecognizedAddress",
    message: "We apologize, but we were unable to recognize this blockchain address.",
  },
  {
    type: "UnsupportedBlockchain",
    message: "We apologize, but we do not support the __BLOCKCHAIN__ blockchain.",
  },
  {
    type: "UnsupportedNetwork",
    message: "We apologize, but we do not support __BLOCKCHAIN__ __NETWORK__ addresses.",
  },
  {
    type: "UnsupportedType",
    message: "We apologize, but we do not support __BLOCKCHAIN__ __ADDRESS_TYPE__ address types.",
  },
]

export default addressErrors
