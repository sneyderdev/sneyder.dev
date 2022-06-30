import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$black",
    color: "$white",
  },

  a: {
    textDecoration: "none",
    color: "$white",
  },

  button: {
    border: "none",
    backgroundColor: "transparent",
  },
});

export default globalStyles;
