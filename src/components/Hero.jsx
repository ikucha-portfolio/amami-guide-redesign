import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-16">
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
        <h1
          translate="no"
          className="font-[family-name:var(--font-display)] text-6xl md:text-8xl tracking-wide text-white mb-6"
        >
          AMAMI NATURE
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          奄美大島の自然を、心に。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
          >
            ツアーを見る
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white/20 text-base px-8"
          >
            お問い合わせ
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}