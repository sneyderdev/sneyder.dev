import { createStitches } from "@stitches/react";

export const { getCssText, styled, globalCss } = createStitches({
  theme: {
    colors: {
      red: "#ff0000",
    },
  },
});
