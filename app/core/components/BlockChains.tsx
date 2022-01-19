import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { FrontpageCard } from "./cards"
import { CardanoLogo, ErgoLogo } from "./logos"

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
          color={useColorModeValue("teal.500", "teal.300")}
        >
          Supported Blockchains
        </Text>
      </Center>

      <SimpleGrid columns={2} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <FrontpageCard name="Cardano" url="https://cardano.org/">
          <CardanoLogo width="230px" fill={useColorModeValue("gray.600", "whiteAlpha.900")} />
        </FrontpageCard>
        <FrontpageCard name="Ergo" url="https://ergoplatform.org/">
          <ErgoLogo
            width="150px"
            height="59px"
            fill={useColorModeValue("gray.600", "whiteAlpha.900")}
          />
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default BlockChains
