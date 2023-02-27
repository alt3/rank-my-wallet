/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL}/nl`,
      hreflang: "nl",
    },
  ],
}
