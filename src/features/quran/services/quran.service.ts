import { apiFetch } from "@/lib/api-client";
import { APP_CONFIG } from "@/constants/app-config";
import type {
  VerseResponse,
  TranslationResponse
} from "../types/verse.types";

import type {
  ChaptersResponse,
} from "../types/chapter.types";
import stripHtml from "../utils/strip-html";

const BASE_URL =
  APP_CONFIG.quranApiBaseUrl;

export async function getChapters() {
  return apiFetch<ChaptersResponse>(
    `${BASE_URL}/chapters`
  );
}

export async function getChapterVerses(
  chapterId: number
): Promise<VerseResponse> {

  const [arabicData, translationData] =
    await Promise.all([
      apiFetch<VerseResponse>(
        `${BASE_URL}/quran/verses/uthmani?chapter_number=${chapterId}`
      ),

      apiFetch<TranslationResponse>(
        `${BASE_URL}/quran/translations/20?chapter_number=${chapterId}`
      ),
    ]);

  return {
    verses: arabicData.verses.map(
      (verse, index) => ({
        ...verse,
        translation:
          stripHtml(
            translationData.translations[index]
              ?.text ?? ""
          )
      })
    ),
  };
}
