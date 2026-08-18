import { supabase } from "@/lib/supabase/client";
import { InspireVideo } from "@/types/inspire";

/**
 * Get all published inspire videos
 */
export async function getPublishedInspires(): Promise<InspireVideo[]> {
  const { data, error } = await supabase
    .from("inspires")
    .select("*")
    // .eq("is_published", true)
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching inspires:", error);
    throw error;
  }

  return (data || []).map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    caption: item.caption,
    videoUrl: item.video_path,

    // ✅ FIXED: required fields
    creator: "AayatVerse",

    tags: [],

    reference: item.reference ?? null,
  }));
}

/**
 * Get single inspire by slug
 */
export async function getInspireBySlug(
  slug: string
): Promise<InspireVideo | null> {
  const { data, error } = await supabase
    .from("inspires")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    caption: data.caption,
    videoUrl: data.video_path,

    // ✅ FIXED here too
    creator: "AayatVerse",

    tags: [],

    reference: data.reference ?? null,
  };
}
