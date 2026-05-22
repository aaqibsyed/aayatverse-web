import Link from "next/link";

import { Chapter } from "@/features/quran/types/chapter.types";

import AppCard from "@/components/shared/AppCard";

interface Props {
  chapter: Chapter;
}

export default function ChapterCard({
  chapter,
}: Props) {
  return (
    <Link href={`/quran/${chapter.id}`}>
      <AppCard className="p-5
                          transition-all
                          duration-300
                          ease-out
                          hover:-translate-y-1
                          hover:shadow-xl
                        hover:border-emerald-200
                        dark:hover:border-emerald-800
                          ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-50
                        text-emerald-700
                        font-semibold
                        border
                        border-emerald-200
                        dark:bg-emerald-950/30
                        dark:border-emerald-800
                        dark:text-emerald-400
                      "
            >
              {chapter.id}
            </div>

            <div>
              <h3
                className="
          text-lg
          font-semibold
          text-emerald-700
          dark:text-emerald-400
        "
              >
                {chapter.name_simple}
              </h3>

              <p
                className="
          text-sm
          text-muted-foreground
        "
              >
                {chapter.translated_name.name}
              </p>

              <p
                className="
          text-xs
          text-muted-foreground
        "
              >
                {chapter.verses_count} Verses •{" "}
                {chapter.revelation_place === "makkah"
                  ? "Meccan"
                  : "Medinan"}
              </p>
            </div>
          </div>

          <div
            dir="rtl"
            className="
                  text-3xl
                  font-medium
                  text-amber-600
                  dark:text-amber-400
                "
          >
            {chapter.name_arabic}
          </div>
        </div>
      </AppCard>
    </Link>
  );
}