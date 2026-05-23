"use client";

import {
  useEffect,
  useRef,
} from "react";
import type { Verse } from "@/features/quran/types/verse.types";
import { useQuranReaderStore } from "@/store/quran-reader-store";

interface Props {
  surahNumber: number;
  verses: Verse[];
  targetAyah?: number
}

export default function ReadingMode({
  surahNumber,
  verses,
  targetAyah,
}: Props) {

  const {
    fontSize,
    activeAyah,
    activeSurah,
    setActiveAyah,
    setLastReadPosition
  } = useQuranReaderStore();

  const targetRef =
    useRef<HTMLSpanElement | null>(
      null
    );

  useEffect(() => {
    if (
      targetAyah &&
      targetRef.current
    ) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setActiveAyah(
          surahNumber,
          targetAyah
        );
      }, 300);
    }
  }, [
    targetAyah,
    surahNumber,
    setActiveAyah,
  ]);

  return (
    <div
      dir="rtl"
      className="
        rounded-3xl
          border
          bg-linear-to-b
        from-white
        to-slate-50
        dark:from-card
        dark:to-card
          p-4
          sm:p-8
          md:p-10
          text-right
          text-3xl
          sm:text-4xl
          md:text-5xl
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
      {verses.map((verse, index) => {
        const verseNumber = index + 1;

        const isActive =
          activeAyah === verseNumber &&
          activeSurah === surahNumber;
        return (
          <span
            key={verse.id}
            ref={
              verseNumber === targetAyah
                ? targetRef
                : null
            }
            onClick={() => {
              setActiveAyah(
                surahNumber,
                verseNumber
              )
              setLastReadPosition(
                surahNumber,
                verseNumber
              );
            }}
            className={`
        cursor-pointer
        rounded-lg
        px-2
        py-1
        transition-all
        duration-200

        ${isActive
                ? `
              bg-amber-100
              dark:bg-amber-500/20
            `
                : `
              hover:bg-emerald-50
              dark:hover:bg-emerald-900/20
            `
              }
      `}
          >
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
        )
      })}
    </div >
  );
}