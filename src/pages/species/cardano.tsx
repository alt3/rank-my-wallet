import { BlitzPage } from "@blitzjs/next"
import { Container } from "@chakra-ui/react"
import { MetaTags, PageHero, SpeciesTable } from "src/components"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"

const CardanoPage: BlitzPage = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
    },
  }

  return (
    <>
      <MetaTags
        title="Rank My Wallet - Cardano Species"
        description="Species for the Cardano blockchain"
        keywords="blockchain, cardano, species, whale, orca, shark, shrimp, ghost"
      />

      <Container {...styles.container}>
        <PageHero title="Cardano Species" />

        <SpeciesTable
          blockchain="cardano"
          tickerSymbol="₳"
          species={species["cardano"].slice(1)}
        ></SpeciesTable>
      </Container>
    </>
  )
}

CardanoPage.suppressFirstRenderFlicker = true
CardanoPage.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default CardanoPage
