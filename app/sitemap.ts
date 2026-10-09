import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const indexablePaths = [
  "/",
  "/hausverwaltungen",
  "/unterhaltsreinigung",
  "/kita-reinigung",
  "/praxisreinigung",
  "/bueroreinigung",
  "/hausmeisterservice",
  "/winterdienst",
  "/treppenhausreinigung",
  "/ferienwohnungsreinigung",
  "/ferienwohnungsreinigung/ostsee",
  "/ferienwohnungsreinigung/hamburg",
  "/glasreinigung",
  "/bauendreinigung",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}
