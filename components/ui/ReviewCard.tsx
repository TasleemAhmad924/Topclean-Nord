import { Star } from "lucide-react";

export function ReviewCard({
  quote,
  author,
  location,
  rating,
  service,
}: {
  quote: string;
  author: string;
  location: string;
  rating: number;
  service: string;
}) {
  return (
    <figure className="rounded-2xl border border-border bg-surface p-8">
      <div className="flex items-center gap-1" aria-label={`${rating} von 5 Sternen`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            aria-hidden
            fill={i < rating ? "var(--color-brand)" : "none"}
            stroke="var(--color-brand)"
          />
        ))}
      </div>
      <blockquote className="mt-5 text-[17px] leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm text-muted">
        <span className="font-medium text-ink">{author}</span> · {location} · {service}
      </figcaption>
    </figure>
  );
}
