import ethereumRegex from "ethereum-regex"
import moneroRegex from "monero-regex"
import rippleRegex from "ripple-regex"
import { BaseAddress } from "src/lib/addressClasses/BaseAddress"

/**
 * Catch all class for regex addresses.
 */
export class RegexAddress extends BaseAddress {
  constructor(address: string) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name

    if (ethereumRegex({ exact: true }).test(address)) {
      this.blockchain.name = "Ethereum"
      return
    }

    if (rippleRegex({ exact: true }).test(address)) {
      this.blockchain.name = "Ripple"
      return
    }

    if (moneroRegex({ exact: true }).test(address)) {
      this.blockchain.name = "Monero"
      return
    }

    if (address.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
      this.blockchain.name = "Solana"
      return
    }
  }
}
