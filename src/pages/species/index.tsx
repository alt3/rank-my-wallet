import { BlitzPage } from "@blitzjs/next"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { MetaTags, PageHero, SpeciesNavBar } from "src/components"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

const CardanoSpeciesPage: BlitzPage = () => {
  useLingui()

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Blockchain Species`}`}
        description="Blockchain species for Cardano and Ergo"
        keywords="crypto, blockchain, cardano, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <PageHero title={<Trans>Blockchain Species</Trans>} />

      <SpeciesNavBar />
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

CardanoSpeciesPage.suppressFirstRenderFlicker = true
CardanoSpeciesPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoSpeciesPage
