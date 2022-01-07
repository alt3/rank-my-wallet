import React from "react"
import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "@/components/Link"

export function Footer() {
  return (
    <Container
      as="footer"
      position="fixed"
      bottom="0"
      maxW="100%"
      p={5}
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      centerContent
    >
      <Flex verticalAlign="center" align="center" gridGap={2}>
        <Text>
          Powered by{" "}
          <Link href="https://blitzjs.com" color="purple.500">
            BlitzJS{" "}
          </Link>
          and{" "}
          <Link href="https://chakra-ui.com/" color="teal.500">
            ChakraUI{" "}
          </Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
