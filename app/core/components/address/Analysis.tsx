import { Box, Grid, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"
import nextId from "react-id-generator"
import BitsTable from "../BitsTable"

export function AddressAnalysis({ parsedAddress }) {
  // console.log(parsedAddress)

  const styles = {
    heading: {
      marginBottom: "1.25rem",
      fontSize: { base: "2xl", sm: "4xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
    },
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
      maxWidth: "400px",
    },
    th: {
      textAlign: "left" as const,
    },
    td: {
      textAlign: "left" as const,
    },
    tdSum: {
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
    },
    tdSumLabel: {
      colSpan: 2,
      textAlign: "right" as const,
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
    },
  }

  return (
    <Box>
      <Heading {...styles.heading}>Address Analysis</Heading>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Encoding
        </Text>
        <Text>{capitalize(parsedAddress.encoding)}</Text>
      </Box>

      {parsedAddress.decoded !== undefined && parsedAddress.decoded.prefix !== undefined && (
        <Box marginBottom="2rem">
          <Text as="h3" {...styles.caption} marginBottom="0.25rem">
            Decoded Prefix
          </Text>
          <Text>{parsedAddress.decoded.prefix}</Text>
        </Box>
      )}

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Decoded Bytes
        </Text>
        <Grid templateColumns="repeat(6, 1fr)">
          {parsedAddress.bytes.map((byte) => (
            <GridItem key={nextId("byte")}>{byte}</GridItem>
          ))}
        </Grid>
      </Box>

      {parsedAddress.header !== undefined && (
        <>
          <Box marginBottom="2rem">
            <Text as="h3" {...styles.caption} marginBottom="0.25rem">
              Header Byte
            </Text>
            <Text>{parsedAddress.header.byte}</Text>
          </Box>

          <BitsTable
            caption="Header Bits"
            bits={parsedAddress.header.bits}
            sumLabel="Header Byte"
          ></BitsTable>

          <BitsTable
            caption="Leading Header Bits"
            bits={parsedAddress.header.leading.bits}
            sumLabel={parsedAddress.header.leading.type}
          ></BitsTable>

          <BitsTable
            caption="Trailing Header Bits"
            bits={parsedAddress.header.trailing.bits}
            sumLabel={parsedAddress.header.trailing.type}
          ></BitsTable>
        </>
      )}
    </Box>
  )
}

export default AddressAnalysis
