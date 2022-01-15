import React from "react"
import { Box, Center, Heading, useColorModeValue, Table, Tbody, Tr, Td } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"

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

      <Table>
        <Tbody>
          <Tr>
            <Td>Address</Td>
            <Td>{parsedAddress.address}</Td>
          </Tr>
          <Tr>
            <Td>Blockchain</Td>
            <Td>{capitalize(parsedAddress.blockchain)}</Td>
          </Tr>

          {parsedAddress.blockchainVersion && (
            <Tr>
              <Td>Blockchain version</Td>
              <Td>{capitalize(parsedAddress.blockchainVersion)}</Td>
            </Tr>
          )}

          {parsedAddress.network && (
            <Tr>
              <Td>Network</Td>
              <Td>{capitalize(parsedAddress.network)}</Td>
            </Tr>
          )}

          {parsedAddress.type && (
            <Tr>
              <Td>Type</Td>
              <Td>{capitalize(parsedAddress.type.name)}</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  )
}

export default AddressDetails
