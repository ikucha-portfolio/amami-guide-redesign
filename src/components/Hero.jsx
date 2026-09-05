import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const BASE = import.meta.env.BASE_URL;

const HERO_IMAGES = [
  `${BASE}images/hero.jpeg`,
  `${BASE}images/umigame_1.jpeg`,
  `${BASE}images/boat.jpeg`,
  `${BASE}images/amami3.jpeg`,
  `${BASE}images/drive.jpeg`,
  `${BASE}images/night.jpeg`,
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // ========================================
  // Hero Image Slideshow
  // ========================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",

        // PC：以前の仕様
        // スマホ：画面いっぱい
        height:
          typeof window !== "undefined" &&
          window.innerWidth <= 768
            ? "100svh"
            : "calc(100vh - 116px)",

        overflow: "hidden",
      }}
    >
      {/* ========================================
          Hero Images
      ======================================== */}

      {HERO_IMAGES.map((image, index) => (
        <ImageWithFallback
          key={image}
          src={image}
          alt="奄美大島の自然"
          style={{
            position: "absolute",
            inset: 0,

            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: "center center",

            opacity: index === currentImage ? 1 : 0,

            transition: "opacity 1.8s ease-in-out",

            filter: "saturate(1.08) contrast(1.04)",
          }}
        />
      ))}

      {/* ========================================
          Overlay
      ======================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.3) 100%)",

          pointerEvents: "none",
        }}
      />

      {/* ========================================
          Center Typography
      ======================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          padding: "0 24px",

          textAlign: "center",
        }}
      >
        {/* ALIVE AMAMI */}

<div
  style={{
    fontFamily: "'Cabin', sans-serif",

    fontSize: "clamp(26px, 3.2vw, 42px)",

    fontWeight: 600,

    letterSpacing: "0.14em",

    color: "#FFFFFF",

    lineHeight: 1.05,

    textShadow:
      "0 2px 20px rgba(0,0,0,0.3)",
  }}
>
  ALIVE AMAMI
</div>

{/* Guide & Experience */}

<div
  style={{
    fontFamily: "'Cabin', sans-serif",

    fontSize: "clamp(14px, 1.5vw, 18px)",

    fontWeight: 500,

    letterSpacing: "0.12em",

    color: "rgba(255,255,255,0.92)",

    marginTop: "4px",

    lineHeight: 1.2,

    textShadow:
      "0 1px 8px rgba(0,0,0,0.3)",
  }}
>
  ~ Guide & Experience ~
</div>

        <div
          style={{
            color: "rgba(255,255,255,0.88)",

            fontSize: "clamp(13px, 1.4vw, 16px)",

            marginTop: "18px",

            letterSpacing: "0.06em",

            lineHeight: 1.7,

            textShadow:
              "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          奄美大島の自然を、ガイドと一緒に体験しよう。
        </div>
      </div>

      {/* ========================================
          Scroll
      ======================================== */}

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

          color: "rgba(255,255,255,0.7)",
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