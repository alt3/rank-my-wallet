import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools"

const barHeight = "4px"
const spinnerSize = "24px" // was 18px
const spinnerThickness = "2px" // was 2px

export const nprogress: SystemStyleFunction = (props) => ({
  /* Make clicks pass-through */
  "#nprogress": {
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999999,
  },

  ".rtl": {
    transform: "scaleX(-1) !important",
    right: 0,
  },

  "#nprogress .bar": {
    background: mode("teal.500", "teal.300")(props),
    width: "100%",
    height: barHeight,
  },

  // /* Remove these to get rid of the spinner */
  "#nprogress .spinner": {
    display: "block",
    position: "fixed",
    zIndex: "1031",
    top: "15px",
    right: "15px",
  },

  "#nprogress .spinner-icon": {
    width: spinnerSize,
    height: spinnerSize,
    boxSizing: "border-box",

    border: `solid ${spinnerThickness} transparent`,
    borderTopColor: mode("teal.500", "teal.300")(props),
    borderLeftColor: mode("teal.500", "teal.300")(props),
    borderRadius: "50%",

    webkitAnimation: "nprogress-spinner 400ms linear infinite",
    animation: "nprogress-spinner 400ms linear infinite",
  },

  ".nprogress-custom-parent": {
    overflow: "hidden",
    position: "relative",
  },

  ".nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar": {
    position: "absolute",
  },

  "@-webkit-keyframes nprogress-spinner": {
    "0%": {
      webkitTransform: "rotate(0deg)",
    },
    "100%": {
      webkitTransform: "rotate(360deg)",
    },
  },
  "@keyframes nprogress-spinner": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": { transform: "rotate(360deg)" },
  },
})
