import React from "react"
import {
  chakra,
  useColorModeValue,
  Box,
  Center,
  Container,
  Stack,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react"
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
          <Stack
            width="100%"
            spacing={8}
            fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
            fontWeight="bold"
            align="center"
          >
            <chakra.h2>Rank my wallet:</chakra.h2>
            <AddressForm />
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
