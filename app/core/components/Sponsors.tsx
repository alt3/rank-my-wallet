import React from "react"
import {
  chakra,
  Box,
  Center,
  SimpleGrid,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react"
import { SponsorCard } from "@/components/SponsorCard"

import logoDish from "public/images/sponsors/dish.svg"
import logoDisney from "public/images/sponsors/disney.svg"
import logoSamsung from "public/images/sponsors/samsung.svg"
import placeholder from "public/images/pixel.png"

export function Sponsors() {
  return (
    <Container maxW="xl" marginBottom="3rem">
      <Box>
        <Center>
          <chakra.h2
            fontSize={{ base: "4xl", lg: "3xl", sm: "4xl" }}
            marginBottom="2rem"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            Our sponsors:
          </chakra.h2>
        </Center>

        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <SponsorCard id="3" name="Dish" logo={logoDish} description="Dish" valign="middle" />
          <SponsorCard
            id="1"
            name="Disney"
            logo={logoDisney}
            description="Disney"
            valign="middle"
          />
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
    </Container>
  )
}

export default Sponsors
