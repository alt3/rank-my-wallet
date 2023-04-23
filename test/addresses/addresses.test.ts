import { parseAddress } from "src/lib/parseAddress"
import addresses from "./address.fixtures"

for (const [index, blockchainAddresses] of Object.entries(addresses)) {
  const blockchain = Object.keys(blockchainAddresses).toString()

  describe.each(addresses[index][blockchain])(
    `Ensure parseAddress() generates the correct address properties for ${blockchain}:`,
    (fixture) => {
      test(`${fixture.address} `, async () => {
        const parsedAddress = parseAddress(fixture.address)

        expect(parsedAddress.blockchain.name).toEqual(blockchain)

        expect(parsedAddress.isSupported).toEqual(fixture.isSupported)

        if (parsedAddress.blockchain.network) {
          expect(parsedAddress.blockchain.network).toEqual(fixture.network)
        }

        if (parsedAddress.type) {
          expect(parsedAddress.type.name).toEqual(fixture.type)
        }
      })
    }
  )
}
