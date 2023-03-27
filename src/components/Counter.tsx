import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import Countup from "react-countup"
import { getNumberSeparators } from "src/lib"

interface CounterProps {
  totalAccounts: number
  rank: number
  blockchain: string
}

export function Counter({ totalAccounts, rank, blockchain }: CounterProps) {
  const { i18n } = useLingui()

  const useIndianSeparators = i18n.locale === "hi-in" ? true : false

  const styles = {
    box: {
      marginBottom: { base: 0, sm: "3rem" },
    },
    container: {
      maxW: "container.md",
      paddingBottom: { base: "1.5rem", md: "4.5rem" },
      paddingLeft: 0,
      paddingRight: 0,
    },
    heading: {
      marginTop: { base: "2.5rem", md: "4rem" },
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
            <Heading {...styles.heading}>
              {blockchain === "Cardano" && <Trans>You are Cardano holder</Trans>}
              {blockchain === "Ergo" && <Trans>You are Ergo holder</Trans>}
            </Heading>
            <Heading as="h3" {...styles.heading} {...styles.counter}>
              <Text as="span" marginRight="0.6rem">
                #
              </Text>
              <Countup
                start={totalAccounts}
                end={rank}
                duration={2.75}
                separator={getNumberSeparators(i18n.locale).group}
                useEasing={true}
                useIndianSeparators={useIndianSeparators}
              />
            </Heading>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Counter
