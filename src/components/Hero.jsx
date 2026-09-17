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
          typeof window !== "undefined" && window.innerWidth <= 768
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

            // 写真の色味をほんの少し整える
            filter: "saturate(1.08) contrast(1.03) brightness(1.02)",
          }}
        />
      ))}

      {/* ========================================
          Overlay
          写真の美しさを残しながら
          全体のコントラストを整える
      ======================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(180deg, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.03) 38%, rgba(0,0,0,0.22) 100%)",

          pointerEvents: "none",
        }}
      />

      {/* ========================================
          Center Contrast
          中央の文字周辺を少しだけ暗くして
          文字を読みやすくする
      ======================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0) 75%)",

          pointerEvents: "none",
        }}
      />

      {/* ========================================
          Header Contrast
          上部ナビゲーションを読みやすくする
      ======================================== */}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,

          height: "180px",

          background:
            "linear-gradient(180deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0) 100%)",

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

          // Hero中央の文字を少しだけ上に配置
          transform: "translateY(-2%)",
        }}
      >
        {/* ========================================
            ALIVE AMAMI
        ======================================== */}

        <div
          style={{
            fontFamily: "'Cabin', sans-serif",

            fontSize: "clamp(28px, 3.2vw, 40px)",

            fontWeight: 500,

            letterSpacing: "0.14em",

            color: "#FFFFFF",

            lineHeight: 1.05,

            textShadow: "0 2px 12px rgba(0,0,0,0.32)",
          }}
        >
          ALIVE AMAMI
        </div>

        {/* ========================================
            Guide & Experience
        ======================================== */}

        <div
          style={{
            fontFamily: "'Cabin', sans-serif",

            fontSize: "clamp(13px, 1.3vw, 16px)",

            fontWeight: 500,

            letterSpacing: "0.1em",

            color: "#FFFFFF",

            marginTop: "4px",

            lineHeight: 1.2,

            textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          }}
        >
          ~ Guide & Experience ~
        </div>

        {/* ========================================
            Catch Copy
        ======================================== */}

        <div
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",

            fontSize: "clamp(14px, 1.4vw, 17px)",

            fontWeight: 500,

            color: "#FFFFFF",

            marginTop: "18px",

            letterSpacing: "0.08em",

            lineHeight: 1.8,

            textShadow: "0 1px 9px rgba(0,0,0,0.32)",
          }}
        >
          奄美の自然と、生きるを楽しむ。
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

          color: "rgba(255,255,255,0.72)",

          textShadow: "0 1px 6px rgba(0,0,0,0.2)",
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