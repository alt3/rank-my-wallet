import { useColorModeValue } from "@chakra-ui/react"
import { Link, MotionBoxFlex } from "src/core/components"

export function FrontpageCard({ url, title, isExternal = true, ...rest }) {
  const styles = {
    box: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      justifyContent: "center",
      height: "100%",
      paddingLeft: { base: 4, md: 15 },
      paddingRight: { base: 4, md: 15 },
      paddingTop: { base: 4, md: 7 },
      paddingBottom: { base: 4, md: 7 },
      shadow: "md",
      borderWidth: useColorModeValue(1, 0),
      borderRadius: "md",
      bg: useColorModeValue("white", "gray.900"),
    },
  }

  return (
    <Link href={url} title={title} isExternal={isExternal} passHref>
      <MotionBoxFlex {...styles.box} {...rest}></MotionBoxFlex>
    </Link>
  )
}

export default FrontpageCard
