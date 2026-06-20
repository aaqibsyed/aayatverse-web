export interface Verse {
  id: number;
  verse_key: string;
  text_uthmani: string;
  translation: string;
  tafsir?: string;
}

export interface VerseResponse {
  verses: Verse[];
}

interface TranslationVerse {
  resource_id: number;
  text: string;
}

export interface TranslationResponse {
  translations: TranslationVerse[];
}