import { BlitzPage } from "@blitzjs/next"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { BlockChains, ContentContainer, Hero, MetaTags, Sponsors } from "src/components"
import Layout from "src/core/layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="RankMyWallet"
        description="Blockchain rankings for Cardano and Ergo"
        keywords="crypto, blockchain, cardano, ergo, wallets, rankings, species, address-analyzer"
      />

      <Hero />

      <ContentContainer>
        <BlockChains />
        <Sponsors />
      </ContentContainer>
    </>
  )
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      i18n: (await import(`@lingui/loader!./locales/index/${ctx.locale}.po`)).messages,
    },
  }
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
