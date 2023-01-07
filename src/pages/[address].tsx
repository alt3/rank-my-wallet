import { AddressDetails, SuspenseLoader } from "@components"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import Head from "next/head"
import { Suspense } from "react"

const ShowRankingPage: BlitzPage = () => {
  const meta = {
    title: "Rank My Wallet - Rankings",
    description: "Your blockchain ranking and address analysis",
    keywords: "rankings, cardano, ergo, blockchain, addresses, wallets, species, analyser, online",
    url: "https://rankmywallet.com/rankings",
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:content" content="summary" />
        <meta name="twitter:site" content="@RankMyWallet" />
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
