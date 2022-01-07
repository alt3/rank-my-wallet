import React from "react"
import { chakra, Box, Stack, Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { Link } from "@/components/Link"

export function Hero() {
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Stack
          width={{ base: "4xl", lg: "2xl", sm: "4xl" }}
          spacing={8}
          fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }}
          fontWeight="bold"
          align="center"
        >
          <chakra.h2>Rank my wallet:</chakra.h2>
          <InputGroup size="lg" paddingLeft="1rem" paddingRight="1rem">
            <Input placeholder="Wallet address" />
            <Link href="/" textDecoration="none">
              <InputRightAddon paddingRight="1rem">Go</InputRightAddon>
            </Link>
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Hero
