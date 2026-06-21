"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    TRANSLATIONS,
} from "@/features/quran/constants/study-resources";

import { Check } from "lucide-react";

import { useQuranReaderStore } from "@/store/quran-reader-store";
import { useState } from "react";

export default function TranslationPill() {

    const [open, setOpen] =
        useState(false);
    const {
        selectedTranslationId,
        setTranslation,
    } = useQuranReaderStore();

    const selected =
        TRANSLATIONS.find(
            (item) =>
                item.id ===
                selectedTranslationId
        );

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
        >
            <PopoverTrigger asChild>
                <button
                    className="
                                    rounded-full

                                    border

                                    border-emerald-200

                                    bg-emerald-50

                                    px-3
                                    py-1.5

                                    text-xs
                                    font-medium

                                    text-emerald-700

                                    transition-all

                                    hover:border-emerald-300

                                    dark:border-emerald-800
                                    dark:bg-emerald-950/30
                                    dark:text-emerald-300
                                    shadow-lg
                                    shadow-emerald-500/10
                                "
                >
                    {selected?.label}
                </button>
            </PopoverTrigger>

            <PopoverContent
                align="end"
                className="
          w-48
          rounded-2xl
        "
            >
                <div className="space-y-1">
                    {TRANSLATIONS.map(
                        (translation) => (
                            <button
                                key={
                                    translation.id
                                }
                                onClick={() => {
                                    setTranslation(
                                        translation.id
                                    );

                                    setOpen(false);
                                }}
                                className={`
                                            flex
                                            w-full
                                            items-center
                                            justify-between

                                            rounded-xl
                                            px-3
                                            py-2

                                            text-sm

                                            transition-colors

                                            ${selectedTranslationId ===
                                                                                    translation.id
                                                                                    ? `
                                                    bg-emerald-50
                                                    text-emerald-700

                                                    dark:bg-emerald-950/30
                                                    dark:text-emerald-300
                                                    `
                                                                                    : `
                                                    hover:bg-muted
                                                    `
                                                                                }
                                            `}
                            >
                                <span>
                                    {
                                        translation.label
                                    }
                                </span>

                                {selectedTranslationId ===
                                    translation.id && (
                                        <Check
                                            className="
                                                    h-4
                                                    w-4

                                                    text-emerald-500
                                                    "
                                        />
                                    )}
                            </button>
                        )
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
}