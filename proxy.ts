import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacyLocationSlugs = [
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

function serviceRedirects(
  legacyPath: string,
  destination: string,
  locations: string[] = [],
): [string, string][] {
  const sourcePaths = [
    ...(destination === `/${legacyPath}` ? [] : [`/${legacyPath}`]),
    ...locations.map((location) => `/${legacyPath}-${location}`),
  ];
  return sourcePaths.map((source) => [source, destination]);
}

const legacyRedirects = new Map<string, string>([
  ...serviceRedirects("baureinigung", "/bauendreinigung", ["luebeck"]),
  ...serviceRedirects("bodenreinigung", "/unterhaltsreinigung", legacyLocationSlugs),
  ...serviceRedirects("bueroreinigung", "/bueroreinigung", [
    "bad-schwartau",
    "eutin",
    "luebeck",
    "moelln",
    "ratzeburg",
    "stockelsdorf",
  ]),
  ...serviceRedirects("fensterreinigung", "/glasreinigung", [
    "bad-schwartau",
    "eutin",
    "luebeck",
    "stockelsdorf",
  ]),
  ...serviceRedirects(
    "ferienwohnung-reinigung",
    "/ferienwohnungsreinigung/ostsee",
    legacyLocationSlugs.filter((location) => location !== "bad-schwartau" && location !== "stockelsdorf"),
  ),
  ...serviceRedirects("fitnessstudio-reinigung", "/unterhaltsreinigung", ["luebeck"]),
  ...serviceRedirects("gebaeudereinigung", "/", ["luebeck"]),
  ...serviceRedirects("grundreinigung", "/unterhaltsreinigung", ["luebeck"]),
  ...serviceRedirects("hotelreinigung", "/unterhaltsreinigung", ["luebeck", "travemuende"]),
  ...serviceRedirects("praxisreinigung", "/praxisreinigung", ["luebeck"]),
  ...serviceRedirects("schulreinigung", "/unterhaltsreinigung", ["luebeck"]),
  ...serviceRedirects("treppenhaus-reinigung", "/treppenhausreinigung", legacyLocationSlugs),
  ...serviceRedirects("winterdienst", "/winterdienst", ["luebeck"]),
  ["/kontakt", "/#kontakt"],
  ["/services", "/#leistungsbereiche"],
  ["/unternehmen", "/"],
]);

export function proxy(request: NextRequest) {
  const destination = legacyRedirects.get(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();

  return NextResponse.redirect(new URL(destination, request.url), 301);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
