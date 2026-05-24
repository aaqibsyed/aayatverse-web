import { Chapter } from "../types/chapter.types";

function normalize(
  value: string
) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /[^a-z0-9\u0600-\u06FF]/g,
      ""
    );
}

export function filterChapters(
  chapters: Chapter[],
  search: string
) {
  const term = normalize(search);

  if (!term) {
    return chapters;
  }

  return chapters.filter(
    (chapter) =>
      normalize(
        chapter.name_simple
      ).includes(term) ||
      normalize(
        chapter.name_arabic
      ).includes(term) ||
      String(chapter.id).includes(
        search.trim()
      )
  );
}