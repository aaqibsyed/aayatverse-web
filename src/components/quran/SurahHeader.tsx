import ViewModeToggle from "./ViewModeToggle";

interface Props {
  englishName: string;
  arabicName: string;
  versesCount: number;
  revelationPlace: string;
}

export default function SurahHeader({
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
          <h1 className="text-4xl font-bold">
            {englishName}
          </h1>

          <p
            dir="rtl"
            className="
            mt-5
    text-5xl
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