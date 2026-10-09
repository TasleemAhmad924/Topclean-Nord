import type { LocationSlug } from "./locations";

export type ServiceCategory = "gewerbe" | "ferien" | "spezial";

export interface Service {
  slug: string;
  name: string;
  /** Used mid-sentence, e.g. "Wir übernehmen Ihre {nameAccusative}" */
  category: ServiceCategory;
  /** Short one-line description used on cards. */
  short: string;
  /** Completes: "…mit Fokus auf {focus}." */
  focus: string;
  bullets: [string, string, string];
  locations: LocationSlug[];
}

export const categoryLabels: Record<ServiceCategory, { label: string; heading: string; description: string }> = {
  gewerbe: {
    label: "Gewerbe",
    heading: "Gewerbe & öffentliche Objekte",
    description: "Laufende Objektpflege für Betriebe, Einrichtungen und gemeinsam genutzte Flächen.",
  },
  ferien: {
    label: "Privat",
    heading: "Privat & Vermietung",
    description: "Wohnen, Alltag und Ferienunterkünfte – gründlich und verlässlich.",
  },
  spezial: {
    label: "Spezial",
    heading: "Spezial & Außen",
    description: "Intensivreinigung, Oberflächen, Baustelle sowie Winterdienst und Garten.",
  },
};

const treppenBodenLocations: LocationSlug[] = [
  "bad-schwartau",
  "boltenhagen",
  "groemitz",
  "haffkrug",
  "luebeck",
  "neustadt-holstein",
  "niendorf",
  "ratekau",
  "scharbeutz",
  "sierksdorf",
  "stockelsdorf",
  "timmendorf",
  "travemuende",
];

export const services: Service[] = [
  {
    slug: "gebaeudereinigung",
    name: "Gebäudereinigung",
    category: "gewerbe",
    short: "Zuverlässige Objektpflege für dauerhaft repräsentative Gebäude.",
    focus: "zuverlässige Objektpflege für dauerhaft repräsentative Gebäude",
    bullets: [
      "Abgestimmte Reinigungspläne je nach Nutzung und Objektgröße",
      "Gepflegte Eingänge, Flure und Gemeinschaftsflächen",
      "Kontinuierliche Qualität mit festen Ansprechpartnern",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "bueroreinigung",
    name: "Büroreinigung",
    category: "gewerbe",
    short: "Saubere Arbeitsplätze und professionelle Büroatmosphäre im Tagesgeschäft.",
    focus: "saubere Arbeitsplätze und professionelle Büroatmosphäre im Tagesgeschäft",
    bullets: [
      "Reinigung von Arbeitsplätzen, Besprechungsräumen und Sanitärbereichen",
      "Termine passend zu Öffnungs- und Bürozeiten",
      "Verlässliche Abläufe für Unternehmen jeder Größe",
    ],
    locations: ["bad-schwartau", "eutin", "luebeck", "moelln", "ratzeburg", "stockelsdorf"],
  },
  {
    slug: "hotelreinigung",
    name: "Hotelreinigung",
    category: "gewerbe",
    short: "Hygienisch gepflegte Gäste- und Gemeinschaftsbereiche für ein überzeugendes Gästeerlebnis.",
    focus: "hygienisch gepflegte Gäste- und Gemeinschaftsbereiche für ein überzeugendes Gästeerlebnis",
    bullets: [
      "Reinigung abgestimmt auf Belegung, Anreise- und Abreisezeiten",
      "Klare Standards für Zimmer, Flure und Sanitärbereiche",
      "Diskrete Abläufe für einen reibungslosen Hotelbetrieb",
    ],
    locations: ["luebeck", "travemuende"],
  },
  {
    slug: "praxisreinigung",
    name: "Praxisreinigung",
    category: "gewerbe",
    short: "Hygienische und diskrete Reinigung für sensible Praxisabläufe.",
    focus: "hygienische und diskrete Reinigung für sensible Praxisabläufe",
    bullets: [
      "Sorgfältige Reinigung von Behandlungs- und Wartebereichen",
      "Abgestimmt auf Hygieneanforderungen im Praxisalltag",
      "Zuverlässige Durchführung mit professioneller Zurückhaltung",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "treppenhaus-reinigung",
    name: "Treppenhausreinigung",
    category: "gewerbe",
    short: "Saubere Treppenanlagen und Eingangsbereiche für einen starken ersten Eindruck.",
    focus: "saubere Treppenanlagen und Eingangsbereiche für einen starken ersten Eindruck",
    bullets: [
      "Gründliche Reinigung von Stufen, Podesten und Geländern",
      "Saubere Eingangsbereiche für Bewohner und Besucher",
      "Abgestimmte Intervalle für WEG, Verwaltung und Eigentümer",
    ],
    locations: treppenBodenLocations,
  },
  {
    slug: "schulreinigung",
    name: "Schulreinigung",
    category: "gewerbe",
    short: "Saubere Lernumgebungen für Unterricht und Gemeinschaftsbereiche.",
    focus: "saubere Lernumgebungen für Unterricht und Gemeinschaftsbereiche",
    bullets: [
      "Reinigung abgestimmt auf Schulalltag und Zeitfenster",
      "Pflege von Klassenräumen, Fluren und Sanitärzonen",
      "Verlässliche Durchführung mit strukturierten Abläufen",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "fitnessstudio-reinigung",
    name: "Fitnessstudio-Reinigung",
    category: "gewerbe",
    short: "Hygienische Trainingsbereiche für Mitglieder, Teams und Besucher.",
    focus: "hygienische Trainingsbereiche für Mitglieder, Teams und Besucher",
    bullets: [
      "Reinigung stark genutzter Trainings- und Sanitärzonen",
      "Zeiten abgestimmt auf Studiobetrieb und Auslastung",
      "Regelmäßige Pflege für einen gepflegten Gesamteindruck",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "ferienwohnung-reinigung",
    name: "Ferienwohnungsreinigung",
    category: "ferien",
    short: "Gästebereite Ferienunterkünfte mit verlässlichen Wechselprozessen.",
    focus: "gästebereite Ferienunterkünfte mit verlässlichen Wechselprozessen",
    bullets: [
      "Flexible Wechselreinigung zwischen Check-out und Check-in",
      "Saubere Küchen-, Bad- und Wohnbereiche mit Blick auf Gästekomfort",
      "Planbare Abläufe für Eigentümer, Vermieter und Verwalter",
    ],
    locations: [
      "boltenhagen",
      "groemitz",
      "haffkrug",
      "luebeck",
      "neustadt-holstein",
      "niendorf",
      "ratekau",
      "scharbeutz",
      "sierksdorf",
      "timmendorf",
      "travemuende",
    ],
  },
  {
    slug: "privathaushalt-reinigung",
    name: "Privathaushaltreinigung",
    category: "ferien",
    short: "Zuverlässige Unterstützung im Haushalt mit diskreten Abläufen.",
    focus: "zuverlässige Unterstützung im Haushalt mit diskreten Abläufen",
    bullets: [
      "Regelmäßige oder punktuelle Reinigung nach Bedarf",
      "Feste Ansprechpartner und transparente Abstimmung",
      "Entlastung im Alltag mit klaren Qualitätsstandards",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "grundreinigung",
    name: "Grundreinigung",
    category: "spezial",
    short: "Tiefgehende Reinigung für Neustart, Übergaben und stark beanspruchte Flächen.",
    focus: "tiefgehende Reinigung für Neustart, Übergaben und stark beanspruchte Flächen",
    bullets: [
      "Intensive Reinigung auch in schwer zugänglichen Bereichen",
      "Sinnvoll vor Einzug, nach Umbau oder bei Objektübergaben",
      "Strukturierte Umsetzung mit planbaren Zeitfenstern",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "fensterreinigung",
    name: "Fensterreinigung",
    category: "spezial",
    short: "Streifenfreie Glasflächen und gepflegte Rahmen für mehr Licht und Wirkung.",
    focus: "streifenfreie Glasflächen und gepflegte Rahmen für mehr Licht und Wirkung",
    bullets: [
      "Gründliche Glas- und Rahmenreinigung",
      "Geeignet für Gewerbe-, Wohn- und Praxisobjekte",
      "Planbare Intervalle für dauerhaft klare Ergebnisse",
    ],
    locations: ["bad-schwartau", "eutin", "luebeck", "stockelsdorf"],
  },
  {
    slug: "baureinigung",
    name: "Baureinigung",
    category: "spezial",
    short: "Saubere Übergaben nach Bau- und Umbauarbeiten.",
    focus: "saubere Übergaben nach Bau- und Umbauarbeiten",
    bullets: [
      "Entfernung von Bauschmutz und Feinstaub",
      "Feinreinigung vor Übergabe oder Bezug",
      "Koordination passend zu Baufortschritt und Termindruck",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "bodenreinigung",
    name: "Bodenreinigung",
    category: "spezial",
    short: "Materialgerechte Reinigung und Pflege für dauerhaft gepflegte Bodenflächen.",
    focus: "materialgerechte Reinigung und Pflege für dauerhaft gepflegte Bodenflächen",
    bullets: [
      "Geeignet für Fliesen, PVC, Laminat und weitere Beläge",
      "Sorgfältige Bearbeitung stark genutzter Laufzonen",
      "Pflegeorientierte Vorgehensweise für langfristigen Werterhalt",
    ],
    locations: treppenBodenLocations,
  },
  {
    slug: "winterdienst",
    name: "Winterdienst",
    category: "spezial",
    short: "Sichere Wege und Zufahrten bei Schnee und Eis in der Wintersaison.",
    focus: "sichere Wege und Zufahrten bei Schnee und Eis in der Wintersaison",
    bullets: [
      "Räumen und Streuen nach abgestimmten Vorgaben",
      "Planung passend zu Objekt und Erreichbarkeit",
      "Zuverlässige Einsätze für mehr Sicherheit im Alltag",
    ],
    locations: ["luebeck"],
  },
  {
    slug: "gartenservice",
    name: "Gartenservice",
    category: "spezial",
    short: "Gepflegte Außenanlagen für einen ordentlichen Gesamteindruck.",
    focus: "gepflegte Außenanlagen für einen ordentlichen Gesamteindruck",
    bullets: [
      "Saisonale Pflege von Grün- und Außenflächen",
      "Abgestimmte Leistungen je nach Objekt und Bedarf",
      "Regelmäßige Pflege für dauerhaft gepflegte Anlagen",
    ],
    locations: ["luebeck"],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export const servicesByCategory = (category: ServiceCategory) =>
  services.filter((s) => s.category === category);

export interface ServicePageParams {
  service: Service;
  locationSlug: LocationSlug | null;
}

/** Every real, currently-indexed `/[slug]` route, resolved to its service + optional location. */
export function resolveSlug(slug: string): ServicePageParams | null {
  const direct = servicesBySlug[slug];
  if (direct) return { service: direct, locationSlug: null };

  for (const service of services) {
    for (const loc of service.locations) {
      if (`${service.slug}-${loc}` === slug) {
        return { service, locationSlug: loc };
      }
    }
  }
  return null;
}

export function allServiceSlugs(): string[] {
  const slugs: string[] = [];
  for (const service of services) {
    slugs.push(service.slug);
    for (const loc of service.locations) {
      slugs.push(`${service.slug}-${loc}`);
    }
  }
  return slugs;
}
