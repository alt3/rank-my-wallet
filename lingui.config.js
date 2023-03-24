// use nextjs config as single source of truth for defining locales
const nextConfig = require("./next.config")

module.exports = {
  locales: nextConfig.i18n.locales,
  sourceLocale: nextConfig.i18n.defaultLocale, // en
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["src/components", "src/core", "src/lib", "src/pages"],
    },
  ],
  format: "po",
  formatOptions: {
    origins: false,
  },
}
