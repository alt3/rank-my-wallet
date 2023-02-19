import { BlitzPage } from "@blitzjs/next"
import Head from "next/head"
import { Suspense } from "react"
import { AddressDetails, SuspenseLoader } from "src/components"
import Layout from "src/core/layouts/Layout"

const ShowRankingPage: BlitzPage = () => {
  const pageTitle = "RankMyWallet"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Suspense fallback={<SuspenseLoader />}>
          <AddressDetails />
        </Suspense>
      </div>
    </>
  )
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
