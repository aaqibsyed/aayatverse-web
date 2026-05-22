import { apiFetch } from "@/lib/api-client";
import { APP_CONFIG } from "@/constants/app-config";
import type {
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
  return apiFetch<VerseResponse>(
    `${BASE_URL}/quran/verses/uthmani?chapter_number=${chapterId}`
  );
}