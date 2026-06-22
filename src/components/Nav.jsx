import { Leaf } from "lucide-react";
import { COLORS } from "../siteData";

const C = COLORS;

export default function Nav({
  onBack,
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: C.white,
        borderBottom: "1px solid rgba(62,140,42,0.15)",
        padding: "0 6%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}
    >
      {/* Logo */}
      <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    if (onBack) {
      onBack();
    }
  }}
  style={{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "9px",
  }}
>
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: `2px solid ${C.green}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Leaf size={16} color={C.green} />
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: C.green,
              lineHeight: 1.1,
            }}
          >
            AMAMI
          </div>

          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: C.green,
              lineHeight: 1.1,
              opacity: 0.8,
            }}
          >
            NATURE GUIDE
          </div>
        </div>
      </a>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    if (onBack) {
      onBack();
    }
  }}
  style={linkStyle}
>
  ホーム
</a>
        <a href="#tours" style={linkStyle}>ツアー</a>
        <a href="#guide" style={linkStyle}>ガイド</a>
        <a href="#faq" style={linkStyle}>よくある質問</a>
      </div>
{/* CTA */}
<div
  style={{
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }}
>
  <a
    href="#tours"
    style={{
      background: C.green,
      color: "#fff",
      padding: "9px 20px",
      borderRadius: "4px",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: 700,
    }}
  >
    ツアーを見る
  </a>

  <a
    href="#contact"
    style={{
      border: `1.5px solid ${C.green}`,
      color: C.green,
      padding: "8px 18px",
      borderRadius: "4px",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: 600,
    }}
  >
    お問い合わせ
  </a>
</div>
    </nav>
  );
}

const linkStyle = {
  color: C.textLight,
  textDecoration: "none",
  fontSize: "13px",
  letterSpacing: "0.03em",
};