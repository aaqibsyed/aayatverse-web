"use client";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { haptics } from "@/lib/haptics";

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
        haptics.tap()
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