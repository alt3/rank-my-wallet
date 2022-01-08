import React from "react"
import { Box, Center, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { BlockChainCard } from "@/components/BlockChainCard"

import logoErgo from "public/images/blockchains/ergo.svg"
import logoCardano from "public/images/blockchains/cardano.svg"

export function BlockChains() {
  return (
    <Box marginBottom="2.5rem">
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          marginBottom="1.25rem"
          fontWeight="normal"
          color={useColorModeValue("gray.700", "gray.400")}
        >
          Supported blockchains:
        </Heading>
      </Center>

      <SimpleGrid columns={2} spacing="40px">
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
      </SimpleGrid>
    </Box>
  )
}

export default BlockChains
