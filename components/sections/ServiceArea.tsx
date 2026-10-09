import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { locations } from "@/lib/locations";

export function ServiceArea() {
  const towns = Object.values(locations);

  return (
    <section className="py-20 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionLabel>Einsatzgebiet</SectionLabel>
          <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Zuhause an der Ostsee
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
            Unser Schwerpunkt liegt auf Lübeck und der näheren Umgebung – etwa entlang der Ostsee, in Bad
            Schwartau, Bad Segeberg, Scharbeutz, Timmendorfer Strand und weiteren Orten nach Absprache.
          </p>
        </div>

        <ul className="flex flex-wrap content-start gap-2.5 border-t border-border pt-8 lg:border-t-0 lg:pt-0">
          {towns.map((town) => (
            <li
              key={town}
              className="rounded-full border border-border px-4 py-2 text-sm text-ink"
            >
              {town}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
