import { toast } from "sonner";
import { haptics } from "./haptics";

export async function copyAyah(
  arabic: string,
  surahNumber: number,
  ayahNumber: number,
  chapterNameSimple?: string,
) {
  const text = `
${arabic}

Surah ${chapterNameSimple ?? surahNumber}
(${surahNumber}:${ayahNumber})

AayatVerse.com
`.trim();

  await navigator.clipboard.writeText(
    text
  );

  haptics.success()
  toast.success(
    "Ayah copied"
  );
}

export async function shareAyah(
  arabic: string,
  surahNumber: number,
  ayahNumber: number,
  chapterNameSimple?: string,
) {
  const text = `
${arabic}

Surah ${chapterNameSimple ?? surahNumber}
(${surahNumber}:${ayahNumber})

https://aayatverse.com/quran/${surahNumber}?ayah=${ayahNumber}
`.trim();

  try {
    if (navigator.share) {
      await navigator.share({
        title: "AayatVerse",
        text,
      });
    } else {
      await navigator.clipboard.writeText(
        text
      );
      haptics.success()
      toast.success(
        "Share text copied"
      );
    }
  } catch {}
}