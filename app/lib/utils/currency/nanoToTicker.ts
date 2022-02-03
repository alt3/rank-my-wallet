import Big from "big.js"

/**
 * Converts nano currency to ticker Big object.
 *
 * @remarks
 * Please note that `nanoToTicker` always returns a raw, divided-by, Big object with.
 * all fractions. This is on purpose so the object can used by consuming functions like
 * calculations in the business layer or localized formatting in the presentation layer.
 *
 * @see {@link https://github.com/MikeMcl/big.js}
 * @param nano - Nano currency
 * @param decimals - Number of decimals used by the ticker
 */

export const nanoToTicker = (nano: string, decimals: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9): Big => {
  const big = new Big(nano)
  const divider = new Big(10).pow(decimals)
  const divided = new Big(big.div(divider)) // new instance because bigs are immutable

  return divided
}

export default nanoToTicker
