"use client";

import Link from "next/link";
import {
    useEffect,
    useState,
} from "react";

import AppCard from "@/components/shared/AppCard";

import { BookmarkCheck } from "lucide-react";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import { useChapters } from "@/features/quran/hooks/use-chapters";
import PageLoader from "@/components/shared/PageLoader";

export default function BookmarksPage() {
    const [hydrated, setHydrated] =
        useState(false);
    const {
        bookmarks,
        removeBookmark,
    } = useQuranReaderStore();

    const { data } =
        useChapters();


    const sortedBookmarks =
        [...bookmarks].sort(
            (a, b) =>
                b.createdAt - a.createdAt
        );

    const chapterMap = new Map(
        data?.chapters.map((chapter) => [
            chapter.id,
            chapter,
        ]) ?? []
    );


    useEffect(() => {
        const id = requestAnimationFrame(
            () => setHydrated(true)
        );

        return () =>
            cancelAnimationFrame(id);
    }, []);

    if (!hydrated) {
        return (
            <PageLoader text="Loading bookmarks..." />
        );
    }


    return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Bookmarks
                </h1>

                <p className="mt-2 text-muted-foreground">
                    {sortedBookmarks.length} saved verse
                    {sortedBookmarks.length !== 1 ? "s" : ""}
                </p>
            </div>

            {sortedBookmarks.length === 0 && (
                <AppCard className="p-10 text-center">
                    <h2 className="text-2xl font-semibold">
                        No Bookmarks Yet
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                        Save verses while reading
                        to revisit them later.
                    </p>

                    <Link
                        href="/quran"
                        className="
              mt-6
              inline-flex
              rounded-xl
              border
              px-4
              py-2
              transition
              hover:border-emerald-300
              hover:bg-emerald-50
              dark:hover:bg-emerald-950/30
            "
                    >
                        Browse Quran
                    </Link>
                </AppCard>
            )}


            <div className="space-y-4">
                {sortedBookmarks.map(
                    (bookmark) => {
                        const chapter =
                            chapterMap.get(
                                bookmark.surahNumber
                            );

                        return (
                            <Link
                                key={`${bookmark.surahNumber}-${bookmark.ayahNumber}`}
                                href={`/quran/${bookmark.surahNumber}?ayah=${bookmark.ayahNumber}`}
                            >
                                <AppCard
                                    className="    
                                                cursor-pointer
                                                mb-2
                                                p-5
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-emerald-200
                                                hover:shadow-lg
                                                            "
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3
                                                className="
                          text-lg
                          font-semibold
                          text-emerald-700
                          dark:text-emerald-400
                        "
                                            >
                                                {chapter?.name_simple}
                                            </h3>

                                            <p className="text-muted-foreground lg:mt-2">
                                                Ayah {bookmark.ayahNumber}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();

                                                    removeBookmark(
                                                        bookmark.surahNumber,
                                                        bookmark.ayahNumber
                                                    );
                                                }}
                                                className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            rounded-xl
                                                            border
                                                            px-3
                                                            py-2
                                                            text-sm
                                                            transition
                                                            hover:border-amber-300
                                                            hover:bg-amber-50
                                                            dark:hover:bg-amber-950/20
                                                            "
                                            >
                                                <BookmarkCheck className="h-4 w-4" />

                                                Remove
                                            </button>

                                            <p
                                                dir="rtl"
                                                className="
                                                        text-3xl
                                                        font-medium
                                                        text-amber-600
                                                        dark:text-amber-400
                                                        "
                                            >
                                                {chapter?.name_arabic}
                                            </p>
                                        </div>
                                    </div>
                                </AppCard>
                            </Link>
                        );
                    }
                )}
            </div>
        </main>
    );
}