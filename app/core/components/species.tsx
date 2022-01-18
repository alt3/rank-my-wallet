import React from "react"
import { Box, Center, Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react"
import { capitalize, getSpecies } from "app/lib/utils"

const styles = {
  grid: {
    templateColumns: "repeat(8, 1fr)",
    gap: 4,
    marginBottom: "2.5rem",
  },
  // GridItem for key part of key/value pair
  key: {
    colSpan: {
      base: 3,
      sm: 2,
    },
  },
  // GridItem for value part of key/value pair
  value: {
    colSpan: {
      base: 5,
      sm: 6,
    },
  },
}

interface SpeciesProps {
  balance: number
}

export function Species({ balance }: SpeciesProps) {
  const species = getSpecies("cardano", balance)

  return (
    <Box>
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          marginBottom="1.25rem"
          fontWeight="normal"
          color={useColorModeValue("gray.700", "gray.400")}
        >
          Species
        </Heading>
      </Center>

      <Grid {...styles.grid}>
        <GridItem {...styles.key}>Balance</GridItem>
        <GridItem {...styles.value}>{balance.toLocaleString(undefined)}</GridItem>

        <GridItem {...styles.key}>Species</GridItem>
        <GridItem {...styles.value}>{capitalize(species.name)}</GridItem>

        <GridItem {...styles.key}>startsAt</GridItem>
        <GridItem {...styles.value}>{species.startsAt.toLocaleString(undefined)}</GridItem>
      </Grid>
    </Box>
  )
}

export default Species
