import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function ToursSection() {
  const tours = [
    {
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
      title: "マングローブカヤック",
      titleEn: "Mangrove Kayak",
      duration: "約3時間",
      price: "¥8,000",
      description:
        "奄美大島の原生的なマングローブ林をカヤックで探検。静かな水面を進みながら、豊かな生態系を間近で観察できます。",
      tags: ["初心者OK", "写真撮影"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
      title: "原生林トレッキング",
      titleEn: "Forest Trekking",
      duration: "約4時間",
      price: "¥10,000",
      description:
        "世界自然遺産の森を歩く本格トレッキング。アマミノクロウサギなど固有種の生息地を、ガイドと一緒に探索します。",
      tags: ["中級者向け", "世界遺産"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&q=80",
      title: "ナイトツアー",
      titleEn: "Night Tour",
      duration: "約2.5時間",
      price: "¥7,000",
      description:
        "夜の奄美で出会う神秘的な生き物たち。アマミノクロウサギやリュウキュウコノハズクなど、夜行性動物を探しに行きます。",
      tags: ["夜間", "希少動物"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&q=80",
      title: "サンセットツアー",
      titleEn: "Sunset Tour",
      duration: "約2時間",
      price: "¥6,000",
      description:
        "奄美の美しい夕日を眺めながら、ビーチや展望台を巡ります。写真撮影にも最適な、ロマンチックなツアーです。",
      tags: ["初心者OK", "カップル人気"],
    },
  ];

  return (
    <section
      id="tours"
      className="py-20 md:py-24 px-4 bg-background scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-primary mb-2">
            TOURS
          </p>

          <h2 className="text-[32px] md:text-[36px] font-bold text-foreground">
            体験できるツアー
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xs tracking-wider text-muted-foreground mb-1">
                      {tour.titleEn.toUpperCase()}
                    </p>

                    <h3 className="text-xl font-bold text-foreground">
                      {tour.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      {tour.price}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {tour.duration}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {tour.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  詳細・予約
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToursSection;