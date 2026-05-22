"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        px-4
        py-2
        transition-all
        duration-300
        hover:-translate-x-1
        hover:border-emerald-300
        hover:bg-emerald-50
        dark:hover:bg-emerald-950/30
        mb-2
      "
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}