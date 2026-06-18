"use client";

interface Props {
  arabic: string;
  translation: string | undefined;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
}

export default function ShareVerseCard({
  arabic,
  translation,
  surahName,
  surahNumber,
  ayahNumber,
}: Props) {
  const arabicFontSize =
    arabic.length > 320
      ? 40
      : arabic.length > 240
        ? 48
        : arabic.length > 160
          ? 56
          : arabic.length > 100
            ? 64
            : 72;

  return (
    <div
      style={{
        width: 1080,
        height: 1080,

        position: "relative",

        overflow: "hidden",

        background:
          "linear-gradient(135deg,#064e3b 0%,#047857 50%,#10b981 100%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: 60,
      }}
    >
      {/* Top Glow */}
      <div
        style={{
          position: "absolute",

          top: -150,
          right: -150,

          width: 500,
          height: 500,

          borderRadius: "50%",

          background:
            "rgba(255,255,255,0.08)",

          filter: "blur(90px)",
        }}
      />

      {/* Bottom Glow */}
      <div
        style={{
          position: "absolute",

          left: -200,
          bottom: -200,

          width: 650,
          height: 650,

          borderRadius: "50%",

          background:
            "rgba(245,158,11,0.18)",

          filter: "blur(120px)",
        }}
      />

      {/* Main Card */}
      <div
        style={{
          width: "100%",
          height: "100%",

          position: "relative",

          overflow: "hidden",

          background:
            "rgba(255,255,255,0.97)",

          borderRadius: 52,

          boxShadow:
            "0 40px 120px rgba(0,0,0,.18)",

          padding: 80,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: 520,

            color: "#059669",

            opacity: 0.03,

            pointerEvents: "none",

            userSelect: "none",
          }}
        >
          ۞
        </div>

        {/* Bismillah */}
        <div
          dir="rtl"
          style={{
            fontSize: 120,

            color: "#059669",

            lineHeight: 1,

            marginTop: 10,
          }}
        >
          ﷽
        </div>

        <div
          style={{
            width: 260,
            height: 2,

            background: "#10b981",

            marginTop: 16,
            marginBottom: 40,
          }}
        />

        {/* Ayah */}
        <div
          dir="rtl"
          style={{
            flex: 1,

            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textAlign: "center",

            color: "#064e3b",

            fontSize: arabicFontSize,

            lineHeight: 1.9,

            fontWeight: 500,

            paddingLeft: 40,
            paddingRight: 40,

            wordBreak: "break-word",
          }}
        >
          {arabic}
        </div>
        <div
          style={{
            width: 260,
            height: 2,

            background: "#10b981",

            marginTop: 30,
            marginBottom: 35,
          }}
        />

        {/* Reference */}
        <div
          style={{
            fontSize: 34,

            fontWeight: 700,

            color: "#065f46",
          }}
        >
          {surahName} • {surahNumber}:{ayahNumber}
        </div>

        {/* Brand */}
        <div
          style={{
            marginTop: 32,

            fontSize: 28,

            fontWeight: 800,

            letterSpacing: 6,

            color: "#10b981",
          }}
        >
          AAYATVERSE.COM
        </div>
      </div>
    </div>
  );
}