import { BlitzPage } from "@blitzjs/next"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { BlockChains, ContentContainer, Hero, MetaTags, Sponsors } from "src/components"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

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

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
