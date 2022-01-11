import React from "react"
import { useColorModeValue, Flex } from "@chakra-ui/react"
import Img from "next/image"

export function SponsorCard({ name, logo, id, ...rest }) {
  return (
    <Flex
      justifyContent="center"
      padding={{ base: 5, sm: 10 }}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      {...rest}
    >
      <Img id={id} src={logo} alt={`Company logo for sponsor ${name}`} />
    </Flex>
  )
}

export default SponsorCard
