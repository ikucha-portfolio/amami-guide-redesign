import { useEffect, useRef } from "react";

export default function TourHero({ tour }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!heroRef.current || !imageRef.current) {
        ticking = false;
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Heroが画面内にあるときだけパララックスを適用
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const offset = Math.max(
          -60,
          Math.min(60, -rect.top * 0.16)
        );

        imageRef.current.style.transform = `
          translate3d(0, ${offset}px, 0)
          scale(1.06)
        `;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      {/* Hero Image */}
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          inset: "-6%",
          width: "112%",
          height: "112%",
          willChange: "transform",
        }}
      >
        <img
          src={tour.image}
          alt={tour.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 45%",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.62) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 6% 52px",
          pointerEvents: "none",
        }}
      >
        {/* English Title */}
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 10px",
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        {/* Japanese Title */}
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            maxWidth: "900px",
          }}
        >
          {tour.name}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.8)",
            margin: "10px 0 0",
            maxWidth: "700px",
            lineHeight: 1.8,
          }}
        >
          {tour.description}
        </p>
      </div>
    </section>
  );
}