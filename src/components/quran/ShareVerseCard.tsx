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
      style={{
        width: 1080,
        height: 1080,
        background:
          "linear-gradient(135deg,#065f46 0%,#10b981 50%,#f59e0b 100%)",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,.08) 2px, transparent 2px)",
        backgroundSize:
          "40px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "rgba(255,255,255,0.96)",
          borderRadius: 48,
          boxShadow:
            "0 30px 100px rgba(0,0,0,.15)",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          dir="rtl"
          style={{
            fontSize: 70,
            color: "#059669",
            marginBottom: 40,
          }}
        >
          ﷽
        </div>
        <div
          style={{
            width: 250,
            height: 2,
            background: "#10b981",
            margin:
              "0 auto 60px auto",
          }}
        />
        <div
          dir="rtl"
          style={{
            fontSize: 72,
            lineHeight: 2,
            minHeight: 250,
            color: "#064e3b",
            fontWeight: 500,
            marginBottom: 60,
          }}
        >
          {arabic}
        </div>
        <div
          style={{
            width: 250,
            height: 2,
            background: "#10b981",
            margin:
              "0 auto 50px auto",
          }}
        />
        <div
          style={{
            fontSize: 32,
            color: "#047857",
            fontWeight: 600,
          }}
        >
          Surah {surahName}
          {" • "}
          {surahNumber}:{ayahNumber}
        </div>
        <div
          style={{
            marginTop: 80,
            fontSize: 28,
            letterSpacing: 4,
            color: "#10b981",
            fontWeight: 700,
          }}
        >
          AAYATVERSE
        </div>
      </div>
    </div>
  );
}