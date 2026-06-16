import { GUIDE, COLORS } from "../siteData";
import { ImageWithFallback } from "./ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const C = COLORS;

export default function Guide() {
  return (
    <section
      id="guide"
      style={{
        padding: "96px 6%",
        background: C.offWhite,
      }}
    >
      {/* ══ GUIDE ════════════════════════════════════════════ */}
            {/* 薄いグリーン背景 */}
            <section id="guide" style={{ padding: '96px 6%', background: C.offWhite }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      
                {/* Section heading */}
                <div style={{ marginBottom: '64px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', marginBottom: '12px' }}>
                    <h2 style={{
                      fontFamily: "'Cabin', sans-serif",
                      fontSize: 'clamp(52px, 7vw, 88px)',
                      fontWeight: 700, letterSpacing: '0.04em',
                      color: C.text, margin: 0, lineHeight: 1,
                    }}>
                      GUIDE
                    </h2>
                    <span style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      fontWeight: 500, color: C.textLight, paddingBottom: '12px',
                    }}>
                      ガイド紹介
                    </span>
                  </div>
                  <div style={{ width: '48px', height: '3px', background: C.green, borderRadius: '2px' }} />
                </div>
      
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '80px', alignItems: 'start' }}>
                  {/* Text */}
                  <div>
                    <h3 style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontSize: 'clamp(28px, 3.5vw, 44px)',
                      fontWeight: 700, color: C.text,
                      margin: 0, marginBottom: '4px',
                    }}>
                      {GUIDE.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: C.green, fontWeight: 700, marginBottom: '28px', marginTop: '6px', letterSpacing: '0.04em' }}>
                      {GUIDE.experience}
                    </p>
                    <p style={{ fontSize: '16px', color: C.textLight, lineHeight: 2.1, marginBottom: '40px' }}>
                      {GUIDE.message}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {GUIDE.certifications.map(cert => (
                        <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle2 size={16} style={{ color: C.green, flexShrink: 0 }} />
                          <span style={{ fontSize: '14px', color: C.textLight }}>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Photo */}
<div
  style={{
    borderRadius: "8px",
    overflow: "hidden",
    aspectRatio: "3/4",
    boxShadow: "0 8px 40px rgba(62,140,42,0.12)",
  }}
>
  <ImageWithFallback
    src="/images/guide.jpeg"
    alt="ガイド紹介"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
    }}
  />
</div>
                </div>
              </div>
            </section>
      {/* 今貼ってくれたsectionの中身をそのまま */}
    </section>
  );
}