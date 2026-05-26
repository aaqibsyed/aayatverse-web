"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useQuranReaderStore } from "@/store/quran-reader-store";

// replace with your actual chapters import
import { useChapters } from "@/features/quran/hooks/use-chapters";

export default function ContinueReadingCard() {
  const {
    lastReadSurah,
    lastReadAyah,
  } = useQuranReaderStore();

  const {data} = useChapters()

  const chapter =
    lastReadSurah
      ? data?.chapters.find(
          (chapter) =>
            chapter.id === lastReadSurah
        )
      : null;

  const hasLastRead =
    lastReadSurah &&
    lastReadAyah;

  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-emerald-100

        dark:border-slate-800

        bg-gradient-to-br
        from-white
        via-emerald-50
        to-amber-50

        dark:from-slate-900
        dark:via-slate-800
        dark:to-slate-700

        p-6

        shadow-lg
        shadow-emerald-900/5
      "
    >
      {/* decorative glow */}
      <div
        className="
          absolute
          -top-10
          -right-10

          h-32
          w-32

          rounded-full

          bg-emerald-500

          blur-3xl
        "
      />

      {/* watermark */}
      <BookMarked
        className="
          absolute
          right-6
          top-6

          h-16
          w-16

          text-emerald-500/10

          dark:text-emerald-400/10
        "
      />

      <div className="relative z-10">
        <div
          className="
            flex
            items-center
            gap-2

            text-sm
            font-medium

            text-emerald-600
            dark:text-emerald-400
          "
        >
          <BookOpen
            className="
              h-4
              w-4
            "
          />

          Continue Reading
        </div>

        {hasLastRead ? (
          <>
            <h2
              className="
                mt-6

                text-3xl
                font-bold

                tracking-tight

                text-emerald-900
                dark:text-emerald-50
              "
            >
              <span className="text-slate-600
                dark:text-slate-400">Surah </span> 
              {chapter?.name_simple ??
                `Surah ${lastReadSurah}`}
            </h2>

            <p
              className="
                mt-1

                text-lg

                text-slate-600
                dark:text-slate-400
              "
            >
              Ayah {lastReadAyah}
            </p>

            <p
              className="
                mt-4

                text-sm

                text-slate-500
                dark:text-slate-500
              "
            >
              Continue where you left off.
            </p>

            <div
              className="
                my-6

                h-px

                bg-gradient-to-r
                from-transparent
                via-emerald-300
                to-transparent

                dark:via-emerald-700
              "
            />

            <Button
              asChild
              className="
                rounded-xl

                bg-emerald-600

                hover:bg-emerald-700
                hover:translate-x-1
                transition-transform
                duration-300
                shadow-emerald-500/20 
                hover:shadow-xl
              "
            >
              <Link
                href={`/quran/${lastReadSurah}?ayah=${lastReadAyah}`}
              >
                Resume Journey

                <ArrowRight
                  className="
                    ml-2
                    h-4
                    w-4
                  "
                />
              </Link>
            </Button>
          </>
        ) : (
          <>
            <h2
              className="
                mt-6

                text-3xl
                font-bold

                tracking-tight

                text-slate-900
                dark:text-slate-50
              "
            >
              Begin Your Journey
            </h2>

            <p
              className="
                mt-3

                text-sm

                text-slate-500
                dark:text-slate-500
              "
            >
              Start reading the Quran today.
            </p>

            <div
              className="
                my-6

                h-px

                bg-gradient-to-r
                from-transparent
                via-emerald-300
                to-transparent

                dark:via-emerald-700
              "
            />

            <Button
              asChild
              className="
                rounded-xl

                bg-emerald-600

                hover:bg-emerald-700
                hover:translate-x-1
                transition-transform
              "
            >
              <Link href="/quran">
                Open Quran

                <ArrowRight
                  className="
                    ml-2
                    h-4
                    w-4
                  "
                />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}