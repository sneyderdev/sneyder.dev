import { createContext } from "react";

export interface ClientStyleContextData {
  reset: () => void;
  iconsSheet: string;
  globalSheet: string;
}

const ClientStyleContext = createContext<ClientStyleContextData>({
  reset: () => {},
  iconsSheet: "",
  globalSheet: "",
});

export default ClientStyleContext;
