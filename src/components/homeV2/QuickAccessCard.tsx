"use client";

import Link from "next/link";
import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;

  icon: LucideIcon;

  gradient: string;

  shadow: string;

  comingSoon?: boolean;
}

export default function QuickAccessCard({
  title,
  description,
  href,
  icon: Icon,
  gradient,
  shadow,
  comingSoon,
}: Props) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        overflow-hidden

        rounded-[28px]

        border

        border-slate-200/70
        dark:border-slate-800

        bg-gradient-to-br
        ${gradient}
        ${shadow}
        p-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl

        active:scale-[0.98]
      `}
    >
      {/* glow */}
      <div
        className="
          absolute
          -right-6
          -top-6

          h-20
          w-20

          rounded-full

          bg-white/20

          blur-2xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              bg-white/60
              dark:bg-slate-900/40

              backdrop-blur-sm
            "
          >
            <Icon
              className="
                h-6
                w-6
              "
            />
          </div>

          {comingSoon && (
            <span
              className="
                rounded-full

                bg-white/70
                dark:bg-slate-900/50

                px-2
                py-1

                sm:px-3
                sm:py-2

                text-[10px]
                font-medium
              "
            >
              Soon
            </span>
          )}
        </div>

        <h3
          className="
            mt-5

            text-lg
            font-semibold

            text-slate-900
            dark:text-slate-50
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            text-sm

            text-slate-600
            dark:text-slate-400
          "
        >
          {description}
        </p>

        <div
          className="
            mt-5

            flex
            items-center

            text-sm
            font-medium
          "
        >
          Open

          <ArrowRight
            className="
              ml-2

              h-4
              w-4

              transition-transform

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </Link>
  );
}