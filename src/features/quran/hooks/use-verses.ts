"use client";

import { useQuery } from "@tanstack/react-query";

import { getChapterVerses } from "../services/quran.service";

export function useVerses(
  chapterId: number,
  translationId: number,
) {
  return useQuery({
    queryKey: ["verses", chapterId, translationId],

    queryFn: () =>
      getChapterVerses(chapterId, translationId),

    enabled: !!chapterId,

    placeholderData: (
      previousData
    ) => previousData,
  });
}