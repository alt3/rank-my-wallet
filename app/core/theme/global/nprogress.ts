const color = "teal.400"
const barHeight = "4px"
const spinnerSize = "24px" // was 18px
const spinnerThickness = "2px" // was 2px

export const nprogress = {
  /* Make clicks pass-through */
  "#nprogress": {
    pointerEvents: "none",
  },

  "#nprogress .bar": {
    background: color,

    position: "fixed",
    zIndex: 1031,
    top: 0,
    left: 0,
    width: "100%",
    height: barHeight,
  },

  /* Fancy blur effect */
  "#nprogress .peg": {
    display: "block",
    position: "absolute",
    right: "0px",
    width: "100px",
    height: "100%",
    boxShadow: "0 0 10px #29d, 0 0 5px #29d",
    opacity: "1.0",

    webkitTransform: "rotate(3deg) translate(0px, -4px)",
    msTransform: "rotate(3deg) translate(0px, -4px)",
    transform: "rotate(3deg) translate(0px, -4px)",
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
    borderTopColor: color,
    borderLeftColor: color,
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
}
