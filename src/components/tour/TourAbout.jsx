import { COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

export default function TourAbout({ tour }) {
  return (
    <section
      style={{
        padding: "64px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          ...CONTAINER,
        }}
      >
        {/* Heading */}
        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: C.text,
              margin: 0,
              marginBottom: "12px",
              lineHeight: 1.4,
            }}
          >
            このツアーについて
          </h2>

          <div
            style={{
              width: "36px",
              height: "2px",
              background: C.green,
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {tour.about?.map((text, index) => (
            <p
              key={index}
              style={{
                fontSize: "15px",
                color: C.textLight,
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}