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
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Poppins-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Poppins-Medium.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Poppins-SemiBold.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
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
          id="fontawesome"
          dangerouslySetInnerHTML={{ __html: clientStyleData.iconsSheet }}
          suppressHydrationWarning
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.globalSheet }}
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
