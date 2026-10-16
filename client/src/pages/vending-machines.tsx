import { useRoute } from "wouter";
import { SECTOR_CONTENT } from "@/content/sectors";
import { getSector, SECTORS_PATH } from "@/lib/sectors";
import NotFound from "@/pages/not-found";
import SectorPage from "@/pages/sector";
import SectorsHub from "@/pages/sectors-hub";

/** /vending-machines and /vending-machines/<slug>, loaded together as one chunk. */
export default function VendingMachines() {
  const [isSectorPage, params] = useRoute<{ slug: string }>(`${SECTORS_PATH}/:slug`);
  if (!isSectorPage) return <SectorsHub />;

  const sector = getSector(params.slug);
  const content = sector ? SECTOR_CONTENT[sector.slug] : undefined;
  return sector && content ? <SectorPage sector={sector} content={content} /> : <NotFound />;
}
