import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react"

/**
 * Chakra 2 → 3 compatibility layer.
 *
 * Chakra 3 restyled its built-in components: buttons got smaller and lighter,
 * links became inline-flex boxes with their own colour, headings lost their
 * relative line-height, tabs/tables/accordions were redesigned. The site was
 * designed against Chakra 2 and its components pass Chakra 2 props (sizes,
 * variants), so this file restates the Chakra 2 values on top of Chakra 3's
 * recipes. Only the properties that differ are overridden; everything else is
 * still Chakra 3's.
 *
 * All values here are copied from @chakra-ui/theme@3.x (Chakra 2's theme).
 */

// Chakra 2 sized buttons by font size (md = 16px, lg = 18px) where Chakra 3
// uses 14px/16px, and defaulted to semibold text. Icons render at 1em, which
// is what react-icons did before Chakra 3 started forcing an icon box.
const buttonSize = (h: string, fontSize: string, px: string) => ({
  h,
  minW: h,
  fontSize,
  lineHeight: "1.2",
  px,
  gap: "0",
  _icon: { width: "1em", height: "1em" },
})

export const button = defineRecipe({
  base: {
    fontWeight: "semibold",
    lineHeight: "1.2",
  },
  variants: {
    size: {
      xs: buttonSize("6", "xs", "2"),
      sm: buttonSize("8", "sm", "3"),
      md: buttonSize("10", "md", "4"),
      lg: buttonSize("12", "lg", "6"),
    },
  },
})

// Chakra 2 links were plain inline anchors that inherited their colour and
// underlined on hover. Chakra 3 makes them inline-flex with a gap and paints
// them with the colour palette, which broke every link that wraps a block
// (cards, nav buttons) and recoloured nav text.
export const link = defineRecipe({
  base: {
    display: "inline",
    gap: "0",
    borderRadius: "0",
    color: "inherit",
    textDecoration: "none",
    transitionProperty: "common",
    transitionDuration: "fast",
    _hover: {
      textDecoration: "underline",
      textUnderlineOffset: "auto",
      textDecorationColor: "currentColor",
    },
  },
  variants: {
    variant: {
      plain: {
        color: "inherit",
        _hover: {
          textDecoration: "underline",
          textUnderlineOffset: "auto",
          textDecorationColor: "currentColor",
        },
      },
      underline: {
        color: "inherit",
        textUnderlineOffset: "auto",
        textDecorationColor: "currentColor",
      },
    },
  },
})

// Chakra 2 headings were bold with a relative line-height. Chakra 3 pins the
// line-height to the size variant, so a heading given `fontSize="6xl"` kept
// the 28px line-height of its default `xl` size and its lines overlapped.
export const heading = defineRecipe({
  base: {
    fontWeight: "bold",
    lineHeight: "1.2",
  },
  variants: {
    size: {
      "4xl": { fontSize: { base: "6xl", md: "7xl" }, lineHeight: "1" },
      "3xl": { fontSize: { base: "5xl", md: "6xl" }, lineHeight: "1" },
      "2xl": { fontSize: { base: "4xl", md: "5xl" }, lineHeight: { base: "1.2", md: "1" } },
      xl: { fontSize: { base: "3xl", md: "4xl" }, lineHeight: { base: "1.33", md: "1.2" } },
      lg: { fontSize: { base: "2xl", md: "3xl" }, lineHeight: { base: "1.33", md: "1.2" } },
      md: { fontSize: "xl", lineHeight: "1.2" },
      sm: { fontSize: "md", lineHeight: "1.2" },
      xs: { fontSize: "sm", lineHeight: "1.2" },
    },
  },
})

// Chakra 2 inputs matched button sizes (lg = 48px tall, 18px text).
const inputSize = (h: string, fontSize: string, px: string) => ({
  fontSize,
  lineHeight: "1.5",
  px,
  "--input-height": `sizes.${h}`,
})

export const input = defineRecipe({
  base: {
    // Chakra 2 focused inputs with a blue.500 border; Chakra 3 with gray.
    "--focus-color": "colors.blue.500",
  },
  variants: {
    size: {
      xs: inputSize("6", "xs", "2"),
      sm: inputSize("8", "sm", "3"),
      md: inputSize("10", "md", "4"),
      lg: inputSize("12", "lg", "4"),
    },
  },
})

// Chakra 2's "enclosed" tabs were the classic folder tabs: a bottom rule under
// the list, and the selected tab drawn as a bordered box that opens onto the
// panel. Chakra 3's "enclosed" is a pill switcher on a grey track.
export const tabs = defineSlotRecipe({
  slots: ["root", "list", "trigger", "content"],
  variants: {
    variant: {
      enclosed: {
        list: {
          display: "flex",
          bg: "transparent",
          padding: "0",
          minH: "auto",
          borderRadius: "0",
          marginBottom: "-1px",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderColor: "inherit",
        },
        trigger: {
          color: "inherit",
          fontWeight: "normal",
          height: "auto",
          borderRadius: "0",
          borderTopRadius: "md",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "transparent",
          marginBottom: "-1px",
          _selected: {
            bg: "transparent",
            shadow: "none",
            color: "colorPalette.fg",
            borderColor: "inherit",
            borderBottomColor: "bg",
          },
        },
        content: {
          padding: "4",
        },
      },
    },
    size: {
      md: {
        trigger: { fontSize: "md", lineHeight: "1.5", py: "2", px: "4" },
      },
    },
  },
})

// Chakra 2's "simple" table: uppercase, letter-spaced, muted headers; roomier
// cells; transparent rows. Chakra 3 paints every row with the `bg` token and
// uses 14px text with title-case headers.
export const table = defineSlotRecipe({
  slots: ["root", "row", "cell", "columnHeader"],
  base: {
    columnHeader: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      color: { base: "gray.600", _dark: "gray.400" },
      borderColor: { base: "gray.100", _dark: "gray.700" },
    },
    cell: {
      borderColor: { base: "gray.100", _dark: "gray.700" },
    },
  },
  variants: {
    variant: {
      line: {
        row: { bg: "transparent" },
      },
    },
    size: {
      md: {
        root: { fontSize: "md", lineHeight: "1.5" },
        columnHeader: { px: "6", py: "3", lineHeight: "1rem", fontSize: "xs" },
        cell: { px: "6", py: "4", lineHeight: "1.25rem" },
      },
    },
  },
})

// Chakra 2's UnorderedList/OrderedList indented by 1em so the (outside)
// markers had room. Chakra 3's List.Root reverts to the UA list style but the
// CSS reset zeroes the padding, so the markers hang outside the box and get
// clipped by any overflow:hidden ancestor (an accordion panel, say).
export const list = defineSlotRecipe({
  slots: ["root", "item"],
  variants: {
    variant: {
      marker: {
        root: { marginStart: "1em" },
        item: { _marker: { color: "inherit" } },
      },
    },
  },
})

// Chakra 2 accordion buttons inherited the body font weight (Chakra 3 makes
// them medium) and tinted on hover.
export const accordion = defineSlotRecipe({
  slots: ["itemTrigger"],
  base: {
    itemTrigger: {
      fontWeight: "inherit",
      fontSize: "md",
      lineHeight: "1.5",
      transitionProperty: "common",
      transitionDuration: "normal",
      _hover: { bg: "blackAlpha.50" },
    },
  },
})
