import Contact from "../Contact";
import Footer from "../Footer";

export default function GuidePage() {
  return (
    <main className="bg-[#F8F5EF]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-[#1E4D3A]/45" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-sm tracking-[0.25em] text-white/80 mb-3">
            GUIDE
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white mb-4">
            ガイドについて
          </h1>

          <p className="text-lg text-white/90">
            奄美の自然を、その日のペースで。
          </p>
        </div>
      </section>
{/* About Guide */}
<section className="py-20">
  <div className="max-w-3xl mx-auto px-8 md:px-10">

    {/* Heading */}
    <div className="flex items-center gap-4 mb-10">
      <p className="text-[11px] tracking-[0.25em] uppercase text-primary">
        ABOUT GUIDE
      </p>
      <div className="h-px flex-1 bg-primary/20" />
    </div>

    {/* Profile Area */}
    <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">

      {/* Photo */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200"
          alt="guide"
          className="w-full aspect-[4/5] object-cover"
        />
      </div>

      {/* Intro */}
      <div className="max-w-[430px]">

        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#3A312B] leading-tight mb-2">
          奄美の自然と、
          <br />
          人との出会いが好きです。
        </h2>

        <p className="text-primary text-xs tracking-[0.25em] uppercase mb-5">
          Nature Guide
        </p>

        <div className="space-y-3 text-[14px] leading-7 text-[#6F665D]">

          <p>
            <strong className="text-[#3A312B] font-medium">
              山田 直子
            </strong>
            （兵庫県出身）
          </p>

          <p>
            好奇心旺盛で、人と関わることが大好きです。
            もともとはアレルギー体質でしたが、
            奄美大島で暮らし始めてから心も体も軽やかになり、
            自然の持つ力を実感しました。
          </p>

          <p>
            「心も体も健康でいたい」という想いから、
            大好きな海と豊かな自然に囲まれた奄美大島へ移住。
            現在は自然を仕事にしたいという夢を叶え、
            ネイチャーガイドとして活動しています。
          </p>

        </div>

      </div>
    </div>

    {/* Continue Text */}
    <div className="mt-8 border-t border-stone-200 pt-6">

      <div className="max-w-[820px] space-y-4 text-[14px] leading-7 text-[#6F665D]">

        <p>
          私が大切にしているのは、お客様一人ひとりが無理なく自然を楽しめることです。
          奄美の自然の中で、癒しやリフレッシュ、そして少しでも元気を持ち帰っていただけるよう、
          一つひとつの出会いを大切にご案内しています。
        </p>

        <p>
          景色を見るだけではなく、風の音や森の香り、生き物たちの気配など、
          その場でしか感じられない空気も一緒に楽しんでいただけたら嬉しいです。
        </p>

        <p>
          人も自然も大好きな私だからこそ、お客様との出会いも一期一会の宝物だと思っています。
          奄美で過ごす時間が心に残る特別な旅の思い出になりますように。
          皆さまの大切な旅の一ページをお手伝いできることを楽しみにしています。
        </p>

      </div>

    </div>

  </div>
</section>
      <Contact />
      <Footer />
    </main>
  );
}