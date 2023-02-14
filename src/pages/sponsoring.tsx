import { BlitzPage } from "@blitzjs/next"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { ContentContainer, ExternalLinkIcon, Link, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"

const Sponsoring: BlitzPage = () => {
  const styles = {
    link: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <>
      <MetaTags
        title="Rank My Wallet - Become a Sponsor"
        description="Promote your project by becoming a sponsor"
        keywords="blockchain, cardano, ergo, wallets, rankings, sponsoring, sponsor"
      />

      <ContentContainer>
        <PageHero title="Become a Sponsor" />

        <Text width="70%" margin="auto" textAlign={"center"} marginBottom={10}>
          If you are an individual looking to sponsor this project, please consider donating via the{" "}
          <Link href="/tipbox" aria-label="RankMyWallet Tip Box" {...styles.link}>
            Tip Box
          </Link>
          .
        </Text>

        <Text width="70%" margin="auto" textAlign={"center"}>
          If you are a project or business and would like to show your logo on the landing page,
          contact us on{" "}
          <Link
            href="https://www.twitter.com/RankMyWallet/"
            aria-label="RankMyWallet on Twitter"
            isExternal
            passHref
            withExternalIcon
            {...styles.link}
          >
            Twitter
          </Link>{" "}
          for details.
        </Text>
      </ContentContainer>
    </>
  )
}

Sponsoring.suppressFirstRenderFlicker = true
Sponsoring.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default Sponsoring
