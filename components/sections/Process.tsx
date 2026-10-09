import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    detail: "Sie kontaktieren uns über Telefon, WhatsApp oder das Kontaktformular mit Ihrem Anliegen.",
  },
  {
    number: "02",
    title: "Objekt & Bedarf abstimmen",
    detail: "Wir klären Umfang, Zeitfenster und Besonderheiten Ihres Objekts – kurz und unkompliziert.",
  },
  {
    number: "03",
    title: "Angebot erhalten",
    detail: "Sie erhalten zeitnah ein passendes Angebot, abgestimmt auf Ihre Anforderungen.",
  },
  {
    number: "04",
    title: "Reinigung startet",
    detail: "Unser Team übernimmt die Durchführung – zuverlässig, strukturiert und mit festen Ansprechpartnern.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Ablauf</SectionLabel>
          <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            So arbeiten wir mit Ihnen zusammen
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="text-sm font-semibold text-brand">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
