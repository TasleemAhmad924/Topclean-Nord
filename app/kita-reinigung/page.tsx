import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { getServicePageMetadata, servicePageContent } from "@/lib/servicePageContent";

export const metadata = getServicePageMetadata(servicePageContent["kita-reinigung"]);

export default function KitaReinigungPage() {
  return <ServiceLandingPage page={servicePageContent["kita-reinigung"]} />;
}
