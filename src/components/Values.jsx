export default function Values() {
  return (
    <section className="bg-background">

      <div
        className="
          grid
          lg:grid-cols-[55%_45%]
          items-center
          max-w-[1400px]
          mx-auto
        "
      >

        {/* Photo */}
        <div className="relative min-h-[520px] overflow-hidden">

          <img
            src="/images/Values.jpeg"
            alt="奄美の自然"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-[#f5f2ec]/20
              to-[#f5f2ec]/50
            "
          />

        </div>

        {/* Content */}
        <div
          className="
            flex
            flex-col
            justify-center
            px-8
            md:px-10
            py-16
            max-w-[520px]
          "
        >

          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-primary mb-3">
            OUR CONCEPT
          </p>

          <h2 className="text-[26px] md:text-[30px] font-bold text-foreground leading-tight mb-5">
            海から陸まで、
            <br />
            奄美を楽しもう。
          </h2>

          <div className="w-12 h-[3px] bg-accent mb-8" />

          <div className="space-y-5 text-base leading-8 text-muted-foreground">

            <p>
              初めての奄美旅行から家族旅行まで、
              それぞれの旅に合わせてご案内しています。
            </p>

            <p>
              奄美には海やマングローブ、
              深い森など魅力的な自然がたくさんあります。
            </p>

            <p>
              <span className="font-semibold text-foreground">
                少人数だからこそ、
              </span>
              行きたい場所や過ごし方も
              <span className="font-semibold text-foreground">
                気軽に相談できます。
              </span>
            </p>

            <p>
              お子様からご年配の方まで、
              <span className="font-semibold text-foreground">
                海も森も楽しみながら、
              </span>
              自分たちらしい時間を過ごしてみませんか。
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}