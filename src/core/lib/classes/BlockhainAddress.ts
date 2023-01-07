/**
 * Interfaces so we can set properties independently
 */
interface Decoded {
  bytes?: Array<number>
  hex?: string
  prefix?: string
  words?: Array<number>
}
interface Blockchain {
  name: string
  network?: string
  explorerUrl?: string
}

interface Payload {
  prefix: {
    byte: number
    hex: string
    bits: Array<number>
    leading?: {
      bits: Array<number>
      type: string
    }
    trailing?: {
      bits: Array<number>
      type: string
    }
  }
  content?: {
    bytes: Array<number>
    hex: string
  }
  checksum?: {
    bytes: Array<number>
    hex: string
  }
}

/**
 * Base class with properties shared by all blockchain addresses.
 */
export class BlockchainAddress {
  readonly address: string
  class: string
  encoding: string
  decoded: Decoded
  isSupported?: boolean
  blockchain: Blockchain
  payload: Payload
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
    this.decoded = {} as Decoded
    this.payload = {} as Payload
  }
}
