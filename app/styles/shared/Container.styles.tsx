import { styled } from "../stitches.config";

export const Container = styled("div", {
  gridArea: "container",
  width: "100%",
  padding: "0 $5",
  display: "grid",
  gridTemplateRows: "1fr auto",
});
