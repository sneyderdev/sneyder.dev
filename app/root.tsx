import type { MetaFunction } from "@remix-run/node";

import { useContext, useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import ClientStyleContext from "~/styles/client.context";
import { styled } from "~/styles/stitches.config";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const Title = styled("h1", {
  color: "$red",
});

export default function App() {
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    clientStyleData.reset();
  }, [clientStyleData]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>
      <body>
        <Title>Styling with Stitches</Title>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
