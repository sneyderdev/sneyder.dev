import { styled } from "../stitches.config";

export const Layout = styled("div", {
  height: "100vh",
  display: "grid",
  gridTemplateAreas: `
    "container"
  `,
  paddingTop: "$16",
  backgroundImage: "linear-gradient($purple800, transparent)",
});
