import React from "react"
import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react"

export function AddressCounter({ rank }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      paddingTop="2rem"
      paddingBottom="4rem"
      marginBottom="1.5rem"
    >
      <Center>
        <Heading fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }} fontWeight="bold">
          # {rank}{" "}
        </Heading>
      </Center>
    </Box>
  )
}

export default AddressCounter
