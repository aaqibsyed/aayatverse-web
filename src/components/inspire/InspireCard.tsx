"use client";

import VideoPlayer from "./VideoPlayer";
import { InspireItem } from "./types";

interface Props {
  item: InspireItem;
}

export default function InspireCard({ item }: Props) {
  return (
    <section
      className="
relative
h-dvh
w-full
snap-start
snap-always
overflow-hidden
bg-black
"
    >
      {/* Video */}
      <div className="absolute inset-0">
        <VideoPlayer src={item.videoUrl} />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Overlay */}
      <div className="absolute bottom-28 left-0 right-0 z-10 p-6 text-white">
        <h2 className="text-2xl font-bold">
          {item.title}
        </h2>

        <p className="mt-2 max-w-md text-white/90">
          {item.summary}
        </p>

        {item.source && (
          <div className="mt-4 inline-flex rounded-full bg-black/40 px-4 py-2 backdrop-blur-md">
            <span className="mr-2">
              {item.source.type === "quran" ? "📖" : "📚"}
            </span>

            {item.source.title}
          </div>
        )}
      </div>
    </section>
  );
}