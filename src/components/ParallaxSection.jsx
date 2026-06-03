export default function ParallaxSection({
  imageUrl,
  altText,
  overlay = false,
}) {
  return (
    <section
      className="relative h-[40vh] md:h-[50vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      aria-label={altText}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="font-serif text-white text-2xl md:text-4xl tracking-[0.2em]">
            EXPERIENCE AMAMI
          </p>
        </div>
      )}
    </section>
  );
}