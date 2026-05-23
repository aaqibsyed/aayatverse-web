import { BookOpen } from "lucide-react";

interface PageLoaderProps {
  text: string
}

export default function PageLoader({text}:PageLoaderProps) {
  return (
    <div
      className="
        flex
        min-h-[70vh]
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <div className="relative">
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-emerald-500/20
            blur-2xl
            animate-pulse
          "
        />

        <div
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-emerald-200
            bg-background
          "
        >
          <BookOpen
            className="
              h-8
              w-8
              text-emerald-600
            "
          />
        </div>
      </div>

      <h2
        className="
          mt-6
          text-xl
          font-semibold
        "
      >
        {text}
      </h2>

      <p
        className="
          mt-2
          text-sm
          text-muted-foreground
        "
      >
        Preparing your experience
      </p>
    </div>
  );
}