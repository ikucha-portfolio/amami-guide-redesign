import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COLORS } from "../siteData";

const C = COLORS;

export default function Nav({ onBack = null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

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
  // Lock body scroll
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

  // ========================================
  // Home
  // ========================================

  const handleHomeClick = (e) => {
    e.preventDefault();

    setIsMenuOpen(false);

    if (scrollToSection("top")) {
      return;
    }

    if (onBack) {
      onBack();

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

    window.location.href = "/";
  };

  // ========================================
  // Section
  // ========================================

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();

    setIsMenuOpen(false);

    if (scrollToSection(sectionId)) {
      return;
    }

    if (onBack) {
      onBack();

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return;
    }

    window.location.href = `/#${sectionId}`;
  };

  // ========================================
  // Header Colors
  // ========================================

  const textColor = isMenuOpen
    ? C.textLight
    : isScrolled
    ? C.textLight
    : "#FFFFFF";

  const logoColor = isMenuOpen
    ? C.green
    : isScrolled
    ? C.green
    : "#FFFFFF";

  const navBackground = isMenuOpen
    ? "#FFFFFF"
    : isScrolled
    ? "rgba(255,255,255,0.97)"
    : "rgba(0,0,0,0.10)";

  const navShadow = isMenuOpen
    ? "0 4px 20px rgba(0,0,0,0.06)"
    : isScrolled
    ? "0 8px 28px rgba(0,0,0,0.08)"
    : "none";

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
          zIndex: 300,

          height: "72px",

          display: "flex",
          alignItems: "center",

          padding: isMobile ? "0 20px" : "0 6%",

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
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cabin', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                lineHeight: 1.1,
                color: textColor,

                textShadow:
                  !isScrolled && !isMenuOpen
                    ? "0 1px 8px rgba(0,0,0,0.30)"
                    : "none",

                transition:
                  "color 0.35s ease, text-shadow 0.35s ease",
              }}
            >
              ALIVE AMAMI
            </div>

            <div
              style={{
                marginTop: "4px",

                fontFamily:
                  "'Cabin', sans-serif",

                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                lineHeight: 1.1,

                color: textColor,

                opacity:
                  isMenuOpen
                    ? 0.85
                    : isScrolled
                    ? 0.85
                    : 0.96,

                textShadow:
                  !isScrolled && !isMenuOpen
                    ? "0 1px 6px rgba(0,0,0,0.30)"
                    : "none",

                transition:
                  "color 0.35s ease, opacity 0.35s ease, text-shadow 0.35s ease",
              }}
            >
              ~ Guide & Experience ~
            </div>
          </div>
        </a>

        {/* ========================================
            Desktop Navigation
        ======================================== */}

        {!isMobile && (
          <div
            style={{
              marginLeft: "auto",

              display: "flex",
              alignItems: "center",

              gap: "52px",
            }}
          >
            {/* Navigation Links */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <a
                href="#"
                onClick={handleHomeClick}
                style={{
                  ...linkStyle,
                  color: textColor,

                  textShadow:
                    !isScrolled
                      ? "0 1px 8px rgba(0,0,0,0.32)"
                      : "none",
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

                  textShadow:
                    !isScrolled
                      ? "0 1px 8px rgba(0,0,0,0.32)"
                      : "none",
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

                  textShadow:
                    !isScrolled
                      ? "0 1px 8px rgba(0,0,0,0.32)"
                      : "none",
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

                  textShadow:
                    !isScrolled
                      ? "0 1px 8px rgba(0,0,0,0.32)"
                      : "none",
                }}
              >
                よくある質問
              </a>
            </div>

            {/* ========================================
                Desktop CTA
            ======================================== */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {/* Tours Button */}

              <a
                href="#tours"
                onClick={(e) =>
                  handleSectionClick(e, "tours")
                }
                onMouseEnter={() =>
                  setHoveredButton("tours")
                }
                onMouseLeave={() =>
                  setHoveredButton(null)
                }
                style={{
                  ...ctaBaseStyle,

                  background:
                    hoveredButton === "tours"
                      ? "#4FAE36"
                      : C.green,

                  color: "#FFFFFF",

                  transform:
                    hoveredButton === "tours"
                      ? "translateY(-2px)"
                      : "translateY(0)",

                  boxShadow:
                    hoveredButton === "tours"
                      ? "0 8px 20px rgba(0,0,0,0.20)"
                      : isScrolled
                      ? "0 2px 8px rgba(0,0,0,0.08)"
                      : "0 4px 16px rgba(0,0,0,0.16)",
                }}
              >
                ツアーを見る
              </a>

              {/* Contact Button */}

              <a
                href="#contact"
                onClick={(e) =>
                  handleSectionClick(e, "contact")
                }
                onMouseEnter={() =>
                  setHoveredButton("contact")
                }
                onMouseLeave={() =>
                  setHoveredButton(null)
                }
                style={{
                  ...ctaBaseStyle,

                  background:
                    hoveredButton === "contact"
                      ? isScrolled
                        ? "rgba(62,140,42,0.08)"
                        : "rgba(255,255,255,0.20)"
                      : isScrolled
                      ? "transparent"
                      : "rgba(255,255,255,0.08)",

                  color:
                    isScrolled
                      ? C.green
                      : "#FFFFFF",

                  border:
                    isScrolled
                      ? `1.5px solid ${C.green}`
                      : "1.5px solid rgba(255,255,255,0.90)",

                  transform:
                    hoveredButton === "contact"
                      ? "translateY(-2px)"
                      : "translateY(0)",

                  boxShadow:
                    hoveredButton === "contact"
                      ? "0 8px 20px rgba(0,0,0,0.16)"
                      : "none",
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>
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
              marginLeft: "auto",

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
                size={28}
                strokeWidth={1.7}
              />
            ) : (
              <Menu
                size={27}
                strokeWidth={1.7}
              />
            )}
          </button>
        )}
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

              padding: "64px 30px 40px",
            }}
          >
            {/* Menu Links */}

            <div
              style={{
                paddingTop: "24px",
              }}
            >
              <MobileLink
                href="#"
                onClick={handleHomeClick}
                en="HOME"
              >
                ホーム
              </MobileLink>

              <MobileLink
                href="#tours"
                onClick={(e) =>
                  handleSectionClick(e, "tours")
                }
                en="TOURS"
              >
                ツアー
              </MobileLink>

              <MobileLink
                href="#guide"
                onClick={(e) =>
                  handleSectionClick(e, "guide")
                }
                en="GUIDE"
              >
                ガイド
              </MobileLink>

              <MobileLink
                href="#faq"
                onClick={(e) =>
                  handleSectionClick(e, "faq")
                }
                en="FAQ"
              >
                よくある質問
              </MobileLink>
            </div>

            {/* Contact / SNS */}

            <div
              style={{
                marginTop: "0px",
                paddingTop: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "18px",
                }}
              >
                {/* Contact */}

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

                    color: C.green,

                    fontFamily:
                      "'Noto Sans JP', sans-serif",

                    fontSize: "14px",
                    fontWeight: 600,

                    letterSpacing: "0.03em",

                    textDecoration: "none",

                    whiteSpace: "nowrap",
                  }}
                >
                  お問い合わせはこちら

                  <span
                    style={{
                      marginLeft: "8px",

                      fontFamily:
                        "'Cabin', sans-serif",

                      fontSize: "17px",
                      fontWeight: 400,

                      lineHeight: 1,

                      opacity: 0.75,
                    }}
                  >
                    →
                  </span>
                </a>

                {/* SNS */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {/* Instagram */}

                  <a
                    href="https://www.instagram.com/seasummer630/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={socialIconStyle}
                  >
                    <InstagramIcon />
                  </a>

                  {/* LINE */}

                  <a
                    href="https://line.me/ti/p/YDpNqHNQou"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LINE"
                    style={socialIconStyle}
                  >
                    <LineIcon />
                  </a>
                </div>
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
  fontFamily:
    "'Noto Sans JP', sans-serif",

  textDecoration: "none",

  fontSize: "14px",

  fontWeight: 600,

  letterSpacing: "0.04em",

  transition:
    "color 0.35s ease, text-shadow 0.35s ease",
};

/* ========================================
   CTA Base Style
======================================== */

const ctaBaseStyle = {
  display: "inline-flex",

  alignItems: "center",
  justifyContent: "center",

  minHeight: "32px",

  padding: "0 16px",

  borderRadius: "4px",

  fontFamily:
    "'Noto Sans JP', sans-serif",

  fontSize: "14px",

  fontWeight: 600,

  letterSpacing: "0.04em",

  textDecoration: "none",

  cursor: "pointer",

  transition:
    "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
};

/* ========================================
   Mobile Link
======================================== */

function MobileLink({
  href,
  onClick,
  children,
  en,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        minHeight: "72px",

        borderBottom:
          "1px solid rgba(62,140,42,0.12)",

        color: C.textLight,

        fontFamily:
          "'Noto Sans JP', sans-serif",

        fontSize: "17px",

        fontWeight: 500,

        letterSpacing: "0.03em",

        textDecoration: "none",
      }}
    >
      <span>{children}</span>

      <span
        style={{
          fontFamily:
            "'Cabin', sans-serif",

          fontSize: "10px",

          fontWeight: 500,

          letterSpacing: "0.14em",

          color: C.green,

          opacity: 0.7,
        }}
      >
        {en}
      </span>
    </a>
  );
}

/* ========================================
   Social Icon Button
======================================== */

const socialIconStyle = {
  width: "40px",
  height: "40px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border:
    "1px solid rgba(62,140,42,0.20)",

  borderRadius: "50%",

  color: C.green,

  background:
    "rgba(62,140,42,0.03)",

  textDecoration: "none",

  flexShrink: 0,
};

/* ========================================
   Instagram Icon
======================================== */

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
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
  );
}

/* ========================================
   LINE Icon
======================================== */

function LineIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}