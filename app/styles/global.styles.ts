import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "$black",
    color: "$white",
  },

  a: {
    textDecoration: "none",
  },
});

export default globalStyles;
