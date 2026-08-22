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
    const mediaQuery = window.matchMedia(
      "(max-width: 768px)"
    );

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);

      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleResize
      );
    };
  }, []);

  // ========================================
  // Lock body scroll while menu is open
  // ========================================

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isMobile]);

  // ========================================
  // Navigation
  // ========================================

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return false;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return true;
  };

  // ----------------------------------------
  // Home
  // ----------------------------------------

  const handleHomeClick = (e) => {
    e.preventDefault();

    setIsMenuOpen(false);

    // Home上にいる場合
    if (scrollToSection("top")) {
      return;
    }

    // 詳細ページなどからHomeへ戻る
    if (onBack) {
      onBack();

      // Home描画後にトップへ
      setTimeout(() => {
        const top = document.getElementById("top");

        if (top) {
          top.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 150);

      return;
    }

    // フォールバック
    window.location.href = "/";
  };

  // ----------------------------------------
  // Home Section
  // ----------------------------------------

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();

    setIsMenuOpen(false);

    // Home上に該当セクションがある場合
    if (scrollToSection(sectionId)) {
      return;
    }

    // 詳細ページなどからHomeへ戻る
    if (onBack) {
      onBack();

      // Home描画後に該当セクションへ移動
      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return;
    }

    // フォールバック
    window.location.href = `/#${sectionId}`;
  };

  // ========================================
  // Header Colors
  // ========================================

  // メニューを開いている間は
  // 屋号と×を常に緑色＋白背景にする
  const textColor =
    isMenuOpen
      ? C.textLight
      : isScrolled
      ? C.textLight
      : "#FFFFFF";

  const logoColor =
    isMenuOpen
      ? C.green
      : isScrolled
      ? C.green
      : "#FFFFFF";

  const navBackground =
    isMenuOpen
      ? "#FFFFFF"
      : isScrolled
      ? "rgba(255,255,255,0.96)"
      : "rgba(255,255,255,0)";

  const navShadow =
    isMenuOpen
      ? "0 4px 20px rgba(0,0,0,0.06)"
      : isScrolled
      ? "0 8px 28px rgba(0,0,0,0.08)"
      : "none";

  const dividerColor =
    isMenuOpen
      ? "rgba(62,140,42,0.14)"
      : isScrolled
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

          // メニューを開いたときも
          // メニューより必ず前面に表示
          zIndex: 300,

          height: "64px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          padding: isMobile
            ? "0 20px"
            : "0 6%",

          background: navBackground,
          boxShadow: navShadow,

          backdropFilter:
            isScrolled && !isMenuOpen
              ? "blur(10px)"
              : "none",

          WebkitBackdropFilter:
            isScrolled && !isMenuOpen
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

              transition:
                "border-color 0.35s ease",
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

                transition:
                  "color 0.35s ease",
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

                opacity:
                  isMenuOpen
                    ? 0.8
                    : isScrolled
                    ? 0.8
                    : 0.9,

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
                onClick={(e) =>
                  handleSectionClick(e, "tours")
                }
                style={{
                  ...linkStyle,
                  color: textColor,
                }}
              >
                ツアー
              </a>

              <a
                href="#guide"
                onClick={(e) =>
                  handleSectionClick(e, "guide")
                }
                style={{
                  ...linkStyle,
                  color: textColor,
                }}
              >
                ガイド
              </a>

              <a
                href="#faq"
                onClick={(e) =>
                  handleSectionClick(e, "faq")
                }
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
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    "tours"
                  )
                }
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

                  boxShadow:
                    isScrolled
                      ? "none"
                      : "0 4px 16px rgba(0,0,0,0.16)",

                  transition:
                    "box-shadow 0.35s ease",
                }}
              >
                ツアーを見る
              </a>

              <a
                href="#contact"
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    "contact"
                  )
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "8px 18px",

                  background:
                    isScrolled
                      ? "transparent"
                      : "rgba(255,255,255,0.08)",

                  color:
                    isScrolled
                      ? C.green
                      : "#FFFFFF",

                  border:
                    isScrolled
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
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
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

              transition:
                "color 0.35s ease",
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

            transform:
              "translateX(-50%)",

            opacity: isMenuOpen
              ? 1
              : isScrolled
              ? 1
              : 0.9,

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
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            zIndex: 250,

            background: "#FFFFFF",

            overflowY: "auto",

            opacity: isMenuOpen ? 1 : 0,

            visibility:
              isMenuOpen
                ? "visible"
                : "hidden",

            transform:
              isMenuOpen
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

              // Header 64px分だけ下から
              // メニューを開始
              padding:
                "64px 28px 40px",
            }}
          >
            {/* ========================================
                Menu Links
            ======================================== */}

            <div
              style={{
                paddingTop: "28px",
              }}
            >
              <MobileLink
                href="#"
                onClick={handleHomeClick}
              >
                ホーム
              </MobileLink>

              <MobileLink
                href="#tours"
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    "tours"
                  )
                }
              >
                ツアー
              </MobileLink>

              <MobileLink
                href="#guide"
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    "guide"
                  )
                }
              >
                ガイド
              </MobileLink>

              <MobileLink
                href="#faq"
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    "faq"
                  )
                }
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "10px",
                }}
              >
                {/* ツアーを見る */}

                <a
                  href="#tours"
                  onClick={(e) =>
                    handleSectionClick(
                      e,
                      "tours"
                    )
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    height: "48px",

                    background: C.green,
                    color: "#FFFFFF",

                    borderRadius: "4px",

                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",

                    textDecoration: "none",

                    boxSizing: "border-box",

                    transition:
                      "opacity 0.2s ease, transform 0.2s ease",
                  }}
                >
                  ツアーを見る
                </a>

                {/* お問い合わせ */}

                <a
                  href="#contact"
                  onClick={(e) =>
                    handleSectionClick(
                      e,
                      "contact"
                    )
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    height: "48px",

                    background: "#FFFFFF",
                    color: C.green,

                    border:
                      `1.5px solid ${C.green}`,

                    borderRadius: "4px",

                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",

                    textDecoration: "none",

                    boxSizing: "border-box",

                    transition:
                      "background 0.2s ease, transform 0.2s ease",
                  }}
                >
                  お問い合わせ
                </a>
              </div>
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

function MobileLink({
  href,
  onClick,
  children,
}) {
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

        color: C.textLight,

        fontFamily:
          "'Noto Sans JP', sans-serif",

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