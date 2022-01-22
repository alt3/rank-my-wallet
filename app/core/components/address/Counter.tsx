import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Countup from "react-countup"
import { capitalize } from "../../../lib/utils"

interface AddressCounterProps {
  addressCount: number
  rank: number
  blockchain: string
}

export function AddressCounter({ addressCount, rank, blockchain }: AddressCounterProps) {
  const styles = {
    box: {
      marginBottom: "3rem",
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "4rem" },
      paddingBottom: { base: "4rem", md: "5rem" },
    },
    heading: {
      fontSize: { base: "3xl", lg: "6xl", sm: "4xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: 0,
    },
    counter: {
      fontSize: { base: "4xl", lg: "6xl", sm: "4xl" },
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
            <Heading {...styles.heading}>You are {capitalize(blockchain)} holder</Heading>
            <Heading as="h3" {...styles.heading} {...styles.counter}>
              <Text as="span" marginRight="0.6rem">
                #
              </Text>
              <Countup start={addressCount} end={rank} duration={2.75} separator="." />
            </Heading>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default AddressCounter
