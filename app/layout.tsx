import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollEffects } from "@/components/motion/ScrollEffects";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site";
import "./globals.css";
import "./pages.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.region}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.shortName,
    legalName: site.legalName,
    image: `${site.url}/logo.png`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: [
      "Lübeck",
      "Bad Schwartau",
      "Stockelsdorf",
      "Ratekau",
      "Travemünde",
      "Timmendorfer Strand",
      "Scharbeutz",
      "Reinfeld",
      "Groß Grönau",
      "Krummesse",
      "Lüdersdorf",
    ],
  };

  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <ScrollEffects />
        <CookieConsent />
      </body>
    </html>
  );
}
