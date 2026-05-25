"use client";

import RecentlyReadCard from "./RecentlyReadCard";
import SectionHeader from "./SectionHeader";

const recentSurahs = [
  {
    surahNumber: 67,
    surahName: "Al-Mulk",
    surahNameArabic: "الملك",
    ayahCount: 30,
  },
  {
    surahNumber: 36,
    surahName: "Ya-Sin",
    surahNameArabic: "يس",
    ayahCount: 83,
  },
  {
    surahNumber: 18,
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahCount: 110,
  },
  {
    surahNumber: 55,
    surahName: "Ar-Rahman",
    surahNameArabic: "الرحمن",
    ayahCount: 78,
  },
];

export default function RecentlyReadSection() {
  return (
    <section>
      <SectionHeader
        badge="Your Journey"
        title="Recently Read"
        description="Quickly revisit previously opened Surahs."
      />

      <div
        className="
          flex
          gap-5

          overflow-x-auto

          pb-4
          pt-2

          scrollbar-none
        "
      >
        {recentSurahs.map((surah) => (
          <RecentlyReadCard
            key={surah.surahNumber}
            {...surah}
          />
        ))}
      </div>
    </section>
  );
}