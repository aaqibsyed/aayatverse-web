"use client";

import QueryProvider from "./query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}