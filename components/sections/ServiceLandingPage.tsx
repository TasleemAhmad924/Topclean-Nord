import Image from "next/image";
import Link from "next/link";
import { PropertyStory } from "@/components/sections/PropertyStory";
import { Accordion } from "@/components/ui/Accordion";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { site } from "@/lib/site";
import type { ServicePageContent } from "@/lib/servicePageContent";

function jsonLdScript(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function ServiceLandingPage({ page }: { page: ServicePageContent }) {
  const breadcrumbItems = [
    { label: "Startseite", href: "/" },
    ...(page.breadcrumb ? [page.breadcrumb] : []),
    { label: page.title, href: page.canonical },
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: page.eyebrow,
    description: page.metaDescription,
    url: `${site.url}${page.canonical}`,
    areaServed: page.locations,
    provider: {
      "@id": `${site.url}/#business`,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbSchema) }}
      />

      <nav className="page-width service-breadcrumbs" aria-label="Brotkrumennavigation">
        <ol>
          {breadcrumbItems.map((item, index) => (
            <li key={`${item.href}-${index}`}>
              {index < breadcrumbItems.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <header className="page-width service-hero">
        <div className="service-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.displayTitle ?? page.title}</h1>
          <p className="service-hero-lead">{page.lead}</p>
          <div className="hero-actions">
            <Link className="action-link action-link-primary" href="/#kontakt">
              Angebot anfragen <span aria-hidden>↗</span>
            </Link>
            <Link className="action-link action-link-text" href="/#leistungsbereiche">
              Alle Leistungsbereiche <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        {page.image ? (
          <figure className="service-hero-media">
            <Image
              src={page.image.src}
              alt={page.image.alt}
              fill
              priority
              sizes="(min-width: 1000px) 50vw, 100vw"
              className="service-hero-image"
              style={{ objectPosition: page.image.position }}
            />
            <figcaption>{page.image.caption}</figcaption>
          </figure>
        ) : (
          <aside className="service-hero-audience" aria-label="Zielgruppen">
            <p>Für</p>
            <ul>
              {page.audiences.map((audience) => <li key={audience}>{audience}</li>)}
            </ul>
          </aside>
        )}
      </header>

      <section className="service-overview page-width" aria-labelledby="service-overview-title">
        <p className="eyebrow">Leistungsumfang</p>
        <h2 id="service-overview-title" data-reveal="head">{page.introTitle}</h2>
        <p className="service-overview-copy">{page.intro}</p>
      </section>

      {page.proof && (
        <section className="service-proof" aria-labelledby="service-proof-title">
          <div className="page-width service-proof-head">
            <p className="eyebrow">{page.proof.eyebrow}</p>
            <h2 id="service-proof-title" data-reveal="head">{page.proof.title}</h2>
          </div>
          <div className="service-proof-media" data-reveal="mask">
            <BeforeAfter
              before={page.proof.before}
              after={page.proof.after}
              label={page.proof.label}
              aspect="aspect-wide"
              sizes="100vw"
              position="center 45%"
            />
          </div>
          <ul className="page-width service-proof-caption" aria-label="Projektdaten">
            {page.proof.caption.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      {page.story && (
        <PropertyStory
          panels={page.story}
          eyebrow="Objektservices"
          headingId="service-story-title"
        />
      )}

      <div className="service-scope">
        {page.sections.map((section, index) => (
          <section className="service-scope-item page-width" key={section.title}>
            <p className="service-scope-number">{String(index + 1).padStart(2, "0")}</p>
            <h2>{section.title}</h2>
            <div className="service-scope-copy">
              <p>{section.body}</p>
              {section.points && (
                <ul>
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="service-area page-width" aria-labelledby="service-area-heading">
        <p className="eyebrow">Einsatzgebiet</p>
        <h2 id="service-area-heading" data-reveal="head">Vor Ort in der Region.</h2>
        <ul>
          {page.locations.map((location) => <li key={location}>{location}</li>)}
        </ul>
      </section>

      <section className="service-page-related page-width" aria-labelledby="related-heading">
        <div className="service-page-related-heading">
          <p className="eyebrow">Weiterführende Informationen</p>
          <h2 id="related-heading" data-reveal="head">Das könnte auch passen.</h2>
        </div>
        <ul>
          {page.related.map((related) => (
            <li key={related.href}>
              <Link href={related.href}>
                <span>
                  <strong>{related.label}</strong>
                  <small>{related.description}</small>
                </span>
                <span aria-hidden>↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {page.faq && (
        <section className="service-page-faq" aria-labelledby="service-faq-title">
          <div className="page-width service-page-faq-layout">
            <div>
              <p className="eyebrow">Gut zu wissen</p>
              <h2 id="service-faq-title" data-reveal="head">Häufige Fragen.</h2>
            </div>
            <Accordion items={page.faq} />
          </div>
        </section>
      )}

      <section className="service-page-cta" aria-labelledby="service-cta-title">
        <div className="page-width service-page-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Nächster Schritt</p>
            <h2 id="service-cta-title" data-reveal="head">Lassen Sie uns über Ihr Objekt sprechen.</h2>
          </div>
          <Link className="action-link action-link-primary" href="/#kontakt">
            Bedarf schildern <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
