import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { FrontpageCard } from "./cards"
import { LiqwidLogo } from "./logos"

export function Sponsors() {
  return (
    <Box marginBottom="6rem">
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
          Sponsored and Backed by
        </Text>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <FrontpageCard name="Liqwid" url="https://liqwid.finance/">
          <LiqwidLogo
            width="150px"
            height="59px"
            padding="12px"
            fill={useColorModeValue("gray.600", "whiteAlpha.900")}
          />
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
