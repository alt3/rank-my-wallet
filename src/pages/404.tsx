import { BlitzPage } from "@blitzjs/next"
import { BackHomeButton, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
const Page404: BlitzPage = () => {
  const statusCode = 404
  const title = "Page not found"

  return (
    <>
      <MetaTags
        title="Error 404 - Page not Found"
        keywords="blockchain, cardano, ergo, wallets, rankings"
      />

      <PageHero title="Page not Found" />
      <BackHomeButton title="Back to homepage" />
    </>
  )
}

Page404.suppressFirstRenderFlicker = true
Page404.getLayout = (page) => <Layout>{page}</Layout>

export default Page404
