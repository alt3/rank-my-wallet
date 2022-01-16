import React from "react"
import { Heading, useColorModeValue, Box, Center, Container, Stack, Text } from "@chakra-ui/react"

export function AddressError({ statusCode, title, parsedAddress = undefined }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      marginBottom="1.5rem"
    >
      <Container maxW="container.md" paddingBottom={{ base: "3.5rem", md: "5rem" }}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading>Address Error</Heading>
            <Text>Statuscode: {statusCode}</Text>
            {title !== undefined && <Text>Title: {title}</Text>}
            {parsedAddress !== undefined && <Text>{JSON.stringify(parsedAddress)}</Text>}
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default AddressError
