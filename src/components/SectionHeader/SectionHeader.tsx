import { chakra, useStyleConfig } from "@chakra-ui/react"

export const SectionHeader = (props) => {
  const { size, variant, children, ...rest } = props
  const styles = useStyleConfig("SectionHeader", { size, variant })

  return (
    <chakra.header __css={styles} {...rest}>
      {children}
    </chakra.header>
  )
}

export default SectionHeader
