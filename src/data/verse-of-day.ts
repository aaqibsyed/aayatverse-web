export const DAILY_VERSES = [
    {
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translation:
            "Indeed, with hardship comes ease.",
        surahName: "Ash-Sharh",
        surahNumber: 94,
        ayahNumber: 6,
    },

    {
        arabic:
            "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        translation:
            "Allah does not burden a soul beyond that it can bear.",
        surahName: "Al-Baqarah",
        surahNumber: 2,
        ayahNumber: 286,
    },

    {
        arabic:
            "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        translation:
            "Surely in the remembrance of Allah do hearts find rest.",
        surahName: "Ar-Ra'd",
        surahNumber: 13,
        ayahNumber: 28,
    },

    {
        arabic:
            "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translation:
            "Indeed, with hardship comes ease.",
        surahName: "Ash-Sharh",
        surahNumber: 94,
        ayahNumber: 5,
    },

    {
        arabic:
            "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        translation:
            "Whoever places their trust in Allah, He is sufficient for them.",
        surahName: "At-Talaq",
        surahNumber: 65,
        ayahNumber: 3,
    },

    {
        arabic:
            "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        translation:
            "Indeed, Allah is with the patient.",
        surahName: "Al-Baqarah",
        surahNumber: 2,
        ayahNumber: 153,
    },
];

export function getVerseOfDay() {
    const day =
        Math.floor(
            Date.now() / 86400000
        );

    return DAILY_VERSES[
        day % DAILY_VERSES.length
    ];
}