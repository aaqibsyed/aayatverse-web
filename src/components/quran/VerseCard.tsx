import AppCard from "@/components/shared/AppCard";
import { haptics } from "@/lib/haptics";
import { copyAyah, shareAyah } from "@/lib/quran-actions";
import { useQuranReaderStore } from "@/store/quran-reader-store";
import { toast } from "sonner";

interface Props {
  surahNumber: number;
  verseNumber: number;
  arabic: string;
  chapterNameSimple?: string;
}

export default function VerseCard({
  surahNumber,
  verseNumber,
  arabic,
  chapterNameSimple,
}: Props) {

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
                  rounded-xl
                  border
                  px-3
                  py-2
                  text-sm
                  font-medium
                  transition
                  hover:bg-muted
                "
            >
              {isBookmarked
                ? "⭐ Saved"
                : "🔖 Bookmark"}
            </button>

            <button
              onClick={async (e) => {
                e.stopPropagation();

                await copyAyah(
                  arabic,
                  surahNumber,
                  verseNumber,
                  chapterNameSimple,
                );
              }}
              className="
                rounded-xl
                border
                px-3
                py-2
                text-sm
                font-medium
                transition
                hover:bg-muted
              "
            >
              📋 Copy
            </button>
            <button
              onClick={async (e) => {
                e.stopPropagation();

                await shareAyah(
                  arabic,
                  surahNumber,
                  verseNumber,
                  chapterNameSimple
                );
              }}
              className="
    rounded-xl
    border
    px-3
    py-2
    text-sm
    font-medium
    transition
    hover:bg-muted
  "
            >
              🔗 Share
            </button></div>
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
    </AppCard >
  );
}