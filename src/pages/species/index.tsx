import { BlitzPage } from "@blitzjs/next"
import { MetaTags, PageHero, SpeciesNavBar } from "src/components"
import Layout from "src/core/layouts/Layout"

const CardanoSpeciesPage: BlitzPage = () => {
  return (
    <>
      <MetaTags
        title="Rank My Wallet - Blockchain Species"
        description="Blockchain species for Cardano and Ergo"
        keywords="blockchain, cardano, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <PageHero title="Blockchain Species" />

      <SpeciesNavBar />
    </>
  )
}

CardanoSpeciesPage.suppressFirstRenderFlicker = true
CardanoSpeciesPage.getLayout = (page) => <Layout title="Species">{page}</Layout>

export default CardanoSpeciesPage
