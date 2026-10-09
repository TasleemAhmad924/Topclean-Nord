import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent.unterhaltsreinigung);

export default function UnterhaltsreinigungPage() {
  return <ServiceLandingPage page={servicePageContent.unterhaltsreinigung} />;
}
