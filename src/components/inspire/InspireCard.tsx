"use client";

import { InspireVideo } from "@/types/inspire";
import VideoPlayer from "./VideoPlayer";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface Props {
  item: InspireVideo;
}

export default function InspireCard({ item }: Props) {
  const handleShare = async () => {
    const url =
  process.env.NEXT_PUBLIC_APP_URL +
  `/inspire/${item.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: `${item.title}\n\n${item.caption}\n\nWatch on AayatVerse`,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);

      toast.success(
        "Link copied to clipboard."
      );
    } catch {
      // user cancelled
    }
  };
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Overlay */}
      <div
        className="
absolute

bottom-28
left-0
right-0

z-10

p-6

text-white

transition-all

duration-500

animate-in

fade-in

slide-in-from-bottom-4
"
      >
        <h2 className="text-2xl font-bold flex gap-2 items-center">
          {item.title}
          <button
            onClick={handleShare}
            className="
inline-flex
items-center
gap-2

rounded-full

bg-black/40

px-4
py-2

backdrop-blur-md

transition

hover:bg-black/50
active:scale-95
"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </h2>

        <p className="mt-2 max-w-md text-white/90">
          {item.caption}
        </p>

        <div className="mt-5 flex items-center gap-3">
          {item.reference && (
            <button
              className="
inline-flex
items-center
gap-2

rounded-full

bg-black/40

px-4
py-2

backdrop-blur-md
"
            >
              <span>
                {item.reference.type === "quran"
                  ? "📖"
                  : "📚"}
              </span>

              {item.reference.title}
            </button>
          )}

          
        </div>
      </div>
    </section>
  );
}