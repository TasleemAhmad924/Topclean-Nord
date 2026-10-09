import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { site, whatsappHref, phoneHref, mailHref } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="kontakt" className="bg-brand-darker py-24 text-white md:py-40">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">06 / Kontakt</p>
          <h2 className="mt-5 text-[clamp(3.5rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-white">
            <MaskedLines
              lines={["Sie suchen einen", "zuverlässigen", "Reinigungsservice?"]}
              stagger={0.1}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-white/60">
              Schildern Sie uns kurz Ihr Objekt und Ihren Bedarf. Wir melden uns zeitnah mit einer passenden
              Lösung. Für schnelle Rückfragen erreichen Sie uns auch per Telefon oder WhatsApp.
            </p>

            <dl className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 text-base">
              <div>
                <dt className="text-sm text-white/50">Adresse</dt>
                <dd className="mt-1 text-white">
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">Telefon / WhatsApp</dt>
                <dd className="mt-1 text-white">
                  <a href={phoneHref} className="hover:text-brand-tint">
                    {site.phoneDisplay}
                  </a>{" "}
                  ·{" "}
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand-tint">
                    WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">E-Mail</dt>
                <dd className="mt-1 text-white">
                  <a href={mailHref} className="hover:text-brand-tint">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <a href={phoneHref} className="group flex items-center gap-2 text-base font-medium text-white">
                Jetzt anrufen
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-base font-medium text-white"
              >
                Per WhatsApp schreiben
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="bg-background p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Ihre Nachricht</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
