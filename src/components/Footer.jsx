import { COLORS } from "../siteData";

const C = COLORS;

export default function Footer() {
  return (
    <footer
      style={{
        background: C.greenDark,
        padding: "32px 6%",
      }}
    >
      <div
        className="footer-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* ========================================
            Logo
        ======================================== */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.78)",
              fontSize: "14px",
              lineHeight: 1.3,
            }}
          >
            ALIVE AMAMI
          </span>

          <span
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.62)",
              fontSize: "11px",
              lineHeight: 1.4,
            }}
          >
            ~ Guide & Experience ~
          </span>
        </div>

        {/* ========================================
            Copyright
        ======================================== */}

        <span
          style={{
            color: "rgba(255,255,255,0.58)",
            fontSize: "11px",
            lineHeight: 1.6,
            textAlign: "right",
            flexShrink: 0,
          }}
        >
          © 2026 ALIVE AMAMI
          <br />
          All rights reserved.
        </span>
      </div>

      {/* ========================================
          Mobile Responsive
      ======================================== */}

      <style>{`
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 18px !important;
          }

          .footer-inner > span {
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}