import { COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

function SectionHeading({ ja }) {
  return (
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
          lineHeight: 1.5,
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
        padding: "72px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          ...CONTAINER,
        }}
      >
        <SectionHeading ja="当日の流れ" />

        <div className="tour-flow">
          {tour.flow?.map((step, index) => (
            <div
              key={index}
              className="tour-flow-item"
              style={{
                position: "relative",
                flex: 1,
                paddingRight:
                  index < tour.flow.length - 1
                    ? "32px"
                    : "0",
              }}
            >
              {/* Connecting Line */}
              {index < tour.flow.length - 1 && (
                <div
                  className="tour-flow-line"
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "40px",
                    right: "0",
                    height: "1px",
                    background:
                      "rgba(62, 140, 42, 0.25)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Number */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: C.green,
                  color: "#FFFFFF",
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

              {/* Step Label */}
              <p
                style={{
                  fontFamily: "'Cabin', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: C.green,
                  margin: "0 0 6px",
                  lineHeight: 1.4,
                }}
              >
                STEP {step.num}
              </p>

              {/* Title */}
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: C.text,
                  margin: "0 0 10px",
                  lineHeight: 1.6,
                }}
              >
                {step.title}
              </p>

              {/* Description */}
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

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .tour-flow {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
          }

          .tour-flow-item {
            display: grid !important;
            grid-template-columns: 40px 1fr !important;
            column-gap: 18px !important;
            padding-right: 0 !important;
            padding-bottom: 32px !important;
          }

          .tour-flow-item:last-child {
            padding-bottom: 0 !important;
          }

          .tour-flow-item > div:first-child {
            grid-column: 1 !important;
            grid-row: 1 / span 3 !important;
          }

          .tour-flow-item > p:nth-of-type(1),
          .tour-flow-item > p:nth-of-type(2),
          .tour-flow-item > p:nth-of-type(3) {
            grid-column: 2 !important;
          }

          .tour-flow-item > p:nth-of-type(1) {
            margin-top: 2px !important;
          }

          .tour-flow-line {
            top: 40px !important;
            left: 19px !important;
            right: auto !important;
            width: 1px !important;
            height: calc(100% - 8px) !important;
          }
        }
      `}</style>
    </section>
  );
}