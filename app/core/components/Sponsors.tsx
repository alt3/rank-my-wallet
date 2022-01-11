import React from "react"
import { Box, Center, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { SponsorCard } from "@/components/SponsorCard"

import logoDish from "public/images/sponsors/dish.svg"
import logoDisney from "public/images/sponsors/disney.svg"
import logoSamsung from "public/images/sponsors/samsung.svg"
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
        <SponsorCard id="1" name="Dish" logo={logoDish} />
        <SponsorCard id="2" name="Disney" logo={logoDisney} />
        <SponsorCard id="3" name="Samsung" logo={logoSamsung} />
        <SponsorCard id="4" name="Placeholder" logo={placeholder}></SponsorCard>
        <SponsorCard id="5" name="Placeholder" logo={placeholder}></SponsorCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
