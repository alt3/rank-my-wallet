import { chakra, useRecipe } from "@chakra-ui/react"

export const SectionHeader = (props) => {
  const { size, variant, children, ...rest } = props
  // Chakra 3 replaces useStyleConfig with useRecipe: the recipe is resolved by
  // key from the system, then called with its variant props.
  const recipe = useRecipe({ key: "SectionHeader" })
  const styles = recipe({ size, variant })

  return (
    <chakra.header css={styles} {...rest}>
      {children}
    </chakra.header>
  )
}

export default SectionHeader
