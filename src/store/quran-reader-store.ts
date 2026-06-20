import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Bookmark {
  surahNumber: number;
  ayahNumber: number;
  createdAt: number;
}

export type ViewMode =
  | "reading"
  | "study";

interface QuranReaderState {

  bookmarks: Bookmark[];

  addBookmark: (
    surah: number,
    ayah: number
  ) => void;

  removeBookmark: (
    surah: number,
    ayah: number
  ) => void;

  viewMode: ViewMode;

  fontSize: number;

  activeAyah: number | null;
  activeSurah: number | null;

  lastReadSurah: number | null;
  lastReadAyah: number | null;

  recentlyRead: number[],

  selectedTranslationId: number;

  selectedTafsirId: number;

  setTranslation: (
    translationId: number
  ) => void;

  setTafsir: (
    tafsirId: number
  ) => void;


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

        bookmarks: [],

        recentlyRead: [],

        selectedTranslationId: 20,

        selectedTafsirId: 169,


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
          set((state) => ({
            lastReadSurah: surah,
            lastReadAyah: ayah,

            recentlyRead: [
              surah,

              ...state.recentlyRead.filter(
                (id) => id !== surah
              ),
            ].slice(0, 10),
          })),

        addBookmark: (
          surah,
          ayah
        ) =>
          set((state) => {
            const exists =
              state.bookmarks.some(
                (bookmark) =>
                  bookmark.surahNumber ===
                  surah &&
                  bookmark.ayahNumber === ayah
              );

            if (exists) {
              return {};
            }

            return {
              bookmarks: [
                ...state.bookmarks,
                {
                  surahNumber: surah,
                  ayahNumber: ayah,
                  createdAt: Date.now(),
                },
              ],
            };
          }),

        removeBookmark: (
          surah,
          ayah
        ) =>
          set((state) => ({
            bookmarks:
              state.bookmarks.filter(
                (bookmark) =>
                  !(
                    bookmark.surahNumber ===
                    surah &&
                    bookmark.ayahNumber === ayah
                  )
              ),
          })),

        setViewMode: (viewMode) =>
          set({ viewMode }),

        setTranslation: (
          translationId
        ) =>
          set({
            selectedTranslationId:
              translationId,
          }),

        setTafsir: (
          tafsirId
        ) =>
          set({
            selectedTafsirId:
              tafsirId,
          }),

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

          bookmarks: state.bookmarks,
          recentlyRead:
            state.recentlyRead,
          selectedTranslationId:
            state.selectedTranslationId,

          selectedTafsirId:
            state.selectedTafsirId,
        }),
      }
    )
  );