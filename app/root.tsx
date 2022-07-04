import type { MetaFunction, LinksFunction } from "@remix-run/node";

import React, { useContext, useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Navbar } from "./components";

import ClientStyleContext from "./styles/client.context";
import globalStyles from "./styles/global.styles";
import { Layout } from "./styles/shared";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sneyder Barreto",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
  },
];

const Document = ({ children }: { children: React.ReactNode }) => {
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
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const App = () => (
  <Document>
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  </Document>
);

export default App;
