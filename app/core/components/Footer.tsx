import { Link } from "@/components/Link"
import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export function Footer() {
  return (
    <Container
      as="footer"
      bottom="0"
      maxW="100%"
      fontSize="sm"
      p={5}
      paddingTop="7"
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      centerContent
    >
      <Flex verticalAlign="center" align="center" gridGap={2}>
        <Text>
          An{" "}
          <Link
            isExternal
            href="https://github.com/alt3"
            color="teal.500"
            fontWeight="bold"
            passHref
          >
            Alt3{" "}
          </Link>
          product powered by{" "}
          <Link
            isExternal
            href="https://chakra-ui.com/"
            color="teal.500"
            fontWeight="bold"
            passHref
          >
            ChakraUI{" "}
          </Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
