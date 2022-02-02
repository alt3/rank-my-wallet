/**
 * Interfaces so we can set properties independently
 */
interface Blockchain {
  name: string
  network?: string
}

/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  isSupported?: boolean
  blockchain: {
    name: string
    network?: string
  }
  currency: {
    decimals: 6 | 9
    ticker: "ADA" | "ERG"
    tickerSymbol: "₳" | "Σ"
    nano: "lovelace" | "nanoERG"
  }
  type: {
    type: number
    bits: Array<number>
    name: string
  }
  unsupported: {
    message: string
    type: "UnrecognizedAddress" | "UnsupportedBlockchain" | "UnsupportedNetwork" | "UnsupportedType"
  }

  constructor(address: string) {
    this.address = address
    this.isSupported = false // default to false
    this.blockchain = {} as Blockchain // initialize object so we can set properties independently
  }
}
