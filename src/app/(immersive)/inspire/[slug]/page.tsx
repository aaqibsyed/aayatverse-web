import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InspireFeed from "@/components/inspire/InspireFeed";
import { getInspireBySlug } from "@/services/inspire/inspire.service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const inspire = getInspireBySlug(slug);

  if (!inspire) {
    return {
      title: "Inspire | AayatVerse",
    };
  }

  return {
    title: inspire.title,
    description: inspire.caption,

    openGraph: {
      title: inspire.title,
      description: inspire.caption,
      url: `https://aayatverse.com/inspire/${slug}`,
      siteName: "AayatVerse",
      type: "video.other",
    },

    twitter: {
      card: "summary_large_image",
      title: inspire.title,
      description: inspire.caption,
    },
  };
}

export default async function InspireSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const inspire = getInspireBySlug(slug);

  if (!inspire) {
    notFound();
  }

  return <InspireFeed
        initialSlug={slug}
    />
}