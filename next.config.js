// @ts-check
const { withBlitz } = require("@blitzjs/next")

// analyze
const shouldAnalyzeBundles = process.env.ANALYZE === "true"
const withBundleAnalyzer = shouldAnalyzeBundles
  ? require("@next/bundle-analyzer")({ enabled: true })
  : (/** @type {any} */ config) => config

const config = {
  // experimental: { appDir: true },
}

module.exports = withBlitz(withBundleAnalyzer(config))
