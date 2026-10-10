import { SectionHeading } from '../ui/SectionHeading';
import { StarRating } from '../ui/StarRating';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { reviews } from '../../data/reviews';
import { business } from '../../data/config';
import { Quote } from 'lucide-react';

export function Reviews() {
  const staggerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="avis"
      className="py-16 md:py-24 bg-surface-warm/20"
      aria-labelledby="avis-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Avis clients"
          subtitle="Ce que nos clients disent de nous."
          id="avis-heading"
        />

        {/* Aggregate rating */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-surface rounded-2xl px-6 py-4 shadow-sm border border-border/50">
            <span className="text-4xl font-heading font-bold text-primary">
              {business.aggregateRating}
            </span>
            <div className="text-left">
              <StarRating rating={business.aggregateRating} size={20} />
              <p className="text-xs text-muted-fg mt-0.5">
                {business.totalReviews}+ avis
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div
          ref={staggerRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-surface rounded-xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/20 transition-all duration-200 flex flex-col"
            >
              <Quote
                size={24}
                className="text-accent/30 mb-3 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">
                «&nbsp;{review.text}&nbsp;»
              </p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted-fg">{review.date}</p>
                </div>
                <StarRating rating={review.rating} size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
