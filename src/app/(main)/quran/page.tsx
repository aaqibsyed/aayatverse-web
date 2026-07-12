"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";

import { useChapters } from "@/features/quran/hooks/use-chapters";
import { filterChapters } from "@/features/quran/utils/filter-chapters";

import ChapterCard from "@/components/quran/ChapterCard";
import PageLoader from "@/components/shared/PageLoader";

export default function QuranPage() {
  const [search, setSearch] = useState("");

  const { data, isLoading, error } =
    useChapters();

  const chapters = useMemo(() => {
    return filterChapters(
      data?.chapters ?? [],
      search
    );
  }, [data, search]);

  if (isLoading) {
    // return <div>Loading Quran...</div>;
    return <PageLoader text="Loading Quran. . ." />
  }

  if (error) {
    return <div>Failed to load Quran.</div>;
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 min-h-[calc(100vh-4rem)]">
      <h1 className="mb-6 text-4xl font-bold">
        Quran
      </h1>

      <div
        className="
                  sticky
                  top-16
                  z-30
                  mb-6
                  bg-background/95
                  backdrop-blur
                  py-1
                "
      >
        <Input
          placeholder="Search by surah name or number..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
                    h-12
                    rounded-2xl
                    border-emerald-100
                    focus-visible:ring-emerald-600
                  "
        />
      </div>

      {chapters.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg font-medium">
            No Surahs found
          </p>

          <p className="text-muted-foreground">
            Try another search term
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-4">
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />
        ))}
      </div>
    </main>
  );
}