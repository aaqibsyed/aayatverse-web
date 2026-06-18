import { apiFetch } from "@/lib/api-client";
import { APP_CONFIG } from "@/constants/app-config";
import type {
  TranslationResponse,
  VerseResponse,
} from "../types/verse.types";

import type {
  ChaptersResponse,
} from "../types/chapter.types";

const BASE_URL =
  APP_CONFIG.quranApiBaseUrl;

export async function getChapters() {
  return apiFetch<ChaptersResponse>(
    `${BASE_URL}/chapters`
  );
}

export async function getChapterVerses(
  chapterId: number
) {
  const [
    verses,
    translations,
  ] = await Promise.all([
    apiFetch<VerseResponse>(
      `${BASE_URL}/quran/verses/uthmani?chapter_number=${chapterId}`
    ),

    apiFetch<TranslationResponse>(
      `${BASE_URL}/quran/translations/131?chapter_number=${chapterId}`
    ),
  ]);

  return {
    verses: verses.verses.map(
      (verse, index) => ({
        ...verse,

        translation:
          translations
            .translations[index]
            ?.text ?? "",
      })
    ),
  };
}

// export async function getChapterTranslation(
//   chapterId: number
// ) {
//   return apiFetch<TranslationResponse>(
//     `${BASE_URL}/quran/translations/131?chapter_number=${chapterId}`
//   );
// }