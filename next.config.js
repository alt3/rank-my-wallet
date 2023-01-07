// @ts-check
const { withBlitz } = require("@blitzjs/next")

// NextJS bundle analyzer
const shouldAnalyzeBundles = process.env.ANALYZE === "true"
const withBundleAnalyzer = shouldAnalyzeBundles
  ? require("@next/bundle-analyzer")({ enabled: true })
  : () => config

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  // experimental: { appDir: true },
}

module.exports = withBlitz(withBundleAnalyzer(config))
