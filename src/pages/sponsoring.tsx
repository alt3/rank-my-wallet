import { BlitzPage } from "@blitzjs/next"
import { Container, Text } from "@chakra-ui/react"
import { ExternalLinkIcon, Link, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"
import Head from "next/head"

const Sponsoring: BlitzPage = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
    },
  }

  return (
    <>
      <Head>
        <title>Rank My Wallet - Become a Sponsor</title>
      </Head>

      <Container {...styles.container}>
        <PageHero title="Become a Sponsor" />

        <Text textAlign={"center"}>
          Contact us on{" "}
          <Link
            href="https://www.twitter.com/RankMyWallet/"
            aria-label="RankMyWallet on Twitter"
            isExternal
            passHref
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
