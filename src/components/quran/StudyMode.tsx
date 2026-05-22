import type { Verse } from "@/features/quran/types/verse.types";

import VerseCard from "./VerseCard";

interface Props {
  surahNumber: number;
  verses: Verse[];
}

export default function StudyMode({
  surahNumber,
  verses,
}: Props) {
  return (
    <div className="space-y-6">
      {verses.map((verse, index) => (
        <VerseCard
          key={verse.id}
          surahNumber={surahNumber}
          verseNumber={index + 1}
          arabic={verse.text_uthmani}
        />
      ))}
    </div>
  );
}