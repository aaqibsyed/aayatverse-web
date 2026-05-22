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

    fontSize: 48,

    setViewMode: (viewMode) =>
      set({ viewMode }),

    increaseFontSize: () =>
      set((state) => ({
        fontSize: Math.min(
          state.fontSize + 4,
          72
        ),
      })),

    decreaseFontSize: () =>
      set((state) => ({
        fontSize: Math.max(
          state.fontSize - 4,
          28
        ),
      })),
  }));