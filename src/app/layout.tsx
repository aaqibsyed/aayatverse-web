import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/query-provider";
import AppProvider from "@/providers/app-provider";
import type {
  Metadata,
  Viewport,
} from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://aayatverse.com"
  ),

  title: {
    default: "AayatVerse",
    template: "%s | AayatVerse",
  },

  description:
    "Read the Holy Quran online with a beautiful reading experience, bookmarks, study mode, reading progress tracking and future Islamic resources including Hadith, Duas, Prayer Times and more.",

  applicationName:
    "AayatVerse",

  keywords: [
    "Quran",
    "Holy Quran",
    "Read Quran online",
    "Quran Arabic",
    "Quran study",
    "Quran reader",
    "Islam",
    "Islamic app",
    "Hadith",
    "Hadees",
    "Dua",
    "Prayer Times",
    "Islamic resources",
    "Muslim app",
  ],

  authors: [
    {
      name: "Aaqib Javed",
    },
  ],

  creator: "Aaqib Javed",

  publisher: "AayatVerse",

  category: "Religion",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url:
      "https://aayatverse.com",

    title: "AayatVerse",

    description:
      "Read the Holy Quran online with bookmarks, study mode and a modern Islamic reading experience.",

    siteName:
      "AayatVerse",

    images: [
      {
        url: "https://aayatverse.com/og-image.png",
        secureUrl:
          "https://aayatverse.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AayatVerse Quran Reader",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "AayatVerse",

    description:
      "Read the Holy Quran online with bookmarks, study mode and future Islamic resources.",

    images: [
      "/og-image.png",
    ],
  },

  // appleWebApp: {
  //   capable: true,
  //   title: "AayatVerse",
  //   statusBarStyle: "black-translucent",
  // },

  // manifest: "/manifest.webmanifest",

  alternates: {
    canonical:
      "https://aayatverse.com",
  },

  other: {
    'publish-date': '2026-05-22',
  },

}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body>
        <QueryProvider>
          <AppProvider>
            <MainLayout>{children}</MainLayout>
            <Toaster
              richColors
              position="top-center"
              closeButton
            />
          </AppProvider>
        </QueryProvider>
      </body>
    </html>
  );
}