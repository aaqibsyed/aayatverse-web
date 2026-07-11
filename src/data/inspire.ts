import { InspireItem } from "@/components/inspire/types";

export const inspireFeed: InspireItem[] = [
  {
    id: "1",

    title: "The Virtue of Surah Al-Kahf",

    summary:
      "Read Surah Al-Kahf every Friday for light between two Fridays.",

    videoUrl: "/videos/kahf.mp4",

    creator: {
      name: "AayatVerse",
      verified: true,
    },

    source: {
      type: "hadith",
      title: "Sahih Muslim 809",
      href: "/hadith/809",
    },
  },

  {
    id: "2",

    title: "Indeed, Allah is with the patient",

    summary:
      "A reminder about patience during hardship.",

    videoUrl: "/videos/patience.mp4",

    creator: {
      name: "AayatVerse",
      verified: true,
    },

    source: {
      type: "quran",
      title: "Surah Al-Baqarah 2:153",
      href: "/quran/2/153",
    },
  },
];