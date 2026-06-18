import { TOURS, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import { Clock, Users } from "lucide-react";
import SectionHeader from "./common/SectionHeader";
const C = COLORS;

const cardBase = {
  borderRadius: "6px",
  overflow: "hidden",
  background: C.white,
  boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
};

export default function Tours({
  onSelectTour,
}) {
  return (
    <section
      id="tours"
      style={{
        padding: "96px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
       <SectionHeader
  title="TOURS"
  subtitle="ツアー一覧"
/>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginBottom: "20px",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
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
    </section>
  );
}

// 横長・特集（グリッド左2/3）
function TourCardFeatured({
  tour,
  onSelectTour,
}) {
  return (
    <div
  onClick={() => onSelectTour?.(tour)}
  style={{
    ...cardBase,
    position: "relative",
    cursor: "pointer",
    aspectRatio: "16/9",
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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,25,10,0.82) 0%, transparent 55%)",
        }}
      />

      {tour.tag && <TagBadge label={tour.tag} />}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 26px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            marginBottom: "5px",
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {tour.name}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.65,
            marginBottom: "14px",
          }}
        >
          {tour.description}
        </p>

        <CardMeta tour={tour} light />
      </div>
    </div>
  );
}

// 縦長（グリッド右1/3）
function TourCardTall({
  tour,
  onSelectTour,
}) {
  return (
    <div
  onClick={() => onSelectTour?.(tour)}
  style={{
    ...cardBase,
        position: "relative",
        cursor: "pointer",
        height: "100%",
        minHeight: "280px",
      }}
    >
      <ImageWithFallback
        src={tour.image}
        alt={tour.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          minHeight: "280px",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,25,10,0.82) 0%, transparent 50%)",
        }}
      />

      {tour.tag && <TagBadge label={tour.tag} />}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px 22px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            marginBottom: "4px",
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {tour.name}
        </h3>

        <CardMeta tour={tour} light />
      </div>
    </div>
  );
}

// 標準カード（下3枚）
function TourCardStandard({
  tour,
  onSelectTour,
}) {
  return (
    <div
  onClick={() => onSelectTour?.(tour)}
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
          aspectRatio: "4/3",
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
          }}
        />

        {tour.tag && <TagBadge label={tour.tag} />}
      </div>

      <div
        style={{
          padding: "18px 20px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: C.green,
            margin: 0,
            marginBottom: "4px",
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: C.text,
            margin: 0,
            marginBottom: "8px",
            lineHeight: 1.3,
          }}
        >
          {tour.name}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: C.textLight,
            lineHeight: 1.75,
            marginBottom: "16px",
            flex: 1,
          }}
        >
          {tour.description}
        </p>

        <div
          style={{
            paddingTop: "12px",
            borderTop: "1px solid rgba(62,140,42,0.1)",
          }}
        >
          <CardMeta tour={tour} />
        </div>
      </div>
    </div>
  );
}

function TagBadge({ label }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        background: C.green,
        color: "#fff",
        padding: "3px 11px",
        borderRadius: "3px",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </div>
  );
}

function CardMeta({ tour, light = false }) {
  const dim = light ? "rgba(255,255,255,0.6)" : C.textLight;
  const priceCol = light ? "#fff" : C.green;

  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          color: dim,
        }}
      >
        <Clock
          size={12}
          style={{
            color: light
              ? "rgba(255,255,255,0.5)"
              : C.green,
          }}
        />
        {tour.duration}
      </span>

      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          color: dim,
        }}
      >
        <Users
          size={12}
          style={{
            color: light
              ? "rgba(255,255,255,0.5)"
              : C.green,
          }}
        />
        {tour.target}
      </span>

      <span
        style={{
          marginLeft: "auto",
          fontFamily: "'Cabin', sans-serif",
          fontWeight: 700,
          fontSize: "19px",
          color: priceCol,
          lineHeight: 1,
        }}
      >
        {tour.price}
        <span
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            color: dim,
          }}
        >
          {tour.priceNote}
        </span>
      </span>
    </div>
  );
}