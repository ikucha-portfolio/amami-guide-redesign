import { GUIDE, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import { CheckCircle2 } from "lucide-react";
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
        background: C.offWhite,
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
                color: C.green,
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
                fontSize: "16px",
                color: C.textLight,
                lineHeight: 2.1,
                marginBottom: "40px",
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
                  <CheckCircle2
                    size={16}
                    style={{
                      color: C.green,
                      flexShrink: 0,
                    }}
                  />

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
              boxShadow: "0 8px 40px rgba(62,140,42,0.12)",
            }}
          >
            <ImageWithFallback
              src="/images/guide.jpeg"
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