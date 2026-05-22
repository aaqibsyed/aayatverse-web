"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Compass,
  Clock3,
  Heart,
} from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-20
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-amber-400/10
            blur-3xl
          "
        />
      </div>

      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="
              mb-8
              rounded-full
              border
              px-4
              py-2
              text-sm
              backdrop-blur
            "
          >
            🌙 Launching Soon
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
              sm:text-7xl
            "
          >
            AayatVerse
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              text-muted-foreground
              sm:text-xl
            "
          >
            The Digital Home for Muslims.
          </p>

          <p
            className="
              mt-4
              max-w-3xl
              text-muted-foreground
            "
          >
            Authentic Quran, Hadith, Prayer Times,
            Duas, Qibla Finder, Islamic Learning,
            and much more — all in one beautiful
            platform.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Feature
            icon={<BookOpen className="h-5 w-5" />}
            title="Quran"
          />

          <Feature
            icon={<Heart className="h-5 w-5" />}
            title="Duas & Adhkar"
          />

          <Feature
            icon={<Clock3 className="h-5 w-5" />}
            title="Prayer Times"
          />

          <Feature
            icon={<Compass className="h-5 w-5" />}
            title="Qibla Finder"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="
              rounded-3xl
              border
              bg-card/70
              px-8
              py-6
              shadow-sm
              backdrop-blur
            "
          >
            <p className="font-medium">
              Building something meaningful for
              the Ummah.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-muted-foreground
              "
            >
              The first public release is on the
              way. Stay tuned.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <div
          className="
            mt-16
            text-sm
            text-muted-foreground
          "
        >
          © {new Date().getFullYear()} AayatVerse
        </div>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-2xl
        border
        px-4
        py-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}