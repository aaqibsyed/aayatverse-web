"use client";

import RecentlyReadCard from "./RecentlyReadCard";
import SectionHeader from "./SectionHeader";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import { useChapters } from "@/features/quran/hooks/use-chapters";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function RecentlyReadSection() {
  const recentlyRead =
    useQuranReaderStore(
      (state) =>
        state.recentlyRead
    );

  const { data } =
    useChapters();
  const chapters =
    data?.chapters ?? [];

  const recentSurahs =
    recentlyRead.flatMap(
      (surahNumber) => {
        const surah =
          chapters.find(
            (chapter) =>
              chapter.id === surahNumber
          );

        return surah
          ? [surah]
          : [];
      }
    );
  return (
    <section>
      <SectionHeader
        badge="Your Journey"
        title="Recently Read"
        description="Quickly revisit previously opened Surahs."
      />
      {/* Empty State */}
      {!recentSurahs.length && (<div
        className="
                  relative
                  overflow-hidden

                  rounded-[32px]

                  border
                  border-emerald-100

                  dark:border-slate-800

                  bg-gradient-to-br
                  from-white
                  via-emerald-50/50
                  to-amber-50/40

                  dark:from-slate-900
                  dark:via-slate-900
                  dark:to-slate-800

                  p-8

                  text-center
                "
      >
        {/* Decorative Glow */}
        <div
          className="
                      absolute
                      -right-10
                      -top-10

                      h-40
                      w-40

                      rounded-full

                      bg-emerald-500/10

                      blur-2xl
                    "
        />

        <div className="relative z-10">
          <div
            className="
                        mx-auto

                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        rounded-3xl

                        bg-emerald-500/10

                        text-emerald-600
                        dark:text-emerald-400
                      "
          >
            <BookOpen className="h-8 w-8" />
          </div>

          <h3
            className="
                        mt-4

                        text-xl
                        font-semibold

                        text-slate-900
                        dark:text-slate-50
                      "
          >
            Your reading journey starts here
          </h3>

          <p
            className="
                        mt-2

                        text-sm

                        text-slate-600
                        dark:text-slate-400
                      "
          >
            Start exploring the Quran and
            your recently read Surahs will
            appear here automatically.
            <br />
            114 Surahs waiting to be explored
          </p>

          <Link
            href="/quran"
            className="
                        mt-6

                        inline-flex
                        items-center
                        gap-2

                        rounded-full

                        bg-emerald-600

                        px-5
                        py-3

                        text-sm
                        font-medium
                        text-white

                        transition-all

                        hover:bg-emerald-700
                        hover:shadow-lg

                        active:scale-[0.98]
                        hover:translate-x-1
                        duration-300
                      "
          >
            Start Reading

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>)}
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
            key={surah.id}
            surahNumber={surah.id}
            surahName={surah.name_simple}
            surahNameArabic={
              surah.name_arabic
            }
            ayahCount={
              surah.verses_count
            }
          />
        ))}
      </div>
    </section>
  );
}