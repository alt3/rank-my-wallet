/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  blockchain: string
  currency: {
    ticker: "ADA" | "ERG"
    nano: "Lovelace" | "nanoERG"
    symbol: "₳" | "Σ"
    decimals: 6 | 9
  }
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
