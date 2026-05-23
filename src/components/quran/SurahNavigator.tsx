"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useChapters } from "@/features/quran/hooks/use-chapters";

interface Props {
  currentSurah: number;
}

export default function SurahNavigator({
  currentSurah,
}: Props) {
  const { data } = useChapters();

  const chapters = data?.chapters ?? [];

  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === currentSurah
  );

  const previousChapter =
    currentIndex > 0
      ? chapters[currentIndex - 1]
      : null;

  const nextChapter =
    currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  return (
    <div
      className="
        sticky
        top-16
        z-30
        mb-6
      "
    >
      <div
        className="
          rounded-2xl
          border
          bg-background/90
          backdrop-blur
          shadow-sm
          px-4
          py-3
        "
      >
        <div className="flex items-center justify-between">

          {previousChapter ? (
            <Link
              href={`/quran/${previousChapter.id}`}
              className="
                flex
                items-center
                gap-1
                text-sm
                font-medium
                transition-colors
                hover:text-emerald-600
              "
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </Link>
          ) : (
            <div className="w-12" />
          )}

          <span
            className="
              text-sm
              font-semibold
              text-muted-foreground
            "
          >
            {currentSurah} / 114
          </span>

          {nextChapter ? (
            <Link
              href={`/quran/${nextChapter.id}`}
              className="
                flex
                items-center
                gap-1
                text-sm
                font-medium
                transition-colors
                hover:text-emerald-600
              "
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <div className="w-12" />
          )}

        </div>
      </div>
    </div>
  );
}