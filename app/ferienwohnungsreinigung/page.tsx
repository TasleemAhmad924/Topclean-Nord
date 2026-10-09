import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent.ferienwohnungsreinigung);

export default function FerienwohnungsreinigungPage() {
  return <ServiceLandingPage page={servicePageContent.ferienwohnungsreinigung} />;
}
