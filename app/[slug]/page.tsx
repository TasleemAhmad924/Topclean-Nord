import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import {
  dynamicServiceSlugs,
  getServicePageMetadata,
  servicePageContent,
} from "@/lib/servicePageContent";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return dynamicServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageContent[slug];
  if (!page) notFound();
  return getServicePageMetadata(page);
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const page = servicePageContent[slug];
  if (!page) notFound();
  return <ServiceLandingPage page={page} />;
}
