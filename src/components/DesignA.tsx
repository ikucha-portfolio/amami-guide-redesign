import React from "react";
import Hero from "./Hero";
import Tours from "./Tours";
import Guide from "./Guide";
import Faq from "./Faq";

import { ImageWithFallback } from "./ImageWithFallback";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import {
  Leaf,
  ChevronRight,
  ChevronDown,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

import {
  TOURS,
  GUIDE,
  FAQS,
  COLORS,
} from "../siteData";

const C = COLORS;
// ─────────────────────────────────────────────────────────────
// デザイン言語 — Okinawa Nature Office 参考
//  ・白ナビ ＋ ビビッドグリーンロゴ・CTA
//  ・全画面写真ヒーロー ＋ 中央配置の白いブランド名
//  ・超大型タイポグラフィ（セクション見出し）
//  ・白背景・広い余白・クリーンな構成
// ─────────────────────────────────────────────────────────────

export default function DesignA() {
  return (
    <div style={{ background: C.white, color: C.text, fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* ══ NAV ══════════════════════════════════════════════ */}
      <nav style={{
        position: 'sticky', top: 52, zIndex: 200,
        background: C.white,
        borderBottom: `1px solid rgba(62,140,42,0.15)`,
        padding: '0 6%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: '64px',
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '9px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            border: `2px solid ${C.green}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Leaf size={16} color={C.green} />
          </div>
          <div>
            <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', color: C.green, lineHeight: 1.1 }}>
              AMAMI
            </div>
            <div style={{ fontFamily: "'Cabin', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', color: C.green, lineHeight: 1.1, opacity: 0.8 }}>
              NATURE GUIDE
            </div>
          </div>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['ホーム', 'ツアー', 'ガイド', 'よくある質問'].map(l => (
            <a key={l} href="#" style={{
              color: C.textLight, textDecoration: 'none',
              fontSize: '13px', letterSpacing: '0.03em',
            }}>
              {l}
            </a>
          ))}
        </div>

        {/* CTAs — green like the reference */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a href="#contact" style={{
            background: C.green, color: '#fff',
            padding: '9px 20px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '13px', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            ツアー予約
          </a>
          <a href="#contact" style={{
            border: `1.5px solid ${C.green}`, color: C.green,
            padding: '8px 18px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '13px', fontWeight: 600,
          }}>
            お問い合わせ
          </a>
        </div>
      </nav>

      {/* ══ HERO ══════════════════════════════════════════════ */}
     <Hero />

      {/* ══ TOURS ════════════════════════════════════════════ */}
      <Tours />

      {/* ══ GUIDE ════════════════════════════════════════════ */}
      {/* 薄いグリーン背景 */}
      <Guide />

      {/* ══ FAQ ══════════════════════════════════════════════ */}
      <Faq />

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" style={{
        padding: '96px 6%',
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1766242936377-231ce0276262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20, 55, 30, 0.72)',
          backdropFilter: 'blur(1px)',
        }} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Heading */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', marginBottom: '12px' }}>
              <h2 style={{
                fontFamily: "'Cabin', sans-serif",
                fontSize: 'clamp(52px, 7vw, 88px)',
                fontWeight: 700, letterSpacing: '0.04em',
                color: '#fff', margin: 0, lineHeight: 1,
              }}>
                CONTACT
              </h2>
              <span style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(15px, 1.8vw, 20px)',
                fontWeight: 500, color: 'rgba(255,255,255,0.75)', paddingBottom: '14px',
              }}>
                お問い合わせ・ご予約
              </span>
            </div>
            <div style={{ width: '44px', height: '3px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: WHAT TO INCLUDE */}
            <div>
              <div style={{
                fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', marginBottom: '18px',
              }}>
                WHAT TO INCLUDE
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: '28px' }}>
                お問い合わせの際は、以下を教えていただくとスムーズです。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  '希望のツアー名（未定でもOK）',
                  '参加人数・年齢（お子様がいる場合も）',
                  '希望の日程・時間帯',
                  'その他、ご質問・ご要望など',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 0',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  }}>
                    <div style={{
                      width: '26px', height: '26px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: "'Cabin', sans-serif", fontSize: '13px', fontWeight: 700,
                      color: '#fff',
                    }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.88)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: HOW TO CONTACT */}
            <div>
              <div style={{
                fontFamily: "'Cabin', sans-serif", fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', marginBottom: '18px',
              }}>
                HOW TO CONTACT
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: '28px' }}>
                InstagramのDMまたはLINEでお気軽にご連絡ください。<br />
                通常1日以内にご返信します。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* LINE button */}
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: '#06C755', borderRadius: '8px', padding: '16px 20px',
                  textDecoration: 'none', cursor: 'pointer',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', fontFamily: "'Noto Sans JP', sans-serif" }}>LINEでメッセージ</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '2px' }}>友だち追加してDMをお送りください</div>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </a>

                {/* Instagram button */}
                <a href="https://instagram.com/amami_nature_guide" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  borderRadius: '8px', padding: '16px 20px',
                  textDecoration: 'none', cursor: 'pointer',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', fontFamily: "'Noto Sans JP', sans-serif" }}>Instagram でDM</div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', marginTop: '2px' }}>@amami_nature_guide</div>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════ */}
      <footer style={{
        background: C.greenDark,
        padding: '32px 6%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
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

// ─────────────────────────────────────────────────────────────
// TOUR CARD VARIANTS
// ─────────────────────────────────────────────────────────────

const cardBase: React.CSSProperties = {
  borderRadius: '6px', overflow: 'hidden',
  background: C.white,
  boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
};

// 横長・特集（グリッド左2/3）
function TourCardFeatured({ tour }: { tour: typeof TOURS[0] }) {
  return (
    <div style={{ ...cardBase, position: 'relative', cursor: 'pointer', aspectRatio: '16/9' }}>
      <ImageWithFallback src={tour.image} alt={tour.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,10,0.82) 0%, transparent 55%)' }} />
      {tour.tag && <TagBadge label={tour.tag} />}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 26px' }}>
        <p style={{ fontFamily: "'Cabin', sans-serif", fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', margin: 0, marginBottom: '5px' }}>
          {tour.nameEn.toUpperCase()}
        </p>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: 0, marginBottom: '10px' }}>{tour.name}</h3>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '14px' }}>{tour.description}</p>
        <CardMeta tour={tour} light />
      </div>
    </div>
  );
}

// 縦長（グリッド右1/3）
function TourCardTall({ tour }: { tour: typeof TOURS[0] }) {
  return (
    <div style={{ ...cardBase, position: 'relative', cursor: 'pointer', height: '100%', minHeight: '280px' }}>
      <ImageWithFallback src={tour.image} alt={tour.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '280px' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,10,0.82) 0%, transparent 50%)' }} />
      {tour.tag && <TagBadge label={tour.tag} />}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px' }}>
        <p style={{ fontFamily: "'Cabin', sans-serif", fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', margin: 0, marginBottom: '4px' }}>
          {tour.nameEn.toUpperCase()}
        </p>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0, marginBottom: '10px' }}>{tour.name}</h3>
        <CardMeta tour={tour} light />
      </div>
    </div>
  );
}

// 標準カード（下3枚）— 写真上・情報下
function TourCardStandard({ tour }: { tour: typeof TOURS[0] }) {
  return (
    <div style={{ ...cardBase, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', flexShrink: 0 }}>
        <ImageWithFallback src={tour.image} alt={tour.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {tour.tag && <TagBadge label={tour.tag} />}
      </div>
      <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: "'Cabin', sans-serif", fontSize: '10px', letterSpacing: '0.15em', color: C.green, margin: 0, marginBottom: '4px' }}>
          {tour.nameEn.toUpperCase()}
        </p>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: C.text, margin: 0, marginBottom: '8px', lineHeight: 1.3 }}>{tour.name}</h3>
        <p style={{ fontSize: '13px', color: C.textLight, lineHeight: 1.75, marginBottom: '16px', flex: 1 }}>{tour.description}</p>
        <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(62,140,42,0.1)' }}>
          <CardMeta tour={tour} />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SHARED SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function TagBadge({ label }: { label: string }) {
  return (
    <div style={{
      position: 'absolute', top: '12px', left: '12px',
      background: C.green, color: '#fff',
      padding: '3px 11px', borderRadius: '3px',
      fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em',
    }}>
      {label}
    </div>
  );
}

function CardMeta({ tour, light = false }: { tour: typeof TOURS[0]; light?: boolean }) {
  const dim = light ? 'rgba(255,255,255,0.6)' : C.textLight;
  const priceCol = light ? '#fff' : C.green;
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: dim }}>
        <Clock size={12} style={{ color: light ? 'rgba(255,255,255,0.5)' : C.green }} /> {tour.duration}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: dim }}>
        <Users size={12} style={{ color: light ? 'rgba(255,255,255,0.5)' : C.green }} /> {tour.target}
      </span>
      <span style={{ marginLeft: 'auto', fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: '19px', color: priceCol, lineHeight: 1 }}>
        {tour.price}
        <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '11px', fontWeight: 400, color: dim }}>{tour.priceNote}</span>
      </span>
    </div>
  );
}

function ContactInput({ placeholder, type = 'text', multiline = false }: {
  placeholder: string; type?: string; multiline?: boolean;
}) {
  const base: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '4px', padding: '13px 16px',
    color: '#fff', fontSize: '14px', outline: 'none',
    fontFamily: "'Noto Sans JP', sans-serif",
    boxSizing: 'border-box',
  };
  if (multiline) return <textarea placeholder={placeholder} rows={5} style={{ ...base, resize: 'none', display: 'block' }} />;
  return <input type={type} placeholder={placeholder} style={base} />;
}
