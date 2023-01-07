import { Container } from "@chakra-ui/react"
import { BlockChains, Hero, Sponsors } from "@components"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import Head from "next/head"

const Home: BlitzPage = () => {
  const meta = {
    title: `Rank My Wallet`,
    description: "Realtime blockchain rankings for Cardano and Ergo",
    keywords: "rankings, cardano, ergo, blockchain, addresses, wallets, species, analyser, online",
    url: "https://rankmywallet.com/",
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
        <meta name="twitter:image" content="https://rankmywallet.com/twitter-card-index.png" />
        <meta name="twitter:image:alt" content="Screenshot of home page" />
      </Head>

      <Hero />

      <Container maxW="container.md" marginBottom="2.5rem">
        <BlockChains />
        <Sponsors />
      </Container>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
