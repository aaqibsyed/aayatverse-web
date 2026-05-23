"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

import AppCard from "@/components/shared/AppCard";
import { useChapters } from "@/features/quran/hooks/use-chapters";
import { useQuranReaderStore } from "@/store/quran-reader-store";

export default function ContinueReading() {
  const {
    lastReadSurah,
    lastReadAyah,
  } = useQuranReaderStore();

  const { data } = useChapters();

  if (
    !lastReadSurah ||
    !lastReadAyah
  ) {
    return null;
  }

  const chapter =
    data?.chapters.find(
      (chapter) =>
        chapter.id === lastReadSurah
    );

  if (!chapter) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      <AppCard
        className="
          overflow-hidden
          border-emerald-200
          bg-linear-to-br
          from-emerald-50
          via-background
          to-amber-50
          p-6
          dark:border-emerald-900
        "
      >
        <div className="flex items-center justify-between gap-6">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />

              <span
                className="
                  text-sm
                  font-medium
                  text-emerald-700
                  dark:text-emerald-400
                "
              >
                Continue Reading
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              {chapter.name_simple}
            </h3>

            <p className="mt-1 text-muted-foreground">
              Ayah {lastReadAyah}
            </p>
          </div>

          <Link
            href={`/quran/${lastReadSurah}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              px-4
              py-2
              transition-all
              duration-300
              hover:border-emerald-300
              hover:bg-emerald-50
              dark:hover:bg-emerald-950/30
            "
          >
            Resume

            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </AppCard>
    </section>
  );
}