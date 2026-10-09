import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent["ferienwohnungsreinigung-ostsee"]);

export default function FerienwohnungsreinigungOstseePage() {
  return <ServiceLandingPage page={servicePageContent["ferienwohnungsreinigung-ostsee"]} />;
}
