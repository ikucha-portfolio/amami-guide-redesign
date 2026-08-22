import { GUIDE, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import SectionHeader from "./common/SectionHeader";
import {
  SECTION,
  CONTAINER,
} from "../styles/designSystem";

const C = COLORS;

export default function Guide() {
  return (
    <section
      id="guide"
      style={{
        ...SECTION,
        background: "#FDF5ED",
      }}
    >
      <div
        style={{
          ...CONTAINER,
        }}
      >
        <SectionHeader
  title="GUIDE"
  subtitle="ガイド紹介"
  accentColor={C.orange}
/>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Profile */}
          <div>
            <h3
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: C.text,
                margin: 0,
                marginBottom: "4px",
              }}
            >
              {GUIDE.name}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: C.orange,
                fontWeight: 700,
                marginTop: "6px",
                marginBottom: "28px",
                letterSpacing: "0.04em",
              }}
            >
              {GUIDE.experience}
            </p>

            <p
              style={{
                fontSize: "15px",
                color: C.textLight,
                lineHeight: 1.7,
                marginBottom: "28px",
                whiteSpace: "pre-line",
              }}
            >
              {GUIDE.message}
            </p>

            {/* Features */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              {GUIDE.certifications.map((cert) => (
                <div
                  key={cert}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      color: C.orange,
                      fontSize: "15px",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    ★
                  </span>

                  <span
                    style={{
                      fontSize: "14px",
                      color: C.textLight,
                    }}
                  >
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/seasummer630/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagramで日々の奄美を見る"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
                color: C.orange,
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
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

              <span>
                Instagramで日々の奄美を発信しています
              </span>

              <span
                style={{
                  fontSize: "14px",
                  marginLeft: "2px",
                }}
              >
                →
              </span>
            </a>
          </div>

          {/* Guide Photo */}
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              aspectRatio: "3 / 4",
              boxShadow: "0 8px 40px rgba(62, 140, 42, 0.12)",
            }}
          >
            <ImageWithFallback
              src="/images/guide1.jpeg"
              alt="ガイド紹介"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}