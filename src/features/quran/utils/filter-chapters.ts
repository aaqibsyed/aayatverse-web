import { Chapter } from "../types/chapter.types";

export function filterChapters(
  chapters: Chapter[],
  search: string
) {
  const term =
    search.trim().toLowerCase();

  if (!term) {
    return chapters;
  }

  return chapters.filter(
    (chapter) =>
      chapter.name_simple
        .toLowerCase()
        .includes(term) ||
      chapter.name_arabic
        .toLowerCase()
        .includes(term) ||
      String(chapter.id).includes(term)
  );
}