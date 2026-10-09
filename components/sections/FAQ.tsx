import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const faqItems: AccordionItem[] = [
  {
    question: "Welche Reinigungsleistungen bietet TopClean in Lübeck und Umgebung an?",
    answer:
      "Wir übernehmen u. a. Gebäude-, Büro-, Hotel- und Praxisreinigung, Grund- und Fensterreinigung, Reinigung von Ferienwohnungen und Privathaushalten sowie Treppenhaus- und Bodenpflege. Für Gewerbe und Privatkunden in Lübeck, an der Ostsee und im Umland stimmen wir Umfang und Rhythmus individuell ab.",
  },
  {
    question: "Wie läuft die Reinigung von Ferienwohnungen und Ferienunterkünften ab?",
    answer:
      "Wir koordinieren uns mit Ihren Buchungs- und Check-out-Zeiten, reinigen gründlich Küche, Bad und Wohnbereiche und bereiten die Unterkunft zuverlässig für neue Gäste vor – auch bei kurzfristigen Wechseln, soweit planbar.",
  },
  {
    question: "Muss ich bei der Reinigung oder beim Winterdienst anwesend sein?",
    answer:
      "Nein, eine dauerhafte Anwesenheit ist in der Regel nicht nötig. Viele Kundinnen und Kunden übergeben Schlüssel oder Zugang nach Absprache; wir arbeiten vertraulich und zuverlässig. Wenn Sie vor Ort sein möchten – z. B. beim ersten Termin – ist das natürlich möglich.",
  },
  {
    question: "Was leistet der Winterdienst – und wann muss Schnee oder Eis beseitigt werden?",
    answer:
      "Im Auftrag räumen und streuen wir z. B. Zufahrten, Gehwege auf dem Grundstück und Eingänge nach vereinbarten Intervallen und Prioritäten. Wann genau geräumt werden muss, hängt von Wetter, Nutzung und oft auch von lokalen Vorgaben ab; wir empfehlen eine schriftliche Vereinbarung zu Zeiten und Verantwortlichkeiten.",
  },
  {
    question: "Wer muss Schnee räumen – der Eigentümer, die Kommune oder der Mieter?",
    answer:
      "Öffentliche Gehwege und Straßen regeln in der Regel die Kommunen. Für private und gewerbliche Grundstücke (z. B. Zufahrten, Hauszugänge, vermietete Flächen) sind Eigentümer, Verwalter oder nach Vertrag Mieter oft mitverantwortlich. Im Zweifel klären wir mit Ihnen, welche Flächen wir im Auftrag übernehmen und wie die Abstimmung mit Dritten aussieht.",
  },
  {
    question: "Kostet eine Angebotserstellung oder ein unverbindliches Erstgespräch etwas?",
    answer:
      "Ein unverbindliches Erstgespräch und eine Angebotserstellung sind bei uns in der Regel kostenfrei. Erst wenn Leistungen vertraglich beauftragt werden, werden die vereinbarten Preise fällig – transparent und von vornherein besprochen.",
  },
  {
    question: "In welchem Gebiet sind Sie für Reinigung und Winterdienst unterwegs?",
    answer:
      "Unser Schwerpunkt liegt auf Lübeck und der näheren Umgebung – etwa entlang der Ostsee, in Bad Schwartau, Bad Segeberg, Scharbeutz, Timmendorfer Strand und weiteren Orten nach Absprache. Kurze Wege ermöglichen schnelle Reaktionszeiten.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot oder einen Termin?",
    answer:
      "Nach Ihrer Anfrage per Formular, E-Mail, Telefon oder WhatsApp melden wir uns zeitnah. Bei dringenden Themen (z. B. Winterdienst bei Wetterereignissen) stimmen wir Prioritäten und Erreichbarkeit mit Ihnen ab.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="page-width faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">Gut zu wissen / vor dem ersten Gespräch</p>
          <h2 id="faq-title">Häufige Fragen.</h2>
          <p>
            Antworten zu Reinigung, Ferienwohnungen und Winterdienst in Lübeck und Umgebung. Ihre konkrete Frage ist
            nicht dabei? Wir helfen gern persönlich weiter.
          </p>
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
