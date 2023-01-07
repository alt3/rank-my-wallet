import { BlitzPage } from "@blitzjs/next"
import { Box, Container, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { PageHero, TipboxCard } from "@components"
import tipboxAddresses from "src/core/constants/tipbox-addresses"
import Layout from "src/core/layouts/Layout"
import Head from "next/head"
import { BsHeartFill } from "react-icons/bs"

const TipBox: BlitzPage = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
    },
    grid: {
      columns: { base: 1, sm: 2 },
      spacing: { base: "2rem", sm: "4rem" },
    },
    disclaimer: {
      align: "center" as const,
      color: useColorModeValue("teal.500", "gray.500"),
      marginTop: { base: "2rem", sm: "5rem" },
    },
  }

  return (
    <>
      <Head>
        <title>Rank My Wallet - Tip Box</title>
      </Head>

      <Container {...styles.container}>
        <PageHero title="Tip Box" />

        <Box>
          <SimpleGrid {...styles.grid}>
            <TipboxCard
              title="Cardano"
              address={tipboxAddresses.cardano}
              url={`https://pool.pm/${tipboxAddresses.cardano}`}
              linkTitle="Cardano Explorer"
            />
            <TipboxCard
              title="Ergo"
              address={tipboxAddresses.ergo}
              url={`https://explorer.ergoplatform.com/en/addresses/${tipboxAddresses.ergo}`}
              linkTitle="Ergo Explorer"
            />
          </SimpleGrid>

          <Text {...styles.disclaimer}>
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
            Thanks to your donations, this website remains ad-free{" "}
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
          </Text>
        </Box>
      </Container>
    </>
  )
}

TipBox.suppressFirstRenderFlicker = true
TipBox.getLayout = (page) => <Layout title="Tip Box">{page}</Layout>

export default TipBox
