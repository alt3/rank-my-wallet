import { Box, Container, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { TipboxCard } from "@components"
import tipboxAddresses from "app/constants/tipbox-addresses"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Head } from "blitz"
import { Suspense } from "react"

export const TipBox = () => {
  const styles = {
    container: {
      maxW: "container.md",
      marginBottom: "2.5rem",
      marginTop: { base: "2rem", sm: "5rem" },
    },
    grid: {
      columns: { base: 1, sm: 2 },
      spacing: { base: "2rem", sm: "4rem" },
    },
    disclaimer: {
      align: "center" as const,
      color: useColorModeValue("teal.500", "gray.600"),
      marginTop: { base: "4rem", sm: "5rem" },
    },
  }

  return (
    <>
      <Head>
        <title>Tip Box</title>
      </Head>

      <Container {...styles.container}>
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
            Thanks to your donations, this website can remain ad-free.
          </Text>
        </Box>
      </Container>
    </>
  )
}

const ShowTipBoxPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TipBox />
      </Suspense>
    </div>
  )
}

ShowTipBoxPage.authenticate = false
ShowTipBoxPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowTipBoxPage
