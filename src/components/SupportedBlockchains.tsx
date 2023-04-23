import { FrontpageCard } from "@/components/FrontpageCard"
import { CardanoLogo } from "@/components/Images/Logos/Cardano"
import { ErgoLogo } from "@/components/Images/Logos/Ergo"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/layout"
import { Trans } from "@lingui/macro"

export function SupportedBlockChains() {
  const styles = {
    box: {
      marginBottom: { base: "3rem", md: "5 rem" },
    },
    caption: {
      fontSize: "sm",
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("gray.600", "gray.400"),
      marginBottom: "2.5rem",
    },
    grid: {
      columns: 2,
      spacing: { base: "15px", sm: "30px", md: "40px" },
    },
    card: {
      maxHeight: { base: "70px", md: "125px" },
    },
  }

  return (
    <Box {...styles.box}>
      <Center>
        <Text as="h2" textTransform="uppercase" {...styles.caption}>
          <Trans>Supported Blockchains:</Trans>
        </Text>
      </Center>

      <SimpleGrid {...styles.grid}>
        <FrontpageCard url="https://cardano.org/" {...styles.card}>
          <CardanoLogo width="230px" fill={useColorModeValue("gray.600", "whiteAlpha.900")} />
        </FrontpageCard>
        <FrontpageCard url="https://ergoplatform.org/" {...styles.card}>
          <ErgoLogo width="150px" fill={useColorModeValue("gray.600", "whiteAlpha.900")} />
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default SupportedBlockChains
