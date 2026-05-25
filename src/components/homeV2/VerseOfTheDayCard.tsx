"use client";

import Link from "next/link";
import {
    Bookmark,
    Copy,
    Share2,
    ImageIcon,
    ArrowRight,
    Sparkles,
} from "lucide-react";

interface Props {
    arabic: string;
    translation: string;
    surahName: string;
    surahNumber: number;
    ayahNumber: number;

    onBookmark?: () => void;
    onCopy?: () => void;
    onShare?: () => void;
    onShareImage?: () => void;
}

export default function VerseOfTheDayCard({
    arabic,
    translation,
    surahName,
    surahNumber,
    ayahNumber,

    onBookmark,
    onCopy,
    onShare,
    onShareImage,
}: Props) {
    return (
        <div
            className="
                        relative
                        overflow-hidden

                        rounded-[32px]

                        border
                        border-emerald-100

                        dark:border-emerald-900/40

                        bg-gradient-to-br
                        from-emerald-50
                        via-white
                        to-emerald-100/50

                        dark:from-emerald-950/20
                        dark:via-slate-900
                        dark:to-slate-900

                        p-6

                        shadow-lg
                        shadow-emerald-900/5
                        "
        >
            <div
                className="
                            absolute
                            -right-10
                            -top-10

                            h-40
                            w-40

                            rounded-full

                            bg-emerald-500/10

                            blur-3xl
                            "
            />
            {/* <div
                className="
                            absolute
                            bottom-4
                            left-4
                            opacity:20%
                            text-8xl
                            text-emerald-500/10
                            "
            >
                ۞
            </div> */}
            <div
                className="
                            absolute
                            right-6
                            top-6

                            text-5xl

                            text-emerald-500/10
                            "
            >
                ۞
            </div>
            <div>
                <p className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-emerald-500
                ">
                    Daily Reflection
                </p>

                <h3 className="
                mt-2
                text-xl
                font-semibold
                ">
                    Verse Of The Day
                </h3>
            </div>
            <div
                className="
                            mt-4
                            md:mt-0
                            mx-auto
                            max-w-3xl
                            rounded-[28px]
                            border
                            border-emerald-300
                            dark:border-white/10
                            bg-white/30
                            dark:bg-slate-800/20
                            backdrop-blur-sm
                            px-8
                            py-2
                        "
            >
                <div
                    className="
                                absolute
                                left-1/2
                                top-1/2

                                h-48
                                w-48

                                -translate-x-1/2
                                -translate-y-1/2

                                rounded-full

                                bg-emerald-500/10

                                blur-3xl
                            "
                />
                <div
                    dir="rtl"
                    className="

                            text-center

                            text-3xl
                            md:text-6xl
                            leading-loose

                            font-medium

                            text-emerald-900
                            dark:text-emerald-100
                            "
                >
                    {arabic}
                </div>
                <p className="
                        text-xs
                        uppercase
                        tracking-[0.2em]

                        text-slate-500
                        dark:text-slate-500
                        text-center
                        ">
                    Translation
                </p>
                <p
                    className="
                            mx-auto
                            max-w-2xl

                            text-center

                            text-base
                            leading-relaxed

                            text-slate-600
                            dark:text-slate-400
                            "
                >
                    {translation}
                </p>
            </div>
            <div
                className="
                        mt-4

                        flex
                        justify-center
                        "
            >
                <div
                    className="
                            rounded-full

                            border

                            border-emerald-100
                            dark:border-slate-700

                            bg-white
                            dark:bg-slate-800

                            px-4
                            py-2

                            text-sm
                            font-medium
                            "
                >
                    Surah {surahName} • {surahNumber}:{ayahNumber}
                </div>
            </div>
            <div
                className="
                            mt-4

                            flex
                            flex-wrap
                            justify-center
                            gap-2
                            "
            >
                <button
                    onClick={onBookmark}
                    className="
                                flex
                                items-center
                                gap-2

                                rounded-full

                                border

                                px-4
                                py-2

                                text-xs
                                bg-white/70
                                backdrop-blur
                                dark:bg-slate-800/60
                                hover:scale-105
                                hover:bg-emerald-50
                                dark:hover:bg-slate-700
                                "
                >
                    <Bookmark className="h-5 w-5" />
                    Save
                </button>
                <button
                    onClick={onCopy}
                    className="
                                flex
                                items-center
                                gap-2

                                rounded-full

                                border


                                px-4
                                py-2

                                text-xs
                                 bg-white/70
                                backdrop-blur
                                dark:bg-slate-800/60
                                hover:scale-105
                                hover:bg-emerald-50
                                dark:hover:bg-slate-700
                                "
                >
                    <Copy className="h-5 w-5" />
                    Copy
                </button>
                <button
                    onClick={onShare}
                    className="
                                flex
                                items-center
                                gap-2

                                rounded-full

                                border

                                px-4
                                py-2

                                text-xs
                                 bg-white/70
                                backdrop-blur
                                dark:bg-slate-800/60
                                hover:scale-105
                                hover:bg-emerald-50
                                dark:hover:bg-slate-700
                                "
                >
                    <Share2 className="h-5 w-5" />
                    Share
                </button>
                <button
                    onClick={onShareImage}
                    className="
                                flex
                                items-center
                                gap-2

                                rounded-full

                                border


                                px-4
                                py-2

                                text-xs
                                 bg-white/70
                                backdrop-blur
                                dark:bg-slate-800/60
                                hover:scale-105
                                hover:bg-emerald-50
                                dark:hover:bg-slate-700
                                "
                >
                    <ImageIcon className="h-5 w-5" />
                    Image
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                <Link
                    href={`/quran/${surahNumber}?ayah=${ayahNumber}`}
                    className="
                            inline-flex
                            items-center
                            gap-2

                            font-medium

                            text-emerald-600
                            hover:text-emerald-700
                            rounded-full

                            bg-emerald-500/10

                            px-5
                            py-3
                            "
                >
                    Read Context

                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}