import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  TOURS,
  COLORS as C,
} from "../../siteData";

export default function TourNavigation({
  currentTourId,
  onSelectTour,
}) {
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

  if (!TOURS?.length) {
    return null;
  }

  // スマホではHero直下に表示しない
  if (isMobile) {
    return null;
  }

  const currentIndex = TOURS.findIndex(
    (tour) => tour.id === currentTourId
  );

  const handleSelect = (tour) => {
    if (!tour || tour.id === currentTourId) {
      return;
    }

    onSelectTour?.(tour);
  };

  const handlePrev = () => {
    if (currentIndex === -1) return;

    const prevIndex =
      currentIndex === 0
        ? TOURS.length - 1
        : currentIndex - 1;

    handleSelect(TOURS[prevIndex]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === TOURS.length - 1
        ? 0
        : currentIndex + 1;

    handleSelect(TOURS[nextIndex]);
  };

  return (
    <nav
      aria-label="ツアーを選択"
      style={{
        background: C.white,
        borderBottom:
          "1px solid rgba(62, 140, 42, 0.12)",
      }}
    >
      <div
        className="tour-navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          minHeight: "64px",
          padding: "0 24px",
        }}
      >
        {/* 左矢印 */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="前のツアー"
          className="tour-nav-arrow"
        >
          <ChevronLeft
            size={20}
            strokeWidth={1.5}
          />
        </button>

        {/* ツアー一覧 */}
        <div
          className="tour-navigation-list"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "auto",
            scrollbarWidth: "none",
            flex: "0 1 auto",
            minWidth: 0,
          }}
        >
          {TOURS.map((tour, index) => {
            const isActive =
              tour.id === currentTourId;

            return (
              <div
                key={tour.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <button
                  type="button"
                  onClick={() => handleSelect(tour)}
                  className="tour-nav-item"
                  style={{
                    position: "relative",
                    border: "none",
                    background: "transparent",
                    padding: "0 14px",
                    color: isActive
                      ? C.green
                      : C.textLight,
                    fontFamily:
                      "'Noto Sans JP', sans-serif",
                    fontSize: "13px",
                    fontWeight: isActive
                      ? 700
                      : 500,
                    whiteSpace: "nowrap",
                    cursor: isActive
                      ? "default"
                      : "pointer",
                    height: "64px",
                  }}
                >
                  {tour.name}

                  {/* 現在のツアー */}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        left: "14px",
                        right: "14px",
                        bottom: 0,
                        height: "2px",
                        background: C.green,
                        borderRadius:
                          "2px 2px 0 0",
                      }}
                    />
                  )}
                </button>

                {/* 区切り線 */}
                {index < TOURS.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: "1px",
                      height: "16px",
                      background:
                        "rgba(90, 106, 87, 0.18)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* 右矢印 */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="次のツアー"
          className="tour-nav-arrow"
        >
          <ChevronRight
            size={20}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <style>{`
        .tour-navigation-list::-webkit-scrollbar {
          display: none;
        }

        .tour-nav-arrow {
          width: 34px;
          height: 64px;
          flex-shrink: 0;
          border: none;
          background: transparent;
          color: ${C.textLight};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: color 0.2s ease;
        }

        .tour-nav-arrow:hover {
          color: ${C.green};
        }

        .tour-nav-item {
          transition: color 0.2s ease;
        }

        .tour-nav-item:hover {
          color: ${C.green} !important;
        }
      `}</style>
    </nav>
  );
}