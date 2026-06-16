import { useState } from "react";
import {
  Leaf,
  ChevronRight,
  ChevronLeft,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

import { TOURS, COLORS as C } from "../../siteData";

const IMG_HERO = "/images/hero.jpeg";
const IMG_CONTACT = "/images/amami2.jpeg";

const tour = TOURS.find((t) => t.id === "mangrove");

const TOUR_DETAILS = tour.details;
const RECOMMENDED = tour.recommended;
const FLOW_STEPS = tour.flow;

const OTHER_TOURS = TOURS.filter(
  (t) => t.id !== "mangrove"
);

// ── セクション見出し（日本語・コンパクト）──────────────────────
function SectionHeading({ ja } ){
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '20px',
        fontWeight: 700,
        color: C.text, margin: 0, marginBottom: '12px',
      }}>
        {ja}
      </h2>
      <div style={{ width: '32px', height: '2px', background: C.green, borderRadius: '2px' }} />
    </div>
  );
}

export default function TourDetailA({ onBack }) {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleCount = 3;
  const maxIdx = Math.max(0, OTHER_TOURS.length - visibleCount);

  return (
    <div style={{ background: C.white, color: C.text, fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* ══ NAV ══ A案と同じスタイル ══════════════════════════ */}
      <nav style={{
        position: 'sticky', top: 52, zIndex: 200,
        background: C.white,
        borderBottom: `1px solid rgba(62,140,42,0.15)`,
        padding: '0 6%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: '64px',
      }}>
        <a href="#" onClick={e => { e.preventDefault(); onBack?.(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: `2px solid ${C.green}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf size={16} color={C.green} />
          </div>
          <div>
            <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', color: C.green, lineHeight: 1.1 }}>AMAMI</div>
            <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', color: C.green, lineHeight: 1.1, opacity: 0.8 }}>NATURE GUIDE</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['ホーム', 'ツアー', 'ガイド', 'よくある質問'].map(l => (
            <a key={l} href="#" style={{ color: C.textLight, textDecoration: 'none', fontSize: '13px', letterSpacing: '0.03em' }}>{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href="#contact" style={{ background: C.green, color: '#fff', padding: '9px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
            ツアー予約
          </a>
          <a href="#contact" style={{ border: `1.5px solid ${C.green}`, color: C.green, padding: '8px 18px', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
            お問い合わせ
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ 写真ヒーロー ════════════════════════════════ */}
      <section style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img
          src={IMG_HERO}
          alt="マングローブカヌーツアー"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.62) 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 6% 52px' }}>
          <p style={{
            fontFamily: "'Cabin', sans-serif", fontSize: '11px', letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.65)', marginBottom: '12px',
          }}>
            MANGROVE TOUR
          </p>
          <h1 style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 'clamp(30px, 4.5vw, 58px)',
            fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            マングローブカヌーツアー
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.8)', marginTop: '12px' }}>
            奄美大島のマングローブ林をゆっくり巡る人気のツアーです。
          </p>
        </div>
      </section>

      {/* ══ ABOUT ══ ════════════════════════════════════════════ */}
      <section style={{ padding: '96px 6%', background: C.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeading en="ABOUT" ja="このツアーについて" />
          <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '15px', color: C.textLight, lineHeight: 2.1, margin: 0 }}>
              奄美大島のマングローブ林をカヌーで巡る人気のツアーです。穏やかな水面をゆっくり進みながら、マングローブや生き物たちを観察できます。
            </p>
            <p style={{ fontSize: '15px', color: C.textLight, lineHeight: 2.1, margin: 0 }}>
              初めての方でも安心してご参加いただけます。少人数でご案内するため、ご家族やご友人同士でもゆったり楽しめます。
            </p>
            <p style={{ fontSize: '15px', color: C.textLight, lineHeight: 2.1, margin: 0 }}>
              奄美らしい自然を気軽に体験したい方におすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* ══ DETAILS ══ ══════════════════════════════════════════ */}
      <section style={{ padding: '96px 6%', background: C.offWhite }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeading en="DETAILS" ja="ツアー詳細" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            {/* Table */}
            <div style={{ borderRadius: '6px', overflow: 'hidden', border: `1px solid rgba(62,140,42,0.15)` }}>
              {TOUR_DETAILS.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center',
                  padding: '18px 28px',
                  background: C.white,
                  borderBottom: i < TOUR_DETAILS.length - 1 ? `1px solid rgba(62,140,42,0.1)` : 'none',
                }}>
                  <span style={{ width: '96px', flexShrink: 0, fontSize: '14px', fontWeight: 600, color: C.text }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: '14px', color: C.textLight }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Recommended for + Cancellation policy */}
            <div>
              <p style={{
                fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.2em', color: C.green, marginBottom: '20px',
              }}>
                RECOMMENDED FOR
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                {RECOMMENDED.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={16} style={{ color: C.green, flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: C.textLight }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Cancellation policy */}
              <div style={{
                borderTop: `1px solid rgba(62,140,42,0.15)`,
                paddingTop: '24px',
              }}>
                <p style={{
                  fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.2em', color: C.green, marginBottom: '12px',
                }}>
                  CANCELLATION POLICY
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { timing: '3日前以降', fee: '50%' },
                    { timing: '前日',       fee: '80%' },
                    { timing: '当日・無断', fee: '100%' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: C.textLight, width: '90px', flexShrink: 0 }}>{row.timing}</span>
                      <span style={{ fontSize: '13px', color: C.text, fontWeight: 600 }}>{row.fee}</span>
                    </div>
                  ))}
                  <p style={{ fontSize: '12px', color: C.textLight, marginTop: '6px', lineHeight: 1.7 }}>
                    荒天による中止の場合は全額返金いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FLOW ══ ════════════════════════════════════════════ */}
      <section style={{ padding: '96px 6%', background: C.white }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeading en="FLOW" ja="当日の流れ" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
            {FLOW_STEPS.map((step, i) => (
              <div key={i} style={{ position: 'relative', paddingRight: i < FLOW_STEPS.length - 1 ? '32px' : '0' }}>
                {/* Connector line */}
                {i < FLOW_STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '20px',
                    right: '0', left: 'calc(100% - 32px)',
                    width: '32px', height: '1px',
                    background: `rgba(62,140,42,0.25)`,
                  }} />
                )}
                {/* Step number circle */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: C.green, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  fontFamily: "'Cabin', sans-serif", fontSize: '13px', fontWeight: 700,
                }}>
                  {step.num}
                </div>
                <p style={{
                  fontFamily: "'Cabin', sans-serif", fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.15em', color: C.green, margin: 0, marginBottom: '6px',
                }}>
                  STEP {step.num}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: C.text, margin: 0, marginBottom: '10px' }}>
                  {step.title}
                </p>
                <p style={{ fontSize: '13px', color: C.textLight, margin: 0, lineHeight: 1.8 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ A案と同じスタイル ════════════════════════ */}
      <section id="contact" style={{
        padding: '96px 6%',
        position: 'relative',
        backgroundImage: `url(${IMG_CONTACT})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20, 55, 30, 0.72)', backdropFilter: 'blur(1px)' }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '20px', fontWeight: 700, color: '#fff', margin: 0, marginBottom: '12px' }}>
              お問い合わせ・ご予約
            </h2>
            <div style={{ width: '32px', height: '2px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', marginBottom: '18px' }}>
                WHAT TO INCLUDE
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: '28px' }}>
                お問い合わせの際は、以下を教えていただくとスムーズです。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {['希望のツアー名（未定でもOK）', '参加人数・年齢（お子様がいる場合も）', '希望の日程・時間帯', 'その他、ご質問・ご要望など'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'Cabin', sans-serif", fontSize: '13px', fontWeight: 700, color: '#fff' }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.88)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', marginBottom: '18px' }}>
                HOW TO CONTACT
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: '28px' }}>
                InstagramのDMまたはLINEでお気軽にご連絡ください。<br />通常1日以内にご返信します。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#06C755', borderRadius: '8px', padding: '16px 20px', textDecoration: 'none', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>LINEでメッセージ</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '2px' }}>友だち追加してDMをお送りください</div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.7)" />
                </a>
                <a href="https://instagram.com/amami_nature_guide" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '8px', padding: '16px 20px', textDecoration: 'none', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>Instagram でDM</div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', marginTop: '2px' }}>@amami_nature_guide</div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.7)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TOURS ══ 他のツアー カルーセル ══════════════════════ */}
      <section style={{ padding: '96px 6%', background: C.offWhite }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Heading + arrows */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div>
              <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '20px', fontWeight: 700, color: C.text, margin: 0, marginBottom: '12px' }}>
                他のツアーを見る
              </h2>
              <div style={{ width: '32px', height: '2px', background: C.green, borderRadius: '2px' }} />
            </div>
            {/* Arrow buttons */}
            <div style={{ display: 'flex', gap: '8px', paddingBottom: '4px' }}>
              <button
                onClick={() => setCarouselIdx(i => Math.max(0, i - 1))}
                disabled={carouselIdx === 0}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: `1.5px solid ${carouselIdx === 0 ? 'rgba(62,140,42,0.2)' : C.green}`,
                  background: carouselIdx === 0 ? 'transparent' : C.green,
                  color: carouselIdx === 0 ? C.textLight : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: carouselIdx === 0 ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCarouselIdx(i => Math.min(maxIdx, i + 1))}
                disabled={carouselIdx >= maxIdx}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: `1.5px solid ${carouselIdx >= maxIdx ? 'rgba(62,140,42,0.2)' : C.green}`,
                  background: carouselIdx >= maxIdx ? 'transparent' : C.green,
                  color: carouselIdx >= maxIdx ? C.textLight : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: carouselIdx >= maxIdx ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards viewport */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              transform: `translateX(calc(-${carouselIdx} * (100% / ${visibleCount} + 20px / ${visibleCount} * (${visibleCount} - 1) / ${visibleCount})))`,
              transition: 'transform 0.4s ease',
            }}>
              {OTHER_TOURS.map(tour => (
                <div
                  key={tour.id}
                  style={{
                    flexShrink: 0,
                    width: `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`,
                    borderRadius: '6px', overflow: 'hidden',
                    background: C.white,
                    boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img src={tour.image} alt={tour.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,10,0.75) 0%, transparent 55%)' }} />
                    {tour.tag && (
                      <div style={{ position: 'absolute', top: '12px', left: '12px', background: C.green, color: '#fff', padding: '3px 11px', borderRadius: '3px', fontSize: '11px', fontWeight: 700 }}>
                        {tour.tag}
                      </div>
                    )}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
                      <p style={{ fontFamily: "'Cabin', sans-serif", fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)', margin: 0, marginBottom: '3px' }}>
                        {tour.nameEn.toUpperCase()}
                      </p>
                      <p style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0 }}>{tour.name}</p>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: C.textLight }}>
                        <Clock size={12} style={{ color: C.green }} /> {tour.duration}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: C.textLight }}>
                        <Users size={12} style={{ color: C.green }} /> {tour.target}
                      </span>
                      <span style={{ marginLeft: 'auto', fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: '18px', color: C.green }}>
                        {tour.price}
                        <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '11px', fontWeight: 400, color: C.textLight }}>{tour.priceNote}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ ════════════════════════════════════════════ */}
      <footer style={{ background: C.greenDark, padding: '32px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf size={13} color="rgba(255,255,255,0.8)" />
          </div>
          <span style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
            AMAMI NATURE GUIDE
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>
          © 2024 奄美ネイチャーガイド. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
