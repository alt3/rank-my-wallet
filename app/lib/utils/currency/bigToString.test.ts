import { bigToString, nanoToTicker } from "app/lib/utils"
import { Big } from "big.js"

describe("Ensure bigToString:", function () {
  it("produces a String", () => {
    const result = bigToString(new Big(10000))
    expect(result).toEqual(expect.any(String))
  })

  it("does not break on zero balance", () => {
    const result = bigToString(0)
    expect(result).toEqual("0")
  })

  it("does not require decimals parameter", () => {
    const result = bigToString(25000.123456)
    expect(result).toEqual("25,000.123456")
  })

  it("does not round integers", () => {
    const result = bigToString(25000.99, 0)
    expect(result).toEqual("25,000")
  })

  it("does not round fractions", () => {
    const result = bigToString(25000.65708, 2)
    expect(result).toEqual("25,000.65")
  })

  it("preserves trailing fractional zeros", () => {
    const balance = nanoToTicker("25000123400", 6)
    const result = bigToString(balance, 6)
    expect(result).toEqual("25,000.123400")
  })

  it("respects requested fractions for ADA", () => {
    const balance = nanoToTicker("25000123456", 6)
    const result = bigToString(balance, 6)
    expect(result).toEqual("25,000.123456")
  })

  it("respects requested fractions for ERG", () => {
    const balance = nanoToTicker("111000123456789", 9)
    const result = bigToString(balance, 9)
    expect(result).toEqual("111,000.123456789")
  })

  it("can handle very large numbers", () => {
    const balance = nanoToTicker("555444333222111000001", 6)
    const result = bigToString(balance, 6)
    expect(result).toEqual("555,444,333,222,111.000001")
  })
})
