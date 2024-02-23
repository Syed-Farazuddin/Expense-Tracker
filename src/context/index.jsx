import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [text, setText] = useState("Faraz");

  return (
    <GlobalContext.Provider value={{ text, setText }}>
      {children}
    </GlobalContext.Provider>
  );
}
