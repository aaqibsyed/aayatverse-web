"use client";

import { useQuery } from "@tanstack/react-query";
import { getVerseTafsir } from "../services/tafsir.service";

export function useTafsir(
  verseKey: string,
  enabled: boolean
) {
  return useQuery({
    queryKey: ["tafsir", verseKey],
    queryFn: () =>
      getVerseTafsir(verseKey),
    enabled,
  });
}