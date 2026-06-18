export default function TourHero({ tour }) {
  return (
    <section
      style={{
        position: "relative",
        height: "40vh",
        overflow: "hidden",
      }}
    >
      <img
        src={tour.image}
        alt={tour.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 60%",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 6% 52px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "10px",
          }}
        >
          {tour.nameEn.toUpperCase()}
        </p>

        <h1
  style={{
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: "clamp(22px, 2.5vw, 32px)",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    textShadow: "0 2px 20px rgba(0,0,0,0.3)",
    maxWidth: "900px",
  }}
>
  {tour.name}
</h1>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.8)",
            marginTop: "10px",
            maxWidth: "700px",
            lineHeight: 1.8,
          }}
        >
          {tour.description}
        </p>
      </div>
    </section>
  );
}