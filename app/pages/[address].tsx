import { AddressDetails, SuspenseLoader } from "@components"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Head } from "blitz"
import { Suspense } from "react"

const ShowRankingPage: BlitzPage = () => {
  const meta = {
    title: "Rank My Wallet - Rankings",
    description: "Blockchain species for Cardano and Ergo based on wallet balance.",
    keywords: "rankings, cardano, ergo, blockchain, species, whale, orca, shark, shrimp, online",
    url: "https://rankmywallet.com/species",
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
ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
