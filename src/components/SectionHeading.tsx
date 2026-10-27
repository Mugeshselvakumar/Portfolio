interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 lg:mb-16">
      {eyebrow && (
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3 font-mono">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-fg tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted max-w-2xl">{description}</p>
      )}
    </div>
  )
}
