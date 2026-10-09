"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import type { StoryPanel } from "@/lib/servicePageContent";

export function PropertyStory({
  panels,
  eyebrow,
  headingId,
  cta,
}: {
  panels: StoryPanel[];
  eyebrow: string;
  headingId: string;
  cta?: { label: string; href: string };
}) {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = panelRefs.current.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );
    panelRefs.current.forEach((panel) => panel && observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="story" aria-labelledby={headingId}>
      <div
        className="page-width story-layout"
        style={{ "--count": panels.length, "--active": active } as CSSProperties}
      >
        <div className="story-rail">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 id={headingId} data-reveal="head">
            <span>Ein Ansprechpartner.</span> <span>Mehrere Objekte.</span>
          </h2>

          <ol className="story-index" aria-label="Objektservices">
            {panels.map((panel, index) => (
              <li key={panel.id}>
                <a
                  href={`#objekt-${panel.id}`}
                  aria-current={index === active ? "true" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {panel.title}
                </a>
              </li>
            ))}
          </ol>

          {cta && (
            <Link className="action-link action-link-light" href={cta.href}>
              {cta.label} <span aria-hidden>↗</span>
            </Link>
          )}
        </div>

        <div className="story-panels">
          {panels.map((panel, index) => (
            <article
              key={panel.id}
              id={`objekt-${panel.id}`}
              ref={(element) => {
                panelRefs.current[index] = element;
              }}
              className={`story-panel${index === active ? " is-active" : ""}`}
            >
              <figure className="story-figure" data-reveal="mask">
                {panel.compareBefore ? (
                  <BeforeAfter
                    before={panel.compareBefore}
                    after={panel.image.src}
                    label={panel.image.alt}
                    aspect="story-aspect"
                    sizes="(min-width: 1000px) 52vw, 100vw"
                    position={panel.image.position}
                  />
                ) : (
                  <div
                    className="story-image"
                    style={{ "--zoom": panel.image.zoom ?? 1 } as CSSProperties}
                  >
                    <Image
                      src={panel.image.src}
                      alt={panel.image.alt}
                      fill
                      sizes="(min-width: 1000px) 52vw, 100vw"
                      style={{ objectPosition: panel.image.position }}
                    />
                  </div>
                )}
                <figcaption>{panel.image.caption}</figcaption>
              </figure>

              <div className="story-copy">
                <p className="story-number" aria-hidden>{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3>
                    <Link href={panel.href}>{panel.title}</Link>
                  </h3>
                  <ul>
                    {panel.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <Link className="story-link" href={panel.href} aria-label={`${panel.title} ansehen`}>
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
