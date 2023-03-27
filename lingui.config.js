// use nextjs config as single source of truth for defining locales
const nextConfig = require("./next.config")
import { formatter } from "@lingui/format-po"

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
  format: formatter({ origins: false }),
}
