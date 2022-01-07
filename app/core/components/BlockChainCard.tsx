import React from "react"
import { Box, Center, Flex, Stack, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import Img from "next/image"

export function BlockChainCard({ name, logo, id, description, ...rest }) {
  return (
    <Flex
      alignContent="center"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      {...rest}
    >
      <Img id="static-svg" src={logo} alt="Logo for the Ergo blockchain" />
    </Flex>
  )
}

export default BlockChainCard
