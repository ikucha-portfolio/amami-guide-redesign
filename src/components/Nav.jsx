import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COLORS } from "../siteData";

const C = COLORS;

export default function Nav({ onBack = null }) {
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
                color: logoColor,
                transition: "color 0.35s ease",
              }}
            >
              ALIVE AMAMI
            </div>

            <div
              style={{
                marginTop: "4px",
                fontFamily: "'Cabin', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                lineHeight: 1.1,
                color: logoColor,
                opacity: isMenuOpen
                  ? 0.85
                  : isScrolled
                  ? 0.85
                  : 0.95,
                transition:
                  "color 0.35s ease, opacity 0.35s ease",
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
                  handleSectionClick(e, "tours")
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "9px 20px",

                  background: C.green,
                  color: "#FFFFFF",

                  borderRadius: "2px",

                  fontSize: "13px",
                  fontWeight: 700,

                  textDecoration: "none",

                  boxShadow: isScrolled
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
                  handleSectionClick(e, "contact")
                }
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

                  borderRadius: "2px",

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

              padding: "64px 30px 40px",
            }}
          >
            {/* ========================================
                Menu Links
            ======================================== */}

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

            {/* ========================================
                Contact / SNS
                ※ 上側のborderTopは入れない
                   → FAQ下の線が二重にならない
            ======================================== */}

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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 4C7.03 4 3 7.22 3 11.2C3 14.77 6.09 17.73 10.29 18.28C10.67 18.33 10.8 18.52 10.76 18.83C10.7 19.13 10.47 20.01 10.42 20.25C10.34 20.54 10.31 20.66 10.4 20.73C10.49 20.8 10.68 20.75 10.92 20.64C11.17 20.52 15.13 18.23 16.75 17.17C19.35 15.47 21 13.04 21 11.2C21 7.22 16.97 4 12 4Z"
        fill="currentColor"
      />

      <path
        d="M8 9.5V13.5M10 9.5V13.5L14 9.5V13.5M16 9.5V13.5"
        stroke="#FFFFFF"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}