/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  blockchain: string
  ticker: "ADA" | "ERG"
  currencySymbol: "₳" | "Σ"
  network: string
  type: {
    type: number
    bits: Array<number>
    name: string
  }
  error: {
    message: string
    type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  }

  constructor(address: string) {
    this.address = address
  }
}
