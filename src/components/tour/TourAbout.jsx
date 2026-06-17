import { COLORS as C } from "../../siteData";

export default function TourAbout({ tour }) {
  return (
    <section
      style={{
        padding: "96px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
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

        <div
          style={{
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {tour.about?.map((text, index) => (
            <p
              key={index}
              style={{
                fontSize: "15px",
                color: C.textLight,
                lineHeight: 2.1,
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