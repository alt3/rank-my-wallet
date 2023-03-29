const { formatter } = require("@lingui/format-po")

const locales = ["de-de", "en-us", "nl-nl", "ro-ro"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

/**
 *
 * @type {import('@lingui/conf').LinguiConfig}
 */
module.exports = {
  locales: locales,
  sourceLocale: "en-us",
  pseudoLocale: "pseudo",
  experimental: {
    extractor: {
      entries: [
        "<rootDir>/src/pages/**/*.tsx"
      ],
      output: "<rootDir>/{entryDir}/locales/{entryName}/{locale}"
    }
  },
  format: formatter(),

}
