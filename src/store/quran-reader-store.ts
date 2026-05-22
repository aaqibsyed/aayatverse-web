import { create } from "zustand";

export type ViewMode =
  | "reading"
  | "study";

interface QuranReaderState {
  viewMode: ViewMode;

  fontSize: number;

  setViewMode: (
    mode: ViewMode
  ) => void;

  increaseFontSize: () => void;

  decreaseFontSize: () => void;
}

export const useQuranReaderStore =
  create<QuranReaderState>((set) => ({
    viewMode: "reading",

    // fontSize: 36,

    fontSize:
      typeof window !== "undefined" &&
        window.innerWidth < 768
        ? 28
        : 36,

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
  }));