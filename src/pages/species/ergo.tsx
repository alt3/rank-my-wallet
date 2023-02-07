import { BlitzPage } from "@blitzjs/next"
import { Container } from "@chakra-ui/react"
import { MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"

const ErgoSpeciesPage: BlitzPage = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
    },
  }

  return (
    <>
      <MetaTags
        title="Rank My Wallet - Ergo Species"
        description="Species for the Ergo blockchain"
        keywords="blockchain, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <Container {...styles.container}>
        <PageHero title="Ergo Species" />

        <SpeciesTable
          blockchain="ergo"
          tickerSymbol="Σ"
          species={species["ergo"].slice(1)}
        ></SpeciesTable>
      </Container>
    </>
  )
}

ErgoSpeciesPage.suppressFirstRenderFlicker = true
ErgoSpeciesPage.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default ErgoSpeciesPage
