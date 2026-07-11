"use client";

import { inspireFeed } from "@/data/inspire";
import InspireCard from "./InspireCard";

export default function InspireFeed() {
  return (
    <div
  className="
fixed
inset-0
z-50
overflow-y-auto
snap-y
snap-mandatory
bg-black
"
>
      {inspireFeed.map(
        (item) => (
          <InspireCard
            key={item.id}
            item={item}
          />
        )
      )}
    </div>
  );
}