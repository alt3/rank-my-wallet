const linguiConfig = require("./lingui.config")

const alternateRefs = linguiConfig.locales
  .filter(function (locale) {
    return locale !== "pseudo"
  })
  .map((locale) => ({
    href: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
    hreflang: locale,
  }))

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: alternateRefs,
}
