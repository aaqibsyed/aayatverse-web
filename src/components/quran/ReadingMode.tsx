"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import type { Verse } from "@/features/quran/types/verse.types";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import FloatingAyahToolbar from "./FloatingAyahToolbar";
import { toast } from "sonner";
import { copyAyah, shareAyah, shareVerseImage } from "@/lib/quran-actions";
import { haptics } from "@/lib/haptics";
import ShareVerseCard from "./ShareVerseCard";

interface Props {
  surahNumber: number;
  verses: Verse[];
  targetAyah?: number;
  chapterNameSimple?: string
}

export default function ReadingMode({
  surahNumber,
  verses,
  targetAyah,
  chapterNameSimple,
}: Props) {

  const shareCardRef =
    useRef<HTMLDivElement>(null);

  const {
    fontSize,
    activeAyah,
    activeSurah,
    bookmarks,
    addBookmark,
    removeBookmark,
    setActiveAyah,
    setLastReadPosition
  } = useQuranReaderStore();

  const [
    selectedAyah,
    setSelectedAyah,
  ] = useState<number | null>(
    null
  );

  const [
    toolbarPosition,
    setToolbarPosition,
  ] = useState({
    x: 0,
    y: 0,
  });

  const isSelectedBookmarked =
    selectedAyah !== null &&
    bookmarks.some(
      (bookmark) =>
        bookmark.surahNumber ===
        surahNumber &&
        bookmark.ayahNumber ===
        selectedAyah
    );

  const targetRef =
    useRef<HTMLSpanElement | null>(
      null
    );


  const timerRef =
    useRef<NodeJS.Timeout | null>(
      null
    );

  const handleLongPress = (
    ayah: number,
    x: number,
    y: number,
  ) => {
    timerRef.current =
      setTimeout(() => {
        const element =
          document.getElementById(
            `ayah-${ayah}`
          );

        if (element) {
          const TOOLBAR_WIDTH = 170;

          const safeX = Math.min(
            window.innerWidth -
            TOOLBAR_WIDTH / 2 -
            12,
            Math.max(
              TOOLBAR_WIDTH / 2 + 12,
              x
            )
          );

          setToolbarPosition({
            x: safeX,
            y: y - 25,
          });
        }

        setSelectedAyah(ayah);

        setActiveAyah(
          surahNumber,
          ayah
        );

        setLastReadPosition(
          surahNumber,
          ayah
        );
        haptics.longPress()
      }, 500);
  };

  const clearLongPress = () => {
    if (timerRef.current) {
      clearTimeout(
        timerRef.current
      );
    }
  };


  useEffect(() => {
    if (
      targetAyah &&
      targetRef.current
    ) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setActiveAyah(
          surahNumber,
          targetAyah
        );
      }, 300);
    }
  }, [
    targetAyah,
    surahNumber,
    setActiveAyah,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setSelectedAyah(null);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      true
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
        true
      );
  }, []);

  return (
    <>
      <div
        dir="rtl"
        className="
                  rounded-3xl
                    border
                    bg-linear-to-b
                  from-white
                  to-slate-50
                  dark:from-card
                  dark:to-card
                    p-4
                    sm:p-8
                    md:p-10
                    text-right
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    leading-20
                    font-medium
                    text-emerald-900
                    dark:text-emerald-100
                    select-none
              "
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: "2",
        }}
      >
        {surahNumber !== 1 &&
          surahNumber !== 9 && (
            <>
              <div
                className="
                      text-4xl
                      text-emerald-700
                      dark:text-emerald-300
                      text-center
                    "
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div
                className="
                          text-center
                          text-emerald-500
                          dark:text-emerald-300
                          text-xl
                        "
              >
                ❈────────────❈
              </div>
            </>
          )}
        {verses.map((verse, index) => {
          const verseNumber = index + 1;

          const isActive =
            activeAyah === verseNumber &&
            activeSurah === surahNumber;
          return (
            <span
              id={`ayah-${verseNumber}`}
              key={verse.id}
              ref={
                verseNumber === targetAyah
                  ? targetRef
                  : null
              }
              onClick={() => {
                setActiveAyah(
                  surahNumber,
                  verseNumber
                )
                setLastReadPosition(
                  surahNumber,
                  verseNumber
                );
              }}
              onTouchStart={(e) =>
                handleLongPress(
                  verseNumber,
                  e.touches[0].clientX,
                  e.touches[0].clientY,
                )
              }

              onTouchEnd={clearLongPress}

              onMouseDown={(e) =>
                handleLongPress(
                  verseNumber,
                  e.clientX,
                  e.clientY,
                )
              }

              onMouseUp={clearLongPress}
              className={`
                      cursor-pointer
                      rounded-lg
                      px-2
                      py-1
                      transition-all
                      duration-200

                      ${isActive
                  ? `
                            bg-amber-100
                            dark:bg-amber-500/20
                          `
                  : `
                            hover:bg-emerald-50
                            dark:hover:bg-emerald-900/20
                          `
                }
                    `}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            >
              {verse.text_uthmani}

              <span
                className="
              mx-2
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-emerald-200
              bg-linear-to-br
              from-emerald-50
              to-amber-50
              text-sm
              font-semibold
              text-emerald-700
              shadow-sm
              dark:border-emerald-800
              dark:from-emerald-950/40
              dark:to-amber-950/20
              dark:text-emerald-300
            "
              >
                {index + 1}
              </span>

              {" "}
            </span>
          )
        })}
      </div >
      <FloatingAyahToolbar
        visible={
          selectedAyah !== null
        }
        x={toolbarPosition.x}
        y={toolbarPosition.y}
        bookmarked={
          isSelectedBookmarked
        }
        onBookmark={() => {
          if (!selectedAyah) {
            return;
          }

          if (
            isSelectedBookmarked
          ) {
            removeBookmark(
              surahNumber,
              selectedAyah
            );
            haptics.success()
            toast.success(
              "Bookmark removed"
            );
          } else {
            addBookmark(
              surahNumber,
              selectedAyah
            );
            haptics.success()
            toast.success(
              "Bookmark added"
            );
          }

          setSelectedAyah(null);
        }}
        onCopy={async () => {
          if (!selectedAyah) {
            return;
          }

          const verse =
            verses[selectedAyah - 1];
          await copyAyah(
            verse.text_uthmani,
            surahNumber,
            selectedAyah,
            chapterNameSimple
          )

          setSelectedAyah(null);
        }}
        onShare={async () => {
          if (!selectedAyah) {
            return;
          }

          const verse =
            verses[selectedAyah - 1];

          await shareAyah(
            verse.text_uthmani,
            surahNumber,
            selectedAyah,
            chapterNameSimple
          )
        }}
        onShareImage={async () => {
          if (!shareCardRef.current) {
            return;
          }

          try {
            await shareVerseImage(
              shareCardRef.current,
              `ayah-${surahNumber}-${selectedAyah}.png`
            );
          } catch (error) {
            console.error(
              "Image share failed",
              error
            );
          }

          setSelectedAyah(null);
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
        {selectedAyah !== null && (
          <div ref={shareCardRef}>
            <ShareVerseCard
              arabic={
                verses[selectedAyah - 1]
                  .text_uthmani
              }
              surahName={
                chapterNameSimple ??
                `Surah ${surahNumber}`
              }
              surahNumber={surahNumber}
              ayahNumber={selectedAyah}
            />
          </div>
        )}
      </div>
    </>
  );
}