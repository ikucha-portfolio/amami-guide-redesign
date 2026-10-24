
import { COLORS } from "../siteData";
import SectionHeader from "./common/SectionHeader";
import { SECTION, CONTAINER } from "../styles/designSystem";

const C = COLORS;

const LINE_URL = "https://line.me/ti/p/YDpNqHNQou";
const INSTAGRAM_URL = "https://www.instagram.com/seasummer630/";

// 公開前に実際の電話番号へ変更してください
const PHONE_NUMBER = "090-6977-3575";
const PHONE_TEL = PHONE_NUMBER.replace(/-/g, "");

export default function Contact() {
  const contactItems = [
    "希望のツアー名（未定でもOK）",
    "参加人数・年齢（お子様がいる場合も）",
    "希望の日程・時間帯",
    "宿泊先（お決まりの場合）",
    "その他、ご質問・ご要望など",
  ];

  return (
    <section
      id="contact"
      style={{
        ...SECTION,
        position: "relative",
        backgroundImage: `url("${import.meta.env.BASE_URL}images/amami2.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 55, 30, 0.72)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          ...CONTAINER,
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeader
          title="CONTACT"
          subtitle="お問い合わせ・ご予約"
          light
        />

        {/* Contact Grid */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "start",
          }}
        >
          {/* Left: Inquiry Information */}
          <div className="contact-left">
            <h3 style={sectionTitleStyle}>
              以下を教えていただくとスムーズです。
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {contactItems.map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    minHeight: "46px",
                    borderBottom:
                      index < contactItems.length - 1
                        ? dividerStyle
                        : "none",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      flexShrink: 0,
                      fontFamily: "'Cabin', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.58)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.94)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Reservation Flow */}
            <div
              style={{
                marginTop: "28px",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderTop: dividerStyle,
                  marginBottom: "24px",
                }}
              />

              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: "#FFFFFF",
                }}
              >
                ご予約までの流れ
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.8,
                }}
              >
                LINEまたはInstagramのDMからお問い合わせください。
                <br />
                日程・人数・ツアー内容などを確認し、ご予約確定となります。
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.7,
                }}
              >
                ※お問い合わせ時点では予約確定ではありません。
              </p>
            </div>
          </div>

          {/* Right: Contact Methods */}
          <div className="contact-right">
            <h3 style={sectionTitleStyle}>
              まずはお気軽にご相談ください♪
            </h3>

            <p
              style={{
                margin: "0 0 10px",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              ツアーがまだ決まっていない場合も、
              <br />
              ご希望を伺いながらご案内します。
            </p>

            <p
              style={{
                margin: "0 0 28px",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              通常1日以内を目安にご返信します。
            </p>

            {/* LINE and Instagram Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
              }}
            >
              {/* LINE */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={contactButtonStyle("#06C755")}
              >
                <div style={contactButtonContentStyle}>
                  <div style={iconCircleStyle}>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div style={contactButtonTitleStyle}>
                      LINEで問い合わせる
                    </div>
                    <div style={contactButtonDescriptionStyle}>
                      友だち追加してメッセージをお送りください
                    </div>
                  </div>
                </div>

                <ArrowIcon />
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={contactButtonStyle(
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                )}
              >
                <div style={contactButtonContentStyle}>
                  <div style={iconCircleStyle}>
                    <InstagramIcon />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div style={contactButtonTitleStyle}>
                      InstagramでDM
                    </div>
                    <div style={contactButtonDescriptionStyle}>
                      @seasummer630
                    </div>
                  </div>
                </div>

                <ArrowIcon />
              </a>
            </div>

            {/* Phone Contact */}
            <div
              style={{
                marginTop: "14px",
                paddingTop: "22px",
                borderTop: "1px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ color: "#FFFFFF" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    marginBottom: "4px",
                  }}
                >
                  お電話でのお問い合わせ
                </div>

                <a
                  href={`tel:${PHONE_TEL}`}
                  style={{
                    display: "inline-block",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                  }}
                >
                  {PHONE_NUMBER}
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #contact {
            background-attachment: scroll !important;
          }

          #contact .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          #contact .contact-grid > div {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

/* Shared Styles */

const dividerStyle = "1px solid rgba(255,255,255,0.18)";

const sectionTitleStyle = {
  margin: "0 0 18px",
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: 1.7,
  color: "#FFFFFF",
};

function contactButtonStyle(background) {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "58px",
    boxSizing: "border-box",
    background,
    borderRadius: "4px",
    padding: "8px 14px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease, opacity 0.2s ease",
  };
}

const contactButtonContentStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: 0,
};

const contactButtonTitleStyle = {
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: 1.4,
};

const contactButtonDescriptionStyle = {
  color: "rgba(255,255,255,0.84)",
  fontSize: "11px",
  lineHeight: 1.5,
  marginTop: "2px",
};

const iconCircleStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="#FFFFFF"
        stroke="none"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2.5"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        marginLeft: "10px",
      }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
