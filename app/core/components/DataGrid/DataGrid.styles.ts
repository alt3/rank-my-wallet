import StyleConfigMulti from "@/types/StyleConfigMulti"

const components: StyleConfigMulti = {
  parts: ["DataGrid", "DataGridField", "DataGridValue"],
  baseStyle: ({ colorMode }) => ({
    DataGrid: {
      gridTemplateColumns: "repeat(12, 1fr)",
    },
    DataGridField: {
      gridColumn: { base: "span 12/span 12", sm: "span 3/span 3" },
      color: colorMode === "light" ? "teal.500" : "teal.300",
    },
    DataGridValue: {
      gridColumn: { base: "span 12/span 12", sm: "span 9/span 9" },
      paddingBottom: "1.5rem",
    },
  }),
}

export default components
