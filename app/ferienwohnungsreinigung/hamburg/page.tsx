import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent["ferienwohnungsreinigung-hamburg"]);

export default function FerienwohnungsreinigungHamburgPage() {
  return <ServiceLandingPage page={servicePageContent["ferienwohnungsreinigung-hamburg"]} />;
}
