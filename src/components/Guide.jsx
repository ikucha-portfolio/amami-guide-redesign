import { useEffect, useState } from "react";
import { GUIDE, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import SectionHeader from "./common/SectionHeader";
import { SECTION, CONTAINER } from "../styles/designSystem";

const C = COLORS;

export default function Guide() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section
      id="guide"
      style={{
        ...SECTION,
        background: "#FDF5ED",
      }}
    >
      <div style={CONTAINER}>
        {/* ========================================
            Amami Sunshine Guideだからできること
        ======================================== */}

        <div
          style={{
            marginBottom: isMobile ? "72px" : "96px",
          }}
        >
          {/* Heading */}

          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? "10px" : "14px",
              margin: "0 0 44px",
              fontSize: isMobile ? "20px" : "26px",
              fontWeight: 700,
              lineHeight: 1.5,
              color: C.text,
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: C.orange,
                fontWeight: 400,
              }}
            >
              ＼
            </span>

            <span>Amami Sunshine Guideだからできること</span>

            <span
              aria-hidden="true"
              style={{
                color: C.orange,
                fontWeight: 400,
              }}
            >
              ／
            </span>
          </h2>

          {/* Reasons */}

          <div
            style={{
              width: isMobile ? "100%" : "fit-content",
              maxWidth: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "22px" : "24px",
            }}
          >
            {GUIDE.certifications.map((reason) => (
              <div
                key={reason}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    color: C.orange,
                    fontSize: "18px",
                    lineHeight: 1.7,
                  }}
                >
                  ・
                </span>

                <p
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "14px" : "16px",
                    fontWeight: 700,
                    lineHeight: 1.7,
                    color: C.text,
                  }}
                >
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================
            Guide Profile
        ======================================== */}

        <div
          style={{
            paddingTop: isMobile ? "56px" : "72px",
            borderTop: "1px solid rgba(62, 45, 33, 0.15)",
          }}
        >
          {/* Section Header */}

          <SectionHeader
            title="GUIDE"
            subtitle="ガイド紹介"
            accentColor={C.orange}
          />

          {/* Profile */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 420px",
              gap: isMobile ? "36px" : "80px",
              alignItems: "start",
            }}
          >
            {/* Profile Text */}

            <div
              style={{
                order: isMobile ? 1 : 0,
              }}
            >
              <h3
  style={{
    margin: "0 0 4px",
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: isMobile
  ? "22px"
  : "clamp(22px, 2.3vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.3,
    color: C.text,
  }}
>
  {GUIDE.name}
</h3>

              <p
                style={{
                  margin: "6px 0 28px",
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  letterSpacing: "0.04em",
                  color: C.orange,
                }}
              >
                {GUIDE.experience}
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "14px" : "15px",
                  lineHeight: 1.8,
                  color: C.textLight,
                  whiteSpace: "pre-line",
                }}
              >
                {GUIDE.message}
              </p>
            </div>

            {/* Guide Photo */}

            <div
              style={{
                order: isMobile ? 0 : 1,
                width: "100%",
                maxWidth: isMobile ? "100%" : "420px",
                margin: isMobile ? "0 auto" : 0,
                aspectRatio: "3 / 4",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 8px 40px rgba(62, 140, 42, 0.12)",
              }}
            >
              <ImageWithFallback
                src={GUIDE.image}
                alt="ずーちゃん｜Amami Sunshine Guide"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          {/* ========================================
              Instagram
          ======================================== */}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: isMobile ? "48px" : "64px",
            }}
          >
            <a
              href="https://www.instagram.com/seasummer630/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagramで日々の奄美を見る"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: C.orange,
                textDecoration: "none",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.opacity = "1";
              }}
            >
              {/* Instagram Icon */}

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>

              <span>Instagramで日々の奄美を見る</span>

              <span
                aria-hidden="true"
                style={{
                  marginLeft: "2px",
                  fontSize: "14px",
                }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}