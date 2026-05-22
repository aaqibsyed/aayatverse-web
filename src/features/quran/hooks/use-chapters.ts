"use client";

import { useQuery } from "@tanstack/react-query";

import { getChapters } from "../services/quran.service";

export function useChapters() {
  return useQuery({
    queryKey: ["chapters"],
    queryFn: getChapters,
  });
}