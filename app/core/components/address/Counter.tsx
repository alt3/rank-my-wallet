import { Box, Center, Heading, Stack, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Countup from "react-countup"

export function AddressCounter({ rank }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      paddingTop="2rem"
      paddingBottom="5rem"
      marginBottom="1.5rem"
    >
      <Center>
        <Stack direction="column">
          <Heading fontSize={{ base: "4xl", lg: "6xl", sm: "4xl" }} fontWeight="bold">
            # <Countup end={rank} duration={2} separator="." />
          </Heading>
        </Stack>
      </Center>
    </Box>
  )
}

export default AddressCounter
