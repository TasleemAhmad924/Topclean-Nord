"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal, RevealImage } from "@/components/motion/Reveal";

function ProjectMeta({
  category,
  location,
  name,
}: {
  category: string;
  location: string;
  name: string;
}) {
  return (
    <div className="mt-5 border-t border-border pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{category}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{location}</p>
      <p className="mt-3 text-xl font-medium text-ink">{name}</p>
    </div>
  );
}

function StillProject({
  src,
  alt,
  category,
  location,
  name,
  aspect,
}: {
  src: string;
  alt: string;
  category: string;
  location: string;
  name: string;
  aspect: string;
}) {
  return (
    <RevealImage className="group">
      <div className={`relative w-full overflow-hidden ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 32vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <ProjectMeta category={category} location={location} name={name} />
    </RevealImage>
  );
}

export function Projects() {
  return (
    <section id="referenzen" className="bg-surface py-24 md:py-36">
      <Container>
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-14">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">02 / Referenzen</p>
            <h2 className="mt-4 text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-ink">
              Ausgewählte Arbeiten.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-[34ch] text-base leading-relaxed text-muted">
              Vorher-Nachher-Vergleiche und dokumentierte Ergebnisse aus Lübeck, Ostholstein und Umgebung.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <BeforeAfter
              before="/images/vorher-nachher/treppenhaus-reinigung-luebeck-vorher.jpeg"
              after="/images/vorher-nachher/treppenhaus-reinigung-luebeck-nachher.jpeg"
              label="Treppenhausreinigung in Lübeck"
              aspect="aspect-[16/10]"
            />
            <ProjectMeta category="Treppenhausreinigung" location="Lübeck" name="Treppenhausreinigung" />
          </div>

          <Reveal className="flex flex-col justify-between border-t border-border pt-6 lg:col-span-4 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-muted">Objektpflege / Ferienvermietung</p>
              <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-muted">
                Saubere Übergaben, verlässliche Standards und dokumentierte Ergebnisse für private und gewerbliche
                Objekte.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-5 lg:mt-10">
              <p className="text-3xl font-semibold tracking-tight text-ink">24h</p>
              <p className="mt-2 text-sm text-muted">Rückmeldung auf Anfragen</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <StillProject
              src="/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg"
              alt="Ferienwohnungsreinigung in Timmendorfer Strand"
              category="Ferienwohnungsreinigung"
              location="Timmendorfer Strand"
              name="Ferienwohnungsreinigung"
              aspect="aspect-[5/6]"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-8 lg:pt-16">
            <StillProject
              src="/images/vorher-nachher/balkon-reinigung-luebeck-nachher.jpeg"
              alt="Gereinigter Balkon in Stockelsdorf"
              category="Balkonreinigung"
              location="Stockelsdorf"
              name="Balkonreinigung"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>

        <Reveal className="mt-14 md:mt-16">
          <Button href="/#kontakt">Angebot anfragen</Button>
        </Reveal>
      </Container>
    </section>
  );
}
