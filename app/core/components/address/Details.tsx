import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"

export function AddressDetails({ parsedAddress }) {
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
  }

  return (
    <Box marginBottom="2.5rem">
      <Heading {...styles.heading}>Address Details</Heading>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Address
        </Text>
        <Text>{parsedAddress.address}</Text>
      </Box>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Blockchain
        </Text>
        <Text>{capitalize(parsedAddress.blockchain)}</Text>
      </Box>

      {parsedAddress.version && (
        <Box marginBottom="2rem">
          <Text as="h3" {...styles.caption} marginBottom="0.25rem">
            Address Version
          </Text>
          <Text>{capitalize(parsedAddress.version)}</Text>
        </Box>
      )}

      {parsedAddress.network && (
        <Box marginBottom="2rem">
          <Text as="h3" {...styles.caption} marginBottom="0.25rem">
            Network
          </Text>
          <Text>{capitalize(parsedAddress.network)}</Text>
        </Box>
      )}

      {parsedAddress.type && (
        <Box marginBottom="2rem">
          <Text as="h3" {...styles.caption} marginBottom="0.25rem">
            Address Type
          </Text>
          <Text>
            {" "}
            {capitalize(parsedAddress.type.name)}
            {parsedAddress.type.abbreviation && (
              <Box as="span"> ({parsedAddress.type.abbreviation})</Box>
            )}
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default AddressDetails
