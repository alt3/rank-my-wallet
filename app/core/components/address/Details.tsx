import { Box, Center, Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"

export function AddressDetails({ parsedAddress }) {
  const styles = {
    heading: {
      fontSize: { base: "2xl", sm: "3xl" },
      marginBottom: "1.25rem",
      fontWeight: "normal",
      color: useColorModeValue("gray.700", "gray.400"),
    },
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

  return (
    <Box marginBottom="2.5rem">
      <Center>
        <Heading {...styles.heading}>Address Details</Heading>
      </Center>

      <Grid {...styles.grid}>
        <GridItem {...styles.key}>Address</GridItem>
        <GridItem {...styles.value}>{parsedAddress.address}</GridItem>

        <GridItem {...styles.key}>Blockchain</GridItem>
        <GridItem {...styles.value}>{capitalize(parsedAddress.blockchain)}</GridItem>

        {parsedAddress.version && (
          <>
            <GridItem {...styles.key}>Address Version</GridItem>
            <GridItem {...styles.value}>{capitalize(parsedAddress.version)}</GridItem>
          </>
        )}

        {parsedAddress.network && (
          <>
            <GridItem {...styles.key}>Network</GridItem>
            <GridItem {...styles.value}>{capitalize(parsedAddress.network)}</GridItem>
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
