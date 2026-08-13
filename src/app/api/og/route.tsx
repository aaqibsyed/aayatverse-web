import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "AayatVerse";
  const caption = searchParams.get("caption") || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0f172a, #020617)", // dark premium bg
          color: "white",
          padding: "60px",
        }}
      >
        {/* 🔝 Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src="https://aayatverse.com/aayatverse-logo.png"
            width={80}
            height={80}
          />
          <span style={{ fontSize: 36, opacity: 0.9 }}>
            AayatVerse
          </span>
        </div>

        {/* 📝 Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 32,
              opacity: 0.85,
            }}
          >
            {caption}
          </div>
        </div>

        {/* ✨ Footer branding */}
        <div
          style={{
            fontSize: 24,
            opacity: 0.6,
          }}
        >
          Read. Reflect. Grow.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}