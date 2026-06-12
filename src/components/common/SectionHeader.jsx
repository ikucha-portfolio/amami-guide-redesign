export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="text-center mb-16">

      {eyebrow && (
        <p
          className="
            text-[11px]
            tracking-[0.25em]
            uppercase
            text-primary
            mb-3
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          tracking-tight
          text-foreground
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            max-w-2xl
            mx-auto
            mt-5
            text-muted-foreground
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}