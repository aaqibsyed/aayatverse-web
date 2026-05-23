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
}

export default function StudyMode({
  surahNumber,
  verses,
  targetAyah,
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

  return (
    <div className="space-y-6">
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
            />
          </div>
        )
      })}
    </div>
  );
}