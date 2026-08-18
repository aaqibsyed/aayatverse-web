"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

type Inspire = {
  id: string;
  title: string;
  caption: string;
  video_path: string;
  status: string;
};

export default function AdminPage() {
  const [data, setData] = useState<Inspire[]>([]);
  const [edits, setEdits] = useState<
    Record<string, { title: string; caption: string }>
  >({});

  // ✅ FIXED: fetch pending videos
  useEffect(() => {
    fetch("/api/inspire/update")
      .then((res) => res.json())
      .then(setData);
  }, []);

  async function handleAction(
    id: string,
    action: "approve" | "reject"
  ) {
    try {
      const edited = edits[id];

      const res = await fetch("/api/inspire/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important
        },
        body: JSON.stringify({
          id,
          action,
          title: edited?.title,
          caption: edited?.caption,
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error);

      toast.success(`Video ${action}d`);

      // remove from UI after action
      setData((prev) => prev.filter((item) => item.id !== id));

    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error";

      toast.error(message);
    }
  }

  return (
    <div className="p-4 grid gap-4 md:grid-cols-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border p-4 bg-card shadow"
        >
          <video
            src={item.video_path}
            controls
            className="w-full rounded-lg mb-3"
          />

          {/* ✅ CONTROLLED INPUT */}
          <input
            className="w-full mb-2 p-2 border rounded bg-transparent"
            value={edits[item.id]?.title ?? item.title}
            onChange={(e) =>
              setEdits((prev) => ({
                ...prev,
                [item.id]: {
                  title: e.target.value,
                  caption:
                    prev[item.id]?.caption ?? item.caption,
                },
              }))
            }
          />

          {/* ✅ CONTROLLED TEXTAREA */}
          <textarea
            className="w-full mb-2 p-2 border rounded bg-transparent"
            value={edits[item.id]?.caption ?? item.caption}
            onChange={(e) =>
              setEdits((prev) => ({
                ...prev,
                [item.id]: {
                  title:
                    prev[item.id]?.title ?? item.title,
                  caption: e.target.value,
                },
              }))
            }
          />

          <div className="flex gap-2">
            <button
              onClick={() =>
                handleAction(item.id, "approve")
              }
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Approve
            </button>

            <button
              onClick={() =>
                handleAction(item.id, "reject")
              }
              className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}