import { styled } from "~/styles/stitches.config";

export const HeroContainer = styled("section", {
  textAlign: "center",

  // TODO: Replace this with the actual img
  "& div": {
    size: "$36",
    margin: "0 auto",
  },
});

export const HeroTitle = styled("h1", {
  fontSize: "$xl",
  lineHeight: "$xl",
  fontWeight: "$medium",
  margin: "$6 0 $3",
});

export const HeroDescription = styled("p", {
  fontSize: "$lg",
  lineHeight: "$lg",
  margin: "0 0 $8",
});
