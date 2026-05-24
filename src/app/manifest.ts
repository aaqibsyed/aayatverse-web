import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AayatVerse",
    short_name: "AayatVerse",

    description:
      "Read the Holy Quran with bookmarks, study mode and Islamic resources.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#000000",

    theme_color: "#059669",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}