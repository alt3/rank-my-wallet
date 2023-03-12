import { BlitzPage } from "@blitzjs/next"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { ContentContainer, MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

const CardanoPage: BlitzPage = () => {
  useLingui()

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Cardano Species`}`}
        description="Species for the Cardano blockchain"
        keywords="crypto, blockchain, cardano, species, whale, orca, shark, shrimp, ghost"
      />

      <ContentContainer>
        <PageHero title={<Trans>Cardano Species</Trans>} />

        <SpeciesTable
          blockchain="Cardano"
          tickerSymbol="₳"
          species={species["Cardano"].slice(1)}
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

CardanoPage.suppressFirstRenderFlicker = true
CardanoPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoPage
