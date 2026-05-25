"use client";

interface Props {
  arabic: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
}

export default function ShareVerseCard({
  arabic,
  surahName,
  surahNumber,
  ayahNumber,
}: Props) {
  return (
    <div
      className="
      w-[1080px]
      min-h-[1080px]
      bg-gradient-to-br
      from-emerald-50
      via-white
      to-amber-50
      flex
      flex-col
      items-center
      justify-center
      p-24
      text-center
      "
    >
      <div
      dir="rtl"
        className="
        max-w-4xl
        text-[72px]
        leading-[2]
        text-emerald-900
        font-medium
      "
      >
        {arabic}
      </div>

      <div
        className="
        mt-20
        text-4xl
        font-semibold
        text-emerald-700
      "
      >
        {surahName}
      </div>

      <div
        className="
        mt-4
        text-3xl
        text-muted-foreground
      "
      >
        {surahNumber}:{ayahNumber}
      </div>

      <div
        className="
        mt-24
        text-2xl
        tracking-widest
        text-emerald-600
      "
      >
        AAYATVERSE.COM
      </div>
    </div>
  );
}

// export default function ShareVerseCard({
//   arabic,
// }: Props) {
//   return (
//  <div
//   style={{
//     width: 1080,
//     height: 1080,
//     background: "#ffffff",
//     color: "#065f46",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "72px",
//     direction: "rtl",
//   }}
// >
//   {arabic}
// </div>
//   );
// }