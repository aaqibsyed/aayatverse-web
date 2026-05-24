"use client";

import AppCard from "@/components/shared/AppCard";

import {
  Minus,
  Plus,
  BookOpen,
} from "lucide-react";

import { useQuranReaderStore } from "@/store/quran-reader-store";

export default function ReaderControls() {
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
  } = useQuranReaderStore();

  return (
    <AppCard className="mb-8 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-600" />

          <span className="font-medium">
            Quran Reader
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={()=> {
              decreaseFontSize()
              navigator.vibrate?.(8);
            }}
            className="
              rounded-lg
              border
              p-2
              transition
              hover:bg-muted
            "
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="min-w-[60px] text-center text-sm">
            {fontSize}px
          </span>

          <button
            onClick={()=>{
              increaseFontSize()
              navigator.vibrate?.(12);
            }}
            className="
              rounded-lg
              border
              p-2
              transition
              hover:bg-muted
            "
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </AppCard>
  );
}