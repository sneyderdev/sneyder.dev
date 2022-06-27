import { useState, useCallback } from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

import { getCssText } from "~/styles/stitches.config";
import ClientStyleContext from "~/styles/client.context";

interface ClientStyleCacheProviderProps {
  children: React.ReactNode;
}

const ClientStyleCacheProvider = ({
  children,
}: ClientStyleCacheProviderProps) => {
  const [sheet, setSheet] = useState(getCssText());

  const reset = useCallback(() => {
    setSheet(getCssText());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
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
