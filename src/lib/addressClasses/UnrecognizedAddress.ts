import { BaseAddress } from "src/lib/addressClasses/BaseAddress"

/**
 * Catch all class for all unrecognizable addresses.
 */
export class UnrecognizedAddress extends BaseAddress {
  constructor(address: string) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name
  }
}
