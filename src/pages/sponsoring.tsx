import { BlitzPage } from "@blitzjs/next"
import { Container, Text, useColorModeValue } from "@chakra-ui/react"
import { ExternalLinkIcon, Link, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"

const Sponsoring: BlitzPage = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
    },
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

      <Container {...styles.container}>
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
            {...styles.link}
          >
            Twitter <ExternalLinkIcon />
          </Link>{" "}
          for details.
        </Text>
      </Container>
    </>
  )
}

Sponsoring.suppressFirstRenderFlicker = true
Sponsoring.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default Sponsoring
