import { ContentContainer } from "@/components/ContentContainer"
import { AddressHero } from "@/components/Heroes/AddressHero"
import { MetaTags } from "@/components/MetaTags"
import { Sponsors } from "@/components/Sponsors"
import { SupportedBlockChains } from "@/components/SupportedBlockchains"
import { BlitzPage } from "@blitzjs/next"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
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

      <AddressHero />

      <ContentContainer>
        <SupportedBlockChains />
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
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
