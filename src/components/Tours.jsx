import Section from "./common/Section";
import SectionHeader from "./common/SectionHeader";

function ToursSection() {
  const tours = [
    {
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
      title: "マングローブカヌー",
      titleEn: "MANGROVE CANOE",
      duration: "約3時間",
      price: "¥8,000〜",
      description:
        "奄美のマングローブ林をゆっくり巡る人気ツアーです。",
      tags: ["初心者OK", "人気"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      title: "滝ツアー",
      titleEn: "WATERFALL TOUR",
      duration: "約3時間",
      price: "¥8,000〜",
      description:
        "奄美の滝を巡りながら自然を満喫するツアーです。",
      tags: ["自然体験", "写真撮影"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
      title: "ドライブツアー",
      titleEn: "DRIVE TOUR",
      duration: "約4時間",
      price: "¥10,000〜",
      description:
        "絶景スポットを巡りながら島の魅力を楽しめます。",
      tags: ["絶景", "初心者OK"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      title: "ナイトツアー",
      titleEn: "NIGHT TOUR",
      duration: "約2時間",
      price: "¥7,000〜",
      description:
        "夜の森で奄美固有の生き物たちを探します。",
      tags: ["夜間", "生き物観察"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200&q=80",
      title: "金作原ツアー",
      titleEn: "KINSAKU FOREST",
      duration: "約3時間",
      price: "¥9,000〜",
      description:
        "世界自然遺産の森をゆっくり歩く人気ツアーです。",
      tags: ["世界遺産", "森林"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
      title: "シュノーケル",
      titleEn: "SNORKEL TOUR",
      duration: "約3時間",
      price: "¥8,000〜",
      description:
        "透明度抜群の海で珊瑚や魚たちを楽しめます。",
      tags: ["海", "初心者OK"],
    },
  ];

  return (
    <Section
  id="tours"
  className="
    bg-[#F5F2EC]
    pt-[100px]
    pb-[120px]
  "
>

        {/* Header */}
        <SectionHeader
  eyebrow="TOURS"
  title="体験できるツアー"
/>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {tours.map((tour, index) => (
            <a
              key={index}
              href="#"
              className="
                group
                relative
                overflow-hidden
                min-h-[460px]
                bg-black
              "
            >

              {/* Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-7
                  text-white
                "
              >

                <p className="text-[11px] tracking-[0.25em] text-white/70 mb-4">
                  {tour.titleEn}
                </p>

                <h3 className="text-[20px] md:text-[24px] font-bold leading-tight mb-3">
                  {tour.title}
                </h3>

                <div className="flex items-end gap-4 mb-4">
                  <p className="text-xl font-semibold">
                    {tour.price}
                  </p>

                  <p className="text-sm text-white/70">
                    {tour.duration}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white/20
                        backdrop-blur-sm
                        text-xs
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Description */}
                <div
                  className="
                    overflow-hidden
                    max-h-0
                    group-hover:max-h-24
                    transition-all
                    duration-500
                  "
                >
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    {tour.description}
                  </p>
                </div>

                {/* CTA */}
                <button
                  className="
                    w-full
                    bg-primary
                    hover:bg-primary/90
                    text-white
                    py-1
                    font-medium
                    transition
                  "
                >
                  ツアーの詳細へ
                </button>

              </div>

            </a>
          ))}

        </div>

        <p className="text-center text-sm text-foreground/50 mt-12">
          ツアーはすべて少人数制です。詳細・ご相談はお気軽に。
        </p>

      
    </Section>
  );
}

export default ToursSection;