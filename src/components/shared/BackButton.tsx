"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({
  href,
  label,
}: BackButtonProps) {
  return (
    <Link
      href={href}
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
        mb-1
      "
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}