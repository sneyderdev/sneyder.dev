import type * as Stitches from "@stitches/react";

import { createStitches } from "@stitches/react";

export const { getCssText, styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#ecedee",
      black: "#1a1a1a",
    },
    fontSizes: {
      lg: "18px",
    },
    fontWeights: {
      semibold: 600,
    },
    sizes: {
      min: "2px",
      2: "8px",
      3: "12px",
      5: "20px",
      6: "24px",
      9: "36px",
      12: "48px",
      16: "64px",
    },
    space: {
      min: "2px",
      2: "8px",
      3: "12px",
      5: "20px",
      6: "24px",
      9: "36px",
      12: "48px",
      16: "64px",
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
