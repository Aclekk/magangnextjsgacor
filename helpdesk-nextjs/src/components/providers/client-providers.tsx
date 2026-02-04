"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./auth-provider";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
