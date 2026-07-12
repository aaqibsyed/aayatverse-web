"use client";

import { create } from "zustand";

interface InspireAudioState {
  muted: boolean;
  toggleMuted: () => void;
}

export const useInspireAudio =
  create<InspireAudioState>((set) => ({
    muted: true,

    toggleMuted: () =>
      set((state) => ({
        muted: !state.muted,
      })),
  }));