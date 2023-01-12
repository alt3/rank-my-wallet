import ethereumRegex from "ethereum-regex"
import moneroRegex from "monero-regex"
import rippleRegex from "ripple-regex"
import { BlockchainAddress } from "./BlockhainAddress"

/**
 * Catch all class for regex addresses.
 */
export class RegexAddress extends BlockchainAddress {
  constructor(address: string) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name

    if (ethereumRegex({ exact: true }).test(address)) {
      this.blockchain.name = "ethereum"
      return
    }

    if (rippleRegex({ exact: true }).test(address)) {
      this.blockchain.name = "ripple"
      return
    }

    if (moneroRegex({ exact: true }).test(address)) {
      this.blockchain.name = "monero"
      return
    }

    if (address.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
      this.blockchain.name = "solana"
      return
    }
  }
}