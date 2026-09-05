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
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: 0,
          }}
        >
          

          <span
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: 1.4,
            }}
          >
            ALIVE AMAMI
            ~Guide & Experience~
          </span>
        </div>

        {/* Copyright */}
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "11px",
            lineHeight: 1.5,
            textAlign: "right",
            flexShrink: 0,
          }}
        >
          © 2026 ALIVE AMAMI~Guide & Experience~. All rights reserved.
          <br className="footer-break" />
          All rights reserved.
        </span>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }

          .footer-inner > span {
            text-align: left !important;
            margin-left: 38px;
          }

          .footer-break {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}