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
          Supported blockchains
        </Heading>
      </Center>

      <SimpleGrid columns={2} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <BlockChainCard id="1" name="Cardano" logo={logoCardano} />
        <BlockChainCard id="2" name="Ergo" logo={logoErgo} />
      </SimpleGrid>
    </Box>
  )
}

export default BlockChains
