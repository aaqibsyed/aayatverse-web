export interface InspireItem {
  id: string;

  title: string;

  summary: string;

  videoUrl: string;

  creator: {
    name: string;
    verified?: boolean;
  };

  source?: {
    type: "quran" | "hadith";
    title: string;
    href: string;
  };
}