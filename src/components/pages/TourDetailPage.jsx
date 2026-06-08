import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../Contact";
import Footer from "../Footer";
export default function TourDetailPage() {
  const tours = [
  {
    title: "滝ツアー",
    duration: "約3時間",
    description: "奄美の滝を巡りながら、ゆったり自然を楽しむ人気ツアーです。",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    title: "ドライブツアー",
    duration: "約4時間",
    description: "奄美の絶景スポットを巡りながら島の魅力を満喫します。",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  },
  {
    title: "ナイトツアー",
    duration: "約2時間",
    description: "夜の森で希少な生き物たちを探す人気ツアーです。",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
  },
  {
    title: "珊瑚礁シュノーケル",
    duration: "約3時間",
    description: "色鮮やかな珊瑚礁を楽しむ奄美らしい海のツアーです。",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
  },
  {
    title: "ウミガメシュノーケル",
    duration: "約3時間",
    description: "高確率でウミガメに出会える人気の海ツアーです。",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
  },
];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-sm md:text-base tracking-[0.25em] text-white/80 mb-3">
            MANGROVE TOUR
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white mb-4">
            マングローブカヌーツアー
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            奄美大島のマングローブ林をゆっくり巡る人気のツアーです。
          </p>
        </div>
      </section>

      
{/* Tour Overview */}
<section className="py-12">
  <div className="max-w-2xl mx-auto px-6">

<div className="flex items-center gap-4 mb-6">
    <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
      ABOUT THIS TOUR
    </p>
 <div className="h-px flex-1 bg-primary/20" />
 </div>
 
    <div className="space-y-4 text-foreground/80 leading-8">
      <p>
        奄美大島のマングローブ林をカヌーで巡る人気のツアーです。
        穏やかな水面をゆっくり進みながら、
        マングローブや生き物たちを観察できます。
      </p>

      <p>
        初めての方でも安心してご参加いただけます。
        少人数でご案内するため、
        ご家族やご友人同士でもゆったり楽しめます。
      </p>

      <p>
        奄美らしい自然を気軽に体験したい方におすすめです。
      </p>
    </div>

  </div>
</section>

{/* TOUR DETAILS */}
<section className="pb-16">
  <div className="max-w-2xl mx-auto px-6">
<div className="flex items-center gap-4 mb-6">
    <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
      TOUR DETAILS
    </p>
  <div className="h-px flex-1 bg-primary/20" />

</div>
    <div className="border border-stone-200 bg-white">

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          所要時間
        </div>
        <div className="px-4 py-3">
          約3時間
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          料金
        </div>
        <div className="px-4 py-3">
          ¥8,000〜
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          集合場所
        </div>
        <div className="px-4 py-3">
          ご予約後にご案内
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          対象
        </div>
        <div className="px-4 py-3">
          初心者歓迎
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          服装
        </div>
        <div className="px-4 py-3">
          濡れても良い服装
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          持ち物
        </div>
        <div className="px-4 py-3">
          タオル・飲み物・帽子
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr]">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          雨天時
        </div>
        <div className="px-4 py-3">
          小雨決行・荒天中止
        </div>
      </div>

    </div>

{/* おすすめの方 */}
    <div className="mt-6 space-y-2 text-foreground/80">
      <p>✓ 初めて奄美を訪れる方</p>
      <p>✓ 自然をゆっくり楽しみたい方</p>
      <p>✓ ご夫婦・ご家族で参加したい方</p>
    </div>

  </div>
</section>

{/* FLOW */}
<section className="pb-20">
  <div className="max-w-2xl mx-auto px-6">
<div className="flex items-center gap-4 mb-6">
    <p className="text-xs tracking-[0.25em] uppercase text-primary mb-6">
      FLOW
    </p>
  <div className="h-px flex-1 bg-primary/20" />
    </div>

    <div className="space-y-6">

      <div>
        <p className="text-sm text-primary mb-1">
          STEP 01
        </p>
        <h3 className="font-medium mb-1">
          集合
        </h3>
        <p className="text-foreground/70">
          ご予約後に集合場所をご案内します。
        </p>
      </div>

      <div>
        <p className="text-sm text-primary mb-1">
          STEP 02
        </p>
        <h3 className="font-medium mb-1">
          ツアースタート
        </h3>
        <p className="text-foreground/70">
          ガイドが丁寧にご案内します。
        </p>
      </div>

      <div>
        <p className="text-sm text-primary mb-1">
          STEP 03
        </p>
        <h3 className="font-medium mb-1">
          自然を満喫
        </h3>
        <p className="text-foreground/70">
          奄美ならではの自然や生き物を楽しみます。
        </p>
      </div>

      <div>
        <p className="text-sm text-primary mb-1">
          STEP 04
        </p>
        <h3 className="font-medium mb-1">
          解散
        </h3>
        <p className="text-foreground/70">
          ツアー終了後、現地解散となります。
        </p>
      </div>

    </div>

  </div>
</section>

{/* OTHER TOURS */}
<section className="pb-20">
  <div className="max-w-6xl mx-auto px-6">
<div className="flex items-center gap-4 mb-6">
    <p className="text-xs tracking-[0.25em] uppercase text-primary mb-6">
      EXPLORE OTHER TOURS
    </p>
<div className="h-px flex-1 bg-primary/20" />
    </div>
    <div className="relative">

      {/* 左矢印 */}
      <button
        className="
          absolute
          left-[-20px]
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-white/95
          shadow-md
          flex
          items-center
          justify-center
          hover:bg-white
          transition
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* 右矢印 */}
      <button
        className="
          absolute
          right-[-20px]
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-white/95
          shadow-md
          flex
          items-center
          justify-center
          hover:bg-white
          transition
        "
      >
        <ChevronRight size={22} />
      </button>

      {/* カード群 */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-4
          scroll-smooth
        "
      >

        {tours.map((tour) => (
          <div
            key={tour.title}
            className="
              group
              relative
              min-w-[240px]
              h-[300px]
              overflow-hidden
              cursor-pointer
              flex-shrink-0
            "
          >

            <img
              src={tour.image}
              alt={tour.title}
              className="
                w-full
                h-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            {/* 常時表示 */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-serif text-2xl text-white drop-shadow-lg">
                {tour.title}
              </h3>

              <p className="text-white/80 text-sm mt-1">
                {tour.duration}
              </p>
            </div>

            {/* Hover情報 */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-background/95
                backdrop-blur-sm
                p-5
                translate-y-full
                transition-all
                duration-500
                group-hover:translate-y-0
              "
            >
              <h4 className="font-medium mb-2">
                {tour.title}
              </h4>

              <p className="text-sm text-primary mb-2">
                {tour.duration}
              </p>

              <p className="text-sm leading-relaxed text-foreground/80">
                {tour.description}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>

    <p className="text-center text-sm text-foreground/50 mt-6">
      ← → 左右にスクロールできます
    </p>

  </div>
</section>
<Contact />
<Footer />
    </main>
  );
}