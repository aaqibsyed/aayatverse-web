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