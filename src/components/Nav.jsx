import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import { COLORS } from "../siteData";

const C = COLORS;

export default function Nav({ onBack }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = isScrolled ? C.textLight : "#FFFFFF";
  const logoColor = isScrolled ? C.green : "#FFFFFF";

  const navBackground = isScrolled
    ? "rgba(255,255,255,0.96)"
    : "rgba(255,255,255,0)";

  const navShadow = isScrolled
    ? "0 8px 28px rgba(0,0,0,0.08)"
    : "none";

  const dividerColor = isScrolled
    ? "rgba(62,140,42,0.14)"
    : "rgba(255,255,255,0.34)";

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (onBack) {
      onBack();
    } else {
      window.location.href = "#";
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: navBackground,
        boxShadow: navShadow,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        padding: "0 6%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
        transition:
          "background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={handleHomeClick}
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
            border: `2px solid ${logoColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "border-color 0.35s ease",
          }}
        >
          <Leaf size={16} color={logoColor} />
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: logoColor,
              lineHeight: 1.1,
              transition: "color 0.35s ease",
            }}
          >
            Amami
          </div>

          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: logoColor,
              lineHeight: 1.1,
              opacity: isScrolled ? 0.8 : 0.9,
              transition: "color 0.35s ease, opacity 0.35s ease",
            }}
          >
            Sunshine Guide
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
          onClick={handleHomeClick}
          style={{
            ...linkStyle,
            color: textColor,
          }}
        >
          ホーム
        </a>

        <a
          href="#tours"
          style={{
            ...linkStyle,
            color: textColor,
          }}
        >
          ツアー
        </a>

        <a
          href="#guide"
          style={{
            ...linkStyle,
            color: textColor,
          }}
        >
          ガイド
        </a>

        <a
          href="#faq"
          style={{
            ...linkStyle,
            color: textColor,
          }}
        >
          よくある質問
        </a>
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
            color: "#FFFFFF",
            padding: "9px 20px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 700,
            boxShadow: isScrolled
              ? "none"
              : "0 4px 16px rgba(0,0,0,0.16)",
            transition: "box-shadow 0.35s ease",
          }}
        >
          ツアーを見る
        </a>

        <a
          href="#contact"
          style={{
            border: isScrolled
              ? `1.5px solid ${C.green}`
              : "1.5px solid rgba(255,255,255,0.85)",
            color: isScrolled ? C.green : "#FFFFFF",
            background: isScrolled
              ? "transparent"
              : "rgba(255,255,255,0.08)",
            padding: "8px 18px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 600,
            transition:
              "color 0.35s ease, border-color 0.35s ease, background 0.35s ease",
          }}
        >
          お問い合わせ
        </a>
      </div>

      {/* ナビ下の薄い区切り線 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "88%",
          maxWidth: "1120px",
          height: "1px",
          background: dividerColor,
          transform: "translateX(-50%)",
          transition: "background 0.35s ease, opacity 0.35s ease",
          opacity: isScrolled ? 1 : 0.9,
          pointerEvents: "none",
        }}
      />
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.03em",
  transition: "color 0.35s ease",
};