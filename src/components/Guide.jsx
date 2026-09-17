import { useEffect, useState } from "react";
import { GUIDE, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import SectionHeader from "./common/SectionHeader";
import { SECTION, CONTAINER } from "../styles/designSystem";

const C = COLORS;

/* ========================================
   ALIVE AMAMIだからできること
======================================== */

const GUIDE_VALUES = [
  {
    title: "あなたに合わせた旅",
    text: "一人ひとりのペースや希望に合わせて、自分らしく旅を楽しめます。",
  },
  {
    title: "誰でも安心して楽しめる",
    text: "初心者からお子さま連れ、ご年配の方まで、それぞれに合わせてサポートします。",
  },
  {
    title: "海も陸も、奄美をまるごと",
    text: "海のアクティビティから滝やナイトツアー、島のドライブまで奄美の自然や魅力を楽しめます。",
  },
];

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
            ALIVE AMAMIだからできること
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
              gap: isMobile ? "6px" : "14px",
              margin: "0 0 48px",
              fontSize: isMobile ? "18px" : "26px",
              fontWeight: 700,
              lineHeight: 1.5,
              color: C.text,
              textAlign: "center",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
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

            <span>ALIVE AMAMIの魅力</span>

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

          {/* Values */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, 1fr)",
              gap: isMobile ? "32px" : "0",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            {GUIDE_VALUES.map((value, index) => (
              <div
                key={value.title}
                style={{
                  padding: isMobile ? "0" : "0 32px",
                  borderLeft:
                    !isMobile && index !== 0
                      ? "1px solid rgba(62, 45, 33, 0.15)"
                      : "none",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: isMobile ? "16px" : "17px",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: C.text,
                    letterSpacing: "0.02em",
                  }}
                >
                  {value.title}
                </h3>

                <p
                  style={{
                    maxWidth: isMobile ? "320px" : "none",
                    margin: isMobile ? "0 auto" : "0",
                    fontSize: isMobile ? "13px" : "14px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: C.textLight,
                  }}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>

          {/* Pickup */}

          <p
            style={{
              margin: isMobile ? "32px 0 0" : "40px 0 0",
              textAlign: "center",
              fontSize: isMobile ? "12px" : "13px",
              lineHeight: 1.7,
              color: C.textLight,
            }}
          >
            ★ 空港・宿泊先への送迎も可能です！（一部エリアは追加料金あり）
          </p>
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
              gridTemplateColumns: isMobile
                ? "1fr"
                : "1fr 420px",
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

              {/* Profile Message */}

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

              {/* Qualifications / Guide History */}

              <div
                style={{
                  marginTop: isMobile ? "32px" : "40px",
                  paddingTop: isMobile ? "24px" : "28px",
                  borderTop:
                    "1px solid rgba(62, 45, 33, 0.12)",
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "1.2fr 0.8fr",
                  gap: isMobile ? "24px" : "40px",
                }}
              >
                {/* 資格・講習 */}

                <div>
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: isMobile ? "13px" : "14px",
                      fontWeight: 700,
                      color: C.orange,
                      lineHeight: 1.5,
                    }}
                  >
                    資格・講習
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      SSI Snorkel インストラクター
                    </span>

                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      SSI リアクトライト
                    </span>

                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      （心肺蘇生法・救急法）
                    </span>
                  </div>
                </div>

                {/* ガイド歴 */}

                <div>
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: isMobile ? "13px" : "14px",
                      fontWeight: 700,
                      color: C.orange,
                      lineHeight: 1.5,
                    }}
                  >
                    ガイド歴
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      奄美大島｜5年
                    </span>

                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      カヌー・シュノーケルを中心にご案内
                    </span>

                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: C.textLight,
                        lineHeight: 1.7,
                      }}
                    >
                      島内ドライブツアー
                    </span>
                  </div>
                </div>
              </div>
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
                borderRadius: "4px",
                boxShadow:
                  "0 8px 40px rgba(62, 140, 42, 0.12)",
              }}
            >
              <ImageWithFallback
                src={GUIDE.image}
                alt="ずーちゃん｜ALIVE AMAMI"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          {/* Instagram */}

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
                width="28"
                height="28"
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

              <span
                aria-hidden="true"
                style={{
                  marginLeft: "2px",
                  fontSize: "14px",
                }}
              >
                ←
              </span>

              <span>
                ガイドの日常をゆるっと発信しています🌺
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}