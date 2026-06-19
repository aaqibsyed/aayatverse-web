import type { Verse } from "@/features/quran/types/verse.types";
import {
  useEffect,
  useRef,
} from "react";

import VerseCard from "./VerseCard";
import { useQuranReaderStore } from "@/store/quran-reader-store";

interface Props {
  surahNumber: number;
  verses: Verse[];
  targetAyah?: number;
  chapterNameSimple?: string;
}

export default function StudyMode({
  surahNumber,
  verses,
  targetAyah,
  chapterNameSimple,
}: Props) {
  const targetRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const { setActiveAyah } =
    useQuranReaderStore();


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

  useEffect(() => {
  if (verses.length) {
    console.log(
      "First verse:",
      verses[0]
    );
  }
}, [verses]);

  return (
    <div className="space-y-6">
      {surahNumber !== 1 &&
        surahNumber !== 9 &&
        <div
          className="
                    rounded-3xl
                    border
                    border-emerald-200
                    bg-emerald-50/50
                    dark:bg-emerald-950/20
                    p-6
                    text-center
                  "
        >
          <div
            className="
                        text-4xl
                        text-emerald-700
                        dark:text-emerald-300
                      "
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div
            className="
                          text-center
                          text-emerald-500
                          dark:text-emerald-300
                          text-xl
                        "
          >
            ❈────────────❈
          </div>
        </div>
      }
      {verses.map((verse, index) => {
        const verseNumber =
          index + 1;

        return (
          <div
            key={verse.id}
            ref={
              verseNumber === targetAyah
                ? targetRef
                : null
            }
          >

            <VerseCard
              surahNumber={surahNumber}
              verseNumber={verseNumber}
              arabic={verse.text_uthmani}
              translation={verse.translation}
              chapterNameSimple={chapterNameSimple}
            />
          </div>
        )
      })}
    </div>
  );
}