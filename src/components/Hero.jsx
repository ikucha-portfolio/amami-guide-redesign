import { ChevronDown, ChevronRight, Leaf } from "lucide-react";

const C = {
  green: "#4D8B46",
};

export default function Hero() {
  return (
    <>
      {/* ここから今貼ってくれたsection */}
      <section
        style={{
          position: "relative",
          height: "calc(100vh - 116px)",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <img
          src="/images/amami2.jpeg"
          alt="奄美の青い海でカヤック体験"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />

        {/* Very subtle overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Leaf size={30} color="rgba(255,255,255,0.95)" />
          </div>

          <div
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "clamp(28px, 4.5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#fff",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            AMAMI
            <br />
            NATURE GUIDE
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              marginTop: "18px",
              letterSpacing: "0.06em",
              lineHeight: 1.7,
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
            }}
          >
            奄美大島の自然を、ガイドと一緒に体験しよう。
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "36px",
            }}
          >
            <a
              href="#tours"
              style={{
                background: C.green,
                color: "#fff",
                padding: "13px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ツアーを見る
              <ChevronRight size={16} />
            </a>

            <a
              href="#guide"
              style={{
                background: "rgba(255,255,255,0.18)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.6)",
                padding: "12px 26px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                backdropFilter: "blur(4px)",
              }}
            >
              ガイドを知る
            </a>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span
            style={{
              fontFamily: "'Cabin', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
            }}
          >
            SCROLL
          </span>

          <ChevronDown size={16} />
        </div>
      </section>
    </>
  );
}