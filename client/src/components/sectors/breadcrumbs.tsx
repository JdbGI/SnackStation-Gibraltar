import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import type { Crumb } from "@/lib/seo";

/** Visible breadcrumb trail. The last crumb is the current page. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-[0.16em] text-white/55">
        {crumbs.map((crumb, i) => {
          const current = i === crumbs.length - 1;
          return (
            <Fragment key={crumb.path}>
              {i > 0 && (
                <li aria-hidden className="text-brand/60">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
              )}
              <li>
                {current ? (
                  <span aria-current="page" className="text-white/80">
                    {crumb.name}
                  </span>
                ) : (
                  <a href={crumb.path} className="transition-colors hover:text-brand">
                    {crumb.name}
                  </a>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
