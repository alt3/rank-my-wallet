// @ts-check
const { withBlitz } = require("@blitzjs/next")

// NextJS bundle analyzer
const shouldAnalyzeBundles = process.env.ANALYZE === "true"
const withBundleAnalyzer = shouldAnalyzeBundles
  ? require("@next/bundle-analyzer")({ enabled: true })
  : () => config

// When adding new i18n routes, also update LocaleSwitcher and next-sitemap
const locales = ["en-us", "de-de", "nl-nl"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  experimental: {
    // appDir: true,
    swcPlugins: [
      [
        "@lingui/swc-plugin",
        {
          // the same options as in .swcrc
        },
      ],
    ],
  },
  i18n: {
    locales: locales,
    defaultLocale: "en-us",
  },
}

module.exports = withBlitz(withBundleAnalyzer(config))
