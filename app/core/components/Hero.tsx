import React from "react"
import {
  chakra,
  useColorModeValue,
  Box,
  Center,
  Container,
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react"
import { Link } from "@/components/Link"

export function Hero() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      marginBottom="1.5rem"
    >
      <Container maxW="container.md" paddingBottom="5rem">
        <Center>
          <Stack
            width="100%"
            spacing={8}
            fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
            fontWeight="bold"
            align="center"
          >
            <chakra.h2>Rank my wallet</chakra.h2>
            <InputGroup size="lg" paddingLeft="1rem" paddingRight="1rem" width="100%">
              <Input placeholder="Wallet address" />
              <Link href="/" textDecoration="none">
                <InputRightAddon paddingRight="1rem">Go</InputRightAddon>
              </Link>
            </InputGroup>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
