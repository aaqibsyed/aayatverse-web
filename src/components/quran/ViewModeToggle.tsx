"use client";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

import { useQuranReaderStore } from "@/store/quran-reader-store";

export default function ViewModeToggle() {
  const { viewMode, setViewMode } =
    useQuranReaderStore();

  return (
    <ToggleGroup
      type="single"
      value={viewMode}
      onValueChange={(value) => {
        if (
          value === "reading" ||
          value === "study"
        ) {
          setViewMode(value);
        }
        navigator.vibrate?.(12);
      }}
    >
      <ToggleGroupItem value="reading">
        Reading
      </ToggleGroupItem>

      <ToggleGroupItem value="study">
        Study
      </ToggleGroupItem>
    </ToggleGroup>
  );
}