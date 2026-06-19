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
    <SectionHeader
      title="FAQ"
      subtitle="よくある質問"
    />

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