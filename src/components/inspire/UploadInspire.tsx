"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const videoPreview = useMemo(() => {
    if (!video) return null;
    return URL.createObjectURL(video);
  }, [video]);

  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  useEffect(() => {
    if (loading && progress < 90) {
      const interval = setInterval(() => {
        setProgress((p) => Math.min(p + 5, 90));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [loading, progress]);

  async function handleUpload() {
    if (!title || !caption || !video) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    setProgress(10);

    try {
      const filePath = `videos/${Date.now()}-${video.name}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, video);

      if (uploadError) throw uploadError;
      setProgress(100);

      const { data } = supabase.storage
        .from("media")
        .getPublicUrl(filePath);

      const videoUrl = data.publicUrl;

      const res = await fetch("/api/inspire/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          caption,
          videoUrl,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "DB insert failed");
      }

      toast.success("Sent for approval");
      setProgress(0);
      router.push("/inspire");

    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Upload failed";

      console.error(err);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
      
      <div className="w-full max-w-md p-6 rounded-3xl border border-gray-200 dark:border-border bg-white dark:bg-card shadow-xl space-y-5">

        {/* 🕌 Header */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Upload Inspire
          </h1>
          <p className="text-sm text-gray-500 dark:text-muted-foreground">
            Share something beneficial 🌙
          </p>
        </div>

        {/* 🎬 Preview */}
        <div className="w-full h-52 bg-gray-100 dark:bg-muted rounded-xl flex items-center justify-center overflow-hidden">
          {videoPreview ? (
            <video
              src={videoPreview}
              className="w-full h-full object-cover"
              controls
            />
          ) : (
            <span className="text-sm text-gray-400">
              Video preview
            </span>
          )}
        </div>

        {/* ✏️ Title */}
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-border bg-white dark:bg-background text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* ✏️ Caption */}
        <textarea
          placeholder="Caption"
          rows={3}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-border bg-white dark:bg-background text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        {/* 📁 File Picker */}
        <label className="block">
          <div className="cursor-pointer border-2 border-dashed border-gray-300 dark:border-border rounded-xl p-3 text-center text-sm text-gray-500 dark:text-muted-foreground hover:border-green-500 transition">
            {video ? "Change Video" : "Select Video"}
          </div>
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) =>
              setVideo(e.target.files?.[0] || null)
            }
          />
        </label>

        {/* 🚀 Button */}
        <div className="relative">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 transition text-white font-medium disabled:opacity-70 relative overflow-hidden shadow-md"
          >
            {loading ? `${progress}% Uploading...` : "Upload"}

            {loading && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-white/40 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        </div>

      </div>
    </div>
  );
}