import { Chapter } from "../types/chapter.types";

export function filterChapters(
  chapters: Chapter[],
  search: string
) {
  const term = search.toLowerCase();

  return chapters.filter((chapter) =>
    chapter.name_simple
      .toLowerCase()
      .includes(term)
  );
}