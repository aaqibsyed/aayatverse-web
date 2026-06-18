"use client";

import { motion } from "framer-motion";
import {
  Search,
  Bookmark,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";

const surahs = [
  {
    id: 1,
    name: "Al-Fatihah",
    english: "The Opening",
    verses: 7,
    type: "Makki",
    theme: "Guidance & Mercy",
  },
  {
    id: 2,
    name: "Ar-Rahman",
    english: "The Most Merciful",
    verses: 78,
    type: "Madani",
    theme: "Blessings & Gratitude",
  },
  {
    id: 3,
    name: "Yaseen",
    english: "Heart of the Quran",
    verses: 83,
    type: "Makki",
    theme: "Faith & Resurrection",
  },
];

export default function TarjumaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white transition-all dark:bg-[#0B0F14] light:bg-[#FAF7F2]">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-5 py-6 max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Tarjuma
            </h1>
            <p className="text-sm text-white/60 mt-1">
              Understand the Quran beautifully
            </p>
          </div>

          <button className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:scale-105 transition">
            <Moon size={18} />
          </button>
        </header>

        {/* Daily Ayah Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-yellow-500/5" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              Daily Reflection
            </span>

            <h2 className="mt-4 text-3xl leading-relaxed font-medium text-white">
              “Indeed, with hardship comes ease.”
            </h2>

            <p className="mt-3 text-white/60">
              Surah Ash-Sharh • Ayah 6
            </p>

            <button className="mt-6 rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:scale-[1.02] transition">
              Continue Reading
            </button>
          </div>
        </motion.section>

        {/* Search */}
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <Search size={18} className="text-white/50" />
          <input
            placeholder="Search Surah..."
            className="bg-transparent outline-none w-full placeholder:text-white/40"
          />
        </div>

        {/* Continue Reading */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Continue Reading</h3>

            <button className="text-sm text-emerald-300">
              View All
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">Surah Al-Baqarah</p>
                <p className="text-sm text-white/50 mt-1">
                  Last read: Ayah 127
                </p>
              </div>

              <button className="rounded-2xl bg-white/10 p-3 hover:bg-white/20 transition">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Surah List */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-5">
            Explore Surahs
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {surahs.map((surah) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={surah.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-semibold">
                      {surah.name}
                    </p>

                    <p className="text-white/50 mt-1">
                      {surah.english}
                    </p>
                  </div>

                  <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                    <ChevronRight size={18} />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {surah.verses} Ayahs
                  </span>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {surah.type}
                  </span>
                </div>

                <p className="mt-5 text-sm text-white/60 leading-relaxed">
                  {surah.theme}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
