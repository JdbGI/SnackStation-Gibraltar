import {
  Anchor,
  BadgeCheck,
  CalendarCheck,
  Clock,
  ConciergeBell,
  CreditCard,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  UtensilsCrossed,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const WHATSAPP_NUMBER = "35054004002";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const CONTACT = {
  whatsappDisplay: "+350 5400 4002",
  whatsapp: whatsappLink(),
  whatsappEnquiry: whatsappLink(
    "Hi SnackStation! I'd like to find out about a vending machine for my location.",
  ),
  whatsappFreeMachine: whatsappLink(
    "Hi SnackStation! I'd like to check if my location qualifies for a free vending machine.",
  ),
  partnerLogin: "https://partners.snackstation.gi",
  company: "Superfoods Limited",
  builtBy: { name: "Barton Solutions", href: "https://www.barton.gi" },
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "brands", label: "Brands" },
  { id: "benefits", label: "Benefits" },
  { id: "offer", label: "Models" },
  { id: "free-offer", label: "Free Machine" },
  { id: "locations", label: "Locations" },
  { id: "contact", label: "Contact" },
] as const;

export const TICKER_ITEMS = [
  "Snacks & drinks",
  "Card-only · cashless",
  "Fully managed",
  "Local Gibraltar team",
  "Top brands",
  "Hassle-free vending",
  "Made for your space",
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES = {
  managed: {
    icon: ShieldCheck,
    title: "Fully Managed Service",
    description:
      "We handle supply, stocking, servicing and maintenance, so there's nothing for you to manage.",
  },
  cashless: {
    icon: CreditCard,
    title: "Cashless Operation",
    description:
      "Our card-only system minimises maintenance issues and keeps your machine running efficiently.",
  },
  install: {
    icon: Wrench,
    title: "Installation Handled",
    description: "Our local team manages the complete installation process for you.",
  },
  allDay: {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock access to refreshments, perfect for any schedule.",
  },
  stock: {
    icon: PackageCheck,
    title: "Smart Stock Tracking",
    description:
      "A digital inventory management system helps us keep track of what's selling and plan restocking visits.",
  },
} satisfies Record<string, Feature>;

export const MANAGED_TASKS = ["Supply", "Stocking", "Servicing", "Maintenance"];

export const STATS = [
  { value: 24, suffix: "/7", label: "Round-the-clock access" },
  { value: 365, suffix: "", label: "Days a year" },
  { value: 20, suffix: "+", label: "Top snack & drink brands" },
  { value: 100, suffix: "%", label: "Card-only & cashless" },
];

export const BRANDS = [
  { name: "M&M's", logo: "https://www.barton.gi/wp-content/uploads/2025/02/m-ms-2-logo-png-transparent.png" },
  { name: "Skittles", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Skittles-Logo.png" },
  { name: "Swizzels Squashies", logo: "https://www.barton.gi/wp-content/uploads/2025/02/squashies-logo.png" },
  { name: "Kettle", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Kettle_Foods_logo.svg.png" },
  { name: "Cadbury", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Cadbury-Logo.png" },
  { name: "Grenade", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Grenade-Logo.png" },
  { name: "7Up", logo: "https://www.barton.gi/wp-content/uploads/2025/02/7up-13-logo-png-transparent.png" },
  { name: "Aquarius", logo: "https://www.barton.gi/wp-content/uploads/2025/02/aquarius-logo-png-transparent.png" },
  { name: "Coca-Cola", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Coca-Cola-logo.png" },
  { name: "Pepsi", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Pepsi-Logo.wine.png" },
  { name: "Fanta", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Fanta_logo_2009.svg.png" },
  { name: "Font Vella", logo: "https://www.barton.gi/wp-content/uploads/2025/02/hdT2flbj6kaa.png" },
  { name: "Lipton", logo: "https://www.barton.gi/wp-content/uploads/2025/02/logo-3.png" },
  { name: "Oasis", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Oasis_Drinks_logo.png" },
  { name: "Powerade", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Powerade_logo.png" },
  {
    name: "Rostoy",
    logo: "https://www.barton.gi/wp-content/uploads/2025/02/Diseno-sin-titulo-2022-11-25T131833.565-300x120-1.png",
  },
  { name: "Simon Life", logo: "https://www.barton.gi/wp-content/uploads/2025/02/logo_ds-1.png" },
  { name: "Sprite", logo: "https://www.barton.gi/wp-content/uploads/2025/02/Sprite-Logo.png" },
  { name: "Tango", logo: "https://www.barton.gi/wp-content/uploads/2025/02/TANGO.png" },
  {
    name: "Wowhydrate",
    logo: "https://www.barton.gi/wp-content/uploads/2025/02/52f9b909-f8bc-4b0a-8822-7721207024af.__CR00970300_PT0_SX970_V1__.png",
  },
];

export const BENEFITS = [
  {
    title: "Snacks & Drinks — 24/7",
    description:
      "Ensure everyone in your space can easily grab their favourite snacks and drinks whenever they need them.",
    image: "https://www.barton.gi/wp-content/uploads/2025/02/20-IMG_5264-Large.jpeg",
  },
  {
    title: "Zero Maintenance Required",
    description:
      "We handle everything from restocking to maintenance, letting you focus on your business.",
    image: "https://www.barton.gi/wp-content/uploads/2025/02/31-IMG_5233-Large.jpeg",
  },
  {
    title: "Modern Payment Solutions",
    description:
      "Accept all payment methods including contactless cards and mobile payments.",
    image: "https://www.barton.gi/wp-content/uploads/2025/02/7-IMG_5297-Large.jpeg",
  },
];

export const REASONS = [
  {
    icon: Timer,
    title: "Speedy Service",
    description: "Quick, simple card payments, so a snack or a drink only takes a moment.",
  },
  {
    icon: Sparkles,
    title: "First-Class Products",
    description:
      "We supply high-quality food and beverages to keep you fuelled throughout the day.",
  },
  {
    icon: Clock,
    title: "Around-the-Clock",
    description: "Our machines operate 24/7, 365 days a year.",
  },
  {
    icon: MapPin,
    title: "A Growing Network",
    description: "SnackStation machines are popping up in more places across Gibraltar.",
  },
];

export type BusinessModel = {
  title: string;
  subtitle: string;
  description: string;
  cost: string;
  role: string;
  benefits: string;
  idealFor: string;
  features: string[];
  badge?: string;
};

export const MODELS: BusinessModel[] = [
  {
    title: "Standard Locations",
    subtitle: "Fully Managed, No Cost",
    description:
      "Perfect for sites with high footfall and significant sales potential. No upfront or ongoing costs, with full supply, installation, stocking and maintenance included.",
    cost: "Free — no upfront or ongoing costs.",
    role: "Full supply, installation, stocking and maintenance.",
    benefits:
      "No investment required, professional management, and enhanced service for your customers or staff.",
    idealFor: "Large offices, public spaces, and waiting areas.",
    features: ["Installation included", "No ongoing costs", "Full management", "Enhanced service"],
    badge: "Free!",
  },
  {
    title: "Lower Footfall Locations",
    subtitle: "Small Fee Model",
    description:
      "Designed for locations where sales potential may be lower. A small management fee covers operational costs while maintaining our complete supply and management service.",
    cost: "A small management fee covers operational costs.",
    role: "Complete supply, installation, stocking and management.",
    benefits: "A hassle-free vending solution ensuring your machine remains operational.",
    idealFor: "Smaller offices and moderate traffic areas.",
    features: ["Minimal fee", "Complete management", "Regular maintenance", "Flexible terms"],
  },
  {
    title: "Premium Locations",
    subtitle: "Profit-Sharing Model",
    description:
      "For premium locations with high commercial viability. The machine is installed and managed at no cost, with profits shared between partners.",
    cost: "None — the machine is installed and managed at no cost.",
    role: "Full management including stocking and maintenance.",
    benefits: "No upfront investment, profit-sharing benefits and a collaborative partnership.",
    idealFor: "High-traffic commercial areas and premium business locations.",
    features: ["No upfront cost", "Profit sharing", "Full maintenance", "Partnership benefits"],
  },
];

export const TEAM_POINTS = [
  FEATURES.install,
  {
    icon: CalendarCheck,
    title: "Regular Visits",
    description: "We call in regularly to restock and check everything is working as it should.",
  },
  {
    icon: ShieldCheck,
    title: "Servicing & Maintenance",
    description: "Our team looks after servicing and maintenance, so you don't have to.",
  },
] satisfies Feature[];

export const STEPS = [
  {
    icon: BadgeCheck,
    title: "Get in Touch",
    description: "Contact us to express your interest and arrange a free site survey.",
  },
  {
    icon: Wrench,
    title: "Set Up Your Station",
    description: "We install your SnackStation quickly and efficiently.",
  },
  {
    icon: PackageCheck,
    title: "Enjoy Ongoing Support",
    description:
      "Our team visits regularly to restock and keep your station running smoothly.",
  },
];

export type Location = {
  name: string;
  /** Short label for the illustrated card art. */
  tag: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  /** Optional photo. Cards without one get an illustrated panel instead. */
  image?: string;
};

export const LOCATIONS: Location[] = [
  {
    name: "Rock Hotel Canteen",
    tag: "Rock Hotel",
    icon: UtensilsCrossed,
    description:
      "Snacks and drinks on hand for the Rock Hotel team, right in the staff canteen.",
    features: ["Hotel", "Staff Canteen"],
  },
  {
    name: "Rock Hotel Lobby",
    tag: "Rock Hotel",
    icon: ConciergeBell,
    description:
      "A quick treat for hotel guests and visitors as they pass through the lobby.",
    features: ["Hotel", "Guests & Visitors"],
  },
  {
    name: "Gibdock Reception",
    tag: "Gibdock",
    icon: Anchor,
    description:
      "Refreshments for staff and visitors arriving at Gibdock's reception.",
    features: ["Shipyard", "Reception"],
  },
  {
    name: "Gibdock Warehouse",
    tag: "Gibdock",
    icon: Warehouse,
    description:
      "Keeping the warehouse team at Gibdock going with snacks and drinks during the working day.",
    features: ["Shipyard", "Staff Area"],
  },
  {
    name: "Europa Point Stadium",
    tag: "Europa Point",
    icon: Trophy,
    description:
      "Drinks and snacks for players, staff and visitors at Europa Point Stadium.",
    features: ["Sports Venue", "Europa Point"],
  },
];
