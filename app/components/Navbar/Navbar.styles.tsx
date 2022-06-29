import { Link } from "@remix-run/react";

import { styled } from "~/styles/stitches.config";

export const MobileNavbarBackground = styled("div", {
  height: "$16",
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: "$1",
  //TODO:: Uncomment after setting visibility based on scroll position
  // transform: "translateY(-$space$16)",
  transition: "all 300ms ease-out",
});

export const LogoContainer = styled("div", {
  height: "$16",
  paddingLeft: "$5",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: 0,
  zIndex: "$1",
  //TODO:: Uncomment after setting visibility based on scroll position
  // transform: "translateY(-$space$16)",
  transition: "all 300ms ease-out",
});

export const Logo = styled(Link, {
  fontSize: "$lg",
  fontWeight: "$semibold",
});

export const NavbarContainer = styled("div", {
  height: "$16",
  paddingRight: "$5",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: "$2",
  //TODO:: Uncomment after setting visibility based on scroll position
  // transform: "translateY(-$space$16)",
  transition: "all 300ms ease-out",
});

export const BurgerButton = styled("button", {
  size: "$12",
  position: "relative",
  border: 0,

  "& i": {
    display: "inline-block",
    width: "100%",
    height: "$min",
    backgroundColor: "$white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transition: "all 400ms ease-out",

    "&:first-child": {
      left: 0,
      transform: "translateY(-$space$2)",
    },

    "&:nth-child(2)": {
      width: "$9",
      transform: "translateX(-50%)",
    },

    "&:last-child": {
      width: "$6",
      transform: "translateX(-50%) translateY($space$2)",
    },
  },
});
