import type { EntryContext } from "@remix-run/node";

import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";

import { dom } from "@fortawesome/fontawesome-svg-core";

import { getCssText } from "~/styles/stitches.config";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  // SSR for icons styles and general styles
  markup = markup.replace(
    /<style id="fontawesome">.*<\/style><style id="stitches">.*<\/style>/g,
    `<style id="fontawesome">${dom.css()}</style><style id="stitches">${getCssText()}</style>`
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
