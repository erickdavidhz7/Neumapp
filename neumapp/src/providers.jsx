import { NextUIProvider } from "@nextui-org/react";
import { ActiveSectionContextProvider } from "./context/ActiveSectionContext";

export function Providers({ children }) {
  return (
    <ActiveSectionContextProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ActiveSectionContextProvider>
  );
}
