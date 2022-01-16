/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  blockchain: string
  network: string
  type: {
    type: number
    bits: Array<number>
    name: string
    abbreviation?: string
  }
  error: "UnknownAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"

  constructor(address: string) {
    this.address = address
  }
}
