import { apiFetch } from "@/lib/api-client";

const BASE_URL =
  process.env.NEXT_PUBLIC_QURAN_API_URL;

export interface TafsirResponse {
  tafsir: {
    id: number;
    text: string;
    verse_key: string;
  };
}

export async function getVerseTafsir(
  verseKey: string,
  tafsirId: number
) {
  return apiFetch<TafsirResponse>(
    `${BASE_URL}/tafsirs/${tafsirId}/by_ayah/${verseKey}`
  );
}