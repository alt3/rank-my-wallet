import { nanoToTicker } from "src/lib/nanoToTicker"
import Big from "big.js"

describe("Ensure nanoToTicker:", function () {
  it("returns a Big object", () => {
    const result = nanoToTicker("1000", 2)
    expect(result).toBeInstanceOf(Big)
  })

  it("does not break with zero balance", () => {
    const result = nanoToTicker("0", 9)
    expect(result.toString()).toEqual("0")
  })

  it("does not preserve trailing zeros", () => {
    const result = nanoToTicker("25000123400", 6)
    expect(result.toString()).toEqual("25000.1234")
  })

  it("converts lovelace to ADA retaining default six fraction digits", () => {
    const result = nanoToTicker("25000123456", 6)
    expect(result.toString()).toEqual("25000.123456")
  })

  it("converts nanoERG to ERG retaining default nine fraction digits", () => {
    const result = nanoToTicker("111000123456789", 9)
    expect(result.toString()).toEqual("111000.123456789")
  })

  it("can handle very large numbers", () => {
    const result = nanoToTicker("9994333222111000001", 6)
    expect(result.toString()).toEqual("9994333222111.000001")
  })
})
