import { BlitzPage } from "@blitzjs/next"
import { Trans } from "@lingui/macro"
import { ContentContainer, MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"

const CardanoPage: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="Rank My Wallet - Cardano Species"
        description="Species for the Cardano blockchain"
        keywords="blockchain, cardano, species, whale, orca, shark, shrimp, ghost"
      />

      <ContentContainer>
        <PageHero title={<Trans>Cardano Species</Trans>} />

        <SpeciesTable
          blockchain="cardano"
          tickerSymbol="₳"
          species={species["cardano"].slice(1)}
        ></SpeciesTable>
      </ContentContainer>
    </>
  )
}

CardanoPage.suppressFirstRenderFlicker = true
CardanoPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoPage
