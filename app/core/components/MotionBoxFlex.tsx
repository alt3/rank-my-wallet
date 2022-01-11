import React from "react"
import { Flex, FlexProps, forwardRef, ComponentWithAs } from "@chakra-ui/react"
import { motion, MotionProps, isValidMotionProp } from "framer-motion"

export type MotionBoxProps = Omit<FlexProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType
  }

export const MotionBoxFlex = motion(
  forwardRef<MotionBoxProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Flex ref={ref} {...chakraProps} />
  })
) as ComponentWithAs<"div", MotionBoxProps>
