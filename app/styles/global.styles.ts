import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  a: {
    textDecoration: "none",
  },
});

export default globalStyles;
