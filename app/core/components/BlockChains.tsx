import React from "react"
import { chakra, Box, Center, Stack, Container, useColorModeValue } from "@chakra-ui/react"
import { BlockChainCard } from "@/components/BlockChainCard"

import logoErgo from "public/images/blockchains/ergo.svg"
import logoCardano from "public/images/blockchains/cardano.svg"

export function BlockChains() {
  return (
    <Container maxW="xl" marginBottom="2.5rem">
      <Box>
        <Center>
          <chakra.h2
            fontSize={{ base: "4xl", lg: "3xl", sm: "4xl" }}
            marginBottom="2rem"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Supported blockchains:
          </chakra.h2>
        </Center>
        <Stack direction={["column", "row"]} spacing="24px">
          <BlockChainCard
            id="2"
            name="Ergo"
            logo={logoCardano}
            description="Ergo blockchain"
            valign="middle"
          />
          <BlockChainCard
            id="1"
            name="Cardano"
            logo={logoErgo}
            description="Cardano blockchain"
            valign="middle"
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default BlockChains
