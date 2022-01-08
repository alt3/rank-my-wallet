// import { base58_to_binary } from "base58-js"

// https://www.scopulus.co.uk/tools/hexconverter.htm

const { base58_to_binary } = require("base58-js")

const address = "9ggNXb99UuiLfcwZvcVyxsxnFPrCP2U1bHz4jChuCoHFe1KEhxR"
const bin = base58_to_binary(address)

console.log(bin)

console.log("Four leftmost bytes:")
console.log("=> " + bin[0])
console.log("=> " + bin[1])
console.log("=> " + bin[2])
console.log("=> " + bin[3])

if (!bin[0] === 1) {
  return false
}
