import { Clock, Users } from "lucide-react";

import { TOURS, COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

function SectionHeading() {
  return (
    <div style={{ marginBottom: "40px" }}>
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
  );
}

export default function OtherTours({
  currentTourId,
  onSelectTour,
}) {
  const otherTours = TOURS.filter(
    (tour) => tour.id !== currentTourId
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
          ...CONTAINER,
        }}
      >
        <SectionHeading />

        {/* Tour Cards */}
        <div
          className="other-tours-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {otherTours.map((tour) => (
            <article
              key={tour.id}
              onClick={() => onSelectTour?.(tour)}
              style={{
                background: C.white,
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
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
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />

                {/* Image Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,25,10,0.7) 0%, rgba(10,25,10,0.05) 65%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Tag */}
                {tour.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      padding: "4px 9px",
                      background: C.green,
                      color: "#FFFFFF",
                      borderRadius: "3px",
                      fontSize: "10px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {tour.tag}
                  </span>
                )}

                {/* Image Text */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "14px 16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cabin', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0 0 4px",
                    }}
                  >
                    {tour.nameEn?.toUpperCase()}
                  </p>

                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: 1.45,
                      color: "#FFFFFF",
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
                  padding: "14px 16px 16px",
                }}
              >
                {/* Duration / Target */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <InfoItem
                    icon={<Clock size={11} />}
                    text={tour.duration}
                  />

                  <InfoItem
                    icon={<Users size={11} />}
                    text={tour.target}
                  />
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cabin', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: C.green,
                    }}
                  >
                    {tour.price}
                  </span>

                  {tour.priceNote && (
                    <span
                      style={{
                        fontSize: "10px",
                        color: C.textLight,
                      }}
                    >
                      {tour.priceNote}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .other-tours-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .other-tours-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}

function InfoItem({ icon, text }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "10px",
        color: C.textLight,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          color: C.green,
        }}
      >
        {icon}
      </span>

      {text}
    </span>
  );
}