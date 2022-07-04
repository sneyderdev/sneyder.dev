import { useState, useCallback } from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

import { config, dom } from "@fortawesome/fontawesome-svg-core";

import { getCssText } from "~/styles/stitches.config";
import ClientStyleContext from "~/styles/client.context";

interface ClientStyleCacheProviderProps {
  children: React.ReactNode;
}

config.autoAddCss = false;

const ClientStyleCacheProvider = ({
  children,
}: ClientStyleCacheProviderProps) => {
  const [iconsSheet, setIconsSheet] = useState(dom.css());
  const [globalSheet, setGlobalSheet] = useState(getCssText());

  const reset = useCallback(() => {
    setIconsSheet(dom.css());
    setGlobalSheet(getCssText());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset, iconsSheet, globalSheet }}>
      {children}
    </ClientStyleContext.Provider>
  );
};

hydrate(
  <ClientStyleCacheProvider>
    <RemixBrowser />
  </ClientStyleCacheProvider>,
  document
);
