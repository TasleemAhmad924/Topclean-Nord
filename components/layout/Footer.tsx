import Link from "next/link";
import Image from "next/image";
import { site, mailHref, phoneHref } from "@/lib/site";

const pageLinks = [
  { label: "Leistungen", href: "/#leistungsbereiche" },
  { label: "Für Hausverwaltungen", href: "/hausverwaltungen" },
  { label: "Ferienobjekte", href: "/#ferienobjekte" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "/cookie-einstellungen" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-about">
          <Link href="/" className="footer-brand">
            <Image src="/logo.png" alt="" width={48} height={48} />
            <span>{site.shortName}<small>Gebäudeservice</small></span>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Seiten</p>
          <ul>
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Kontakt</p>
          <ul>
            <li>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </li>
            <li>
              <a href={mailHref}>{site.email}</a>
            </li>
            <li>
              <a href={phoneHref}>{site.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-width footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
