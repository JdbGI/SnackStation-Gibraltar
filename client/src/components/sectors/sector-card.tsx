import { ArrowRight } from "lucide-react";
import { sectorPath, type Sector } from "@/lib/sectors";
import { cn } from "@/lib/utils";

/** A linked card for one sector page, used on the hub and in "related" lists. */
export function SectorCard({ sector, className }: { sector: Sector; className?: string }) {
  const Icon = sector.icon;
  return (
    <a
      href={sectorPath(sector.slug)}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-ink-800/80 p-7 transition-[border-color,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/50",
        className,
      )}
    >
      <div className="bg-halftone pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 [mask-image:radial-gradient(circle,#000,transparent_70%)] group-hover:opacity-60" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-ink shadow-[3px_3px_0_#891F5E] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-display relative mt-6 text-2xl leading-[0.95]">{sector.name}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/60">{sector.summary}</p>
      <span className="relative mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand">
        See how it works
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}
