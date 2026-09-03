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
   Detail Value
   - 通常の文章
   - 配列
   - 改行された料金
   - 「半日：〜」のようなプラン表示
======================================== */

function DetailValue({ row }) {
  const value = row?.value;

  if (value === undefined || value === null) {
    return null;
  }

  /* ----------------------------------------
     共通テキストスタイル
  ---------------------------------------- */

  const textStyle = {
    fontSize: "14px",
    color: C.textLight,
    lineHeight: 1.8,
    overflowWrap: "anywhere",
    wordBreak: "normal",
  };

  /* ----------------------------------------
     配列の場合
  ---------------------------------------- */

  if (Array.isArray(value)) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {value.map((item, index) => (
          <span key={index} style={textStyle}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  /* ----------------------------------------
     改行なし
     → 通常の文章として表示
  ---------------------------------------- */

  if (typeof value !== "string" || !value.includes("\n")) {
    return (
      <span
        style={{
          ...textStyle,
          display: "block",
          whiteSpace: "pre-line",
        }}
      >
        {value}
      </span>
    );
  }

  /* ----------------------------------------
     改行あり
     例：
     半日：大人 10,000円 / 小学生以下 7,000円
     1日：大人 16,000円 / 小学生以下 13,000円
  ---------------------------------------- */

  const lines = value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
      }}
    >
      {lines.map((line, index) => {
        const colonIndex = line.indexOf("：");

        /* ----------------------------------------
           「：」がない通常の行
        ---------------------------------------- */

        if (colonIndex === -1) {
          return (
            <span key={index} style={textStyle}>
              {line}
            </span>
          );
        }

        /* ----------------------------------------
           「半日：〜」「1日：〜」など
        ---------------------------------------- */

        const label = line.slice(0, colonIndex).trim();
        const content = line.slice(colonIndex + 1).trim();

        const items = content
          .split(" / ")
          .map((item) => item.trim())
          .filter(Boolean);

        return (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "52px minmax(0, 1fr)",
              columnGap: "12px",
              alignItems: "start",
              minWidth: 0,
            }}
          >
            {/* プラン名 */}

            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: C.text,
                lineHeight: 1.8,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>

            {/* 料金 */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                minWidth: 0,
              }}
            >
              {items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  style={{
                    ...textStyle,
                    display: "block",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================
   Detail Row
======================================== */

function DetailRow({ row, isLast }) {
  return (
    <div
      className="tour-detail-row"
      style={{
        display: "grid",
        gridTemplateColumns: "88px minmax(0, 1fr)",
        columnGap: "20px",
        alignItems: "start",
        padding: "18px 24px",
        background: C.white,
        borderBottom: isLast
          ? "none"
          : "1px solid rgba(62, 140, 42, 0.1)",
      }}
    >
      {/* 項目名 */}

      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: C.text,
          lineHeight: 1.8,
          whiteSpace: "nowrap",
        }}
      >
        {row.label}
      </span>

      {/* 内容 */}

      <div
        style={{
          minWidth: 0,
        }}
      >
        <DetailValue row={row} />
      </div>
    </div>
  );
}

/* ========================================
   Tour Details
   - 「送迎」は必ず最後に表示
======================================== */

function TourDetails({ details }) {
  if (!details?.length) {
    return null;
  }

  /* ----------------------------------------
     「送迎」を最後へ移動
     siteData の並び順は変更しない
  ---------------------------------------- */

  const normalDetails = details.filter(
    (row) => row.label !== "送迎"
  );

  const pickupDetail = details.find(
    (row) => row.label === "送迎"
  );

  const displayDetails = pickupDetail
    ? [...normalDetails, pickupDetail]
    : normalDetails;

  return (
    <div>
      {/* 予約人数について */}

      <p
  style={{
    margin: "0 0 14px",
    fontSize: "13px",
    fontWeight: 600,
    color: C.green,
    lineHeight: 1.7,
  }}
>
 ・2名様からご予約いただけます
</p>
      <div
        className="tour-details"
        style={{
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid rgba(62, 140, 42, 0.15)",
          background: C.white,
        }}
      >
        {displayDetails.map((row, index) => {
          const isLast =
            index === displayDetails.length - 1;

          return (
            <DetailRow
              key={`${row.label}-${index}`}
              row={row}
              isLast={isLast}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ========================================
   Recommended Points
======================================== */

function RecommendedPoints({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div
      style={{
        paddingBottom: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            color: C.green,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ＼
        </span>

        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: C.green,
            margin: 0,
          }}
        >
          おすすめポイント
        </p>

        <span
          style={{
            fontSize: "18px",
            color: C.green,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ／
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: C.green,
                marginTop: "9px",
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: "14px",
                color: C.textLight,
                lineHeight: 1.8,
                overflowWrap: "anywhere",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================
   Notes
   - siteData の notes のみ表示
   - 内容をここに直接書かない
======================================== */

function Notes({ notes }) {
  if (!notes?.length) {
    return null;
  }

  return (
    <div
      style={{
        borderTop: "1px solid rgba(62, 140, 42, 0.15)",
        paddingTop: "24px",
      }}
    >
      <SectionSubHeading title="注意事項" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {notes.map((note, index) => (
          <p
            key={index}
            style={{
              margin: 0,
              fontSize: "14px",
              color: C.textLight,
              lineHeight: 1.8,
              overflowWrap: "anywhere",
            }}
          >
            ・{note}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ========================================
   Cancellation
======================================== */

function Cancellation() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(62, 140, 42, 0.15)",
        marginTop: "28px",
        paddingTop: "24px",
      }}
    >
      <SectionSubHeading title="キャンセルについて" />

      <p
        style={{
          fontSize: "14px",
          color: C.textLight,
          lineHeight: 1.8,
          margin: 0,
          overflowWrap: "anywhere",
        }}
      >
        キャンセル・日程変更については、ご予約時にご案内いたします。
        ご不明な点はお気軽にご相談ください。
      </p>
    </div>
  );
}

/* ========================================
   Tour Info
======================================== */

export default function TourInfo({ tour }) {
  return (
    <section
      style={{
        padding: "72px 6%",
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
          className="tour-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* ========================================
              左：ツアー詳細
          ======================================== */}

          <TourDetails details={tour.details} />

          {/* ========================================
              右：おすすめ・注意事項
          ======================================== */}

          <div
            style={{
              minWidth: 0,
            }}
          >
            <RecommendedPoints
              items={tour.recommended}
            />

            <Notes notes={tour.notes} />

            <Cancellation />
          </div>
        </div>
      </div>

      {/* ========================================
          Responsive
      ======================================== */}

      <style>{`
        @media (max-width: 768px) {
          .tour-info-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .tour-detail-row {
            grid-template-columns:
              76px minmax(0, 1fr) !important;
            column-gap: 16px !important;
            padding: 16px 18px !important;
          }
        }

        @media (max-width: 480px) {
          .tour-detail-row {
            grid-template-columns:
              68px minmax(0, 1fr) !important;
            column-gap: 12px !important;
            padding: 15px 16px !important;
          }

          .tour-detail-row > span:first-child {
            font-size: 13px !important;
          }

          .tour-detail-row span {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ========================================
   Sub Heading
======================================== */

function SectionSubHeading({ title }) {
  return (
    <p
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "16px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: C.green,
        margin: "0 0 16px",
        lineHeight: 1.5,
      }}
    >
      {title}
    </p>
  );
}