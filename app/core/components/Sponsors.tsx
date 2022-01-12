import React from "react"
import { Box, Center, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { SponsorCard } from "@/components/SponsorCard"

// svg logos
import logoLiqwid from "public/images/sponsors/liqwid.svg"
import logoDish from "public/images/sponsors/dish.svg"
import logoDisney from "public/images/sponsors/disney.svg"
import placeholder from "public/images/pixel.png"

export function Sponsors() {
  return (
    <Box>
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          marginBottom="1.25rem"
          fontWeight="normal"
          color={useColorModeValue("gray.700", "gray.400")}
        >
          Sponsored by
        </Heading>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing={{ base: "15px", sm: "30px", md: "40px" }}>
        <SponsorCard
          id="1"
          name="Liqwid Finance"
          logo={logoLiqwid}
          url="https://www.liqwid.finance/"
        />
        <SponsorCard id="2" name="Dish" logo={logoDish} url="https://www.dish.com/" />
        <SponsorCard id="3" name="Disney" logo={logoDisney} url="https://www.disney.com/" />
        <SponsorCard id="4" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="5" name="Placeholder" logo={placeholder} url="https://www.google.com" />
        <SponsorCard id="6" name="Placeholder" logo={placeholder} url="https://www.google.com" />
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
