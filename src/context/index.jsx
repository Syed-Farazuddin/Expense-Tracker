import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  return (
    <GlobalContext.Provider value={"Hello"}>{children}</GlobalContext.Provider>
  );
}
