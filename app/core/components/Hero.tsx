import React from "react"
import { Heading, useColorModeValue, Box, Center, Container, Stack } from "@chakra-ui/react"
import { AddressForm } from "@/components/AddressForm"

export function Hero() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      marginBottom="1.5rem"
    >
      <Container maxW="container.md" paddingBottom={{ base: "3.5rem", md: "5rem" }}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }} fontWeight="bold">
              Rank my wallet:
            </Heading>
            <AddressForm />
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
