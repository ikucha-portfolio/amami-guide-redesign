export default function Values() {
  return (
    <section className="py-10 md:py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">

          {/* Photo */}
          <div>
            <img
              src="/images/Values.jpeg"
              alt="奄美の自然"
              className="w-full aspect-[4/3] object-cover rounded-md"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">

            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-primary mb-3">
              OUR CONCEPT
            </p>

            <h2 className="text-[26px] md:text-[30px] font-bold text-foreground leading-tight mb-5">
              海から陸まで、
              <br />
              奄美を楽しもう。
            </h2>

            <div className="space-y-4 text-base leading-7 text-muted-foreground">

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

      </div>
    </section>
  );
}