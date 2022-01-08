import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const config: BlitzConfig = withBundleAnalyzer({
  middleware: [],
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
})
module.exports = config
