import { ImageResponse } from "next/og";

export const alt = "Giulia Peruzzi — Product & UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          GIULIAPERUZZI.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1.05 }}>
            Giulia Peruzzi
          </div>
          <div style={{ fontSize: 40, color: "rgba(0,0,0,0.55)" }}>
            Product & UX Designer
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
