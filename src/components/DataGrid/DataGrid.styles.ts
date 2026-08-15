import { defineSlotRecipe } from "@chakra-ui/react"

/**
 * Chakra 3 replaces multipart style configs with slot recipes. The
 * `baseStyle({ colorMode })` function becomes a static object with a `_dark`
 * condition, resolved in CSS rather than at render time.
 */
const DataGrid = defineSlotRecipe({
  className: "dataGrid",
  slots: ["DataGrid", "DataGridField", "DataGridValue"],
  base: {
    DataGrid: {
      gridTemplateColumns: "repeat(12, 1fr)",
    },
    DataGridField: {
      gridColumn: { base: "span 12/span 12", sm: "span 3/span 3" },
      color: "teal.500",
      _dark: { color: "teal.300" },
    },
    DataGridValue: {
      gridColumn: { base: "span 12/span 12", sm: "span 9/span 9" },
      paddingBottom: "1.5rem",
    },
  },
})

export default DataGrid
