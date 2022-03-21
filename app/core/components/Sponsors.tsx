import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { FrontpageCard } from "./cards"
import { LiqwidLogo } from "./logos"

export function Sponsors() {
  const styles = {
    caption: {
      fontSize: "sm",
      marginBottom: "2.5rem",
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("gray.600", "gray.400"),
    },
    grid: {
      columns: [2, null, 3],
      spacing: { base: "15px", sm: "30px", md: "40px" },
    },
  }

  return (
    <Box marginBottom="6rem">
      <Center>
        <Text as="h2" textTransform="uppercase" {...styles.caption}>
          Made Possible By
        </Text>
      </Center>

      <SimpleGrid {...styles.grid}>
        <FrontpageCard name="Liqwid" url="https://liqwid.finance/">
          <LiqwidLogo
            width="150px"
            height={{ base: "52px", md: "59px" }}
            padding="12px"
            fill={useColorModeValue("gray.600", "whiteAlpha.900")}
          />
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
