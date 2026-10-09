export type LocationSlug =
  | "luebeck"
  | "bad-schwartau"
  | "boltenhagen"
  | "eutin"
  | "groemitz"
  | "haffkrug"
  | "moelln"
  | "neustadt-holstein"
  | "niendorf"
  | "ratekau"
  | "ratzeburg"
  | "scharbeutz"
  | "sierksdorf"
  | "stockelsdorf"
  | "timmendorf"
  | "travemuende";

export const locations: Record<LocationSlug, string> = {
  luebeck: "Lübeck",
  "bad-schwartau": "Bad Schwartau",
  boltenhagen: "Boltenhagen",
  eutin: "Eutin",
  groemitz: "Grömitz",
  haffkrug: "Haffkrug",
  moelln: "Mölln",
  "neustadt-holstein": "Neustadt in Holstein",
  niendorf: "Niendorf (Ostsee)",
  ratekau: "Ratekau",
  ratzeburg: "Ratzeburg",
  scharbeutz: "Scharbeutz",
  sierksdorf: "Sierksdorf",
  stockelsdorf: "Stockelsdorf",
  timmendorf: "Timmendorfer Strand",
  travemuende: "Travemünde",
};
