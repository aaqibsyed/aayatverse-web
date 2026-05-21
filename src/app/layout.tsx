import "./globals.css";
import type { Viewport } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/query-provider";

export const metadata = {
  title: "AayatVerse",
  description:
    "Quran, Hadith, Prayer Times, Duas, Islamic Learning and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
            <Toaster
              richColors
              position="top-center"
              closeButton
            />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}