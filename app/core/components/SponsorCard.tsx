import React from "react"
import { useColorModeValue } from "@chakra-ui/react"
import Img from "next/image"
import { MotionBoxFlex } from "@/components/MotionBoxFlex"

export function SponsorCard({ name, logo, id, ...rest }) {
  return (
    <MotionBoxFlex
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      justifyContent="center"
      padding={{ base: 8, sm: 12 }}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
      {...rest}
    >
      <Img id={id} src={logo} alt={`Company Logo for sponsor ${name}`} />
    </MotionBoxFlex>
  )
}

export default SponsorCard
