import { ChevronDown } from "lucide-react";
import heroImage from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <div className="absolute inset-0 bg-black/35" />
</div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
  translate="no"
  className="mb-6 text-sm tracking-[0.4em] text-white/80"
>
  ZUU AMAMI NATURE GUIDE
</p>

        <h1 className="mb-10 text-[24px] font-bold leading-tight text-white md:text-[68px]">
          奄美の大自然を
          <br />
          ゆっくり楽しもう
        </h1>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#tours"
            className="rounded-md bg-white px-8 py-3 text-sm font-medium text-[#2f3e34] transition hover:bg-white/90"
          >
            ツアーを見る
          </a>

          <a
            href="#contact"
            className="rounded-md border border-white/50 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}