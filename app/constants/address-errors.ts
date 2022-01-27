interface addressErrorProps {
  type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  message: string
}

const addressErrors: addressErrorProps[] = [
  {
    type: "UnrecognizedAddress",
    message: "Sorry but we were unable to recognize this blockchain address.",
  },
  {
    type: "UnsupportedBlockchain",
    message: "Sorry but we do not support the {{BLOCKCHAIN}} blockchain.",
  },
  {
    type: "UnsupportedNetwork",
    message: "Sorry but we do not support the {{BLOCKCHAIN}} {{NETWORK}} network",
  },
  {
    type: "UnsupportedType",
    message: "Sorry but we do not support the {{BLOCKCHAIN}} address type {{ADDRESS_TYPE}}",
  },
]

export default addressErrors
