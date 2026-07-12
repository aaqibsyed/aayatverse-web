"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useInspireAudio } from "@/hooks/useInspireAudio";

interface Props {
  src: string;
}

export default function VideoPlayer({
  src,
}: Props) {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  const { muted, toggleMuted } =
    useInspireAudio();

  const userPausedRef =
    useRef(false);

  const [playing, setPlaying] =
    useState(true);

  const [showPlayIcon, setShowPlayIcon] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  //Progress Bar

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress =
      () => {
        if (!video.duration) return;

        setProgress(
          (video.currentTime /
            video.duration) *
          100
        );
      };

    video.addEventListener(
      "timeupdate",
      updateProgress
    );

    return () =>
      video.removeEventListener(
        "timeupdate",
        updateProgress
      );
  }, []);

  // Sync mute

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.muted = muted;
  }, [muted]);

  // Sync playing state with actual video

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const onPlay = () => {
      setPlaying(true);
      setShowPlayIcon(false);
    };

    const onPause = () => {
      setPlaying(false);

      // only show play icon
      // if user paused manually

      if (userPausedRef.current) {
        setShowPlayIcon(true);
      }
    };

    video.addEventListener(
      "play",
      onPlay
    );

    video.addEventListener(
      "pause",
      onPause
    );

    return () => {
      video.removeEventListener(
        "play",
        onPlay
      );

      video.removeEventListener(
        "pause",
        onPause
      );
    };
  }, []);

  // Auto play when visible

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            if (
              !userPausedRef.current
            ) {
              video.play().catch(() => { });
            }
          } else {
            video.pause();

            userPausedRef.current =
              false;

            setShowPlayIcon(false);
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

  const togglePlay =
    async () => {
      const video =
        videoRef.current;

      if (!video) return;

      if (video.paused) {
        userPausedRef.current =
          false;

        await video.play();
      } else {
        userPausedRef.current =
          true;

        video.pause();
      }
    };

  return (
    <div
      className="
relative
h-full
w-full
"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="
h-full
w-full
object-cover
"
        playsInline
        muted={muted}
        loop
        preload="auto"
      />

      {/* Play Icon */}

      <div
        className={`
pointer-events-none

absolute
left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2

transition-all
duration-300

${showPlayIcon
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75"
          }
`}
      >
        <div
          className="
flex
h-20
w-20
items-center
justify-center

rounded-full

bg-black/40

backdrop-blur-md
"
        >
          <Play
            className="
h-10
w-10
fill-white
text-white
"
          />
        </div>
      </div>

      {/* Speaker */}

      <button
        onClick={(e) => {
          e.stopPropagation();

          toggleMuted();
        }}
        className="
absolute
right-5
top-5
z-20

flex
h-11
w-11
items-center
justify-center

rounded-full

bg-black/40

backdrop-blur-md

transition

active:scale-95
"
      >
        {muted ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 text-white" />
        )}
      </button>
      <div
        className="
absolute

right-2

top-1/2

-translate-y-1/2

h-40

w-1

rounded-full

bg-white/20

overflow-hidden
"
      >
        <div
          className="
absolute

bottom-0

left-0

w-full

bg-white

transition-all
duration-75
"
          style={{
            height: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}