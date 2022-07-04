import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: 'url("/fonts/Poppins-Regular.woff2")',
    },
    {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: 'url("/fonts/Poppins-Medium.woff2")',
    },
    {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: 'url("/fonts/Poppins-SemiBold.woff2")',
    },
  ],

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$black",
    color: "$white",
    fontFamily: "$default",
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
