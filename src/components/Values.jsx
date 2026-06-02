export default function Values() {
  return (
    <section className="py-10 md:py-14 px-4 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">

          {/* Photo */}
          <div>
            <img
              src="/images/Values.jpeg"
              alt="奄美の自然"
              className="w-full h-[260px] md:h-[300px] object-cover rounded-md"
            />
          </div>

          {/* Content */}
          <div>

            <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-primary mb-2">
              OUR CONCEPT
            </p>

            <h2 className="text-[28px] md:text-[32px] font-bold text-foreground mb-4">
              奄美を楽しもう。
            </h2>

            <p className="text-base text-muted-foreground leading-8 mb-6">
              海も森も、マングローブも。
              <br />
              その日の自然や旅の予定に合わせながら、
              自分たちのペースで楽しめる時間をご案内しています。
            </p>

            <div className="border-t border-border pt-5">

              <div className="grid md:grid-cols-3 gap-5">

                <div>
                  <p className="text-primary/50 text-sm mb-2">
                    01
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    少人数だから
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ゆっくり楽しめる
                  </p>
                </div>

                <div>
                  <p className="text-primary/50 text-sm mb-2">
                    02
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    気軽に相談
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    旅に合わせて柔軟に
                  </p>
                </div>

                <div>
                  <p className="text-primary/50 text-sm mb-2">
                    03
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    自然を身近に
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    海も森も楽しめる
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}