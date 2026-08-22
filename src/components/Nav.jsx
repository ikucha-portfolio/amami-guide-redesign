import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { COLORS } from "../siteData";

const C = COLORS;

export default function Nav({ onBack }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ========================================
  // Scroll
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ========================================
  // Mobile
  // ========================================

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);

      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // ========================================
  // Navigation
  // ========================================

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (onBack) {
      onBack();
    } else {
      window.location.href = "#";
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  // ========================================
  // Header Colors
  // ========================================

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

  return (
    <>
      {/* ========================================
          Header
      ======================================== */}

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,

          height: "64px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          padding: isMobile ? "0 20px" : "0 6%",

          background: navBackground,
          boxShadow: navShadow,

          backdropFilter: isScrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(10px)"
            : "none",

          transition:
            "background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* ========================================
            Logo
        ======================================== */}

        <a
          href="#"
          onClick={handleHomeClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              border: `2px solid ${logoColor}`,
              borderRadius: "50%",

              transition: "border-color 0.35s ease",
            }}
          >
            <Leaf
              size={16}
              color={logoColor}
              strokeWidth={1.8}
            />
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Cabin', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                lineHeight: 1.1,
                color: logoColor,

                transition: "color 0.35s ease",
              }}
            >
              Amami
            </div>

            <div
              style={{
                marginTop: "2px",

                fontFamily: "'Cabin', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                lineHeight: 1.1,

                color: logoColor,
                opacity: isScrolled ? 0.8 : 0.9,

                transition:
                  "color 0.35s ease, opacity 0.35s ease",
              }}
            >
              Sunshine Guide
            </div>
          </div>
        </a>

        {/* ========================================
            Desktop Navigation
        ======================================== */}

        {!isMobile && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
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

            {/* Desktop CTA */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <a
                href="#tours"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "9px 20px",

                  background: C.green,
                  color: "#FFFFFF",

                  borderRadius: "4px",

                  fontSize: "13px",
                  fontWeight: 700,

                  textDecoration: "none",

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
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "8px 18px",

                  background: isScrolled
                    ? "transparent"
                    : "rgba(255,255,255,0.08)",

                  color: isScrolled
                    ? C.green
                    : "#FFFFFF",

                  border: isScrolled
                    ? `1.5px solid ${C.green}`
                    : "1.5px solid rgba(255,255,255,0.85)",

                  borderRadius: "4px",

                  fontSize: "13px",
                  fontWeight: 600,

                  textDecoration: "none",

                  transition:
                    "color 0.35s ease, border-color 0.35s ease, background 0.35s ease",
                }}
              >
                お問い合わせ
              </a>
            </div>
          </>
        )}

        {/* ========================================
            Mobile Menu Button
        ======================================== */}

        {isMobile && (
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "メニューを閉じる"
                : "メニューを開く"
            }
            aria-expanded={isMenuOpen}
            style={{
              width: "44px",
              height: "44px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              padding: 0,

              border: "none",
              background: "transparent",

              color: logoColor,

              cursor: "pointer",

              transition: "color 0.35s ease",
            }}
          >
            {isMenuOpen ? (
              <X
                size={30}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={28}
                strokeWidth={1.8}
              />
            )}
          </button>
        )}

        {/* ========================================
            Header Divider
        ======================================== */}

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

            opacity: isScrolled ? 1 : 0.9,

            pointerEvents: "none",

            transition:
              "background 0.35s ease, opacity 0.35s ease",
          }}
        />
      </nav>

      {/* ========================================
          Mobile Menu
      ======================================== */}

      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,

            background: "#FFFFFF",

            overflowY: "auto",

            opacity: isMenuOpen ? 1 : 0,

            visibility: isMenuOpen
              ? "visible"
              : "hidden",

            transform: isMenuOpen
              ? "translateY(0)"
              : "translateY(-12px)",

            transition:
              "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
          }}
        >
          <div
            style={{
              minHeight: "100%",

              display: "flex",
              flexDirection: "column",

              padding: "96px 28px 40px",
            }}
          >
            {/* ========================================
                Menu Links
            ======================================== */}

            <div>
              <MobileLink
                href="#"
                onClick={handleHomeClick}
              >
                ホーム
              </MobileLink>

              <MobileLink
                href="#tours"
                onClick={handleMenuLinkClick}
              >
                ツアー
              </MobileLink>

              <MobileLink
                href="#guide"
                onClick={handleMenuLinkClick}
              >
                ガイド
              </MobileLink>

              <MobileLink
                href="#faq"
                onClick={handleMenuLinkClick}
              >
                よくある質問
              </MobileLink>
            </div>

            {/* ========================================
                Mobile CTA
            ======================================== */}

            <div
              style={{
                marginTop: "28px",
                paddingTop: "24px",

                borderTop:
                  "1px solid rgba(62,140,42,0.14)",
              }}
            >
              <a
                href="#tours"
                onClick={handleMenuLinkClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  width: "100%",
                  height: "48px",

                  background: C.green,
                  color: "#FFFFFF",

                  borderRadius: "4px",

                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",

                  textDecoration: "none",
                }}
              >
                ツアーを見る
              </a>

              <a
                href="#contact"
                onClick={handleMenuLinkClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  width: "100%",
                  height: "48px",

                  marginTop: "10px",

                  background: "#FFFFFF",
                  color: C.green,

                  border: `1.5px solid ${C.green}`,
                  borderRadius: "4px",

                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",

                  textDecoration: "none",
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ========================================
   Desktop Link
======================================== */

const linkStyle = {
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.03em",
  transition: "color 0.35s ease",
};

/* ========================================
   Mobile Link
======================================== */

function MobileLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",

        minHeight: "68px",

        borderBottom:
          "1px solid rgba(62,140,42,0.14)",

        color: "#1D251D",

        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "18px",
        fontWeight: 700,
        letterSpacing: "0.02em",

        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}