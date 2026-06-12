import {
  MessageCircle,
  Calendar,
  MapPin,
  Smile,
} from "lucide-react";

import Section from "./common/Section";
import SectionHeader from "./common/SectionHeader";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "LINE・Instagramで相談",
    description: "お気軽にご相談ください。",
  },
  {
    number: 2,
    icon: Calendar,
    title: "日程・内容を決める",
    description: "ご希望に合わせてご提案します。",
  },
  {
    number: 3,
    icon: MapPin,
    title: "詳細をご案内",
    description: "集合場所や持ち物をお知らせします。",
  },
  {
    number: 4,
    icon: Smile,
    title: "ツアー体験",
    description: "奄美の自然を楽しみましょう。",
  },
];

export default function Flow() {
  return (
    <Section id="flow">

      <SectionHeader
        eyebrow="HOW TO BOOK"
        title="ご予約〜体験までの流れ"
      />

      <div className="max-w-3xl mx-auto">

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.number}
              className={`
                flex
                gap-6
                ${isLast ? "" : "pb-8"}
              `}
            >
              {/* Number */}
              <div className="flex flex-col items-center">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-primary
                    text-primary-foreground
                    flex
                    items-center
                    justify-center
                    text-sm
                    font-semibold
                  "
                >
                  {step.number}
                </div>

                {!isLast && (
                  <div
                    className="
                      w-px
                      flex-1
                      bg-primary/20
                      my-1
                    "
                  />
                )}

              </div>

              {/* Content */}
              <div className="flex-1">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-1
                    pt-1
                  "
                >
                  <Icon
                    size={16}
                    className="text-primary"
                  />

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-foreground
                    "
                  >
                    {step.title}
                  </h3>

                </div>

                <p
                  className="
                    text-sm
                    text-muted-foreground
                    leading-6
                  "
                >
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </Section>
  );
}