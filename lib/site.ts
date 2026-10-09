export const site = {
  name: "TopClean Nord Gebäudeservice",
  shortName: "TopClean Nord",
  legalName: "TopClean Gebäudeservice",
  owner: "Alparslan Berat Kücük",
  url: "https://www.topcleannord.de",
  description:
    "Unterhaltsreinigung und Objektservice für Unternehmen, Einrichtungen und Hausverwaltungen in Lübeck und Umgebung.",
  address: {
    street: "Schwartauer Allee 99",
    postalCode: "23554",
    city: "Lübeck",
    country: "DE",
  },
  phone: "+49 176 23483923",
  phoneDisplay: "+49 176 23483923",
  email: "info@topcleannord.de",
  whatsappNumber: "4917623483923",
  region: "Lübeck & Umgebung",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${site.email}`;
