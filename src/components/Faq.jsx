import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Section from "./common/Section";
import SectionHeader from "./common/SectionHeader";

export default function FAQ() {
  const faqs = [
    {
      question: "雨の日でも開催されますか？",
      answer:
        "小雨程度であれば開催します。荒天時は安全を優先し、中止または日程変更で対応いたします。",
    },
    {
      question: "子どもも参加できますか？",
      answer:
        "ツアー内容によって異なります。小さなお子さま連れの方もお気軽にご相談ください。",
    },
    {
      question: "持ち物は何が必要ですか？",
      answer:
        "動きやすい服装、飲み物、タオルをご用意ください。詳細はご予約後にご案内します。",
    },
    {
      question: "送迎はありますか？",
      answer:
        "宿泊場所やエリアに応じて対応可能です。ご予約時にご相談ください。",
    },
    {
      question: "キャンセル料はかかりますか？",
      answer:
        "前日50%、当日100%をいただいております。天候不良による中止の場合はかかりません。",
    },
  ];

  return (
    <Section id="faq">

      <SectionHeader
        eyebrow="FAQ"
        title="よくある質問"
      />

      <div className="max-w-3xl mx-auto">

        <Accordion
          type="single"
          collapsible
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                bg-card
                border
                border-border
                rounded-sm
                px-5
              "
            >
              <AccordionTrigger
                className="
                  py-4
                  text-left
                  font-medium
                  text-foreground
                  hover:no-underline
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  pb-4
                  text-sm
                  leading-6
                  text-muted-foreground
                "
              >
                {faq.answer}
              </AccordionContent>

            </AccordionItem>
          ))}
        </Accordion>

      </div>

    </Section>
  );
}