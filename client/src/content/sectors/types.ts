import type { FaqEntry, ServicePlan } from "@/lib/site-data";

export type PlanName = ServicePlan["name"];

/**
 * Everything on one sector landing page (/vending-machines/<slug>), apart from
 * the name, icon and summary in client/src/lib/sectors.ts.
 * Paragraphs may link to other pages with [link text](/path).
 */
export type SectorContent = {
  /** Page <title>. Keep it to roughly 60 characters. */
  title: string;
  /** Meta description. Keep it to roughly 150 characters. */
  description: string;
  /** The H1. Wrap words in *asterisks* to highlight them. */
  headline: string;
  /** Opening paragraph under the H1. */
  intro: string;
  /** Three quick facts under the hero. */
  facts: { label: string; value: string }[];
  /** Words for the scrolling ticker band. */
  ticker: string[];
  /** A customer site (a name from LOCATIONS with a photo) to show in the hero. */
  heroLocation?: string;
  /** The main article, one block per H2. */
  sections: { heading: string; body: string[]; points?: string[] }[];
  /** What goes in the machine. */
  stock: { intro: string; groups: { title: string; items: string[] }[] };
  /** Where the machine goes on site. */
  spots: { title: string; text: string }[];
  /** Which plan usually fits, and when. */
  plan: { text: string; fits: { plan: PlanName; when: string }[] };
  /** Customer sites (names from LOCATIONS) that show this working. */
  proof: { heading: string; text: string; locations: string[] };
  /** FAQ heading. Wrap words in *asterisks* to highlight them. */
  faqTitle: string;
  faqs: FaqEntry[];
  /** Slugs of related sector pages. */
  related: string[];
  /** Pre-filled WhatsApp message for this page. */
  enquiry: string;
};
