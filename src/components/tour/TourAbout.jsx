import { COLORS as C } from "../../siteData";
import {
  CONTAINER,
} from "../../styles/designSystem";

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
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: C.text,
              marginBottom: "12px",
            }}
          >
            このツアーについて
          </h2>

          <div
            style={{
              width: "32px",
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
    gap: "4px",
  }}
>
  {tour.about?.map((text, index) => (
    <p
      key={index}
      style={{
        fontSize: "14px",
        color: C.textLight,
        lineHeight: 1.55,
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