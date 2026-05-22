"use client";

import { useQuery } from "@tanstack/react-query";

import { getChapterVerses } from "../services/quran.service";

export function useVerses(
  chapterId: number
) {
  return useQuery({
    queryKey: ["verses", chapterId],

    queryFn: () =>
      getChapterVerses(chapterId),

    enabled: !!chapterId,
  });
}