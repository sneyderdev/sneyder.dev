import { styled } from "~/styles/stitches.config";

export const FooterContainer = styled("footer", {
  textAlign: "center",
  padding: "$10 0",
  color: "$gray500",
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
  filter: "opacity(60%)",
  transition: "filter 300ms ease-out",

  "& svg ": {
    transition: "filter 300ms ease-out",
  },

  "&:hover": {
    filter: "opacity(100%)",
  },

  "&:first-child": {
    color: "$twitter",
    borderColor: "$twitter",

    "&:hover svg": {
      filter: "drop-shadow(0 0 $sizes$4 $colors$twitter)",
    },
  },

  "&:nth-child(n+2):hover svg": {
    filter: "drop-shadow(0 0 $sizes$4 $colors$white)",
  },

  "&:nth-child(3)": {
    color: "$linkedin",
    borderColor: "$linkedin",

    "&:hover svg": {
      filter: "drop-shadow(0 0 $sizes$4 $colors$linkedin)",
    },
  },
});
