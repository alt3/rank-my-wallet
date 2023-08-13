const { formatter } = require("@lingui/format-po")

const locales = ["de-de", "en-us", "hi-in", "id-id", "nl-nl", "pt-br", "ro-ro"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

module.exports = {
  locales: locales,
  sourceLocale: "en-us",
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "<rootDir>/src/translations/locales/{locale}",
      include: [
        "<rootDir>/src/components",
        "<rootDir>/src/core",
        "<rootDir>/src/lib",
        "<rootDir>/src/pages",
        "<rootDir>/src/translations/languages.ts",
      ],
    },
  ],
  format: formatter({ origins: false }),
}
