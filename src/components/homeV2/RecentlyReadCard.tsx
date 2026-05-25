"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  surahNumber: number;
  surahName: string;
  surahNameArabic: string;
  ayahCount: number;
}

export default function RecentlyReadCard({
  surahNumber,
  surahName,
  surahNameArabic,
  ayahCount,
}: Props) {
  return (
    <Link
      href={`/quran/${surahNumber}`}
      className="
        group

        relative

        h-[220px]
        min-w-[280px]

        shrink-0

        overflow-hidden

        rounded-[28px]

        border
        border-emerald-100/50

        bg-gradient-to-br
        from-white
        via-emerald-50/40
        to-amber-50/30

        dark:border-slate-800
        dark:from-slate-900
        dark:via-slate-900
        dark:to-slate-800

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl

        active:scale-[0.98]
      "
    >
      {/* Decorative Corner */}
      <div
        className="
          absolute
          right-0
          top-0

          h-24
          w-24

          rounded-bl-full

          bg-emerald-500/5
          dark:bg-emerald-500/10
        "
      />

      <div className="flex h-full flex-col">
        {/* Number */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            bg-emerald-500/10

            text-base
            font-bold

            text-emerald-600
            dark:text-emerald-400
          "
        >
          {surahNumber}
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3
            className="
              text-2xl
              font-bold

              text-slate-900
              dark:text-slate-50
            "
          >
            {surahName}
          </h3>

          <p
            dir="rtl"
            className="
              mt-2

              text-2xl

              text-emerald-700
              dark:text-emerald-300
            "
          >
            {surahNameArabic}
          </p>

          <p
            className="
              mt-3

              text-sm

              text-slate-500
              dark:text-slate-400
            "
          >
            {ayahCount} Ayahs
          </p>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-auto

            flex
            items-center

            text-sm
            font-medium

            text-emerald-600
            dark:text-emerald-400
          "
        >
          Resume Reading

          <ArrowRight
            className="
              ml-2
              h-4
              w-4

              transition-transform

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </Link>
  );
}