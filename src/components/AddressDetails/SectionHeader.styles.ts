import { defineRecipe } from "@chakra-ui/react"

const SectionHeader = defineRecipe({
  className: "sectionHeader",
  base: {
    fontFamily: "heading",
    fontSize: { base: "2xl", sm: "xl" },
    fontWeight: { base: "normal", sm: "normal" },
    letterSpacing: { base: "tighter", sm: "normal" },
    marginBottom: { base: "0.5rem", sm: "1.25rem" },
  },
})

export default SectionHeader
