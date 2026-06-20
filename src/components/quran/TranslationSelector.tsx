"use client";

import {
  TRANSLATIONS,
} from "@/features/quran/constants/study-resources";

import { useQuranReaderStore } from "@/store/quran-reader-store";

export default function TranslationSelector() {
  const {
    selectedTranslationId,
    setTranslation,
  } = useQuranReaderStore();

  return (
    <select
      value={selectedTranslationId}
      onChange={(e) =>
        setTranslation(
          Number(e.target.value)
        )
      }
      className="
        h-5

        rounded-full

        border
        border-emerald-200

        bg-white

        px-3

        text-xs
        font-medium

        text-emerald-700

        dark:border-emerald-900
        dark:bg-emerald-950/20
        dark:text-emerald-300
      "
    >
      {TRANSLATIONS.map(
        (translation) => (
          <option
            key={translation.id}
            value={translation.id}
          >
            {translation.label}
          </option>
        )
      )}
    </select>
  );
}