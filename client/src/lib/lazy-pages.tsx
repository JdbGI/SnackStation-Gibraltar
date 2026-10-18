import { lazy, type ComponentType } from "react";
import { SECTORS_PATH } from "@/lib/sectors";

/**
 * React.lazy plus a preload() that, once finished, lets the page render
 * straight away instead of suspending, so a pre-rendered page isn't briefly
 * swapped for a loading spinner.
 */
function lazyWithPreload(load: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | undefined;
  const preload = () =>
    load().then((module) => {
      Loaded = module.default;
      return module;
    });
  const Lazy = lazy(preload);
  function LazyPage() {
    return Loaded ? <Loaded /> : <Lazy />;
  }
  return Object.assign(LazyPage, { preload });
}

/** The /vending-machines hub and sector pages, split out of the main bundle. */
export const VendingMachinesPage = lazyWithPreload(() => import("@/pages/vending-machines"));

/** Loads the code for the page at `pathname` before the first render, if it's split out. */
export function preloadPage(pathname: string): Promise<unknown> {
  if (pathname === SECTORS_PATH || pathname.startsWith(`${SECTORS_PATH}/`)) {
    return VendingMachinesPage.preload().catch(() => undefined);
  }
  return Promise.resolve();
}
