import React from "react"
import { Box, Center, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { BlockChainCard } from "@/components/BlockChainCard"

// svg logos
import logoErgo from "public/images/blockchains/ergo.svg"
import logoCardano from "public/images/blockchains/cardano.svg"

export function BlockChains() {
  return (
    <Box marginBottom="5rem">
      <Center>
        <Text
          as="h2"
          fontSize="sm"
          marginBottom="2.5rem"
          fontWeight={useColorModeValue(600, 500)}
          align="center"
          letterSpacing="widest"
          textTransform="uppercase"
          color={useColorModeValue("teal.600", "teal.300")}
        >
          Supported Blockchains
        </Text>
      </Center>

      <SimpleGrid columns={2} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <BlockChainCard id="1" name="Cardano" logo={logoCardano} url="https://cardano.org/" />
        <BlockChainCard id="2" name="Ergo" logo={logoErgo} url="https://ergoplatform.org/" />
      </SimpleGrid>
    </Box>
  )
}

export default BlockChains
