"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
}

export default function VideoPlayer({
  src,
}: Props) {
  const ref =
    useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;

    if (!video) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        {
          threshold: 0.75,
        }
      );

    observer.observe(video);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className="h-full w-full object-cover"
      playsInline
      muted
      loop
      controls={false}
    />
  );
}