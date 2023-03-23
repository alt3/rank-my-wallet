module.exports = {
  extends: ["./node_modules/@blitzjs/next/eslint"],
  plugins: ["eslint-plugin-string-to-lingui"],
  rules: {
    "string-to-lingui/t-call-in-function": 2,
    "string-to-lingui/macro-inside-t-and-i18": 2,
    "string-to-lingui/t-should-be-before-macro": 2,
    "string-to-lingui/no-single-varibles-to-translate": 2,
    "string-to-lingui/forbid-i18n-calls": [
      2,
      {
        rules: [
          {
            handlerName: "number",
            message: "Use formatCurrency or formatNumber instead",
          },
        ],
      },
    ],
  },
}
