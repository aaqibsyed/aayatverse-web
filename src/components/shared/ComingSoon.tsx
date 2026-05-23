import Link from "next/link";
import { Construction } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ComingSoon({
  title,
  description,
}: Props) {
  return (
    <main
      className="
        mx-auto
        flex
        min-h-[calc(100vh-4rem)]
        max-w-3xl
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-emerald-200
          bg-emerald-50
          dark:border-emerald-900
          dark:bg-emerald-950/30
        "
      >
        <Construction
          className="
            h-10
            w-10
            text-emerald-600
          "
        />
      </div>

      <p
        className="
          mb-2
          text-sm
          font-medium
          uppercase
          tracking-wider
          text-emerald-600
        "
      >
        Work In Progress
      </p>

      <h1
        className="
          text-4xl
          font-bold
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-4
          max-w-xl
          text-muted-foreground
        "
      >
        {description}
      </p>

      <Link
        href="/"
        className="
          mt-8
          rounded-xl
          border
          px-5
          py-3
          transition
          hover:border-emerald-300
          hover:bg-emerald-50
          dark:hover:bg-emerald-950/30
        "
      >
        Return Home
      </Link>
    </main>
  );
}