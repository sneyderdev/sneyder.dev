import { styled } from "~/styles/stitches.config";

export const FooterContainer = styled("footer", {
  textAlign: "center",
  padding: "$10 0",
  display: "grid",
  gridTemplateColumns: "repeat(4, $12)",
  justifyContent: "space-evenly",
});

export const MediaLink = styled("a", {
  display: "inline-grid",
  placeItems: "center",
  size: "$12",
  fontSize: "$sizes$6",

  "&:first-child": {
    color: "$twitter",
  },

  "&:nth-child(3)": {
    color: "$linkedin",
  },
});
