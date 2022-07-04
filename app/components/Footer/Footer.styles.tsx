import { styled } from "~/styles/stitches.config";

export const FooterContainer = styled("footer", {
  textAlign: "center",
  padding: "$10 0",
});

export const SocialContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  justifyContent: "space-between",
  marginTop: "$5",
});

export const SocialLink = styled("a", {
  display: "inline-grid",
  placeItems: "center",
  size: "$15",
  fontSize: "$sizes$6",
  border: "$sizes$px solid $white",
  borderRadius: "$sizes$1",

  "&:first-child": {
    color: "$twitter",
    borderColor: "$twitter",
  },

  "&:nth-child(3)": {
    color: "$linkedin",
    borderColor: "$linkedin",
  },
});
