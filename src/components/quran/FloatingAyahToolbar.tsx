"use client";

import {
    Bookmark,
    Copy,
    Share2,
} from "lucide-react";

interface Props {
    visible: boolean;

    x: number;
    y: number;

    bookmarked: boolean;

    onBookmark: () => void;

    onCopy: () => void;

    onShare: () => void;
}

export default function FloatingAyahToolbar({
    visible,
    x,
    y,
    bookmarked,
    onBookmark,
    onCopy,
    onShare,
}: Props) {
    if (!visible) {
        return null;
    }

    return (
        <div
            style={{
                left: x,
                top: y,
                transform:
                    "translate(-50%, -100%)",
            }}
            className="
                    fixed
                    z-50
                    flex
                    items-center
                    gap-1
                    rounded-2xl
                    border
                    border-emerald-200/20
                    bg-black/95
                    backdrop-blur-xl
                    shadow-2xl
                    px-2
                    py-2
                    "
        >
            <button
                onClick={onBookmark}
                className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-emerald-500/15
                            text-emerald-500
                            transition-all
                            hover:scale-105
                            hover:bg-emerald-500/25
                        "
            >
                <Bookmark
                    size={18}
                    strokeWidth={2}
                    className="h-5 w-5"
                    fill={
                        bookmarked
                            ? "currentColor"
                            : "none"
                    }
                />
            </button>

            <button
                onClick={onCopy}
                className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-sky-500/15
                            text-sky-500
                            transition-all
                            hover:scale-105
                            hover:bg-sky-500/25
                        "
            >
                <Copy
                    size={18}
                    strokeWidth={2}
                    className="h-5 w-5"
                />
            </button>

            <button
                onClick={onShare}
                className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-violet-500/15
                            text-violet-500
                            transition-all
                            hover:scale-105
                            hover:bg-violet-500/25
                        "
            >
                <Share2
                    size={18}
                    strokeWidth={2}
                    className="h-5 w-5"
                />
            </button>
        </div>
    );
}