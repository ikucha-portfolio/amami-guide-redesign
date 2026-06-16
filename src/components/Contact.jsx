import { COLORS } from "../siteData";

const C = COLORS;

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "96px 6%",
        position: "relative",
        backgroundImage: "url('/images/amami2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
  );
}