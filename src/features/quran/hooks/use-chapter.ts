"use client";

import { useQuery } from "@tanstack/react-query";
import { getChapters } from "../services/quran.service";

export function useChapter(
  chapterId: number
) {
  return useQuery({
    queryKey: ["chapter", chapterId],

    queryFn: async () => {
      const data =
        await getChapters();

      return data.chapters.find(
        (chapter) =>
          chapter.id === chapterId
      );
    },

    enabled: !!chapterId,
  });
}