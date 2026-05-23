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

  setActiveAyah: (
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

        setActiveAyah: (
          surah,
          ayah
        ) =>
          set({
            activeSurah: surah,
            activeAyah: ayah,
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
        }),
      }
    )
  );