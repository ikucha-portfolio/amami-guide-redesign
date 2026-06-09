import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ToursSection() {
  const tours = [
    {
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
      title: "マングローブカヌー",
      titleEn: "MANGROVE CANOE",
      duration: "約3時間",
      price: "¥8,000〜",
      description:
        "奄美大島のマングローブ林をゆっくり巡る人気ツアーです。",
      tags: ["初心者OK", "人気"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
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
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      title: "ドライブツアー",
      titleEn: "DRIVE TOUR",
      duration: "約4時間",
      price: "¥10,000〜",
      description:
        "絶景スポットを巡りながら島の魅力を楽しみます。",
      tags: ["絶景", "初心者OK"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      title: "ナイトツアー",
      titleEn: "NIGHT TOUR",
      duration: "約2時間",
      price: "¥7,000〜",
      description:
        "夜の森で希少な生き物たちを探す人気ツアーです。",
      tags: ["夜行性動物", "人気"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&q=80",
      title: "珊瑚礁シュノーケル",
      titleEn: "CORAL SNORKELING",
      duration: "約3時間",
      price: "¥9,000〜",
      description:
        "色鮮やかな珊瑚礁を楽しむ海のツアーです。",
      tags: ["海", "シュノーケル"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
      title: "ウミガメシュノーケル",
      titleEn: "SEA TURTLE SNORKELING",
      duration: "約3時間",
      price: "¥9,000〜",
      description:
        "高確率でウミガメに出会える人気ツアーです。",
      tags: ["ウミガメ", "人気"],
    },
  ];

  return (
    <section
      id="tours"
      className="py-20 md:py-24 px-4 bg-background scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] text-primary mb-3">
            TOURS
          </p>

          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground">
            体験できるツアー
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {tours.map((tour, index) => (
            <Card
              key={index}
              className="
                group
                relative
                overflow-hidden
                border-0
                rounded-none
                bg-transparent
                shadow-none
              "
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-5
                  text-white
                "
              >
                {/* Category */}
                <p
                  className="
                    text-[10px]
                    tracking-[0.3em]
                    uppercase
                    text-white/60
                    mb-2
                  "
                >
                  {tour.titleEn}
                </p>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-bold
                    mb-2
                  "
                >
                  {tour.title}
                </h3>

                {/* Price */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    mb-3
                  "
                >
                  <span className="font-semibold">
                    {tour.price}
                  </span>

                  <span className="text-white/70">
                    {tour.duration}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {tour.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-2.5
                        py-1
                        text-[11px]
                        rounded-full
                        bg-white/15
                        backdrop-blur-sm
                        text-white/90
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Area */}
                <div
                  className="
                    overflow-hidden
                    max-h-0
                    group-hover:max-h-40
                    transition-all
                    duration-500
                  "
                >
                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-white/80
                      mb-4
                    "
                  >
                    {tour.description}
                  </p>

                  <Button
                    size="sm"
                    className="
                      w-full
                      bg-primary
                      hover:bg-primary/90
                    "
                  >
                    ツアーを見る
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ツアーはすべて少人数制です。お気軽にご相談ください。
        </p>

      </div>
    </section>
  );
}

export default ToursSection;