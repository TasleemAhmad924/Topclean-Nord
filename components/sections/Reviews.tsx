import { Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { reviews } from "@/lib/reviews";

export function Reviews() {
  const review = reviews[0];
  if (!review) return null;

  return (
    <section id="bewertungen" className="bg-brand-darker py-24 text-white md:py-40">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">04 / Google Bewertungen</p>
          <h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-white">
            Das sagen
            <br />
            unsere Kunden.
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-white/60">
            Echte Rückmeldungen aus der Region – von der Ostsee bis ins Umland von Lübeck.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative border-t border-white/15 pt-8 lg:border-t-0 lg:pt-0">
          <span aria-hidden className="pointer-events-none absolute -top-6 left-0 select-none font-serif text-[8rem] leading-none text-white/10 lg:-top-10 lg:text-[10rem]">
            &ldquo;
          </span>

          <div className="relative flex items-center gap-1" aria-label={`${review.rating} von 5 Sternen`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5"
                aria-hidden
                fill={i < review.rating ? "var(--color-brand-tint)" : "none"}
                stroke="var(--color-brand-tint)"
              />
            ))}
          </div>
          <blockquote className="relative mt-8 max-w-[46ch] text-[clamp(2rem,3.6vw,2.75rem)] font-medium leading-[1.15] text-white">
            {review.quote}
          </blockquote>
          <p className="relative mt-8 text-base text-white/60">
            <span className="font-medium text-white">{review.author}</span> · {review.location} · {review.service}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
