import { Box, Center, Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"
import React from "react"

const styles = {
  grid: {
    templateColumns: "repeat(8, 1fr)",
    gap: 4,
    marginBottom: "10rem",
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

export function AddressDetails({ parsedAddress }) {
  return (
    <Box marginBottom="2.5rem">
      <Center>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          marginBottom="1.25rem"
          fontWeight="normal"
          color={useColorModeValue("gray.700", "gray.400")}
        >
          Address Details
        </Heading>
      </Center>

      <Grid {...styles.grid}>
        <GridItem {...styles.key}>Address</GridItem>
        <GridItem {...styles.value}>{parsedAddress.address}</GridItem>

        <GridItem {...styles.key}>Blockchain</GridItem>
        <GridItem {...styles.value}>{capitalize(parsedAddress.blockchain)}</GridItem>

        {parsedAddress.blockchainVersion && (
          <>
            <GridItem {...styles.key}>Blockchain Version</GridItem>
            <GridItem {...styles.value}>{capitalize(parsedAddress.blockchainVersion)}</GridItem>
          </>
        )}

        {parsedAddress.type && (
          <>
            <GridItem {...styles.key}>Address Type</GridItem>
            <GridItem {...styles.value}>
              {capitalize(parsedAddress.type.name)}
              {parsedAddress.type.abbreviation && (
                <Box as="span"> ({parsedAddress.type.abbreviation})</Box>
              )}
            </GridItem>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default AddressDetails
