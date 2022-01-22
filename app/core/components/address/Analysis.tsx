import { Box, Center, Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"

export function AddressAnalysis({ parsedAddress }) {
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
    <Box>
      <Center>
        <Heading {...styles.heading}>Address Analysis</Heading>
      </Center>

      <Grid {...styles.grid}>
        <GridItem {...styles.key}>Encoding</GridItem>
        <GridItem {...styles.value}>{capitalize(parsedAddress.encoding)}</GridItem>

        <GridItem {...styles.key}>Bytes</GridItem>
        <GridItem {...styles.value}>{parsedAddress.bytes.join(", ")}</GridItem>

        {parsedAddress.header !== undefined && (
          <>
            <GridItem {...styles.key}>Header Byte</GridItem>
            <GridItem {...styles.value}>{parsedAddress.header.byte}</GridItem>

            <GridItem {...styles.key}>Header Bits</GridItem>
            <GridItem {...styles.value}>{parsedAddress.header.bits.join(", ")}</GridItem>

            <GridItem {...styles.key}>
              Leading Header Bits ({capitalize(parsedAddress.header.leading.type)})
            </GridItem>
            <GridItem {...styles.value}>{parsedAddress.header.leading.bits.join(", ")}</GridItem>

            <GridItem {...styles.key}>
              Trailing Header Bits ({capitalize(parsedAddress.header.trailing.type)})
            </GridItem>
            <GridItem {...styles.value}>{parsedAddress.header.trailing.bits.join(", ")}</GridItem>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default AddressAnalysis
