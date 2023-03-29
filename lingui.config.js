const { formatter } = require("@lingui/format-po")

const locales = ["de-de", "en-us", "nl-nl", "ro-ro"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

module.exports = {
  locales: locales,
  sourceLocale: "en-us",
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "src/translations/locales/{locale}",
      include: [
        "src/components",
        "src/core",
        "src/lib",
        "src/pages",
        "src/translations/languages.ts",
      ],
    },
  ],
  format: formatter({ origins: false }),
}
