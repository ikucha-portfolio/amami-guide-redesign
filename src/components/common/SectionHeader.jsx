export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="text-center mb-16">

      <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold mb-4">
        {eyebrow}
      </p>

      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground">
          {description}
        </p>
      )}

    </div>
  )
}