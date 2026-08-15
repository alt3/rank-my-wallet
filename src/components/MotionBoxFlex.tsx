import { Flex, FlexProps } from "@chakra-ui/react"
import { MotionProps, isValidMotionProp, motion } from "framer-motion"
import { forwardRef } from "react"

export type MotionBoxProps = Omit<FlexProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType
  }

/**
 * Chakra 3 dropped its own `forwardRef` and the `ComponentWithAs` type, so this
 * uses React's forwardRef directly. Ref/props order is reversed relative to
 * Chakra's version.
 */
export const MotionBoxFlex = motion(
  forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Flex ref={ref} {...chakraProps} />
  }),
)
