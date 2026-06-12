export default function ParallaxSection({
  imageUrl,
  altText,
  overlay = false,
}) {
  return (
    <section
      className="
        relative
        h-[140px]
        md:h-[200px]
        bg-cover
        bg-center
        bg-fixed
      "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      aria-label={altText}
    >
    </section>
  );
}