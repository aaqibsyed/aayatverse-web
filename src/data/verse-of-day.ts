export const DAILY_VERSES = [
  {
    arabic:
      "إِنَّ مَعَ الْعُسْرِ يُسْرًا",

    englishTranslation:
      "Indeed, with hardship comes ease.",

    urduTranslation:
      "بے شک ہر تنگی کے ساتھ آسانی ہے۔",

    surahName: "Ash-Sharh",
    surahNumber: 94,
    ayahNumber: 6,
  },

  {
    arabic:
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",

    englishTranslation:
      "Allah does not burden a soul beyond that it can bear.",

    urduTranslation:
      "اللہ کسی جان پر اس کی طاقت سے بڑھ کر بوجھ نہیں ڈالتا۔",

    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 286,
  },

  {
    arabic:
      "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",

    englishTranslation:
      "Surely in the remembrance of Allah do hearts find rest.",

    urduTranslation:
      "یاد رکھو! اللہ کے ذکر ہی سے دلوں کو اطمینان حاصل ہوتا ہے۔",

    surahName: "Ar-Ra'd",
    surahNumber: 13,
    ayahNumber: 28,
  },

  {
    arabic:
      "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",

    englishTranslation:
      "Indeed, with hardship comes ease.",

    urduTranslation:
      "پس یقیناً ہر تنگی کے ساتھ آسانی ہے۔",

    surahName: "Ash-Sharh",
    surahNumber: 94,
    ayahNumber: 5,
  },

  {
    arabic:
      "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",

    englishTranslation:
      "Whoever places their trust in Allah, He is sufficient for them.",

    urduTranslation:
      "اور جو اللہ پر بھروسہ کرے تو وہ اس کے لیے کافی ہے۔",

    surahName: "At-Talaq",
    surahNumber: 65,
    ayahNumber: 3,
  },

  {
    arabic:
      "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",

    englishTranslation:
      "Indeed, Allah is with the patient.",

    urduTranslation:
      "بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",

    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 153,
  },
];

export function getVerseOfDay() {
  const day = Math.floor(
    Date.now() / 86400000
  );

  return DAILY_VERSES[
    day % DAILY_VERSES.length
  ];
}