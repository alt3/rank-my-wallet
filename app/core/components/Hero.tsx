import { AddressForm } from "@/components/AddressForm"
import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export function Hero() {
  return (
    <Box marginBottom="4rem">
      <Container maxW="container.md" marginTop="4rem" paddingBottom={{ base: "5rem", md: "5rem" }}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading
              fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
              fontWeight="bold"
              letterSpacing="tighter"
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              marginBottom="2rem"
            >
              Rank My{" "}
              <Text as="span" color={useColorModeValue("teal.500", "teal.300")}>
                Wallet
              </Text>
            </Heading>
            <AddressForm />
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
