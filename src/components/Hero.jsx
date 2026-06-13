import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[74vh] overflow-hidden">

      {/* Background */}
      <div
  className="absolute inset-0 bg-cover bg-center md:bg-[center_75%] bg-fixed" 
  style={{
    backgroundImage: "url('/images/hero.jpeg')",
  }}
>
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-8
        "
      >
        <p
          className="
            text-[11px]
            md:text-xs
            tracking-[0.35em]
            uppercase
            text-white/70
            mb-4
          "
        >
          AMAMI OSHIMA NATURE GUIDE
        </p>

        <h1
          translate="no"
          className="
            font-[family-name:var(--font-display)]
            text-5xl
            md:text-5xl
            font-light
            tracking-[0.08em]
            text-white
            mb-6
          "
        >
          AMAMI NATURE
        </h1>

        <p
          className="
            text-lg
            md:text-2xl
            text-white/90
            mb-10
          "
        >
          奄美大島の自然を、心に。
        </p>

      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white/70
          animate-bounce
        "
      >
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  );
}