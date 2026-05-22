export interface Verse {
  id: number;
  verse_key: string;
  text_uthmani: string;
}

export interface VerseResponse {
  verses: Verse[];
}