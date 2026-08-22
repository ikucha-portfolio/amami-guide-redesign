import { COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

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

function DetailValue({ row }) {
  const isMultiLinePrice =
    row.label === "料金" &&
    typeof row.value === "string" &&
    row.value.includes("\n");

  if (!isMultiLinePrice) {
    return (
      <span
        style={{
          fontSize: "14px",
          color: C.textLight,
          lineHeight: 1.7,
          whiteSpace: "pre-line",
          flex: 1,
        }}
      >
        {row.value}
      </span>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        fontSize: "14px",
        color: C.textLight,
        lineHeight: 1.7,
      }}
    >
      {row.value.split("\n").map((line, index) => {
        const [plan, priceText = ""] = line.split("：");
        const prices = priceText.split(" / ");

        return (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr",
              columnGap: "16px",
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: C.textLight,
                lineHeight: 1.7,
                whiteSpace: "nowrap",
              }}
            >
              {plan}
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              {prices.map((price, priceIndex) => (
                <span
                  key={priceIndex}
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: C.textLight,
                    lineHeight: 1.7,
                    whiteSpace: "nowrap",
                  }}
                >
                  {price}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TourInfo({ tour }) {
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
        <SectionHeading ja="ツアー詳細" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Table */}
          <div
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              border: `1px solid rgba(62, 140, 42, 0.15)`,
            }}
          >
            {tour.details?.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "18px 28px",
                  background: C.white,
                  borderBottom:
                    i < tour.details.length - 1
                      ? `1px solid rgba(62, 140, 42, 0.1)`
                      : "none",
                }}
              >
                <span
                  style={{
                    width: "96px",
                    flexShrink: 0,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: C.text,
                    lineHeight: 1.7,
                  }}
                >
                  {row.label}
                </span>

                <DetailValue row={row} />
              </div>
            ))}
          </div>

          {/* おすすめ・注意事項 */}
          <div>
            {/* おすすめ・安心ポイント */}
            <div>
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: C.green,
                  margin: 0,
                  marginBottom: "20px",
                }}
              >
                おすすめポイント
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginBottom: "36px",
                }}
              >
                {tour.recommended?.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: C.green,
                        fontSize: "15px",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      ✔
                    </span>

                    <span
                      style={{
                        fontSize: "15px",
                        color: C.textLight,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 注意事項 */}
            <div
              style={{
                borderTop: `1px solid rgba(62, 140, 42, 0.15)`,
                paddingTop: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: C.green,
                  margin: 0,
                  marginBottom: "16px",
                }}
              >
                注意事項
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "14px",
                  color: C.textLight,
                  lineHeight: 1.8,
                }}
              >
                <div>
                  ・天候や海況により、ツアー内容の変更・中止となる場合があります。
                </div>

                <div>
                  ・服装や持ち物については、各ツアーの案内をご確認ください。
                </div>

                <div>
                  ・小さなお子様連れや、体調面などでご不安がある場合は、事前にご相談ください。
                </div>
              </div>
            </div>

            {/* キャンセルについて */}
            <div
              style={{
                borderTop: `1px solid rgba(62, 140, 42, 0.15)`,
                marginTop: "28px",
                paddingTop: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: C.green,
                  margin: 0,
                  marginBottom: "16px",
                }}
              >
                キャンセルについて
              </p>

              <div
                style={{
                  fontSize: "14px",
                  color: C.textLight,
                  lineHeight: 1.8,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  キャンセル・日程変更については、ご予約時にご案内いたします。ご不明な点はお気軽にご相談ください。
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}