"use client";

import { useParams } from "next/navigation";

import { useVerses } from "@/features/quran/hooks/use-verses";
import { useQuranReaderStore } from "@/store/quran-reader-store";

import ReadingMode from "@/components/quran/ReadingMode";
import StudyMode from "@/components/quran/StudyMode";
import SurahHeader from "@/components/quran/SurahHeader";
import ReaderControls from "@/components/quran/ReaderControls";
import BackButton from "@/components/shared/BackButton";

export default function SurahPage() {
    const params = useParams();

    const chapterId = Number(
        params.surah
    );

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
            <SurahHeader
                englishName="Al-Fatihah"
                arabicName="الفاتحة"
                versesCount={7}
                revelationPlace="Meccan"
            />

            {viewMode === "reading" && (
                <ReaderControls />
            )}

            {viewMode === "reading" ? (
                <ReadingMode verses={data?.verses ?? []} />
            ) : (
                <StudyMode verses={data?.verses ?? []} />
            )}
        </main>
    );
}