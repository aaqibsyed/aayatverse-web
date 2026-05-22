"use client";

import type { Verse } from "@/features/quran/types/verse.types";
import { useQuranReaderStore } from "@/store/quran-reader-store";

interface Props {
  verses: Verse[];
}

export default function ReadingMode({
  verses,
}: Props) {

  const { fontSize } =
    useQuranReaderStore();

  return (
    <div
      dir="rtl"
      className="
        rounded-3xl
  border
  bg-card
  p-10
  text-right
  text-5xl
  leading-20
  font-medium
  text-emerald-900
  dark:text-emerald-100
      "
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: "2",
      }}
    >
      {verses.map((verse, index) => (
        <span key={verse.id}>
          {verse.text_uthmani}

          <span
            className="
              mx-2
    inline-flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    border
    border-emerald-200
    bg-linear-to-br
    from-emerald-50
    to-amber-50
    text-sm
    font-semibold
    text-emerald-700
    shadow-sm
    dark:border-emerald-800
    dark:from-emerald-950/40
    dark:to-amber-950/20
    dark:text-emerald-300
            "
          >
            {index + 1}
          </span>

          {" "}
        </span>
      ))}
    </div>
  );
}