import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ViewMode =
  | "reading"
  | "study";

interface QuranReaderState {
  viewMode: ViewMode;

  fontSize: number;

  activeAyah: number | null;
  activeSurah: number | null;

  lastReadSurah: number | null;
  lastReadAyah: number | null;

  setActiveAyah: (
    surah: number,
    ayah: number
  ) => void;

  setLastReadPosition: (
    surah: number,
    ayah: number
  ) => void;

  setViewMode: (
    mode: ViewMode
  ) => void;

  increaseFontSize: () => void;

  decreaseFontSize: () => void;
}

export const useQuranReaderStore =
  create<QuranReaderState>()(
    persist(
      (set) => ({
        viewMode: "reading",

        fontSize: 32,

        // fontSize:
        //   typeof window !== "undefined" &&
        //     window.innerWidth < 768
        //     ? 28
        //     : 36,

        activeAyah: null,
        activeSurah: null,

        lastReadSurah: null,
        lastReadAyah: null,

        setActiveAyah: (
          surah,
          ayah
        ) =>
          set({
            activeSurah: surah,
            activeAyah: ayah,
          }),


        setLastReadPosition: (
          surah,
          ayah
        ) =>
          set({
            lastReadSurah: surah,
            lastReadAyah: ayah,
          }),
        setViewMode: (viewMode) =>
          set({ viewMode }),

        increaseFontSize: () =>
          set((state) => ({
            fontSize: Math.min(
              state.fontSize + 2,
              56
            ),
          })),

        decreaseFontSize: () =>
          set((state) => ({
            fontSize: Math.max(
              state.fontSize - 2,
              24
            ),
          })),
      }),
      {
        name: "aayatverse-reader",
        partialize: (state) => ({
          viewMode: state.viewMode,
          fontSize: state.fontSize,
          lastReadSurah:
            state.lastReadSurah,

          lastReadAyah:
            state.lastReadAyah,
        }),
      }
    )
  );