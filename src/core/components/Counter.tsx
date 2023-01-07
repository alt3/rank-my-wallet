import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import Countup from "react-countup"
import { capitalize, getIntegerSeparator } from "../lib/utils"
import { getUserLocale } from "get-user-locale"

interface CounterProps {
  totalAccounts: number
  rank: number
  blockchain: string
  balance: string | number
}

export function Counter({ totalAccounts, rank, blockchain, balance }: CounterProps) {
  const styles = {
    box: {
      marginBottom: { base: 0, sm: "3rem" },
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "2.5rem", md: "4rem" },
      paddingBottom: { base: "2rem", md: "5rem" },
      paddingLeft: 0,
      paddingRight: 0,
    },
    heading: {
      fontSize: { base: "4xl", md: "6xl" },
      letterSpacing: { base: "tighter", sm: "normal" },
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: 0,
      textAlign: "center" as const,
    },
    counter: {
      fontFamily: '"Noto Mono", "monospace"',
      fontSize: { base: "4xl", sm: "6xl" },
      color: useColorModeValue("teal.500", "teal.300"),
      letterSpacing: { base: "tight", sm: "tighter" },
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack spacing={2} width="100%" align="center">
            {(balance === "0" || balance === 0) && (
              <Heading {...styles.heading}>Sorry, but we do not rank empty wallets</Heading>
            )}

            {blockchain === "cardano" && balance !== "0" && balance !== 0 && (
              <>
                <Heading {...styles.heading}>Cardano Rankings are coming soon</Heading>
              </>
            )}

            {blockchain !== "cardano" && balance !== "0" && balance !== 0 && (
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
                    useEasing={true}
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
