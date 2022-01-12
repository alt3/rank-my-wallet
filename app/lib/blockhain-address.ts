/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  encoding: string
  blockchain: string
  network: string

  constructor(address: string) {
    this.address = address.toLowerCase()
  }
}
