export default function TourDetailPage() {
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
<section className="py-12 px-6">
  <div className="max-w-2xl mx-auto">

    <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
      ABOUT THIS TOUR
    </p>

    <div className="space-y-4 text-foreground/80 leading-7">
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
<section className="pb-20">
  <div className="max-w-2xl mx-auto px-6">

    <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
      TOUR DETAILS
    </p>

    <div className="overflow-hidden border border-stone-200 bg-white">

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          所要時間
        </div>
        <div className="px-4 py-3">
          約3時間
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          料金
        </div>
        <div className="px-4 py-3">
          ¥8,000〜
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          集合場所
        </div>
        <div className="px-4 py-3">
          ご予約後にご案内
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          対象
        </div>
        <div className="px-4 py-3">
          初心者歓迎
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          服装
        </div>
        <div className="px-4 py-3">
          濡れても良い服装
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr] border-b border-stone-200">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          持ち物
        </div>
        <div className="px-4 py-3">
          タオル・飲み物・帽子
        </div>
      </div>

      <div className="grid grid-cols-[160px_1fr]">
        <div className="bg-stone-50 px-4 py-3 font-medium">
          雨天時
        </div>
        <div className="px-4 py-3">
          小雨決行・荒天中止
        </div>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}