import { toast } from "sonner";
import { haptics } from "./haptics";
import { toBlob } from "html-to-image";


export async function copyAyah(
  arabic: string,
  englishTranslation: string,
  urduTranslation: string,
  surahNumber: number | string,
  ayahNumber: number,
  chapterNameSimple?: string,
) {
  const text = `
${arabic}

${englishTranslation}

${urduTranslation}

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
  englishTranslation: string,
  urduTranslation: string,
  surahNumber: number,
  ayahNumber: number,
  chapterNameSimple?: string,
) {
  const text = `
${arabic}

${englishTranslation}

${urduTranslation}

Surah ${chapterNameSimple ?? surahNumber}
(${surahNumber}:${ayahNumber})

Read on AayatVerse
https://aayatverse.com/quran/${surahNumber}?ayah=${ayahNumber}
`.trim();

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Shared via: AayatVerse.com",
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
  } catch { }
}


export async function shareVerseImage(
  element: HTMLElement,
  fileName: string
) {
  console.log(element);
  console.log(
    element?.offsetWidth,
    element?.offsetHeight
  );
  await document.fonts.ready;

  const blob = await toBlob(element, {
    cacheBust: true,
  });

  if (!blob) {
    throw new Error(
      "Failed to generate image"
    );
  }

  const file = new File(
    [blob],
    fileName,
    {
      type: "image/png",
    }
  );

  if (
    navigator.canShare?.({
      files: [file],
    })
  ) {
    try {
      await navigator.share({
        files: [file],
        title: "Shared via: AayatVerse.com",
      });

      return;
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error(error);

      toast.error(
        "Unable to share image"
      );
    }
  }

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
}