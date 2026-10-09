import type { Metadata } from "next";

export interface ServicePageSection {
  title: string;
  body: string;
  points?: string[];
}

export interface ServicePageLink {
  label: string;
  href: string;
  description: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface StoryPanel {
  id: string;
  title: string;
  href: string;
  points: string[];
  image: {
    src: string;
    alt: string;
    caption: string;
    position?: string;
    zoom?: number;
  };
  compareBefore?: string;
}

export interface ServicePageProof {
  before: string;
  after: string;
  label: string;
  eyebrow: string;
  title: string;
  caption: string[];
}

export const propertyStoryPanels: StoryPanel[] = [
  {
    id: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    href: "/treppenhausreinigung",
    points: ["Stufen & Podeste", "Geländer & Eingänge", "Intervalle je Objekt"],
    image: {
      src: "/images/vorher-nachher/treppenhaus-reinigung-luebeck-nachher.jpeg",
      alt: "Gereinigte Treppenanlage eines Mehrfamilienhauses in Lübeck",
      caption: "Treppenhaus · Lübeck",
      position: "center 45%",
    },
    compareBefore: "/images/vorher-nachher/treppenhaus-reinigung-luebeck-vorher.jpeg",
  },
  {
    id: "hausmeisterservice",
    title: "Hausmeisterservice",
    href: "/hausmeisterservice",
    points: ["Zuständigkeiten festgelegt", "Zugänge & Meldewege"],
    image: {
      src: "/images/vorher-nachher/balkon-reinigung-luebeck-nachher.jpeg",
      alt: "Gepflegte Balkonfläche in Lübeck nach der Reinigung",
      caption: "Außenfläche · Lübeck",
      position: "center 38%",
    },
  },
  {
    id: "winterdienst",
    title: "Winterdienst",
    href: "/winterdienst",
    points: ["Wege & Zufahrten", "Einsatzvorgaben vorab"],
    image: {
      src: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg",
      alt: "Außentreppe und Wege einer Wohnanlage in Lübeck",
      caption: "Außentreppe & Wege · Lübeck",
      position: "center 62%",
    },
  },
  {
    id: "glasreinigung",
    title: "Glas- und Fensterreinigung",
    href: "/glasreinigung",
    points: ["Glasflächen & Rahmen", "Einmalig oder wiederkehrend"],
    image: {
      src: "/images/hero/window-cleaning-unsplash.jpg",
      alt: "Reinigung einer Glasfläche mit Abzieher",
      caption: "Glasflächen & Fassaden",
      position: "30% 45%",
      zoom: 1.5,
    },
  },
];

export interface ServicePageContent {
  canonical: string;
  title: string;
  displayTitle?: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  introTitle: string;
  intro: string;
  sections: ServicePageSection[];
  audiences: string[];
  locations: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
    position?: string;
  };
  proof?: ServicePageProof;
  story?: StoryPanel[];
  breadcrumb?: {
    label: string;
    href: string;
  };
  faq?: ServicePageFaq[];
  related: ServicePageLink[];
}

export const servicePageContent: Record<string, ServicePageContent> = {
  hausverwaltungen: {
    canonical: "/hausverwaltungen",
    title: "Objektservice für Hausverwaltungen & Wohnungsunternehmen",
    displayTitle: "Objektservice für Haus\u00adverwaltungen & Wohnungs\u00adunternehmen",
    metaTitle: "Objektservice für Hausverwaltungen in Lübeck",
    metaDescription:
      "Hausmeisterservice, Winterdienst, Treppenhaus- und Glasreinigung für Hausverwaltungen und Wohnungsunternehmen. Einzelobjekte und Bestände in Lübeck und Umgebung gemeinsam planen.",
    eyebrow: "Für Hausverwaltungen, WEGs & Wohnungsunternehmen",
    lead:
      "Ein Ansprechpartner für mehrere Objekte – mit Leistungen, die sich passend zu Immobilie, Lage und Bedarf abstimmen lassen.",
    introTitle: "Vom einzelnen Haus bis zum betreuten Bestand.",
    intro:
      "Einzelne Immobilien oder mehrere Standorte lassen sich gemeinsam anfragen. Umfang, Zuständigkeiten und Zugänge werden vor dem Angebot geklärt.",
    story: propertyStoryPanels,
    image: {
      src: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg",
      alt: "Gepflegte Außentreppe mit Grünfläche einer Wohnanlage in Lübeck",
      caption: "Außenanlage · Lübeck",
      position: "center 60%",
    },
    sections: [
      {
        title: "Objekte gemeinsam betrachten",
        body:
          "Bei mehreren Liegenschaften hilft eine Übersicht mit Adressen, Objektarten und gewünschten Leistungen.",
        points: ["Einzelobjekte", "Mehrere Immobilien", "Wohnungsbestände und Portfolios"],
      },
      {
        title: "Klare Absprachen für die Zusammenarbeit",
        body:
          "Ansprechpersonen, Zugang, Leistungsumfang und Intervalle werden vor Beginn festgehalten. Saisonale Aufgaben wie der Winterdienst werden gesondert besprochen.",
      },
    ],
    audiences: ["Hausverwaltungen", "Wohnungsunternehmen", "WEGs", "Professionelle Vermieter"],
    locations: [
      "Lübeck",
      "Bad Schwartau · Stockelsdorf · Ratekau",
      "Travemünde · Timmendorfer Strand · Scharbeutz",
      "Reinfeld · Groß Grönau · Krummesse · Lüdersdorf nach Objekt und Leistungsumfang",
    ],
    faq: [
      {
        question: "Welche Leistungen können Hausverwaltungen anfragen?",
        answer:
          "Zum Objektservice zählen Hausmeisterservice, Winterdienst, Treppenhausreinigung und Glas- beziehungsweise Fensterreinigung. Der konkrete Umfang wird je Immobilie abgestimmt.",
      },
      {
        question: "Können mehrere Objekte gemeinsam besprochen werden?",
        answer:
          "Ja. Hausverwaltungen und Wohnungsunternehmen können mehrere Standorte in einer Anfrage angeben. Lage, Leistungsbedarf und gewünschte Abläufe werden anschließend je Objekt eingeordnet.",
      },
      {
        question: "In welchen Gebieten ist Objektservice möglich?",
        answer:
          "Der regionale Schwerpunkt liegt in Lübeck und Ostholstein. Weitere Einsatzorte in Norddeutschland werden nach Lage und Umfang individuell abgestimmt.",
      },
    ],
    related: [
      {
        label: "Treppenhausreinigung",
        href: "/treppenhausreinigung",
        description: "Reinigungsintervalle für Treppenanlagen und Gemeinschaftsflächen abstimmen.",
      },
      {
        label: "Hausmeisterservice",
        href: "/hausmeisterservice",
        description: "Aufgaben und Zuständigkeiten für verwaltete Immobilien besprechen.",
      },
      {
        label: "Winterdienst",
        href: "/winterdienst",
        description: "Flächen und saisonale Einsatzvorgaben vorab festlegen.",
      },
      {
        label: "Referenzen auf der Startseite",
        href: "/#referenzen",
        description: "Vorher-Nachher-Einblicke aus Reinigungsarbeiten in Lübeck.",
      },
    ],
  },
  unterhaltsreinigung: {
    canonical: "/unterhaltsreinigung",
    title: "Unterhaltsreinigung für Unternehmen & Einrichtungen in Lübeck",
    displayTitle: "Unterhalts\u00adreinigung für Unternehmen & Einrich\u00adtungen in Lübeck",
    metaTitle: "Unterhaltsreinigung Lübeck",
    metaDescription:
      "Regelmäßige Unterhaltsreinigung für Kitas, soziale Einrichtungen, Praxen, Büros und Gewerbe in Lübeck. Leistungsumfang und Intervalle abstimmen.",
    eyebrow: "Laufende Reinigung / Lübeck & Umgebung",
    lead:
      "Für Unternehmen und Einrichtungen, die eine verlässliche Reinigung in wiederkehrenden Intervallen suchen.",
    introTitle: "Ein Reinigungsplan, der zum Betrieb passt.",
    intro:
      "Reinigungsumfang und Rhythmus werden anhand der Nutzung und der Anforderungen des jeweiligen Objekts besprochen. So ist von Anfang an klar, welche Bereiche betreut werden und wie die laufende Zusammenarbeit organisiert ist.",
    sections: [
      {
        title: "Intervalle und Umfang gemeinsam festlegen",
        body:
          "Ob wöchentlich oder in einem anderen vereinbarten Rhythmus: Die Planung orientiert sich an Ihrem Alltag, den genutzten Flächen und den Zeitfenstern am Standort.",
        points: [
          "Gewünschte Reinigungsintervalle",
          "Zu betreuende Räume und Gemeinschaftsbereiche",
          "Zugang und Abstimmung mit Ansprechpersonen",
        ],
      },
      {
        title: "Für Einrichtungen und gewerbliche Objekte",
        body:
          "TopClean richtet sich mit der laufenden Unterhaltsreinigung an Kitas, soziale Einrichtungen, medizinische Praxen, Büros und Gewerbebetriebe.",
        points: ["Kita- und Einrichtungsreinigung", "Praxisreinigung", "Büro- und Gewerbereinigung"],
      },
      {
        title: "Aus einer Anfrage wird ein klarer Leistungsumfang",
        body:
          "Im ersten Gespräch werden Objektart, Lage, gewünschte Intervalle und besondere Anforderungen erfasst. Darauf aufbauend lässt sich besprechen, ob eine längerfristige Betreuung passt.",
      },
    ],
    audiences: ["Kitas und soziale Einrichtungen", "Praxen", "Büros", "Gewerbebetriebe"],
    locations: ["Lübeck", "Bad Schwartau", "Stockelsdorf", "Ratekau"],
    faq: [
      {
        question: "Wie wird der Reinigungsrhythmus festgelegt?",
        answer:
          "Umfang und Intervalle werden nach Nutzung der Flächen, Betriebsabläufen und passenden Zeitfenstern gemeinsam abgestimmt.",
      },
      {
        question: "Welche Angaben helfen bei einem Angebot?",
        answer:
          "Nennen Sie Objektart und Standort, die zu betreuenden Bereiche, gewünschte Intervalle sowie Zugang und Zeitfenster.",
      },
      {
        question: "In welchen Orten ist Unterhaltsreinigung möglich?",
        answer:
          "Der Schwerpunkt liegt in Lübeck sowie Bad Schwartau, Stockelsdorf und Ratekau. Weitere Anfragen werden nach Objekt und Leistungsumfang geprüft.",
      },
    ],
    related: [
      {
        label: "Kita-Reinigung",
        href: "/kita-reinigung",
        description: "Reinigungsabläufe für Kitas und soziale Einrichtungen.",
      },
      {
        label: "Praxisreinigung",
        href: "/praxisreinigung",
        description: "Reinigung mit Blick auf den Praxisalltag.",
      },
      {
        label: "Büroreinigung",
        href: "/bueroreinigung",
        description: "Regelmäßige Reinigung für Arbeits- und Besprechungsbereiche.",
      },
    ],
  },
  "kita-reinigung": {
    canonical: "/kita-reinigung",
    title: "Kita-Reinigung in Lübeck für Träger und Einrichtungen",
    metaTitle: "Kita-Reinigung Lübeck",
    metaDescription:
      "Laufende Reinigung für Kitas und soziale Einrichtungen in Lübeck. Reinigungsumfang und Termine passend zum Einrichtungsalltag abstimmen.",
    eyebrow: "Für Kitas & soziale Einrichtungen",
    lead:
      "Eine regelmäßige Reinigung, deren Umfang und Termine gemeinsam mit Träger oder Einrichtungsleitung abgestimmt werden.",
    introTitle: "Auf den Alltag der Einrichtung abgestimmt.",
    intro:
      "Kita-Betriebe haben feste Abläufe und unterschiedlich genutzte Räume. In der Abstimmung geht es darum, die passenden Reinigungsbereiche und wiederkehrenden Zeitfenster für den jeweiligen Standort festzulegen.",
    sections: [
      {
        title: "Räume und Nutzung berücksichtigen",
        body:
          "Gemeinschafts- und Gruppenräume, Eingangsbereiche, Flure und Sanitärbereiche können in den vereinbarten Leistungsumfang aufgenommen werden.",
        points: ["Gruppen- und Gemeinschaftsräume", "Eingänge und Flure", "Sanitärbereiche"],
      },
      {
        title: "Abläufe mit dem Träger abstimmen",
        body:
          "Reinigungszeiten, Zugang zum Gebäude und die Kommunikation mit einer festen Ansprechperson werden vor Beginn besprochen. Anforderungen unterscheiden sich je nach Standort.",
      },
      {
        title: "Regelmäßige Betreuung besprechen",
        body:
          "TopClean sucht laufende Aufträge mit wiederkehrenden Intervallen. Eine Anfrage sollte deshalb neben dem Standort auch den gewünschten Rhythmus und die Größe der Einrichtung benennen.",
      },
    ],
    audiences: ["Kita-Träger", "Leitungen von Kindertagesstätten", "Soziale Einrichtungen"],
    locations: ["Lübeck", "Bad Schwartau", "Stockelsdorf", "Ratekau"],
    faq: [
      {
        question: "Welche Kita-Bereiche können in den Reinigungsplan aufgenommen werden?",
        answer:
          "Je nach Vereinbarung können Gruppen- und Gemeinschaftsräume, Eingänge, Flure und Sanitärbereiche dazugehören.",
      },
      {
        question: "Welche Angaben helfen bei einer Anfrage zur Kita-Reinigung?",
        answer:
          "Standort, Größe der Einrichtung, gewünschte Intervalle sowie passende Zeitfenster und Zugangsregelungen.",
      },
      {
        question: "Wie werden Reinigungszeiten mit dem Kita-Alltag abgestimmt?",
        answer:
          "Zeitfenster, Zugang und die genutzten Räume werden vor Beginn mit Träger oder Einrichtungsleitung besprochen.",
      },
    ],
    related: [
      {
        label: "Unterhaltsreinigung",
        href: "/unterhaltsreinigung",
        description: "Informationen zur laufenden Reinigung für Einrichtungen und Unternehmen.",
      },
      {
        label: "Praxisreinigung",
        href: "/praxisreinigung",
        description: "Ein eigener Schwerpunkt für medizinische Praxen.",
      },
    ],
  },
  praxisreinigung: {
    canonical: "/praxisreinigung",
    title: "Praxisreinigung in Lübeck für medizinische Einrichtungen",
    metaTitle: "Praxisreinigung Lübeck",
    metaDescription:
      "Regelmäßige Praxisreinigung in Lübeck. Umfang, Bereiche und Reinigungszeiten passend zu den Abläufen Ihrer Praxis abstimmen.",
    eyebrow: "Praxisreinigung / Lübeck",
    lead:
      "Laufende Reinigung für Praxen, mit abgestimmtem Umfang und Rücksicht auf die Abläufe vor Ort.",
    introTitle: "Sorgfältig planen, ohne den Praxisbetrieb aus dem Blick zu verlieren.",
    intro:
      "Behandlungs- und Wartebereiche haben unterschiedliche Nutzungen. Vor Beginn wird besprochen, welche Räume in die regelmäßige Reinigung einbezogen werden und wie die Termine in den Praxisalltag passen.",
    sections: [
      {
        title: "Bereiche objektbezogen abstimmen",
        body:
          "Wartezimmer, Behandlungsräume, Empfang und Sanitärbereiche können je nach Praxis in den Leistungsumfang aufgenommen werden.",
        points: ["Warte- und Empfangsbereiche", "Behandlungsräume", "Sanitär- und Gemeinschaftsbereiche"],
      },
      {
        title: "Anforderungen vorab besprechen",
        body:
          "Nutzungszeiten, Zugänge und die gewünschten Reinigungsintervalle werden mit der Praxis abgestimmt. Spezielle Hygienevorgaben oder Zertifizierungen werden nicht pauschal zugesagt.",
      },
      {
        title: "Für eine regelmäßige Zusammenarbeit",
        body:
          "Die Anfrage dient dazu, den Standort und den tatsächlichen Bedarf einzuordnen. Anschließend können Leistungsumfang, Zeitfenster und mögliche Intervalle konkret besprochen werden.",
      },
    ],
    audiences: ["Arztpraxen", "Therapie- und Behandlungsräume", "Medizinische Einrichtungen"],
    locations: ["Lübeck", "weitere Orte nach Absprache"],
    related: [
      {
        label: "Unterhaltsreinigung",
        href: "/unterhaltsreinigung",
        description: "Laufende Reinigungsintervalle für Unternehmen und Einrichtungen.",
      },
      {
        label: "Kita-Reinigung",
        href: "/kita-reinigung",
        description: "Reinigung für soziale Einrichtungen und Kindertagesstätten.",
      },
    ],
  },
  bueroreinigung: {
    canonical: "/bueroreinigung",
    title: "Büroreinigung in Lübeck für Unternehmen",
    metaTitle: "Büroreinigung Lübeck",
    metaDescription:
      "Regelmäßige Büroreinigung in Lübeck und Umgebung. Arbeitsplätze, Besprechungsräume und Sanitärbereiche passend zum Betrieb betreuen lassen.",
    eyebrow: "Büroreinigung / laufende Betreuung",
    lead:
      "Saubere Arbeitsplätze und gemeinschaftlich genutzte Räume – mit Reinigungszeiten, die zum Betrieb passen.",
    introTitle: "Sauberkeit, die in den Arbeitstag passt.",
    intro:
      "Arbeitsplätze, Besprechungsräume und Sanitärbereiche werden je nach Vereinbarung in die Büroreinigung aufgenommen. Umfang und Termine werden anhand der Nutzung und der betrieblichen Abläufe abgestimmt.",
    sections: [
      {
        title: "Arbeits- und Gemeinschaftsbereiche",
        body:
          "Welche Flächen betreut werden, hängt vom Büro und seiner Nutzung ab. Im Gespräch werden die relevanten Bereiche und gewünschte Intervalle konkretisiert.",
        points: ["Arbeitsplätze und Besprechungsräume", "Flure und gemeinsam genutzte Flächen", "Sanitärbereiche"],
      },
      {
        title: "Zeitfenster nach Absprache",
        body:
          "Reinigungstermine werden mit den Öffnungs- und Bürozeiten des Unternehmens abgestimmt. Zugang und Ansprechpartner werden vor Beginn geklärt.",
      },
      {
        title: "Laufende Büroreinigung anfragen",
        body:
          "Für die erste Einschätzung helfen Angaben zum Standort, zur ungefähren Objektgröße und zu den gewünschten Reinigungsintervallen.",
      },
    ],
    audiences: ["Unternehmen", "Büros", "Gewerbliche Arbeitsplätze"],
    locations: ["Lübeck", "Bad Schwartau", "Stockelsdorf", "weitere Orte nach Absprache"],
    related: [
      {
        label: "Unterhaltsreinigung",
        href: "/unterhaltsreinigung",
        description: "Übergreifende Informationen zu wiederkehrenden Reinigungsaufträgen.",
      },
      {
        label: "Praxisreinigung",
        href: "/praxisreinigung",
        description: "Reinigung für medizinische Praxen.",
      },
    ],
  },
  hausmeisterservice: {
    canonical: "/hausmeisterservice",
    title: "Hausmeisterservice für verwaltete Immobilien",
    displayTitle: "Hausmeister\u00adservice für verwaltete Immobilien",
    metaTitle: "Hausmeisterservice Lübeck",
    metaDescription:
      "Hausmeisterservice für Hausverwaltungen, Wohnungsunternehmen und Vermieter in Lübeck. Bedarf und Leistungsumfang objektbezogen abstimmen.",
    eyebrow: "Hausmeisterservice / Objektbetreuung",
    lead:
      "Ein ergänzender Objektservice für Hausverwaltungen, Wohnungsunternehmen, WEGs und professionelle Vermieter.",
    introTitle: "Leistungen am tatsächlichen Objektbedarf ausrichten.",
    intro:
      "Welche Aufgaben übernommen werden können, hängt von Immobilie, Lage und gewünschtem Umfang ab. Im Erstgespräch werden die erforderlichen Tätigkeiten und Schnittstellen zur Verwaltung geklärt.",
    sections: [
      {
        title: "Für einzelne Objekte und Bestände",
        body:
          "Hausmeisterservice lässt sich gemeinsam mit weiteren Objektleistungen besprechen. Bei mehreren Standorten sollten Lage und gewünschte Betreuung je Objekt beschrieben werden.",
        points: ["Hausverwaltungen und WEGs", "Wohnungsunternehmen", "Professionelle Vermieter"],
      },
      {
        title: "Leistungsumfang schriftlich abstimmen",
        body:
          "Zuständigkeiten, Zugänge, Meldewege und vereinbarte Aufgaben sollten vor Beginn eindeutig festgelegt werden. So bleiben die Abläufe für Verwaltung und Objekt nachvollziehbar.",
      },
      {
        title: "Mit weiteren Objektservices kombinieren",
        body:
          "Je nach Standort lassen sich Hausmeisterservice, Treppenhausreinigung und Winterdienst gemeinsam anfragen.",
      },
    ],
    audiences: ["Hausverwaltungen", "Wohnungsunternehmen", "WEGs und Vermieter"],
    locations: [
      "Lübeck",
      "Bad Schwartau · Stockelsdorf · Ratekau",
      "Travemünde · Timmendorfer Strand · Scharbeutz",
      "Reinfeld · Groß Grönau · Krummesse · Lüdersdorf nach Objekt und Leistungsumfang",
    ],
    proof: {
      before: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-vorher.jpeg",
      after: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg",
      label: "Außentreppe einer Wohnanlage in Lübeck",
      eyebrow: "Ausgeführt in Lübeck",
      title: "Gepflegte Außenanlagen.",
      caption: ["Außentreppe", "Lübeck"],
    },
    related: [
      {
        label: "Für Hausverwaltungen",
        href: "/hausverwaltungen",
        description: "Objektservice für einzelne Immobilien und Bestände.",
      },
      {
        label: "Winterdienst",
        href: "/winterdienst",
        description: "Saisonale Betreuung von Wegen und Zufahrten.",
      },
      {
        label: "Treppenhausreinigung",
        href: "/treppenhausreinigung",
        description: "Regelmäßige Reinigung von Treppenanlagen und Eingängen.",
      },
    ],
  },
  winterdienst: {
    canonical: "/winterdienst",
    title: "Winterdienst für Hausverwaltungen und Immobilien in Lübeck",
    displayTitle: "Winter\u00addienst für Haus\u00adverwaltungen und Immobilien in Lübeck",
    metaTitle: "Winterdienst Lübeck für Immobilien",
    metaDescription:
      "Winterdienst für Immobilien in Lübeck: Räum- und Streuleistungen nach vereinbarten Vorgaben, Objekt und Erreichbarkeit abstimmen.",
    eyebrow: "Winterdienst / Lübeck",
    lead:
      "Räumen und Streuen für Wege und Zufahrten – nach vorheriger Abstimmung zu Objekt, Flächen und Einsatzvorgaben.",
    introTitle: "Saisonale Abläufe vor dem Winter klären.",
    intro:
      "Für einen planbaren Winterdienst sollten Zuständigkeiten, zu betreuende Flächen und Prioritäten vor Saisonbeginn besprochen und festgehalten werden.",
    sections: [
      {
        title: "Flächen und Vorgaben festlegen",
        body:
          "Welche Wege, Zugänge oder Zufahrten betreut werden und nach welchen Vorgaben Einsätze erfolgen, wird objektbezogen abgestimmt.",
        points: ["Zufahrten und Zugangswege", "Eingänge und vereinbarte Flächen", "Einsatzzeiten und Prioritäten"],
      },
      {
        title: "Verantwortlichkeiten eindeutig halten",
        body:
          "Örtliche Satzungen und vertragliche Regelungen können sich unterscheiden. Auftraggeber und Dienstleister sollten deshalb genau festlegen, welche Flächen und Pflichten übertragen werden.",
      },
      {
        title: "Für mehrere Immobilien planen",
        body:
          "Hausverwaltungen können Standorte und gewünschte Leistungen gemeinsam anfragen. Die konkrete Einsatzplanung richtet sich nach Lage und vereinbartem Umfang.",
      },
    ],
    audiences: ["Hausverwaltungen", "Wohnungsunternehmen", "Gewerbliche Immobilien"],
    locations: [
      "Lübeck",
      "Bad Schwartau · Stockelsdorf · Ratekau",
      "Travemünde · Timmendorfer Strand · Scharbeutz",
      "Reinfeld · Groß Grönau · Krummesse · Lüdersdorf nach Objekt und Leistungsumfang",
    ],
    faq: [
      {
        question: "Welche Angaben braucht TopClean für ein Winterdienst-Angebot?",
        answer:
          "Nennen Sie Objektadresse, zu betreuende Wege oder Zufahrten, gewünschte Einsatzzeiten und Prioritäten.",
      },
      {
        question: "Was sollte vor Beginn des Winterdienstes feststehen?",
        answer:
          "Die zu betreuenden Flächen, Einsatzvorgaben und Zuständigkeiten sollten für jedes Objekt abgestimmt und festgehalten werden.",
      },
      {
        question: "Können mehrere Immobilien gemeinsam angefragt werden?",
        answer:
          "Ja. Hausverwaltungen können mehrere Standorte in einer Anfrage aufführen. Flächen und Einsatzvorgaben werden anschließend je Objekt abgestimmt.",
      },
    ],
    related: [
      {
        label: "Für Hausverwaltungen",
        href: "/hausverwaltungen",
        description: "Objektservices für einzelne Immobilien und Bestände.",
      },
      {
        label: "Hausmeisterservice",
        href: "/hausmeisterservice",
        description: "Ergänzende Betreuung rund um verwaltete Immobilien.",
      },
    ],
  },
  treppenhausreinigung: {
    canonical: "/treppenhausreinigung",
    title: "Treppenhausreinigung für Wohnanlagen in Lübeck",
    displayTitle: "Treppenhaus\u00adreinigung für Wohnanlagen in Lübeck",
    metaTitle: "Treppenhausreinigung Lübeck",
    metaDescription:
      "Treppenhausreinigung für Hausverwaltungen, WEGs und Eigentümer in Lübeck und Ostholstein. Reinigungsintervalle und Flächen objektbezogen festlegen.",
    eyebrow: "Treppenhausreinigung / Objektpflege",
    lead:
      "Gepflegte Treppenanlagen und Eingangsbereiche für Wohnobjekte und gemeinschaftlich genutzte Immobilien.",
    introTitle: "Gemeinschafts\u00adflächen mit klaren Intervallen betreuen.",
    intro:
      "Stufen, Podeste, Geländer und Eingangsbereiche werden entsprechend dem vereinbarten Leistungsumfang gereinigt. Die Häufigkeit richtet sich nach Nutzung und Objekt.",
    sections: [
      {
        title: "Flächen je Gebäude festlegen",
        body:
          "Vor Beginn werden die zu betreuenden Bereiche und besondere Eigenschaften des Gebäudes gemeinsam aufgenommen.",
        points: ["Treppenstufen und Podeste", "Geländer und Eingangsbereiche", "Gemeinschaftlich genutzte Flure"],
      },
      {
        title: "Für Verwaltung und Eigentümer",
        body:
          "WEGs, Hausverwaltungen und Eigentümer können ein einzelnes Objekt oder mehrere Standorte anfragen. Bei Beständen hilft eine Übersicht der Adressen und gewünschten Intervalle.",
      },
      {
        title: "Regelmäßigkeit nachvollziehbar organisieren",
        body:
          "Leistungsumfang, Reinigungsrhythmus und Zugang zum Objekt werden vor Beginn besprochen, damit die Betreuung zur Nutzung des Gebäudes passt.",
      },
    ],
    audiences: ["Hausverwaltungen", "WEGs", "Wohnungsunternehmen", "Eigentümer"],
    locations: [
      "Lübeck",
      "Bad Schwartau · Stockelsdorf · Ratekau",
      "Travemünde · Timmendorfer Strand · Scharbeutz",
      "Reinfeld · Groß Grönau · Krummesse · Lüdersdorf nach Objekt und Leistungsumfang",
    ],
    image: {
      src: "/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg",
      alt: "Gereinigte Treppenanlage mit Handlauf bei einer Wohnanlage in Lübeck",
      caption: "Treppenanlage · Lübeck",
      position: "center 68%",
    },
    proof: {
      before: "/images/vorher-nachher/treppenhaus-reinigung-luebeck-vorher.jpeg",
      after: "/images/vorher-nachher/treppenhaus-reinigung-luebeck-nachher.jpeg",
      label: "Treppenhausreinigung im Mehrfamilienhaus in Lübeck",
      eyebrow: "Ausgeführt in Lübeck",
      title: "Vorher. Nachher.",
      caption: ["Treppenhaus", "Mehrfamilienhaus", "Lübeck"],
    },
    related: [
      {
        label: "Für Hausverwaltungen",
        href: "/hausverwaltungen",
        description: "Leistungen für einzelne Objekte und Wohnungsbestände.",
      },
      {
        label: "Winterdienst",
        href: "/winterdienst",
        description: "Räum- und Streuleistungen für vereinbarte Außenflächen.",
      },
    ],
  },
  glasreinigung: {
    canonical: "/glasreinigung",
    title: "Glas- und Fensterreinigung für Gewerbe und Immobilien",
    displayTitle: "Glas- und Fenster\u00adreinigung für Gewerbe und Immobilien",
    metaTitle: "Glasreinigung Lübeck",
    metaDescription:
      "Glas- und Fensterreinigung für gewerbliche, medizinische und Wohnobjekte in Lübeck. Glasflächen, Rahmen und Intervalle nach Bedarf abstimmen.",
    eyebrow: "Glas- und Fensterreinigung",
    lead:
      "Gepflegte Fenster und Glasflächen für gewerbliche und verwaltete Objekte – einzeln oder als Ergänzung zur laufenden Betreuung.",
    introTitle: "Glasflächen passend zum Objekt reinigen lassen.",
    intro:
      "Anforderungen unterscheiden sich je nach Fläche, Erreichbarkeit und Nutzung. Vor der Beauftragung werden die zu reinigenden Glasflächen und Rahmen sowie der gewünschte Umfang abgestimmt.",
    sections: [
      {
        title: "Leistungsumfang konkret beschreiben",
        body:
          "Für eine Einschätzung helfen Angaben zu Fensteranzahl, Zugänglichkeit und den gewünschten Flächen. Rahmen können im abgestimmten Umfang berücksichtigt werden.",
        points: ["Glasflächen innen oder außen", "Fensterrahmen nach Vereinbarung", "Einzeltermin oder wiederkehrender Bedarf"],
      },
      {
        title: "Für verwaltete und gewerbliche Objekte",
        body:
          "Glasreinigung eignet sich als eigene Anfrage und als ergänzende Leistung für bestehende Objektbetreuung.",
      },
      {
        title: "Objekt und Zugang abstimmen",
        body:
          "Vor einer Terminvereinbarung werden Lage, Zugang und Umfang der Arbeiten geklärt. Besondere Höhen- oder Zugangssituationen müssen im Vorfeld benannt werden.",
      },
    ],
    audiences: ["Gewerbebetriebe", "Praxen", "Hausverwaltungen", "Wohnobjekte"],
    locations: ["Lübeck", "Bad Schwartau", "Stockelsdorf", "Ratekau"],
    image: {
      src: "/images/hero/window-cleaning-unsplash.jpg",
      alt: "Reinigung einer Glasfassade mit Abzieher",
      caption: "Glasflächen & Fassaden",
      position: "42% 50%",
    },
    related: [
      {
        label: "Für Hausverwaltungen",
        href: "/hausverwaltungen",
        description: "Glasreinigung mit weiteren Objektservices besprechen.",
      },
      {
        label: "Unterhaltsreinigung",
        href: "/unterhaltsreinigung",
        description: "Laufende Reinigung für Unternehmen und Einrichtungen.",
      },
    ],
  },
  bauendreinigung: {
    canonical: "/bauendreinigung",
    title: "Bauendreinigung für Bau- und Objektübergaben in Lübeck",
    displayTitle: "Bau\u00adendreinigung für Bau- und Objekt\u00adübergaben in Lübeck",
    metaTitle: "Bauendreinigung Lübeck",
    metaDescription:
      "Bauendreinigung nach Bau- und Umbauarbeiten in Lübeck. Umfang und Termin passend zum Baufortschritt und zur Übergabe abstimmen.",
    eyebrow: "Bauendreinigung / Lübeck",
    lead:
      "Reinigung nach Bau- und Umbauarbeiten, abgestimmt auf den Stand des Projekts und den geplanten Übergabetermin.",
    introTitle: "Saubere Übergaben planbar vorbereiten.",
    intro:
      "Art und Umfang der Baureinigung hängen vom Projekt und dem Zustand der Flächen ab. Eine frühe Abstimmung hilft, Leistungsumfang und mögliche Zeitfenster einzuschätzen.",
    sections: [
      {
        title: "Bauschmutz und Feinstaub berücksichtigen",
        body:
          "Vor der Beauftragung wird geklärt, welche Räume und Oberflächen gereinigt werden sollen und ob weitere Arbeiten am Objekt stattfinden.",
        points: ["Bau- und Umbauflächen", "Feinreinigung vor Bezug oder Übergabe", "Abstimmung mit dem Baufortschritt"],
      },
      {
        title: "Termin und Zugang koordinieren",
        body:
          "Für die Planung sind der voraussichtliche Fertigstellungstermin, der Zugang zum Objekt und relevante Schnittstellen mit weiteren Gewerken wichtig.",
      },
      {
        title: "Angebot anhand des Projekts besprechen",
        body:
          "Eine kurze Projektbeschreibung mit Ort, Flächen und gewünschtem Übergabetermin ermöglicht eine erste Abstimmung des Umfangs.",
      },
    ],
    audiences: ["Unternehmen", "Bau- und Projektverantwortliche", "Immobilienverwaltungen"],
    locations: ["Lübeck", "weitere Orte nach Absprache"],
    related: [
      {
        label: "Unterhaltsreinigung",
        href: "/unterhaltsreinigung",
        description: "Laufende Gebäudereinigung nach Bezug oder Übergabe.",
      },
      {
        label: "Für Hausverwaltungen",
        href: "/hausverwaltungen",
        description: "Objektleistungen für verwaltete Immobilien.",
      },
    ],
  },
  ferienwohnungsreinigung: {
    canonical: "/ferienwohnungsreinigung",
    title: "Ferienwohnungsreinigung für Vermieter und Agenturen",
    displayTitle: "Ferien\u00adwohnungs\u00adreinigung für Vermieter und Agenturen",
    metaTitle: "Ferienwohnungsreinigung für Vermieter",
    metaDescription:
      "Ferienwohnungsreinigung für Vermieter, Agenturen und größere Bestände an der Ostsee und in Hamburg. Wechseltermine und Objektumfang abstimmen.",
    eyebrow: "Ferienobjekte / Ostsee & Hamburg",
    lead:
      "Reinigung zwischen Aufenthalten für Ferienvermieter, Agenturen und Betreiber mehrerer Ferienobjekte.",
    introTitle: "Jeder Wechsel braucht abgestimmte Abläufe.",
    intro:
      "Für mehrere Unterkünfte zählen klare Informationen zu Belegung, Zugängen und Zeitfenstern. In einer Anfrage werden Anzahl und Lage der Objekte sowie der gewünschte Leistungsumfang erfasst.",
    sections: [
      {
        title: "Wechsel und Termine koordinieren",
        body:
          "Check-out- und Check-in-Zeiten sowie verfügbare Zeitfenster bilden die Grundlage für eine realistische Abstimmung. Die konkrete Umsetzbarkeit hängt von Lage, Objekt und Terminplan ab.",
        points: ["Wechseltermine und Zugänge", "Küchen-, Bad- und Wohnbereiche nach Absprache", "Besondere Objektanforderungen vorab klären"],
      },
      {
        title: "Für einzelne Wohnungen und Portfolios",
        body:
          "Auch Agenturen und Vermieter mit mehreren Einheiten können ihren Bestand gesammelt anfragen. Eine Objektübersicht erleichtert die Abstimmung von Umfang und Einsatzorten.",
      },
      {
        title: "Ostsee und Hamburg",
        body:
          "Die Ostseeküste und Hamburg sind unterschiedliche Einsatzgebiete. Für Hamburg werden Lage, Wechselrhythmus und Umfang vor einer Zusage einzeln abgestimmt.",
      },
    ],
    audiences: ["Ferienvermieter", "Agenturen", "Professionelle Betreiber mehrerer Ferienobjekte"],
    locations: [
      "Travemünde · Timmendorfer Strand · Scharbeutz",
      "Hamburg für Ferienobjekte nach individueller Abstimmung",
    ],
    image: {
      src: "/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg",
      alt: "Gepflegtes Schlafzimmer einer Ferienwohnung in Timmendorfer Strand",
      caption: "Ferienobjekt / Timmendorfer Strand",
    },
    faq: [
      {
        question: "Welche Angaben helfen bei einer Anfrage für Ferienwohnungen?",
        answer:
          "Objektlage und Anzahl der Einheiten, typische Wechselzeiten, Zugangsregelungen und gewünschter Leistungsumfang.",
      },
      {
        question: "Können mehrere Ferienobjekte gemeinsam angefragt werden?",
        answer:
          "Ja. Mehrere Einheiten lassen sich in einer Anfrage zusammenfassen; Lage und Wechselrhythmus werden anschließend abgestimmt.",
      },
      {
        question: "Welche Angaben helfen bei der Planung von Wohnungswechseln?",
        answer:
          "Objektadressen, Anzahl der Einheiten, typische An- und Abreisetage, Zugänge und gewünschte Leistungen helfen bei der ersten Abstimmung.",
      },
    ],
    related: [
      {
        label: "Ferienwohnungsreinigung an der Ostsee",
        href: "/ferienwohnungsreinigung/ostsee",
        description: "Einsatzgebiet und Wechselbetreuung an der Ostseeküste.",
      },
      {
        label: "Ferienwohnungsreinigung in Hamburg",
        href: "/ferienwohnungsreinigung/hamburg",
        description: "Anfragen für Hamburger Ferienobjekte individuell abstimmen.",
      },
    ],
  },
  "ferienwohnungsreinigung-ostsee": {
    canonical: "/ferienwohnungsreinigung/ostsee",
    title: "Ferienwohnungsreinigung an der Ostsee",
    displayTitle: "Ferien\u00adwohnungs\u00adreinigung an der Ostsee",
    metaTitle: "Ferienwohnungsreinigung Ostsee",
    metaDescription:
      "Ferienwohnungsreinigung für Vermieter und Agenturen an der Ostsee. Wechseltermine und Betreuung für einzelne Objekte oder Bestände abstimmen.",
    eyebrow: "Ferienobjekte / Ostseeküste",
    lead:
      "Wechselreinigung für Ferienvermieter und Agenturen mit Objekten entlang der Lübecker Bucht und Ostseeküste.",
    introTitle: "Saisonale Wechsel mit klarer Abstimmung planen.",
    intro:
      "Belegung und Wechselzeiten konzentrieren sich häufig auf bestimmte Tage. Eine Anfrage sollte deshalb Objektlage, Anzahl der Einheiten und die typischen Wechselzeitfenster nennen.",
    sections: [
      {
        title: "Einsatzorte entlang der Küste",
        body:
          "Anfragen können unter anderem Objekte in Travemünde, Timmendorfer Strand und Scharbeutz betreffen. Die konkrete Planung wird für jeden Standort abgestimmt.",
      },
      {
        title: "Einzelobjekt oder mehrere Einheiten",
        body:
          "Für Agenturen und größere Bestände hilft eine Übersicht mit Adressen, Wechselrhythmus und Zugangsregelungen. So lassen sich Zeitfenster und Umfang realistisch besprechen.",
        points: ["Objektadressen und Anzahl", "Typische An- und Abreisetage", "Besonderheiten zu Zugang oder Ausstattung"],
      },
    ],
    audiences: ["Ferienvermieter", "Agenturen an der Ostsee", "Betreiber mehrerer Ferienwohnungen"],
    locations: ["Travemünde", "Timmendorfer Strand", "Scharbeutz", "weitere Küstenorte nach Absprache"],
    image: {
      src: "/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg",
      alt: "Schlafzimmer einer Ferienwohnung in Timmendorfer Strand",
      caption: "Ferienobjekt / Ostseeküste",
    },
    breadcrumb: { label: "Ferienwohnungsreinigung", href: "/ferienwohnungsreinigung" },
    related: [
      {
        label: "Ferienwohnungsreinigung in Hamburg",
        href: "/ferienwohnungsreinigung/hamburg",
        description: "Informationen zum möglichen Einsatzgebiet Hamburg.",
      },
      {
        label: "Ferienwohnungsreinigung",
        href: "/ferienwohnungsreinigung",
        description: "Leistungsumfang für Ferienvermieter und Agenturen.",
      },
    ],
  },
  "ferienwohnungsreinigung-hamburg": {
    canonical: "/ferienwohnungsreinigung/hamburg",
    title: "Ferienwohnungsreinigung in Hamburg für Vermieter und Agenturen",
    displayTitle: "Ferien\u00adwohnungs\u00adreinigung in Hamburg für Vermieter und Agenturen",
    metaTitle: "Ferienwohnungsreinigung Hamburg",
    metaDescription:
      "Anfragen zur Ferienwohnungsreinigung in Hamburg für Vermieter und Agenturen. Einsatzgebiet, Anzahl der Objekte und Wechselrhythmus individuell abstimmen.",
    eyebrow: "Ferienobjekte / Hamburg",
    lead:
      "Hamburg ist ein Erweiterungsgebiet für die Ferienwohnungsreinigung. Ob ein Auftrag passt, klären wir anhand der Objekte und Abläufe.",
    introTitle: "Erst prüfen, dann verlässlich zusagen.",
    intro:
      "Für Hamburger Ferienobjekte werden Lage, Anzahl der Einheiten, gewünschter Rhythmus und verfügbare Zeitfenster einzeln besprochen. Eine Anfrage ist noch keine Zusage für einen bestimmten Einsatz.",
    sections: [
      {
        title: "Wichtige Angaben für die erste Einschätzung",
        body:
          "Je vollständiger die Eckdaten sind, desto besser lässt sich beurteilen, ob eine Betreuung in der gewünschten Form geplant werden kann.",
        points: ["Stadtteil und Objektadressen", "Anzahl der Wohnungen", "Wechseltermine und typische Zeitfenster"],
      },
      {
        title: "Für Vermieter und Agenturen",
        body:
          "Auch mehrere Einheiten können zusammen angefragt werden. Umfang, Zugangsorganisation und mögliche Einsatzplanung werden vor einer Beauftragung abgestimmt.",
      },
    ],
    audiences: ["Ferienvermieter in Hamburg", "Agenturen", "Betreiber mehrerer Einheiten"],
    locations: ["Hamburg nach individueller Prüfung"],
    breadcrumb: { label: "Ferienwohnungsreinigung", href: "/ferienwohnungsreinigung" },
    related: [
      {
        label: "Ferienwohnungsreinigung an der Ostsee",
        href: "/ferienwohnungsreinigung/ostsee",
        description: "Wechselbetreuung für Ferienobjekte an der Ostseeküste.",
      },
      {
        label: "Ferienwohnungsreinigung",
        href: "/ferienwohnungsreinigung",
        description: "Überblick für Ferienvermieter und Agenturen.",
      },
    ],
  },
};

export const dynamicServiceSlugs = [
  "praxisreinigung",
  "bueroreinigung",
  "hausmeisterservice",
  "winterdienst",
  "treppenhausreinigung",
  "glasreinigung",
  "bauendreinigung",
] as const;

export function getServicePageMetadata(content: ServicePageContent): Metadata {
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: content.canonical },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: content.canonical,
      type: "website",
    },
  };
}
