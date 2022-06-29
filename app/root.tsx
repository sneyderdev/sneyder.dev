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

import ClientStyleContext from "./styles/client.context";
import globalStyles from "./styles/global.styles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sneyder Barreto",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    clientStyleData.reset();
  }, [clientStyleData]);

  globalStyles();

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
