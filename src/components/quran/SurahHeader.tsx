import ViewModeToggle from "./ViewModeToggle";

interface Props {
  surahNumber: number;
  englishName: string;
  arabicName: string;
  versesCount: number;
  revelationPlace: string;
}

export default function SurahHeader({
  surahNumber,
  englishName,
  arabicName,
  versesCount,
  revelationPlace,
}: Props) {
  return (
    <div
      className="
        relative
        mb-10
        overflow-hidden
        rounded-3xl
        border
        bg-linear-to-br
        from-emerald-50
        via-background
        to-amber-50
        p-8
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-40
          w-40
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />
      <div className="relative z-10">
        <div className="text-center">
          <div className="flex flex-col items-center">
            {/* <span
    className="
      mb-2
      rounded-full
      border
      border-emerald-200
      bg-emerald-50
      px-4
      py-1
      text-sm
      font-medium
      text-emerald-700
      dark:border-emerald-800
      dark:bg-emerald-950/30
      dark:text-emerald-400
    "
  >
    Surah {surahNumber}
  </span> */}

            <h1
              className="
    text-3xl
    font-bold
    sm:text-4xl
  "
            >
              <span className="text-emerald-600">
                {String(surahNumber).padStart(2, "0")}
              </span>

              <span className="mx-2 text-muted-foreground">
                •
              </span>

              {englishName}
            </h1>
          </div>

          <p
            dir="rtl"
            className="
            mt-5
            text-4xl
            sm:text-5xl
            font-medium
            text-emerald-700
            dark:text-emerald-400
                  "
          >
            {arabicName}
          </p>

          <p className="
            mt-4
            text-sm
            tracking-wide
            uppercase
            text-muted-foreground
                  
          ">
            {revelationPlace} • {versesCount} Verses
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <ViewModeToggle />
        </div>
      </div>
    </div>

  );
}