import { COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

/* ========================================
   Section Heading
======================================== */

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

/* ========================================
   Tour Flow
======================================== */

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
          {tour.flow?.map((step, index) => {
            const isLast = index === tour.flow.length - 1;

            return (
              <div
                key={index}
                className="tour-flow-item"
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "40px minmax(0, 1fr)",
                  columnGap: "30px",
                  minWidth: 0,
                  paddingBottom: isLast ? "0" : "44px",
                }}
              >
                {/* ========================================
                    Number
                ======================================== */}

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
                    fontFamily: "'Cabin', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>

                {/* ========================================
                    Content
                ======================================== */}

                <div
                  style={{
                    minWidth: 0,
                    paddingTop: "1px",
                  }}
                >
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
                      overflowWrap: "anywhere",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* ========================================
                    Step Separator

                    文章の下の余白に配置
                    → 次のステップとの間を区切る
                ======================================== */}

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="tour-flow-line"
                    style={{
                      position: "absolute",
                      left: "70px",
                      right: "0",
                      bottom: "22px",
                      borderTop:
                        "1px dashed rgba(62, 140, 42, 0.22)",
                      zIndex: 0,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================
          Responsive
      ======================================== */}

      <style>{`
        @media (max-width: 768px) {
          .tour-flow-item {
            grid-template-columns: 40px minmax(0, 1fr) !important;
            column-gap: 18px !important;
            padding-bottom: 36px !important;
          }

          .tour-flow-item:last-child {
            padding-bottom: 0 !important;
          }

          .tour-flow-line {
            left: 58px !important;
            right: 0 !important;
            bottom: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .tour-flow-item {
            column-gap: 16px !important;
            padding-bottom: 32px !important;
          }

          .tour-flow-item > div:first-child {
            width: 40px !important;
            height: 40px !important;
          }

          .tour-flow-line {
            left: 56px !important;
            bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}