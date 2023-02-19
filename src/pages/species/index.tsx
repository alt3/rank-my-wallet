import { BlitzPage } from "@blitzjs/next"
import { Trans, t } from "@lingui/macro"
import { MetaTags, PageHero, SpeciesNavBar } from "src/components"
import Layout from "src/core/layouts/Layout"
import { useLingui } from "@lingui/react"

const CardanoSpeciesPage: BlitzPage = () => {
  useLingui()

  return (
    <>
      <MetaTags
        title={`Rank My Wallet - ${t`Blockchain Species`}`}
        description="Blockchain species for Cardano and Ergo"
        keywords="blockchain, cardano, ergo, species, whale, orca, shark, shrimp, ghost"
      />

      <PageHero title={<Trans>Blockchain Species</Trans>} />

      <SpeciesNavBar />
    </>
  )
}

CardanoSpeciesPage.suppressFirstRenderFlicker = true
CardanoSpeciesPage.getLayout = (page) => <Layout>{page}</Layout>

export default CardanoSpeciesPage
