import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = '',
  id,
}: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal text-center mb-10 md:mb-14 ${className}`} id={id}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-fg max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent"
        aria-hidden="true"
      />
    </div>
  );
}
