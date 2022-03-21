import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import Countup from "react-countup"
import { capitalize, getIntegerSeparator } from "../../lib/utils"
import { getUserLocale } from "get-user-locale"

interface CounterProps {
  totalAccounts: number
  rank: number
  blockchain: string
}

export function Counter({ totalAccounts, rank, blockchain }: CounterProps) {
  const styles = {
    box: {
      marginBottom: { base: 0, sm: "3rem" },
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "4rem" },
      paddingBottom: { base: "2rem", md: "5rem" },
    },
    heading: {
      fontSize: { base: "4xl", sm: "6xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: 0,
      textAlign: "center" as const,
    },
    counter: {
      fontSize: { base: "4xl", sm: "6xl" },
      color: useColorModeValue("teal.500", "teal.300"),
      css: {
        "@supports (-webkit-touch-callout: none) {": {
          fontFamily: "Menlo", // iOS MUST use a monospace font or the counter will shake
          letterSpacing: "tight",
        },
      },
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack spacing={2} width="100%" align="center">
            {blockchain === "cardano" && (
              <>
                <Heading {...styles.heading}>Cardano Rankings</Heading>
                <Heading as="h3" {...styles.heading} {...styles.counter}>
                  are coming soon
                </Heading>
              </>
            )}

            {blockchain !== "cardano" && (
              <>
                <Heading {...styles.heading}>You are {capitalize(blockchain)} holder</Heading>
                <Heading as="h3" {...styles.heading} {...styles.counter}>
                  <Text as="span" marginRight="0.6rem">
                    #
                  </Text>
                  <Countup
                    start={totalAccounts}
                    end={rank}
                    duration={2.75}
                    separator={getIntegerSeparator(getUserLocale())}
                  />
                </Heading>
              </>
            )}
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Counter
