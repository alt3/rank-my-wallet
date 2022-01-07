import React from "react"
import { chakra, Box, Center, Stack, Container, useColorModeValue } from "@chakra-ui/react"
import { SponsorCard } from "@/components/SponsorCard"

import logoSamsung from "public/images/sponsors/samsung.svg"
import logoDish from "public/images/sponsors/dish.svg"
import logoDisney from "public/images/sponsors/disney.svg"

export function Sponsors() {
  return (
    <Container maxW="xl">
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
        <Stack direction={["column", "row"]} spacing="24px">
          <SponsorCard id="3" name="Dish" logo={logoDish} description="Dish" valign="middle" />
          <SponsorCard
            id="2"
            name="Disney"
            logo={logoDisney}
            description="Disney"
            valign="middle"
          />
          <SponsorCard
            id="1"
            name="Samsung"
            logo={logoSamsung}
            description="Samsung"
            valign="middle"
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default Sponsors
