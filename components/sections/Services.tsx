import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { categoryLabels, servicesByCategory, type ServiceCategory } from "@/lib/services";

const categoryOrder: ServiceCategory[] = ["gewerbe", "ferien", "spezial"];

const categoryImages: Record<ServiceCategory, { src: string; alt: string }> = {
  gewerbe: {
    src: "/images/vorher-nachher/treppenhaus-reinigung-luebeck-nachher.jpeg",
    alt: "Gepflegtes Treppenhaus in einem gewerblich genutzten Gebäude",
  },
  ferien: {
    src: "/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg",
    alt: "Gepflegte Ferienwohnung in Timmendorfer Strand",
  },
  spezial: {
    src: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg",
    alt: "Gepflegte Garten- und Außenanlage in Scharbeutz",
  },
};

const VISIBLE_SERVICES = 4;

export function Services() {
  return (
    <section id="leistungen" className="bg-background py-24 md:py-36">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">01 / Leistungen</p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-3" stagger={0.12}>
          {categoryOrder.map((category, index) => {
            const label = categoryLabels[category];
            const items = servicesByCategory(category);
            const visible = items.slice(0, VISIBLE_SERVICES);
            const remaining = items.length - visible.length;
            const image = categoryImages[category];

            return (
              <RevealItem key={category} className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-ink/25">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8 lg:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-[1.1] tracking-tight text-ink lg:text-[1.75rem]">
                    {label.heading}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{label.description}</p>

                  <ul className="mt-7">
                    {visible.map((service) => (
                      <li key={service.slug} className="border-t border-border first:border-t-0">
                        <Link
                          href={`/${service.slug}`}
                          className="flex items-center justify-between py-3 text-[15px] text-ink transition-colors hover:text-brand"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {remaining > 0 && (
                    <p className="mt-1 border-t border-border pt-3 text-sm text-muted">+{remaining} weitere</p>
                  )}

                  <Link
                    href="/alle-leistungen"
                    className="group/link mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-ink transition-colors hover:text-brand"
                  >
                    Alle ansehen
                    <span className="inline-block transition-transform duration-200 ease-out group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-16">
          <Button href="/alle-leistungen" variant="ghost" className="group">
            Alle Leistungen ansehen{" "}
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
