"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, phoneHref } from "@/lib/site";

const navLinks = [
  { label: "Leistungen", href: "/#leistungsbereiche" },
  { label: "Für Hausverwaltungen", href: "/hausverwaltungen" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="page-width header-inner">
        <Link href="/" className="brand-lockup" aria-label={`${site.shortName} – Startseite`} onClick={closeMenu}>
          <Image src="/logo.png" alt="" width={54} height={54} priority className="brand-logo" />
          <span className="brand-wordmark">
            <strong>TopClean Nord</strong>
            <span>Gebäudeservice</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-contact">
          <a href={phoneHref} className="header-phone">{site.phoneDisplay}</a>
          <Link href="/#kontakt" className="header-cta">
            Angebot anfordern <span aria-hidden>↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span>{mobileOpen ? "Schließen" : "Menü"}</span>
          <span className={`menu-glyph${mobileOpen ? " is-open" : ""}`} aria-hidden>
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav${mobileOpen ? " is-open" : ""}`} hidden={!mobileOpen}>
        <nav className="mobile-nav-links" aria-label="Mobile Hauptnavigation">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              <span className="mobile-nav-number">{String(index + 1).padStart(2, "0")}</span>
              {link.label}
              <span aria-hidden>↗</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-nav-contact">
          <a href={phoneHref}>{site.phoneDisplay}</a>
          <Link href="/#kontakt" className="action-link action-link-primary" onClick={closeMenu}>
            Angebot anfragen <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
