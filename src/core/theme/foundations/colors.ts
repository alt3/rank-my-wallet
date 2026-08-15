/**
 * Chakra 3 tokens are `{ value }` objects rather than bare strings, so the
 * system can carry per-token metadata (conditions, references, descriptions).
 */
const scale = (values: Record<string | number, string>) =>
  Object.fromEntries(Object.entries(values).map(([step, value]) => [step, { value }]))

export const colors = {
  brand: scale({
    50: "#e0f4ff",
    100: "#b8dcfa",
    200: "#8ec4f1",
    300: "#63ace8",
    400: "#3994e0",
    500: "#1f7bc6",
    600: "#135f9b",
    700: "#084470",
    800: "#002946",
    900: "#000f1d",
  }),
  secondary: scale({
    50: "#F1EBFF",
    100: "#e0d7ff",
    200: "#c0afff",
    300: "#a186ff",
    400: "#815eff",
    500: "#6236ff",
    600: "#4e2bcc",
    700: "#3b2099",
    800: "#271666",
    900: "#140b33",
  }),
  accent: scale({
    50: "#D1FEFC",
    100: "#ACEFEB",
    200: "#8AE1DC",
    300: "#67D2CC",
    400: "#44C3BC",
    500: "#2EA9A4",
    600: "#228284",
    700: "#175C64",
    800: "#0C3544",
    900: "#021226",
  }),
  light: scale({
    500: "red",
    900: "#FFFFF",
  }),
  dark: scale({
    500: "#131B23",
    900: "#070A0E",
  }),

  // Chakra 3 reset the default palettes: `gray` became a neutral (zinc-like)
  // scale where Chakra 2's was blue-tinted, and `teal` shifted too. The app
  // references these directly all over (bg="gray.800", color="teal.300"), so
  // the v2 values are restored here to keep the site looking like production.
  gray: scale({
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  }),
  teal: scale({
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044",
  }),
}
