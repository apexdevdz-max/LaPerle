import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = 18,
  className = '',
}: StarRatingProps) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} étoiles sur ${maxStars}`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const halfFilled = !filled && i < rating;

        return (
          <Star
            key={i}
            size={size}
            aria-hidden="true"
            className={[
              'transition-colors duration-200',
              filled
                ? 'fill-amber-500 text-amber-500'
                : halfFilled
                  ? 'fill-amber-500/50 text-amber-500'
                  : 'fill-muted text-muted',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}
