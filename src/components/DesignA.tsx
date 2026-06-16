import React from "react";
import Hero from "./Hero";
import Tours from "./Tours";
import Guide from "./Guide";
import Faq from "./Faq";
import Contact from "./Contact";

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
      <Contact />

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
