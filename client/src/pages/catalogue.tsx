import { AnimatePresence, motion } from "framer-motion";
import { Package, RotateCcw, Search, X } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { EASE_OUT_EXPO, FadeIn, RevealText, SectionLabel } from "@/components/effects/primitives";
import SiteShell from "@/components/layout/site-shell";
import { usePageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Product } from "@shared/schema";

export default function Catalogue() {
  usePageMeta({
    title: "Product Catalogue | SnackStation Gibraltar",
    description: "Browse the products available in SnackStation vending machines in Gibraltar.",
    path: "/catalogue",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const { data: products = [], isLoading, error, refetch } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const inStock = products.filter((product) => product.inStock);
  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = inStock.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      (product.description?.toLowerCase().includes(query) ?? false);
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const brands = Array.from(new Set(inStock.map((p) => p.brand))).sort();

  return (
    <SiteShell>
      <section className="relative min-h-screen overflow-hidden pb-28 pt-36 md:pt-44">
        <div className="bg-grid mask-radial pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full glow-pink [--glow:0.28]" />

        <div className="container relative">
          <SectionLabel index="SS">Product catalogue</SectionLabel>
          <RevealText
            as="h1"
            play
            text="The *SnackStation* catalogue."
            className="font-display text-[clamp(1.9rem,8.2vw,7rem)]"
          />
          <FadeIn className="mt-6 max-w-xl text-lg text-white/60">
            Quality products available in SnackStation vending machines.
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="sticky top-24 z-20 mt-12 space-y-3 rounded-[28px] border border-white/10 bg-ink/80 p-3 shadow-2xl backdrop-blur-xl"
          >
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands…"
                className="h-14 w-full rounded-full border border-white/10 bg-white/[0.04] pl-14 pr-12 text-base text-white placeholder:text-white/55 focus:border-brand focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            {brands.length > 0 && (
              <div
                role="radiogroup"
                aria-label="Filter by brand"
                className="flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {["all", ...brands].map((brand) => {
                  const selected = selectedBrand === brand;
                  return (
                    <button
                      key={brand}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setSelectedBrand(brand)}
                      className={cn(
                        "relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        selected ? "text-ink" : "text-white/70 hover:text-white",
                      )}
                    >
                      {selected && (
                        <motion.span
                          layoutId="brand-pill"
                          className="absolute inset-0 rounded-full bg-brand"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{brand === "all" ? "All brands" : brand}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </FadeIn>

          {isLoading ? (
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
                  <div className="aspect-square animate-shimmer bg-[linear-gradient(110deg,#18181D_30%,#2a1822_50%,#18181D_70%)] bg-[length:200%_100%]" />
                  <div className="space-y-2 p-5">
                    <div className="h-4 w-3/4 rounded-full bg-white/10" />
                    <div className="h-3 w-1/2 rounded-full bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <StatusMessage
              title="We couldn't load the catalogue"
              body={error.message}
              action={
                <button
                  type="button"
                  onClick={() => refetch()}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-ink hover:bg-white"
                >
                  <RotateCcw className="h-4 w-4" /> Try again
                </button>
              }
            />
          ) : inStock.length === 0 ? (
            <StatusMessage title="No products available" body="Check back soon — we restock regularly." />
          ) : (
            <>
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-white/50" aria-live="polite">
                Showing <span className="text-brand">{filteredProducts.length}</span> of {inStock.length} products
              </p>
              {filteredProducts.length === 0 ? (
                <StatusMessage
                  title="No products found"
                  body="Try adjusting your search or filter criteria."
                />
              ) : (
                <motion.ul layout className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product, i) => (
                      <ProductCard key={product.id} product={product} index={i} />
                    ))}
                  </AnimatePresence>
                </motion.ul>
              )}
            </>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function StatusMessage({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mt-12 flex flex-col items-center rounded-[28px] border border-dashed border-white/15 px-6 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-ink shadow-[4px_4px_0_#891F5E]">
        <Package className="h-8 w-8" />
      </span>
      <h2 className="font-display mt-6 text-3xl">{title}</h2>
      <p className="mt-3 max-w-md text-white/60">{body}</p>
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: Math.min(index, 12) * 0.03 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800 transition-[border-color,box-shadow] duration-500 hover:border-brand/60 hover:shadow-[6px_6px_0_#891F5E]"
    >
      <div className="relative aspect-square overflow-hidden bg-white p-6">
        {product.imageUrl && !imageFailed ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-800">
            <Package className="h-12 w-12" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold text-brand">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="line-clamp-2 font-semibold leading-snug text-white">{product.name}</h3>
        {product.description && (
          <p className="mt-2 line-clamp-2 text-sm text-white/55">{product.description}</p>
        )}
        {product.sku && (
          <p className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-wider text-white/55">
            SKU {product.sku}
          </p>
        )}
      </div>
    </motion.li>
  );
}
