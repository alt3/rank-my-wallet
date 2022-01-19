import { Box, Container, Center, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Countup from "react-countup"
import { capitalize } from "../../../lib/utils"

interface AddressCounterProps {
  rank: number
  blockchain: string
}

export function AddressCounter({ rank, blockchain }: AddressCounterProps) {
  return (
    <Box marginBottom="3rem">
      <Container maxW="container.md" marginTop="4rem" paddingBottom={{ base: "5rem", md: "5rem" }}>
        <Center>
          <Stack width="100%" spacing={2} align="center">
            <Heading
              fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
              fontWeight="bold"
              letterSpacing="tighter"
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              marginBottom={0}
            >
              You are {capitalize(blockchain)}
            </Heading>
            <Heading
              as="h3"
              color={useColorModeValue("teal.500", "teal.300")}
              fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
              fontWeight="bold"
              letterSpacing="tighter"
            >
              # <Countup start={rank} end={1} duration={2.75} separator="." />
            </Heading>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default AddressCounter
