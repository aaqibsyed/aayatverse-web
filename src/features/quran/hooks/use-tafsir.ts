"use client";

import { useQuery } from "@tanstack/react-query";
import { getVerseTafsir } from "../services/tafsir.service";

export function useTafsir(
    verseKey: string,
    tafsirId: number,
    enabled: boolean,
) {
    return useQuery({
        queryKey: ["tafsir", verseKey, tafsirId,],
        queryFn: () =>
            getVerseTafsir(verseKey, tafsirId),
        enabled,
        // placeholderData:
        //     (previousData) =>
        //         previousData,
    });

}