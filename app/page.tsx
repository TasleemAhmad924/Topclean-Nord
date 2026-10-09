import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PropertyStory } from "@/components/sections/PropertyStory";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { propertyStoryPanels } from "@/lib/servicePageContent";
import { mailHref, phoneHref, site, whatsappHref } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: {
    absolute: "Gebäudereinigung Lübeck | TopClean Gebäudeservice",
  },
  description:
    "TopClean Gebäudeservice ist Ihre Reinigungsfirma in Lübeck für Gebäudereinigung und Objektservice für Unternehmen, Einrichtungen und Immobilien.",
  openGraph: {
    title: "Gebäudereinigung Lübeck | TopClean Gebäudeservice",
    description:
      "TopClean Gebäudeservice ist Ihre Reinigungsfirma in Lübeck für Gebäudereinigung und Objektservice für Unternehmen, Einrichtungen und Immobilien.",
    url: "/",
    type: "website",
  },
};

const businessAreas = [
  {
    number: "01",
    id: "bereich-unterhaltsreinigung",
    title: "Unterhalts\u00adreinigung",
    audience: "Kitas · Praxen · Büros",
    href: "/unterhaltsreinigung",
  },
  {
    number: "02",
    id: "objektservice",
    title: "Objektservice",
    audience: "Hausverwaltungen · Wohnungsunternehmen",
    href: "/hausverwaltungen",
  },
  {
    number: "03",
    id: "ferienwohnungsreinigung",
    title: "Ferienwohnungs\u00adreinigung",
    audience: "Vermieter · Agenturen · Ostsee",
    href: "/ferienwohnungsreinigung",
  },
];

const serviceAreas = [
  {
    place: "Lübeck",
    note: "Gebäudereinigung & Objektservice",
    href: "/hausverwaltungen",
  },
  {
    place: "Bad Schwartau · Stockelsdorf · Ratekau",
    note: "Unterhaltsreinigung & Objektservice",
    href: "/unterhaltsreinigung",
  },
  {
    place: "Travemünde · Timmendorfer Strand · Scharbeutz",
    note: "Objektservice & Ferienobjekte",
    href: "/ferienwohnungsreinigung/ostsee",
  },
  {
    place: "Reinfeld · Groß Grönau · weitere Umgebung",
    note: "Krummesse · Lüdersdorf · nach Objekt und Leistungsumfang",
    href: "/#kontakt",
  },
  {
    place: "Hamburg",
    note: "Ferienwohnungsreinigung für Vermieter & Agenturen",
    href: "/ferienwohnungsreinigung/hamburg",
  },
];

export default function Home() {
  const review = reviews[0];
  const heroVideoSrc = existsSync(
    join(process.cwd(), "public", "videos", "topclean-hero.mp4"),
  )
    ? "/videos/topclean-hero.mp4"
    : null;

  return (
    <>
      <section className="home-hero page-width" aria-labelledby="hero-title">
        <div className="home-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden />
            Gebäudeservice aus Lübeck
          </p>
          <h1 id="hero-title" className="home-hero-title">
            <span className="home-hero-title-accent">Gebäude{"\u00ad"}reinigung</span>{" "}
            <span className="home-hero-title-note">in Lübeck für Unternehmen und Immobilien</span>
          </h1>
          <p className="home-hero-intro">
            Als Reinigungsfirma aus Lübeck betreut TopClean gewerbliche Räume und Immobilien mit Gebäudereinigung und Objektservice.
          </p>
          <div className="hero-actions">
            <Link className="action-link action-link-primary" href="#kontakt">
              Angebot anfordern <span aria-hidden>↗</span>
            </Link>
            <Link className="action-link action-link-text" href="#leistungsbereiche">
              Leistungen entdecken <span aria-hidden>↓</span>
            </Link>
          </div>
          <p className="home-hero-region">
            Lübeck <span aria-hidden>·</span> Bad Schwartau <span aria-hidden>·</span> Stockelsdorf
          </p>
        </div>

        <figure className="home-hero-photo">
          <Image
            src="/images/hero/window-cleaning-unsplash.jpg"
            alt="Person reinigt eine Glasfassade mit einem Abzieher"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="home-hero-photo-image"
          />
          {heroVideoSrc && (
            <video
              className="home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/hero/window-cleaning-poster.webp"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source
                src={heroVideoSrc}
                type="video/mp4"
                media="(min-width: 821px) and (prefers-reduced-motion: no-preference)"
              />
            </video>
          )}
          <figcaption>
            <span>Glas- &amp; Objektreinigung</span>
          </figcaption>
        </figure>
      </section>

      <section id="leistungsbereiche" className="business page-width" aria-labelledby="business-title">
        <div className="business-head">
          <p className="eyebrow">Leistungen</p>
          <h2 id="business-title" data-reveal="head">Drei Bereiche. Ein Ansprechpartner.</h2>
        </div>

        <ul className="business-list">
          {businessAreas.map((area) => (
            <li id={area.id} key={area.number}>
              <Link className="business-row" href={area.href}>
                <span className="business-row-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.audience}</p>
                <span className="business-row-arrow" aria-label={`${area.title} ansehen`}>↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="unterhaltsreinigung" className="recurring" aria-labelledby="recurring-title">
        <div className="page-width">
          <p className="eyebrow">Für Unternehmen &amp; Einrichtungen</p>
          <h2 id="recurring-title" data-reveal="head">
            Unterhalts{"\u00ad"}reinigung nach Ihrem Bedarf.
          </h2>
          <div className="recurring-foot">
            <ul>
              <li><span>01</span>Umfang</li>
              <li><span>02</span>Intervalle</li>
              <li><span>03</span>Zugang &amp; Abläufe</li>
            </ul>
            <Link className="action-link action-link-primary" href="/unterhaltsreinigung">
              Unterhaltsreinigung für Unternehmen <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <div id="hausverwaltungen">
        <PropertyStory
          panels={propertyStoryPanels}
          eyebrow="Für Hausverwaltungen & Wohnungsunternehmen"
          headingId="property-title"
          cta={{ label: "Objektservice für Hausverwaltungen", href: "/hausverwaltungen" }}
        />
      </div>

      <section id="referenzen" className="references" aria-labelledby="references-title">
        <div className="page-width references-head">
          <p className="eyebrow">Reale Einblicke · Lübeck</p>
          <h2 id="references-title" data-reveal="head">Ausgeführte Reinigungs{"\u00ad"}arbeiten.</h2>
        </div>

        <figure className="reference-feature" data-reveal="mask">
          <BeforeAfter
            before="/images/vorher-nachher/garten-treppen-reinigung-luebeck-vorher.jpeg"
            after="/images/vorher-nachher/garten-treppen-reinigung-luebeck-nachher.jpeg"
            label="Außentreppe in Lübeck"
            aspect="aspect-wide"
            sizes="100vw"
            position="center 58%"
          />
          <figcaption className="page-width reference-caption">
            <h3>Außentreppe</h3>
            <p>Lübeck</p>
          </figcaption>
        </figure>

        <div className="page-width reference-pair">
          <figure className="reference-pair-large" data-reveal="mask">
            <BeforeAfter
              before="/images/vorher-nachher/treppenhaus-reinigung-luebeck-vorher.jpeg"
              after="/images/vorher-nachher/treppenhaus-reinigung-luebeck-nachher.jpeg"
              label="Treppenhaus in Lübeck"
              aspect="aspect-portrait"
              sizes="(min-width: 1000px) 46vw, 100vw"
              position="center 40%"
            />
            <figcaption className="reference-caption">
              <h3>Treppenhaus</h3>
              <p>Lübeck</p>
            </figcaption>
          </figure>
          <figure className="reference-pair-small" data-reveal="mask">
            <BeforeAfter
              before="/images/vorher-nachher/balkon-reinigung-luebeck-vorher.jpeg"
              after="/images/vorher-nachher/balkon-reinigung-luebeck-nachher.jpeg"
              label="Balkon in Lübeck"
              aspect="aspect-square"
              sizes="(min-width: 1000px) 34vw, 100vw"
              position="center 45%"
            />
            <figcaption className="reference-caption">
              <h3>Balkon</h3>
              <p>Lübeck</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="ferienobjekte" className="holiday" aria-labelledby="holiday-title">
        <div className="page-width holiday-layout">
          <figure className="holiday-photo" data-reveal="mask">
            <Image
              src="/images/ferienwohnung/ferienwohnung-reinigung-timmendorf-3.jpg"
              alt="Gepflegtes Schlafzimmer einer Ferienwohnung in Timmendorfer Strand"
              fill
              sizes="(min-width: 1000px) 38vw, 100vw"
              className="holiday-photo-image"
            />
            <figcaption>Timmendorfer Strand</figcaption>
          </figure>
          <div className="holiday-copy">
            <p className="eyebrow">Ferienwohnungsreinigung · Ostsee &amp; Hamburg</p>
            <h2 id="holiday-title" data-reveal="head">Bereit für den nächsten Wechsel.</h2>
            <ul className="holiday-points">
              <li>Wechseltermine</li>
              <li>Zugänge</li>
              <li>Umfang je Objekt</li>
            </ul>
            <Link className="action-link action-link-primary" href="/ferienwohnungsreinigung">
              Ferienwohnungsreinigung für Vermieter &amp; Agenturen <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="process page-width" aria-labelledby="process-title">
        <div className="process-head">
          <p className="eyebrow">Zusammenarbeit</p>
          <h2 id="process-title" data-reveal="head">Von der Anfrage zur laufenden Betreuung.</h2>
        </div>
        <ol className="process-steps" data-reveal="line">
          <li><span>01</span><h3>Anfrage</h3></li>
          <li><span>02</span><h3>Bedarf klären</h3></li>
          <li><span>03</span><h3>Umfang abstimmen</h3></li>
          <li><span>04</span><h3>Betreuung starten</h3></li>
        </ol>
      </section>

      {review && (
        <section className="review" aria-labelledby="review-title">
          <div className="page-width review-layout">
            <div className="review-label">
              <p className="eyebrow eyebrow-light">Kundenstimme · Lübeck</p>
              <h2 id="review-title" data-reveal="head">Rückmeldung zur Fensterreinigung.</h2>
              <p className="review-rating">{review.service} <span aria-hidden>·</span> {review.location}</p>
            </div>
            <figure className="review-quote">
              <blockquote>„{review.quote}“</blockquote>
              <figcaption>{review.author} <span aria-hidden>·</span> {review.location}</figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="area page-width" aria-labelledby="service-area-title">
        <div className="area-head">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2 id="service-area-title" data-reveal="head">Lübeck &amp; Region.</h2>
        </div>
        <ul className="area-list">
          {serviceAreas.map((area) => (
            <li key={area.place}>
              <strong>{area.place}</strong>
              <span><Link href={area.href}>{area.note}</Link></span>
            </li>
          ))}
        </ul>
      </section>

      <section id="kontakt" className="contact" aria-labelledby="contact-title">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Anfrage für Unternehmen &amp; Objekte</p>
            <h2 id="contact-title" data-reveal="head">Was braucht Ihr Objekt?</h2>
            <dl className="contact-details">
              <div>
                <dt>Telefon / WhatsApp</dt>
                <dd>
                  <a href={phoneHref}>{site.phoneDisplay}</a>
                  <span aria-hidden> · </span>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </dd>
              </div>
              <div>
                <dt>E-Mail</dt>
                <dd><a href={mailHref}>{site.email}</a></dd>
              </div>
              <div>
                <dt>Standort</dt>
                <dd>{site.address.city} · {site.region}</dd>
              </div>
            </dl>
          </div>

          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
