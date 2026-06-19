import AppCard from "@/components/shared/AppCard";
import { haptics } from "@/lib/haptics";
import { copyAyah, shareAyah, shareVerseImage } from "@/lib/quran-actions";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import { Bookmark, Copy, ImageIcon, Share } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import ShareVerseCard from "./ShareVerseCard";

interface Props {
  surahNumber: number;
  verseNumber: number;
  arabic: string;
  translation: string;
  chapterNameSimple?: string;
}

export default function VerseCard({
  surahNumber,
  verseNumber,
  arabic,
  translation,
  chapterNameSimple,
}: Props) {

  const [showTafsir, setShowTafsir] =
    useState(false);

  const shareCardRef =
    useRef<HTMLDivElement>(null);

  const {
    activeAyah,
    activeSurah,
    setActiveAyah,
    setLastReadPosition,
    bookmarks,
    addBookmark,
    removeBookmark,
  } = useQuranReaderStore();

  const isActive =
    activeAyah === verseNumber &&
    activeSurah === surahNumber;

  const isBookmarked =
    bookmarks.some(
      (bookmark) =>
        bookmark.surahNumber ===
        surahNumber &&
        bookmark.ayahNumber ===
        verseNumber
    );

  return (
    <AppCard
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
      className={`
        p-6
        cursor-pointer
        transition-all
        duration-300
        ease-out

        ${isActive
          ? `
              border-amber-400
              bg-amber-50

              dark:border-amber-500
              dark:bg-amber-500/10
            `
          : `
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-emerald-200
            `
        }
      `}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="
          flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-emerald-200
    bg-linear-to-br
    from-emerald-50
    to-amber-50
    font-semibold
    text-emerald-700
    shadow-sm
    dark:border-emerald-800
    dark:from-emerald-950/40
    dark:to-amber-950/20
    dark:text-emerald-300
        ">
          {verseNumber}
        </div>
        {isActive && (
          <div className="flex gap-2 items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();

                if (isBookmarked) {
                  removeBookmark(
                    surahNumber,
                    verseNumber
                  );
                  toast.success(
                    "Bookmark removed"
                  );
                  haptics.success()
                } else {
                  addBookmark(
                    surahNumber,
                    verseNumber
                  );
                  haptics.success()
                  toast.success(
                    "Bookmark added"
                  );
                }
              }}
              className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-500/15
                        text-emerald-500
                        transition-all
                        hover:scale-105
                        hover:bg-emerald-500/25
                      "
            >
              <Bookmark
                size={18}
                strokeWidth={2}
                className="h-5 w-5"
                fill={
                  isBookmarked
                    ? "currentColor"
                    : "transparent"
                }
              />
            </button>

            <button
              onClick={async (e) => {
                e.stopPropagation();

                await copyAyah(
                  arabic,
                  translation,
                  surahNumber,
                  verseNumber,
                  chapterNameSimple,
                );
              }}
              className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-sky-500/15
                          text-sky-500
                          transition-all
                          hover:scale-105
                          hover:bg-sky-500/25
                        "
            >
              <Copy size={18} strokeWidth={2} className="h-5 w-5" />
            </button>
            <button
              onClick={async (e) => {
                e.stopPropagation();

                await shareAyah(
                  arabic,
                  translation,
                  surahNumber,
                  verseNumber,
                  chapterNameSimple
                );
              }}
              className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-violet-500/15
                          text-violet-500
                          transition-all
                          hover:scale-105
                          hover:bg-violet-500/25
                        "
            >
              <Share size={18} strokeWidth={2} className="h-5 w-5" />
            </button>
            <button
              onClick={async () => {
                if (!shareCardRef.current) {
                  return;
                }

                try {
                  await shareVerseImage(
                    shareCardRef.current,
                    `ayah-${surahNumber}-${verseNumber}.png`
                  );
                } catch (error) {
                  console.error(
                    "Image share failed",
                    error
                  );
                }

              }}
              className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-pink-500/15
                            text-pink-500
                            transition-all
                            hover:scale-105
                            hover:bg-pink-500/25
                        "
            >
              <ImageIcon
                size={18}
                strokeWidth={2}
                className="h-4 w-4"
              />
            </button>
          </div>
        )}
      </div>
      <p
        dir="rtl"
        className="
                  text-right
                  text-3xl
                  leading-loose
                  font-medium
                text-emerald-900
                dark:text-emerald-100
                  "
      >
        {arabic}
      </p>
      {translation && (
        <div className="mt-8 pt-6 border-t border-border/50">
          <div
            className="
                        mb-3
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-emerald-600
                        dark:text-emerald-400
                        flex
                        justify-between
                      "
          >
            <div>
              Translation
            </div>
            <div>
              <button
                onClick={() =>
                  setShowTafsir(!showTafsir)
                }
              >
                📖 Tafsir
              </button>
            </div>
          </div>

          <p
            className="
                        text-base
                        leading-8
                        text-slate-700
                        dark:text-slate-300
                      "
          >
            {translation}
          </p>
        </div>
      )}
      {showTafsir && (
        <div
          className="
                      mt-4
                      rounded-2xl
                      border
                      p-5
                      bg-muted/30
                    "
        >
          Tafsir coming soon
        </div>
      )}
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
              arabic
            }
            translation={translation}
            surahName={
              chapterNameSimple ??
              `Surah ${surahNumber}`
            }
            surahNumber={surahNumber}
            ayahNumber={verseNumber}
          />
        </div>
      </div>
    </AppCard >
  );
}