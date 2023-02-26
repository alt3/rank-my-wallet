import { BlitzPage } from "@blitzjs/next"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { MetaTags, PageHero, SpeciesNavBar } from "src/components"
import Layout from "src/core/layouts/Layout"

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

CardanoSpeciesPage.suppressFirstRenderFlicker = true
CardanoSpeciesPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoSpeciesPage
