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
    label: "Taqi",
    language: "en",
  },
  {
    id: 85,
    label: "Haleem",
    language: "en",
  },
  {
    id: 234,
    label: "Urdu",
    language: "ur",
  },
];

export const TAFSIRS: TafsirSource[] = [
  {
    id: 169,
    label: "Ibn Kathir",
    language: "en",
  },
  {
    id: 168,
    label: "Maarif",
    language: "en",
  },
  {
    id: 159,
    label: "Bayan",
    language: "ur",
  },
  {
    id: 160,
    label: "Urdu",
    language: "ur",
  },
];