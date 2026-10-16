import { useEffect } from "react";
import { CONTACT, FAQS, INCLUDED_ON_EVERY_PLAN, PLANS, SITE, type FaqEntry } from "@/lib/site-data";

function setMeta(selector: string, create: () => HTMLElement, attr: string, value: string | null) {
  let el = document.head.querySelector<HTMLElement>(selector);
  const previous = el?.getAttribute(attr) ?? null;
  if (value === null) {
    el?.remove();
  } else {
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  }
  return previous;
}

/**
 * Per-page title, description, canonical URL and robots directive for routes
 * other than the homepage (whose tags live in index.html). Restores the
 * homepage tags on unmount so client-side navigation stays consistent.
 */
export function usePageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const prevDescription = description
      ? setMeta(
          'meta[name="description"]',
          () => Object.assign(document.createElement("meta"), { name: "description" }),
          "content",
          description,
        )
      : null;

    const prevCanonical = setMeta(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      "href",
      noindex || !path ? null : `${SITE.url}${path}`,
    );

    const prevRobots = setMeta(
      'meta[name="robots"]',
      () => Object.assign(document.createElement("meta"), { name: "robots" }),
      "content",
      noindex ? "noindex, nofollow" : null,
    );

    return () => {
      if (title) document.title = prevTitle;
      if (description && prevDescription !== null) {
        document.head.querySelector('meta[name="description"]')?.setAttribute("content", prevDescription);
      }
      setMeta(
        'link[rel="canonical"]',
        () => Object.assign(document.createElement("link"), { rel: "canonical" }),
        "href",
        prevCanonical,
      );
      setMeta(
        'meta[name="robots"]',
        () => Object.assign(document.createElement("meta"), { name: "robots" }),
        "content",
        prevRobots,
      );
    };
  }, [title, description, path, noindex]);
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here apart from "</script>", which we escape.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const abs = (path: string) => `${SITE.url}${path}`;

/** Business, website and service details for search engines. */
export function BusinessStructuredData() {
  const business = `${SITE.url}/#business`;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": business,
            name: "SnackStation",
            alternateName: "SnackStation Gibraltar",
            legalName: CONTACT.company,
            description: SITE.description,
            slogan: "Snacks. Drinks. 24/7.",
            url: `${SITE.url}/`,
            logo: abs("/brand/snackstation-logo-pink.png"),
            image: abs(SITE.ogImage),
            telephone: SITE.telephone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gibraltar",
              addressCountry: "GI",
            },
            areaServed: { "@type": "Place", name: "Gibraltar" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: SITE.telephone,
              contactType: "sales",
              areaServed: "GI",
              availableLanguage: ["English"],
            },
            knowsAbout: [
              "Vending machines",
              "Snack vending machines",
              "Drinks vending machines",
              "Cashless vending",
              "Office vending",
              "Hotel vending",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SnackStation service plans",
              itemListElement: PLANS.map((plan) => ({
                "@type": "Offer",
                name: plan.name,
                description: `${plan.audience}. ${plan.priceCaption} Minimum term ${plan.minimumTerm}.`,
                itemOffered: {
                  "@type": "Service",
                  name: `${plan.name} vending plan`,
                  description: `Fully managed vending in Gibraltar: ${INCLUDED_ON_EVERY_PLAN.join("; ")}. Best for ${plan.bestFor.join(", ").toLowerCase()}.`,
                  areaServed: { "@type": "Place", name: "Gibraltar" },
                },
              })),
            },
          },
          {
            "@type": "Service",
            "@id": `${SITE.url}/#service`,
            name: "Fully managed vending machines in Gibraltar",
            serviceType: "Vending machine supply, installation, restocking and maintenance",
            description:
              "Card-only snack and drink vending machines supplied, installed, stocked and serviced by a local Gibraltar team.",
            provider: { "@id": business },
            areaServed: { "@type": "Place", name: "Gibraltar" },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE.url}/#website`,
            url: `${SITE.url}/`,
            name: SITE.name,
            inLanguage: "en-GB",
            publisher: { "@id": business },
          },
        ],
      }}
    />
  );
}

function faqPage(faqs: FaqEntry[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function FaqStructuredData({ faqs = FAQS }: { faqs?: FaqEntry[] }) {
  return <JsonLd data={{ "@context": "https://schema.org", ...faqPage(faqs) }} />;
}

/* ------------------------------------------------------------------ */
/* Sector landing pages and the hub that lists them.                   */
/* ------------------------------------------------------------------ */

export type Crumb = { name: string; path: string };

function breadcrumbList(id: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

const website = { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name };

const provider = {
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: "SnackStation",
  url: `${SITE.url}/`,
  telephone: SITE.telephone,
  address: { "@type": "PostalAddress", addressLocality: "Gibraltar", addressCountry: "GI" },
};

/** WebPage, Service and breadcrumbs for one sector page. FAQPage comes from the FAQ section. */
export function SectorStructuredData({
  path,
  title,
  description,
  serviceName,
  audience,
  crumbs,
}: {
  path: string;
  title: string;
  description: string;
  serviceName: string;
  audience: string;
  crumbs: Crumb[];
}) {
  const url = abs(path);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: website,
            breadcrumb: { "@id": `${url}#breadcrumb` },
            about: { "@id": `${url}#service` },
          },
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: serviceName,
            serviceType: "Vending machine supply, installation, restocking and maintenance",
            description,
            url,
            provider,
            areaServed: { "@type": "Place", name: "Gibraltar" },
            audience: { "@type": "Audience", audienceType: audience },
          },
          breadcrumbList(`${url}#breadcrumb`, crumbs),
        ],
      }}
    />
  );
}

/** CollectionPage listing every sector page, plus breadcrumbs. */
export function HubStructuredData({
  path,
  title,
  description,
  crumbs,
  items,
}: {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  items: Crumb[];
}) {
  const url = abs(path);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": `${url}#webpage`,
            url,
            name: title,
            description,
            inLanguage: "en-GB",
            isPartOf: website,
            breadcrumb: { "@id": `${url}#breadcrumb` },
            mainEntity: { "@id": `${url}#sectors` },
          },
          {
            "@type": "ItemList",
            "@id": `${url}#sectors`,
            name: "Vending machines by sector in Gibraltar",
            numberOfItems: items.length,
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              url: abs(item.path),
            })),
          },
          breadcrumbList(`${url}#breadcrumb`, crumbs),
        ],
      }}
    />
  );
}
