import { Heading } from "@chakra-ui/react"

export function SectionHeader({ children, ...rest }) {
  const styles = {
    marginBottom: "1.25rem",
    fontSize: { base: "2xl", sm: "4xl" },
    fontWeight: "bold",
    letterSpacing: "tighter",
  }

  return (
    <Heading {...styles} {...rest}>
      {children}
    </Heading>
  )
}

export default SectionHeader
