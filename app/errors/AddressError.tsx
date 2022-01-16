import SuperJson from "superjson"

export class AddressError extends Error {
  name = "AddressError"
  statusCode = 501
  parsedAddress: object | undefined

  constructor({ parsedAddress }) {
    super()
    this.parsedAddress = parsedAddress
  }
}

// Register with SuperJson serializer so it's reconstructed on the client
SuperJson.registerClass(AddressError)
SuperJson.allowErrorProps("parsedAddress")
