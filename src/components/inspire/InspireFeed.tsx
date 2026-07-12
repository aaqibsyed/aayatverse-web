"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import InspireCard from "./InspireCard";

import type { InspireVideo } from "@/types/inspire";

import { shuffleArray } from "@/lib/shuffle";

import { createNextBatch } from "@/lib/shuffle";

interface Props {
  initialSlug?: string;
}

export default function InspireFeed({
  initialSlug,
}: Props) {
  const [allVideos, setAllVideos] = useState<
    InspireVideo[]
  >([]);

  const [feed, setFeed] = useState<
    InspireVideo[]
  >([]);

  const observerRef =
    useRef<IntersectionObserver | null>(
      null
    );

  useEffect(() => {
    async function loadFeed() {
      const response =
        await fetch("/api/inspire");

      const data: InspireVideo[] =
        await response.json();

      let shuffled = createNextBatch(data);

      if (initialSlug) {
        const index = shuffled.findIndex(
          (v) => v.slug === initialSlug
        );

        if (index !== -1) {
          shuffled = [
            ...shuffled.slice(index),
            ...shuffled.slice(0, index),
          ];
        }
      }

      setAllVideos(data);
      setFeed(shuffled);
    }

    loadFeed();
  }, []);

  const appendBatch = useCallback(() => {
    if (allVideos.length === 0) return;

    setFeed((current) => {
      const last = current[current.length - 1];

      const nextBatch = createNextBatch(
        allVideos,
        last
      );

      const updated = [
        ...current,
        ...nextBatch,
      ];

      if (updated.length > 30) {
        return updated.slice(updated.length - 30);
      }

      return updated;
    });
  }, [allVideos]);

  useEffect(() => {
    if (feed.length < 3) return;

    observerRef.current?.disconnect();

    const cards =
      document.querySelectorAll(
        "[data-inspire-card]"
      );

    const trigger =
      cards[cards.length - 3];

    if (!trigger) return;

    observerRef.current =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            appendBatch();
          }
        },
        {
          threshold: 0.9,
        }
      );

    observerRef.current.observe(
      trigger
    );

    return () =>
      observerRef.current?.disconnect();
  }, [feed, appendBatch]);

  return (
    <div
      className="
inspire-scroll
fixed
inset-0
z-50

overflow-y-auto

overscroll-y-contain

snap-y
snap-mandatory

scroll-smooth

bg-black
"
    >
      {feed.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          data-inspire-card
        >
          <InspireCard
            item={item}
          />
        </div>
      ))}
    </div>
  );
}