export const APP_CONFIG = {
  name: "AayatVerse",

  madhhab: "hanafi",

  language: "en",

  supportEmail: "support@aayatverse.com",

  quranApiBaseUrl:
    process.env.NEXT_PUBLIC_QURAN_API_URL,
} as const;