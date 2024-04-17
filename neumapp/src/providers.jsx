import { NextUIProvider } from "@nextui-org/react";
import { ActiveSectionContextProvider } from "./context/ActiveSectionContext";
import AuthProvider from "./context/AuthContext";

export function Providers({ children }) {
  return (
    <ActiveSectionContextProvider>
      <AuthProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </AuthProvider>
    </ActiveSectionContextProvider>
  );
}
