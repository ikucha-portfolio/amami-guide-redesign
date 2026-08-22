import { Clock, Users } from "lucide-react";

import {
  TOURS,
  COLORS as C,
} from "../../siteData";

export default function OtherTours({
  currentTourId,
  onSelectTour,
}) {
  const OTHER_TOURS = TOURS.filter(
    (t) => t.id !== currentTourId
  );

  return (
    <section
      style={{
        padding: "96px 6%",
        background: C.offWhite,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Section Heading */}
        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: C.text,
              margin: 0,
              marginBottom: "12px",
            }}
          >
            他のツアーを見る
          </h2>

          <div
            style={{
              width: "32px",
              height: "2px",
              background: C.green,
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Tour Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {OTHER_TOURS.map((tour) => (
            <div
              key={tour.id}
              onClick={() => onSelectTour?.(tour)}
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                background: C.white,
                boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                }}
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,25,10,0.75) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Tag */}
                {tour.tag && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: C.green,
                      color: "#ffffff",
                      padding: "3px 11px",
                      borderRadius: "3px",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    {tour.tag}
                  </div>
                )}

                {/* Image Text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 20px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cabin', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                      marginBottom: "4px",
                    }}
                  >
                    {tour.nameEn.toUpperCase()}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.4,
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {tour.name}
                  </p>
                </div>
              </div>

              {/* Card Info */}
              <div
                style={{
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {/* Duration / Target */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "11px",
                        color: C.textLight,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Clock
                        size={11}
                        style={{
                          color: C.green,
                        }}
                      />
                      {tour.duration}
                    </span>

                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "11px",
                        color: C.textLight,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Users
                        size={11}
                        style={{
                          color: C.green,
                        }}
                      />
                      {tour.target}
                    </span>
                  </div>

                  {/* Price */}
                  <span
                    style={{
                      fontFamily: "'Cabin', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: C.green,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {tour.price}

                    <span
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontSize: "11px",
                        fontWeight: 400,
                        color: C.textLight,
                      }}
                    >
                      {tour.priceNote}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}