import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "calc(100vh - 116px)",
        overflow: "hidden",
      }}
    >
      <ImageWithFallback
        src="/images/hero.jpeg"
        alt="奄美の青い海でカヤック体験"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Center Typography */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transform: "translateY(0)",
        }}
      >
        <div
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "clamp(24px, 3.2vw, 42px)",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "#ffffff",
            lineHeight: 1.05,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          AMAMI
          <br />
          NATURE GUIDE
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            marginTop: "18px",
            letterSpacing: "0.06em",
            lineHeight: 1.7,
            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          奄美大島の自然を、ガイドと一緒に体験しよう。
        </div>
      </div>

      {/* Scroll */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.65)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>

        <ChevronDown size={16} />
      </div>
    </section>
  );
}