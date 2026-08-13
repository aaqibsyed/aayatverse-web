import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InspireFeed from "@/components/inspire/InspireFeed";
import { getInspireBySlug } from "@/services/inspire/inspire.service";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } =  params;

  const inspire = await getInspireBySlug(slug);

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
      images: [
        {
          url: "https://aayatverse.com/og-default.jpg", // 👈 temporary
          width: 1200,
          height: 630,
        },
      ],
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

  return <InspireFeed
    initialSlug={params.slug}
  />
}