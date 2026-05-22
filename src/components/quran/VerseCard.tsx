import AppCard from "@/components/shared/AppCard";
import { useQuranReaderStore } from "@/store/quran-reader-store";

interface Props {
  surahNumber: number;
  verseNumber: number;
  arabic: string;
}

export default function VerseCard({
  surahNumber,
  verseNumber,
  arabic,
}: Props) {

  const {
    activeAyah,
    activeSurah,
    setActiveAyah,
  } = useQuranReaderStore();

  const isActive =
    activeAyah === verseNumber &&
    activeSurah === surahNumber;

  return (
    <AppCard
      onClick={() =>
        setActiveAyah(
          surahNumber,
          verseNumber
        )
      }
      className={`
        p-6
        cursor-pointer
        transition-all
        duration-300
        ease-out

        ${
          isActive
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
    </AppCard>
  );
}