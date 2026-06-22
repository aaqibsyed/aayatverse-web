"use client"
import {
    getVerseOfDay,
} from "@/data/verse-of-day";
import { copyAyah, shareAyah, shareVerseImage } from "@/lib/quran-actions";
import { useRef } from "react";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import { haptics } from "@/lib/haptics";
import { toast } from "sonner";
import ShareVerseCard from "@/components/quran/ShareVerseCard";
import VerseOfTheDayCard from "./VerseOfTheDayCard";


export default function VerseOfTheDaySection() {
    const verseOfDay =
        getVerseOfDay();
    const shareCardRef =
        useRef<HTMLDivElement>(null);
    const {
        bookmarks,
        addBookmark,
        removeBookmark,
    } = useQuranReaderStore();

    const isBookmarked =
        bookmarks.some(
            (bookmark) =>
                bookmark.surahNumber ===
                verseOfDay.surahNumber &&
                bookmark.ayahNumber ===
                verseOfDay.ayahNumber
        );
    return (
        <>
            <VerseOfTheDayCard
                {...verseOfDay}
                isBookmarked={isBookmarked}
                onBookmark={() => {
                    if (isBookmarked) {
                        removeBookmark(
                            verseOfDay.surahNumber,
                            verseOfDay.ayahNumber
                        );
                        toast.success("Bookmark removed")
                        haptics.success()
                    } else {
                        addBookmark(
                            verseOfDay.surahNumber,
                            verseOfDay.ayahNumber
                        );
                        toast.success("Bookmark added")
                        haptics.success()
                    }
                }}

                onCopy={() => {
                    copyAyah(
                        verseOfDay.arabic,
                        verseOfDay.englishTranslation,
                        verseOfDay.urduTranslation,
                        verseOfDay.surahNumber,
                        verseOfDay.ayahNumber,
                        verseOfDay.surahName
                    );
                }}

                onShare={() => {
                    shareAyah(
                        verseOfDay.arabic,
                        verseOfDay.englishTranslation,
                        verseOfDay.urduTranslation,
                        verseOfDay.surahNumber,
                        verseOfDay.ayahNumber,
                        verseOfDay.surahName
                    );
                }}

                onShareImage={async () => {
                    if (!shareCardRef.current) {
                        return;
                    }

                    try {
                        await shareVerseImage(
                            shareCardRef.current,
                            `ayah-${verseOfDay.surahNumber}-${verseOfDay.ayahNumber}.png`
                        );
                    } catch (error) {
                        console.error(
                            "Image share failed",
                            error
                        );
                    }
                }}

            />

            <div
                className="
                          fixed
                          -left-[9999px]
                          top-0
                          pointer-events-none
                        "
            >
                <div ref={shareCardRef}>
                    <ShareVerseCard
                        arabic={
                            verseOfDay.arabic
                        }
                        englishTranslation={verseOfDay.englishTranslation}
                        urduTranslation={verseOfDay.urduTranslation}
                        surahName={
                            verseOfDay.surahName
                        }
                        surahNumber={
                            verseOfDay.surahNumber
                        }
                        ayahNumber={
                            verseOfDay.ayahNumber
                        }
                    />
                </div>
            </div>
        </>
    )
}