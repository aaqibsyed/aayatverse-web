"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Compass, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* <div className="absolute inset-0 -z-10">
        <div
          className="
                      absolute
                      left-1/2
                      top-20
                      h-96
                      w-96
                      -translate-x-1/2
                      rounded-full
                      bg-emerald-500/10
                      blur-3xl
                    "
        />
      </div> */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
      absolute
      left-1/2
      top-10
      h-[500px]
      w-[500px]
      -translate-x-1/2
      rounded-full
      bg-emerald-500/20
      blur-[120px]
    "
        />

        <div
          className="
      absolute
      right-20
      top-40
      h-64
      w-64
      rounded-full
      bg-amber-400/15
      blur-[100px]
    "
        />
      </div>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border px-4 py-2 text-sm">
            🌙 The Digital Home For Muslims
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Learn.
          <span className="text-emerald-600"> Practice.</span>
          <br />
          Grow In Islam.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Quran, Hadith, Prayer Times, Duas, Qibla,
          Islamic Learning and much more —
          all in one beautiful platform.
        </motion.p> */}

        <div>
          <span className="rounded-full border px-4 py-2 text-sm">
            🌙 The Digital Home For Muslims
          </span>
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Learn.
          <span className="text-emerald-600"> Practice.</span>
          <br />
          Grow In Islam.
        </h1>

        <p className="mt-6 max-w-4xl text-lg text-muted-foreground">
          Quran, Hadith, Prayer Times, Duas, Qibla,
          Islamic Learning and much more —
          all in one beautiful platform.
        </p>

        <div className="mt-10 w-full max-w-4xl">
          <div className="relative ">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search Quran, Hadith, Duas..."
              className="h-16 rounded-2xl pl-12 text-base shadow-lg focus-visible:ring-emerald-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Get Started
          </Button>

          <Button size="lg" variant="outline">
            Explore Quran
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-3xl font-bold">114</h3>
            <p className="text-sm text-muted-foreground">
              Surahs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">6236</h3>
            <p className="text-sm text-muted-foreground">
              Ayahs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">40K+</h3>
            <p className="text-sm text-muted-foreground">
              Hadith
            </p>
          </div>
        </div>

        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <BookOpen className="mb-3 h-6 w-6" />
            <h3 className="font-semibold">Quran</h3>
            <p className="text-sm text-muted-foreground">
              Read translations, tafsir and recitations.
            </p>
          </div>

          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Clock className="mb-3 h-6 w-6" />
            <h3 className="font-semibold">Prayer Times</h3>
            <p className="text-sm text-muted-foreground">
              Accurate prayer schedules worldwide.
            </p>
          </div>

          <div className="rounded-3xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Compass className="mb-3 h-6 w-6" />
            <h3 className="font-semibold">Qibla Finder</h3>
            <p className="text-sm text-muted-foreground">
              Find the direction of the Kaaba instantly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}