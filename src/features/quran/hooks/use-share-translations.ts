"use client";

import { useQuery } from "@tanstack/react-query";
import { getShareTranslations } from "../services/quran.service";

export function useShareTranslations(
  chapterId: number
) {
  return useQuery({
    queryKey: [
      "share-translations",
      chapterId,
    ],

    queryFn: () =>
      getShareTranslations(
        chapterId
      ),

    enabled: !!chapterId,

    staleTime:
      1000 * 60 * 60 * 24,
  });
}