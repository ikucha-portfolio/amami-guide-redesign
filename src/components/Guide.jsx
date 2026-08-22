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
        background: "#FBF4EC",
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
                marginBottom: "28px",
                marginTop: "6px",
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                    aria-hidden="true"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1,
                      color: C.orange,
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
          </div>

          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              aspectRatio: "3 / 4",
              boxShadow: "0 8px 40px rgba(216,109,44,0.12)",
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