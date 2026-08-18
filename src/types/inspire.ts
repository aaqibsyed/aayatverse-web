export interface InspireReference {
  type: "quran" | "hadith";

  title: string;

  href: string;
}

export interface InspireVideo {
  id: string;

  slug: string;

  title: string;

  caption: string;

  videoUrl: string;

  creator: string;

  tags: string[];

  reference?: InspireReference;
}

export type Inspire = {
  id: string;
  title: string;
  caption: string;
  video_path: string;
  is_published: boolean;
  status: "pending" | "approved" | "rejected";
};