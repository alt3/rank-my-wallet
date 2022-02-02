/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  isSupported?: boolean
  blockchain: string
  currency: {
    decimals: 6 | 9
    ticker: "ADA" | "ERG"
    tickerSymbol: "₳" | "Σ"
    nano: "lovelace" | "nanoERG"
  }
  network: string
  type: {
    type: number
    bits: Array<number>
    name: string
  }
  unsupported: {
    message: string
    type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  }
  // error: {
  //   message: string
  //   type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  // }

  constructor(address: string) {
    this.address = address
    this.isSupported = false // default to false
  }
}
