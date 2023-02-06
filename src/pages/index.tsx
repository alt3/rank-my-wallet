import { BlitzPage } from "@blitzjs/next"
import { Container } from "@chakra-ui/react"
import { BlockChains, Hero, MetaTags, Sponsors } from "src/components"
import Layout from "src/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="Rank My Wallet"
        description="Blockchain rankings for Cardano and Ergo"
        keywords="blockchain, cardano, ergo, wallets, rankings, species, address-analyzer"
      />

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
