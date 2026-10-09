import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent.hausverwaltungen);

export default function HausverwaltungenPage() {
  return <ServiceLandingPage page={servicePageContent.hausverwaltungen} />;
}
