"use client";

import { useParams } from "next/navigation";

import { useVerses } from "@/features/quran/hooks/use-verses";
import { useQuranReaderStore } from "@/store/quran-reader-store";

import ReadingMode from "@/components/quran/ReadingMode";
import StudyMode from "@/components/quran/StudyMode";
import SurahHeader from "@/components/quran/SurahHeader";
import ReaderControls from "@/components/quran/ReaderControls";
import BackButton from "@/components/shared/BackButton";
import { useChapter } from "@/features/quran/hooks/use-chapter";

export default function SurahPage() {
    const params = useParams();

    const chapterId = Number(
        params.surah
    );

    const {
        data: chapter,
    } = useChapter(chapterId);

    const {
        data,
        isLoading,
        error,
    } = useVerses(chapterId);

    const { viewMode } =
        useQuranReaderStore();

    if (isLoading) {
        return (
            <div className="p-10">
                Loading Surah...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-10">
                Failed to load Surah.
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            <BackButton />
            {chapter && (
                <SurahHeader
                    surahNumber={chapter.id}
                    englishName={
                        chapter.name_simple
                    }
                    arabicName={
                        chapter.name_arabic
                    }
                    versesCount={
                        chapter.verses_count
                    }
                    revelationPlace={
                        chapter.revelation_place ===
                            "makkah"
                            ? "Meccan"
                            : "Medinan"
                    }
                />
            )}

            {viewMode === "reading" && (
                <ReaderControls />
            )}

            {viewMode === "reading" ? (
                <ReadingMode surahNumber={chapterId} verses={data?.verses ?? []} />
            ) : (
                <StudyMode surahNumber={chapterId} verses={data?.verses ?? []} />
            )}
        </main>
    );
}