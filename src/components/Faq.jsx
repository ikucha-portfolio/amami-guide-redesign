import { FAQS, COLORS } from "../siteData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const C = COLORS;

export default function Faq() {
  return (
    <section
      id="faq"
      style={{
        padding: "96px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', marginBottom: '12px' }}>
              <h2 style={{
                fontFamily: "'Cabin', sans-serif",
                fontSize: 'clamp(52px, 7vw, 88px)',
                fontWeight: 700, letterSpacing: '0.04em',
                color: C.text, margin: 0, lineHeight: 1,
              }}>
                FAQ
              </h2>
              <span style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 500, color: C.textLight, paddingBottom: '12px',
              }}>
                よくある質問
              </span>
            </div>
            <div style={{ width: '48px', height: '3px', background: C.green, borderRadius: '2px' }} />
          </div>

        <Accordion
          type="single"
          collapsible
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`a-${i}`}
              style={{
                borderColor: "rgba(62,140,42,0.15)",
              }}
            >
              <AccordionTrigger
                style={{
                  fontSize: "15px",
                  color: C.text,
                  fontWeight: 500,
                  padding: "22px 4px",
                  lineHeight: 1.6,
                }}
              >
                {item.q}
              </AccordionTrigger>

              <AccordionContent
                style={{
                  fontSize: "14px",
                  color: C.textLight,
                  lineHeight: 2.1,
                  padding: "0 4px 22px",
                }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}