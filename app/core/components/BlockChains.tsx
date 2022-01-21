import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { FrontpageCard } from "./cards"
import { CardanoLogo, ErgoLogo } from "./logos"

export function BlockChains() {
  const styles = {
    caption: {
      fontSize: "sm",
      marginBottom: "2.5rem",
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("teal.500", "teal.300"),
    },
    grid: {
      columns: 2,
      spacing: { base: "15px", sm: "30px", md: "40px" },
    },
  }

  return (
    <Box marginBottom="5rem">
      <Center>
        <Text as="h2" textTransform="uppercase" {...styles.caption}>
          Supported Blockchains
        </Text>
      </Center>

      <SimpleGrid {...styles.grid}>
        <FrontpageCard name="Cardano" url="https://cardano.org/">
          <CardanoLogo width="230px" fill={useColorModeValue("gray.600", "whiteAlpha.900")} />
        </FrontpageCard>
        <FrontpageCard name="Ergo" url="https://ergoplatform.org/">
          <ErgoLogo
            width="150px"
            maxHeight={{ base: "40px", md: "59px" }}
            fill={useColorModeValue("gray.600", "whiteAlpha.900")}
          />
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default BlockChains
