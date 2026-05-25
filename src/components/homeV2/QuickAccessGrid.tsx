"use client";

import {
  BookOpen,
  LibraryBig,
  HandHeart,
  Clock3,
  Compass,
  ScrollText,
} from "lucide-react";

import SectionHeader from "./SectionHeader";
import QuickAccessCard from "./QuickAccessCard";

export default function QuickAccessGrid() {
  return (
    <section>
      <SectionHeader
        badge="Explore"
        title="Quick Access"
        description="Everything you need in one place."
      />

      <div
        className="
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-3
        "
      >
        <QuickAccessCard
          title="Quran"
          description="Read and reflect."
          href="/quran"
          icon={BookOpen}
          gradient="
            from-emerald-50
            to-emerald-100/70

            dark:from-emerald-950/30
            dark:to-emerald-900/10
          "
          shadow="shadow-emerald-500/20"
        />

        <QuickAccessCard
          title="Hadith"
          description="Authentic collections."
          href="/hadith"
          icon={LibraryBig}
          comingSoon
          gradient="
            from-sky-50
            to-sky-100/70

            dark:from-sky-950/30
            dark:to-sky-900/10
          "
          shadow="shadow-sky-500/20"
        />

        <QuickAccessCard
          title="Duas"
          description="Daily supplications."
          href="/duas"
          icon={HandHeart}
          comingSoon
          gradient="
            from-amber-50
            to-amber-100/70

            dark:from-amber-950/30
            dark:to-amber-900/10
          "
          shadow="shadow-amber-500/20"
        />

        <QuickAccessCard
          title="Prayer"
          description="Prayer times."
          href="/prayer-times"
          icon={Clock3}
          comingSoon
          gradient="
            from-violet-50
            to-violet-100/70

            dark:from-violet-950/30
            dark:to-violet-900/10
          "
          shadow="shadow-violet-500/20"
        />

        <QuickAccessCard
          title="Qibla"
          description="Find direction."
          href="#"
          icon={Compass}
          comingSoon
          gradient="
            from-orange-50
            to-orange-100/70

            dark:from-orange-950/30
            dark:to-orange-900/10
          "
          shadow="shadow-orange-500/20"
        />

        <QuickAccessCard
          title="Tafsir"
          description="Understand deeper."
          href="#"
          icon={ScrollText}
          comingSoon
          gradient="
            from-indigo-50
            to-indigo-100/70

            dark:from-indigo-950/30
            dark:to-indigo-900/10
          "
          shadow="shadow-indigo-500/20"
        />
      </div>
    </section>
  );
}