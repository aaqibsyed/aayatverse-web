export interface TranslationSource {
  id: number;
  label: string;
  language: string;
}

export interface TafsirSource {
  id: number;
  label: string;
  language: string;
}

export const TRANSLATIONS: TranslationSource[] = [
  {
    id: 20,
    label: "Saheeh",
    language: "en",
  },
  {
    id: 84,
    label: "Usmani",
    language: "en",
  },
  {
    id: 85,
    label: "Haleem",
    language: "en",
  },
];

export const TAFSIRS: TafsirSource[] = [
  {
    id: 169,
    label: "Ibn Kathir",
    language: "en",
  },
];