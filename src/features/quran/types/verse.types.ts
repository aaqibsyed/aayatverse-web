export interface Verse {
  id: number;
  verse_key: string;
  text_uthmani: string;
  translation?: string;
}

export interface TranslationVerse {
  id: number;
  verse_key: string;
  text: string;
}

export interface TranslationResponse {
  translations: TranslationVerse[];
}
export interface VerseResponse {
  verses: Verse[];
}