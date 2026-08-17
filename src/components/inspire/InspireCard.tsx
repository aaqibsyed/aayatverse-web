"use client";

import { InspireVideo } from "@/types/inspire";
import VideoPlayer from "./VideoPlayer";
import { Copy, Share, Share2 } from "lucide-react";
import { toast } from "sonner";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  item: InspireVideo;
}

function InspireCard({ item }: Props) {
  const [isSharing, setIsSharing] = useState(false);
  const handleCopy = async () => {
    const url = `${window.location.origin}/inspire/${item.slug}`;

    const message = `✨ ${item.title}

${item.caption}

🤍 Watch on AayatVerse:
${url}`;
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };
  const handleShare = async () => {
    if (isSharing) return;
    setIsSharing(true);
    const url = `${window.location.origin}/inspire/${item.slug}`;

    const message = `✨ ${item.title}

${item.caption}

🤍 Watch this Inspire on AayatVerse:
${url}`;

    try {
      try {
        await navigator.clipboard.writeText(message);
      } catch {
        console.warn("Clipboard failed");
      }

      // 🔥 Try VIDEO SHARE first
      const response = await fetch(item.videoUrl);

      if (response.ok) {
        const blob = await response.blob();

        const file = new File([blob], `${item.slug}-aayatverse.mp4`, {
          type: "video/mp4",
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `Shared via AayatVerse.com/inspire`,
            text: `✨ ${item.title}\n\n${item.caption}\n\n${url}`,
          });
          await navigator.clipboard.writeText(message);
          toast.success("Video shared • Caption copied. Paste it in chat ✨");
          return; // ✅ stop here if video share works
        }
      }

      // 🔁 FALLBACK → text share
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: message,
          url,
        });
        return;
      }

      // 🧷 LAST FALLBACK → clipboard
      await navigator.clipboard.writeText(message);
      toast.success("Link copied to clipboard.");
    } catch (err) {
      console.error(err);

      // safe fallback
      await navigator.clipboard.writeText(message);
      toast.error("Sharing failed. Link copied.");
    } finally {
      setIsSharing(false);
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
      <div className="absolute top-6 left-5 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full 
                  bg-black/40 backdrop-blur-md 
                  border border-white/10">

          <Image
            src="/aayatverse-logo.png"
            alt="AayatVerse"
            width={24}
            height={24}
            className="object-contain"
            priority
          />

          <span className="text-white text-sm font-semibold tracking-wide">
            AayatVerse
          </span>
        </div>
      </div>
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



          {/* 📋 COPY */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md border border-white/10 hover:bg-black/50 active:scale-95"
          >
            {/* 📋 Copy */}
            <Copy className="h-4 w-4" />
          </button>

          {/* 📤 SHARE */}
          <button
            onClick={handleShare}
            disabled={isSharing}
            className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md border border-white/10 hover:bg-black/50 active:scale-95 disabled:opacity-50"
          >
            {/* {isSharing ? "Preparing..." : "📤 Share"} */}
            <Share className="h-4 w-4" />
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

export default React.memo(InspireCard);