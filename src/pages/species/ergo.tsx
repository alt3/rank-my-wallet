import { BlitzPage } from "@blitzjs/next"
import { ContentContainer, MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"

const ErgoSpeciesPage: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="Rank My Wallet - Ergo Species"
        description="Species for the Ergo blockchain"
        keywords="blockchain, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <ContentContainer>
        <PageHero title="Ergo Species" />

        <SpeciesTable
          blockchain="ergo"
          tickerSymbol="Σ"
          species={species["ergo"].slice(1)}
        ></SpeciesTable>
      </ContentContainer>
    </>
  )
}

ErgoSpeciesPage.suppressFirstRenderFlicker = true
ErgoSpeciesPage.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default ErgoSpeciesPage
