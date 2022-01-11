import React from "react"
import { useColorModeValue, Flex } from "@chakra-ui/react"
import Img from "next/image"

export function BlockChainCard({ name, logo, id, ...rest }) {
  return (
    <Flex
      justifyContent="center"
      padding={{ base: 5, md: 10 }}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg={useColorModeValue("gray.200", "gray.900")}
      {...rest}
    >
      <Img id={id} src={logo} alt={`Logo for the ${name} blockchain`} />
    </Flex>
  )
}

export default BlockChainCard
