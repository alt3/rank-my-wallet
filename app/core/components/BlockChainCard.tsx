import React from "react"
import { useColorModeValue } from "@chakra-ui/react"
import Img from "next/image"
import { MotionBoxFlex } from "@/components/MotionBoxFlex"
import { Link } from "@/components/Link"

export function BlockChainCard({ id, name, logo, url, ...rest }) {
  return (
    <Link href={url} isExternal passHref>
      <MotionBoxFlex
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        justifyContent="center"
        padding={{ base: 4, md: 10 }}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        bg={useColorModeValue("gray.200", "gray.900")}
        {...rest}
      >
        <Img id={id} src={logo} alt={`Logo for the ${name} blockchain`} />
      </MotionBoxFlex>
    </Link>
  )
}

export default BlockChainCard
