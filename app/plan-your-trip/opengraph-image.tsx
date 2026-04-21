import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Plan Your Trip — Trail of China";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #f8f4ee 0%, #ebe4d8 100%)",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Terracotta accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 12,
            background: "#af5d32",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#af5d32",
              marginBottom: 24,
            }}
          >
            Trail of China
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1f2933",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Plan Your Trip
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#5d6a73",
              marginTop: 24,
              maxWidth: 800,
            }}
          >
            Itineraries and planning tools for first-time China travelers
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
