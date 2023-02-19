import { BlitzPage } from "@blitzjs/next"
import { BlockChains, ContentContainer, Hero, MetaTags, Sponsors } from "src/components"
import Layout from "src/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="RankMyWallet"
        description="Blockchain rankings for Cardano and Ergo"
        keywords="blockchain, cardano, ergo, wallets, rankings, species, address-analyzer"
      />

      <Hero />

      <ContentContainer>
        <BlockChains />
        <Sponsors />
      </ContentContainer>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
