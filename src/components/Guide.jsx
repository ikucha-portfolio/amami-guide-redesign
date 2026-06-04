export default function GuideSection() {
  return (
    <section
      id="guide"
      className="
        relative
        py-14
        md:py-16
        px-6
        scroll-mt-16
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1e4d2f]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[950px] mx-auto">

        {/* Section Heading */}
<div className="text-center mb-8">
  <p
    className="
      text-[11px]
      tracking-[0.25em]
      uppercase
      text-white/70
      mb-3
    "
  >
    GUIDE
  </p>

  <h2
    className="
      text-3xl
      md:text-4xl
      font-bold
      text-white
      tracking-tight
    "
  >
    ガイド紹介
  </h2>
</div>

        {/* Card */}
        <div
          className="
            bg-[#faf7f1]/96
            backdrop-blur-sm
            shadow-2xl
            p-8
            md:p-10
          "
        >
          <div
            className="
              grid
              md:grid-cols-[340px_1fr]
              gap-10
              md:gap-12
              items-center
            "
          >

            {/* Photo */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
                alt="ずーちゃん"
                className="
                  w-full
                  max-w-[340px]
                  h-[320px]
                  object-cover
                  shadow-lg
                "
              />
            </div>

            {/* Text */}
            <div className="max-w-[500px]">

              <p
                className="
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  text-[#1e4d2f]
                  mb-3
                "
              >
                MEET YOUR GUIDE
              </p>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#3d2d21]
                  mb-2
                "
              >
                ずーちゃん
              </h3>

              <p
                className="
                  text-sm
                  text-[#8a7666]
                  mb-5
                "
              >
                Nature Guide in Amami
              </p>

              <p
                className="
                  text-base
                  md:text-lg
                  font-semibold
                  leading-relaxed
                  text-[#3d2d21]
                  mb-5
                "
              >
                奄美生まれ、奄美育ち。<br />
                海も森も大好きなネイチャーガイドです。
              </p>

              <div
                className="
                  space-y-3
                  text-sm
                  text-[#5c4535]
                  leading-6
                  mb-6
                "
              >
                <p>
                  幼い頃から自然の中で遊びながら育ち、
                  奄美の海や森、生き物たちの魅力に魅了されてきました。
                </p>

                <p>
                  マングローブや森歩き、ナイトツアーなどを通して、
                  ガイドブックには載っていない奄美の魅力をご案内しています。
                </p>

                <p>
                  初めての方やお子さま連れの方にも安心して楽しんでいただけるよう、
                  一人ひとりのペースに合わせたツアーを心がけています。
                </p>
              </div>

              {/* Licenses */}
              <div className="flex flex-wrap gap-2">

                <span className="px-3 py-1 text-xs bg-[#efe9df] text-[#5c4535]">
                  奄美群島認定ガイド
                </span>

                <span className="px-3 py-1 text-xs bg-[#efe9df] text-[#5c4535]">
                  救急救命講習修了
                </span>

                <span className="px-3 py-1 text-xs bg-[#efe9df] text-[#5c4535]">
                  エコツアーガイド
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}