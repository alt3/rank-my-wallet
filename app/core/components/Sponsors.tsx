import { SponsorCard } from "@/components/SponsorCard"
import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import placeholder from "public/images/pixel.png"

// svg logos
import logoLiqwid from "public/images/sponsors/liqwid.svg"
import React from "react"

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
          color={useColorModeValue("teal.600", "teal.300")}
        >
          Sponsored and Backed by
        </Text>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <SponsorCard
          id="1"
          name="Liqwid Finance"
          logo={logoLiqwid}
          url="https://www.liqwid.finance/"
        />
        <SponsorCard id="2" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="3" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="4" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="5" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="6" name="Placeholder" logo={placeholder} url="https://www.google.com" />
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
