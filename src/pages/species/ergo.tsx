import { BlitzPage } from "@blitzjs/next"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { ContentContainer, MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

const ErgoSpeciesPage: BlitzPage = () => {
  useLingui()

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Ergo Species`}`}
        description="Species for the Ergo blockchain"
        keywords="crypto, blockchain, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <ContentContainer>
        <PageHero title={<Trans>Ergo Species</Trans>} />

        <SpeciesTable
          blockchain="Ergo"
          tickerSymbol="Σ"
          species={species["Ergo"].slice(1)}
        ></SpeciesTable>
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

ErgoSpeciesPage.suppressFirstRenderFlicker = true
ErgoSpeciesPage.getLayout = (page) => <Layout>{page}</Layout>

export default ErgoSpeciesPage
