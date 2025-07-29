"use client";

import { TerminalContextProvider } from "react-terminal";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <TerminalContextProvider>{children}</TerminalContextProvider>;
}
