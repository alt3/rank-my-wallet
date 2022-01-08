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
          Our sponsors:
        </Heading>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <SponsorCard id="3" name="Dish" logo={logoDish} description="Dish" valign="middle" />
        <SponsorCard id="1" name="Disney" logo={logoDisney} description="Disney" valign="middle" />
        <SponsorCard
          id="2"
          name="Samsung"
          logo={logoSamsung}
          description="Samsung"
          valign="middle"
        />
        <SponsorCard
          id="3"
          name="Placeholder"
          logo={placeholder}
          description="Placeholder"
          height="80px"
        ></SponsorCard>
        <SponsorCard
          id="4"
          name="Placeholder"
          logo={placeholder}
          description="Placeholder"
          height="80px"
        ></SponsorCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
