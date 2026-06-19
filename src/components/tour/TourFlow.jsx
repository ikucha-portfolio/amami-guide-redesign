import { COLORS as C } from "../../siteData";
import {
  CONTAINER,
} from "../../styles/designSystem";
function SectionHeading({ ja }) {
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
        {ja}
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

export default function TourFlow({ tour }) {
  return (
    <section
      style={{
        padding: "96px 6%",
        background: C.white,
      }}
    >
      <div
  style={{
    ...CONTAINER,
  }}
>
        <SectionHeading ja="当日の流れ" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {tour.flow?.map((step, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                paddingRight:
                  i < tour.flow.length - 1
                    ? "32px"
                    : "0",
              }}
            >
              {i < tour.flow.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "0",
                    left: "calc(100% - 32px)",
                    width: "32px",
                    height: "1px",
                    background:
                      "rgba(62,140,42,0.25)",
                  }}
                />
              )}

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: C.green,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  fontFamily: "'Cabin', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {step.num}
              </div>

              <p
                style={{
                  fontFamily: "'Cabin', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: C.green,
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                STEP {step.num}
              </p>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: C.text,
                  margin: 0,
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </p>

              <p
                style={{
                  fontSize: "13px",
                  color: C.textLight,
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}