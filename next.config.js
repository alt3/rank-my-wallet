// @ts-check
const { withBlitz } = require("@blitzjs/next")
const linguiConfig = require("./lingui.config") // use Lingui config as single source of truth for defining locales

// NextJS bundle analyzer
const shouldAnalyzeBundles = process.env.ANALYZE === "true"
const withBundleAnalyzer = shouldAnalyzeBundles
  ? require("@next/bundle-analyzer")({ enabled: true })
  : () => config

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
    locales: linguiConfig.locales,
    defaultLocale: linguiConfig.sourceLocale,
  },
  async redirects() {
    return [
      // Ergo is the only supported blockchain, so its species table now lives
      // at /species. Next prefixes these with every locale automatically.
      { source: "/species/ergo", destination: "/species", permanent: true },
      { source: "/species/cardano", destination: "/species", permanent: true },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader", // https://github.com/lingui/js-lingui/issues/1782
      },
    })

    return config
  },
}

module.exports = withBlitz(withBundleAnalyzer(config))
