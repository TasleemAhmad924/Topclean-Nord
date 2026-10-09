import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { RevealImage, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const principles = [
  {
    title: "Sorgfältig ausgewähltes Team",
    detail: "Freundliche Fachkräfte, klare Standards und ein respektvoller Umgang – für verlässliche Ergebnisse.",
  },
  {
    title: "Effiziente Durchführung",
    detail:
      "Wir planen sauber, arbeiten strukturiert und liefern zeitnah – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
  },
  {
    title: "Qualität mit System",
    detail: "Von der Grundreinigung bis zur regelmäßigen Unterhaltsreinigung: Wir halten Ihr Objekt in Bestform.",
  },
];

export function About() {
  return (
    <section id="ueber-uns" className="bg-background py-24 md:py-36">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <RevealImage className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:h-[36rem]">
          <Image
            src="/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg"
            alt="Gepflegte Ferienwohnung in Timmendorfer Strand nach der Reinigung durch TopClean Nord"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealImage>

        <RevealGroup className="lg:mt-24" stagger={0.12}>
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">03 / Über TopClean</p>
            <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-ink">
              Persönlich geführt.
              <br />
              Professionell organisiert.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              TopClean ist ein familiengeführtes Unternehmen mit langjähriger Erfahrung im Reinigungsbereich. Unsere
              fortwährende Einsatzbereitschaft und unser Qualitätsanspruch sind die Basis für langfristige
              Zusammenarbeit.
            </p>
          </RevealItem>

          <dl className="mt-10 flex flex-col">
            {principles.map((principle, index) => (
              <RevealItem key={principle.title} className="border-t border-border py-6 first:pt-0">
                <div className="flex gap-4">
                  <span aria-hidden className="pt-0.5 text-sm font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="text-xl font-semibold text-ink">{principle.title}</dt>
                    <dd className="mt-2 max-w-[46ch] text-base leading-relaxed text-muted">{principle.detail}</dd>
                  </div>
                </div>
              </RevealItem>
            ))}
          </dl>
        </RevealGroup>
      </Container>
    </section>
  );
}
