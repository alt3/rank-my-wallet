import { BlitzPage } from "@blitzjs/next"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { MetaTags, PageHero, SpeciesNavbar } from "src/components"
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

      <SpeciesNavbar />
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

CardanoSpeciesPage.suppressFirstRenderFlicker = true
CardanoSpeciesPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoSpeciesPage
