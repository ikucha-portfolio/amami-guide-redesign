import { useState } from "react";
import { FAQS, COLORS } from "../siteData";
import SectionHeader from "./common/SectionHeader";

import {
  SECTION,
  CONTAINER,
} from "../styles/designSystem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const C = COLORS;

export default function Faq() {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 5);

  return (
    <section
      id="faq"
      style={{
        ...SECTION,
        background: C.white,
      }}
    >
      <div
        style={{
          ...CONTAINER,
        }}
      >
        {/* ========================================
            Section Header
        ======================================== */}

        <SectionHeader
          title="FAQ"
          subtitle="よくある質問"
        />

        {/* ========================================
            FAQ Accordion
        ======================================== */}

        <Accordion
          type="single"
          collapsible
        >
          {visibleFaqs.map((item, i) => (
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

        {/* ========================================
            Show More / Close
        ======================================== */}

        {FAQS.length > 5 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "36px",
            }}
          >
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",

                padding: "4px 8px",

                background: "none",
                border: "none",

                color: C.text,
                fontSize: "14px",
                fontWeight: 500,

                cursor: "pointer",
              }}
            >
              <span>
                {showAll ? "閉じる" : "すべての質問を見る"}
              </span>

              <span
                style={{
                  fontSize: "13px",
                  lineHeight: 1,
                }}
              >
                {showAll ? "↑" : "↓"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}