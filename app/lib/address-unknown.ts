import { BlockchainAddress } from "./blockhain-address"

/**
 * Catch all class for all unrecognizable addresses.
 */

export class UnknownAddress extends BlockchainAddress {
  constructor(address: string) {
    super(address) // sets address property in the base class (lowercased there)

    this.blockchain = "Unknown"
  }
}
