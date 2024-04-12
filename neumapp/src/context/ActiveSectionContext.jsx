import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext(null);

export function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Inicio");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext debe utilizarse dentro de un activeSectionContextProvider"
    );
  }
  return context;
}
