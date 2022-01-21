import { Box, Container, Center, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react"
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
      fontSize: { base: "4xl", lg: "6xl", sm: "4xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: 0,
    },
    counter: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={2} align="center">
            <Heading {...styles.heading}>You are {capitalize(blockchain)}</Heading>
            <Heading as="h3" {...styles.heading} {...styles.counter}>
              # <Countup start={addressCount} end={rank} duration={2.75} separator="." />
            </Heading>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default AddressCounter
