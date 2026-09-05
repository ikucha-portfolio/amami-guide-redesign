import { useState } from "react";
import { TOURS, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import { Clock, Users } from "lucide-react";
import SectionHeader from "./common/SectionHeader";
import {
  SECTION,
  CONTAINER_WIDE,
} from "../styles/designSystem";

const C = COLORS;

/* ========================================
   Common Card
======================================== */

const cardBase = {
  borderRadius: "2px",
  overflow: "hidden",
  background: C.white,
  boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
};

export default function Tours({ onSelectTour }) {
  return (
    <section
      id="tours"
      style={{
        ...SECTION,
        background: C.white,
      }}
    >
      <div
        style={{
          ...CONTAINER_WIDE,
        }}
      >
        <SectionHeader
          title="TOURS"
          subtitle="ツアー一覧"
        />

        {/* ========================================
            Desktop Layout
        ======================================== */}

        <div className="tours-desktop">

          {/* Featured + Tall */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 2fr) minmax(0, 1fr)",
              gap: "24px",
              marginBottom: "24px",
              alignItems: "stretch",
            }}
          >
            <TourCardFeatured
              tour={TOURS[0]}
              onSelectTour={onSelectTour}
            />

            <TourCardTall
              tour={TOURS[1]}
              onSelectTour={onSelectTour}
            />
          </div>

          {/* Standard Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, 1fr)",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {TOURS.slice(2).map((tour) => (
              <TourCardStandard
                key={tour.id}
                tour={tour}
                onSelectTour={onSelectTour}
              />
            ))}
          </div>
        </div>

        {/* ========================================
            Mobile Layout
        ======================================== */}

        <div className="tours-mobile">
          {TOURS.map((tour) => (
            <TourCardMobile
              key={tour.id}
              tour={tour}
              onSelectTour={onSelectTour}
            />
          ))}
        </div>
      </div>

      {/* ========================================
          Responsive Styles
      ======================================== */}

      <style>
        {`
          .tours-mobile {
            display: none;
          }

          @media (max-width: 768px) {
            .tours-desktop {
              display: none;
            }

            .tours-mobile {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}

/* ========================================
   Desktop
   Featured Card
======================================== */

function TourCardFeatured({
  tour,
  onSelectTour,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onSelectTour?.(tour)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...cardBase,
        position: "relative",
        cursor: "pointer",
        aspectRatio: "16 / 9",
        minWidth: 0,
      }}
    >
      <ImageWithFallback
        src={tour.image}
        alt={tour.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: isHovered
            ? "scale(1.045)"
            : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,25,10,0.84) 0%, rgba(10,25,10,0.22) 48%, rgba(10,25,10,0.04) 100%)",
        }}
      />

      {tour.tag && (
        <TagBadge label={tour.tag} />
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "20px 26px 18px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.62)",
            margin: "0 0 6px",
            lineHeight: 1.15,
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          {tour.name}
        </h3>

        <p
          style={{
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.86)",
            lineHeight: 1.55,
            margin: "0 0 12px",
            maxWidth: "88%",
            whiteSpace: "pre-line",
          }}
        >
          {tour.description}
        </p>

        <CardMeta
          tour={tour}
          light
          compact
          priceSize="17px"
          metaSize="11.5px"
        />
      </div>
    </div>
  );
}

/* ========================================
   Desktop
   Tall Card
======================================== */

function TourCardTall({
  tour,
  onSelectTour,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onSelectTour?.(tour)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...cardBase,
        position: "relative",
        cursor: "pointer",
        minHeight: 0,
        minWidth: 0,
        height: "100%",
      }}
    >
      <ImageWithFallback
        src={tour.image}
        alt={tour.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: isHovered
            ? "scale(1.045)"
            : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,25,10,0.90) 0%, rgba(10,25,10,0.38) 55%, rgba(10,25,10,0.08) 100%)",
        }}
      />

      {tour.tag && (
        <TagBadge label={tour.tag} />
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "20px 22px 18px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "9.5px",
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.62)",
            margin: "0 0 6px",
            lineHeight: 1.15,
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}
        >
          {tour.name}
        </h3>

        <p
          style={{
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.86)",
            lineHeight: 1.55,
            margin: "0 0 12px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {tour.description}
        </p>

        <CardMeta
          tour={tour}
          light
          compact
          priceSize="16px"
          metaSize="11.5px"
        />
      </div>
    </div>
  );
}

/* ========================================
   Desktop
   Standard Card
======================================== */

function TourCardStandard({
  tour,
  onSelectTour,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onSelectTour?.(tour)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...cardBase,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <ImageWithFallback
          src={tour.image}
          alt={tour.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isHovered
              ? "scale(1.045)"
              : "scale(1)",
            transition: "transform 0.7s ease",
          }}
        />

        {tour.tag && (
          <TagBadge label={tour.tag} />
        )}
      </div>

      <div
        style={{
          padding: "14px 18px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "9.5px",
            letterSpacing: "0.15em",
            color: C.green,
            margin: "0 0 5px",
            lineHeight: 1.15,
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: C.text,
            margin: "0 0 7px",
            lineHeight: 1.3,
          }}
        >
          {tour.name}
        </h3>

        <p
          style={{
            fontSize: "12.5px",
            color: C.textLight,
            lineHeight: 1.6,
            margin: "0 0 12px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "40px",
          }}
        >
          {tour.description}
        </p>

        <div
          style={{
            paddingTop: "10px",
            borderTop:
              "1px solid rgba(62,140,42,0.10)",
          }}
        >
          <CardMeta
            tour={tour}
            compact
            priceSize="15.5px"
            metaSize="11.5px"
          />
        </div>
      </div>
    </div>
  );
}

/* ========================================
   Mobile
   Full Width Image + Simple Information
======================================== */

function TourCardMobile({
  tour,
  onSelectTour,
}) {
  return (
    <article
      style={{
        width: "100%",
        background: C.white,
      }}
    >
      {/* ========================================
          Full Width Image
      ======================================== */}

      <div
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          aspectRatio: "16 / 9",
          overflow: "hidden",
        }}
      >
        <ImageWithFallback
          src={tour.image}
          alt={tour.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {tour.tag && (
          <TagBadge label={tour.tag} />
        )}
      </div>

      {/* ========================================
          Tour Information
      ======================================== */}

      <div
        style={{
          padding: "18px 0 28px",
        }}
      >
        {/* English Name */}

        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: C.green,
            margin: "0 0 5px",
            lineHeight: 1.2,
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        {/* Japanese Name */}

        <h3
          style={{
            fontSize: "19px",
            fontWeight: 700,
            color: C.text,
            margin: "0 0 8px",
            lineHeight: 1.4,
          }}
        >
          {tour.name}
        </h3>

        {/* Description */}

        <p
          style={{
            fontSize: "13px",
            color: C.textLight,
            lineHeight: 1.7,
            margin: "0 0 14px",
          }}
        >
          {tour.description}
        </p>

        {/* ========================================
            Duration + Target
        ======================================== */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          {/* Duration */}

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              color: C.textLight,
              lineHeight: 1.15,
              whiteSpace: "nowrap",
            }}
          >
            <Clock
              size={11.5}
              style={{
                color: C.green,
                flexShrink: 0,
              }}
            />

            {tour.duration}
          </span>

          {/* Target */}

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              color: C.textLight,
              lineHeight: 1.15,
              whiteSpace: "nowrap",
            }}
          >
            <Users
              size={11.5}
              style={{
                color: C.green,
                flexShrink: 0,
              }}
            />

            {tour.target}
          </span>
        </div>

        {/* ========================================
            Price + Detail Button
        ======================================== */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Price */}

          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              color: C.green,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            {tour.price}

            <span
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: "10.5px",
                fontWeight: 400,
                color: C.textLight,
                marginLeft: "2px",
              }}
            >
              {tour.priceNote}
            </span>
          </div>

          {/* Detail Button */}

          <button
            type="button"
            onClick={() => onSelectTour?.(tour)}
            style={{
              flexShrink: 0,
              width: "160px",
              height: "44px",
              border: "none",
              borderRadius: "3px",
              background: C.green,
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span>
              詳細はこちら
            </span>

            <span
              aria-hidden="true"
              style={{
                fontSize: "17px",
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ========================================
   Tag Badge
======================================== */

function TagBadge({ label }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "14px",
        left: "14px",
        background: C.green,
        color: "#FFFFFF",
        padding: "4px 11px",
        borderRadius: "2px",
        fontSize: "10.5px",
        fontWeight: 700,
        letterSpacing: "0.03em",
        zIndex: 2,
      }}
    >
      {label}
    </div>
  );
}

/* ========================================
   Card Meta
======================================== */

function CardMeta({
  tour,
  light = false,
  compact = false,
  priceSize = "18px",
  metaSize = "12px",
}) {
  const textColor = light
    ? "rgba(255,255,255,0.82)"
    : C.textLight;

  const iconColor = light
    ? "rgba(255,255,255,0.55)"
    : C.green;

  const priceColor = light
    ? "#FFFFFF"
    : C.green;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? "9px" : "14px",
        flexWrap: "wrap",
      }}
    >
      {/* Duration */}

      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: metaSize,
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: "nowrap",
        }}
      >
        <Clock
          size={11.5}
          style={{
            color: iconColor,
            flexShrink: 0,
          }}
        />

        {tour.duration}
      </span>

      {/* Target */}

      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: metaSize,
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: "nowrap",
        }}
      >
        <Users
          size={11.5}
          style={{
            color: iconColor,
            flexShrink: 0,
          }}
        />

        {tour.target}
      </span>

      {/* Price */}

      <span
        style={{
          marginLeft: "auto",
          fontFamily: "'Cabin', sans-serif",
          fontWeight: 700,
          fontSize: priceSize,
          color: priceColor,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {tour.price}

        <span
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "10.5px",
            fontWeight: 400,
            color: light
              ? "rgba(255,255,255,0.72)"
              : C.textLight,
          }}
        >
          {tour.priceNote}
        </span>
      </span>
    </div>
  );
}