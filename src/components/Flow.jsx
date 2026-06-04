import {
  MessageCircle,
  Calendar,
  MapPin,
  Smile,
} from "lucide-react";

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
    <section
      id="flow"
      className="
        py-14
        md:py-16
        px-6
        bg-background
      "
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-primary
              mb-2
            "
          >
            HOW TO BOOK
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-foreground
              tracking-tight
            "
          >
            ご予約〜体験までの流れ
          </h2>
        </div>

        {/* Timeline */}
        <div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.number}
                className="flex gap-4"
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
                <div
                  className={`
                    flex-1
                    ${isLast ? "pb-0" : "pb-5"}
                  `}
                >
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
      </div>
    </section>
  );
}