import type * as Stitches from "@stitches/react";

import { createStitches } from "@stitches/react";

export const { getCssText, styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#ecedee",
      black: "#1a1a1a",
    },
    fontSizes: {
      lg: "1.125rem",
      xl: "2.25rem",
    },
    fontWeights: {
      medium: 500,
      semibold: 600,
    },
    sizes: {
      min: "0.125rem",
      2: "0.5rem",
      3: "0.75rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      36: "9rem",
    },
    space: {
      min: "0.125rem",
      2: "0.5rem",
      3: "0.75rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      36: "9rem",
    },
    zIndices: {
      1: 10,
      2: 20,
    },
  },
  utils: {
    size: (value: Stitches.ScaleValue<"sizes">) => ({
      width: value,
      height: value,
    }),
  },
});
