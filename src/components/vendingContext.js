import { createContext, useContext } from "react";

const VendingContext = createContext();

export function useVendingContext() {
  return useContext(VendingContext);
}

export default VendingContext;