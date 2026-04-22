import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderProjectOgImage({ title, tagline }: { title: string; tagline: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f9f9f9",
          color: "rgba(0,0,0,0.75)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          GIULIA PERUZZI · CASE STUDY
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25,
              color: "rgba(0,0,0,0.55)",
              maxWidth: 960,
            }}
          >
            {tagline}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
