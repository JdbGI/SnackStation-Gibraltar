import {
  Anchor,
  BadgeCheck,
  CalendarCheck,
  Clock,
  ConciergeBell,
  CreditCard,
  Hotel,
  MapPin,
  Mic,
  PackageCheck,
  RadioTower,
  Shield,
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

/** Canonical site details, used for SEO tags and structured data. */
export const SITE = {
  url: "https://www.snackstation.gi",
  name: "SnackStation Gibraltar",
  title: "Vending Machines in Gibraltar | SnackStation",
  description:
    "Gibraltar's fully managed vending machine supplier. Card-only snack and drink machines for offices, hotels and venues, stocked and serviced by our local team.",
  telephone: "+35054004002",
  ogImage: "/og-image.jpg",
};

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

export type NavLink = {
  id: string;
  label: string;
  /** Only shown in the desktop bar on extra-wide screens (always in menus). */
  xlOnly?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "brands", label: "Brands" },
  { id: "benefits", label: "Benefits" },
  { id: "offer", label: "Models" },
  { id: "free-offer", label: "Free Machine" },
  { id: "locations", label: "Locations" },
  { id: "faq", label: "FAQ", xlOnly: true },
  { id: "contact", label: "Contact" },
];

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
  /** Optional smaller versions of a local photo, as an <img srcset>. */
  imageSrcSet?: string;
};

export const LOCATIONS: Location[] = [
  {
    name: "Gibtelecom Mount Pleasant",
    tag: "Gibtelecom",
    icon: RadioTower,
    image: "https://www.barton.gi/wp-content/uploads/2025/02/Gibtel-Machine-Image.jpg",
    description:
      "Supporting Gibtelecom's workforce with quality refreshments throughout the day. Our machines help keep their team energised and productive.",
    features: ["Corporate Location", "Premium Snacks", "Staff Favourite"],
  },
  {
    name: "Gibraltar Broadcasting Corporation",
    tag: "GBC",
    icon: Mic,
    image: "https://www.barton.gi/wp-content/uploads/2025/03/GBC-Web-image.jpg",
    description:
      "From morning radio hosts to evening news teams, the busy staff at GBC now have drinks and snacks available on site throughout their workday, keeping them energised and focused.",
    features: ["Media Centre", "24/7 Access", "Staff Favourite"],
  },
  {
    name: "Gibraltar Defence Police HQ",
    tag: "Defence Police",
    icon: Shield,
    image: "/images/locations/gibraltar-defence-police.webp",
    imageSrcSet: "/images/locations/gibraltar-defence-police-800.webp 800w, /images/locations/gibraltar-defence-police.webp 1600w",
    description:
      "Supporting Gibraltar's security forces around the clock. Our vending machines provide quick refreshments for officers working around the clock, ensuring they stay alert and energised while protecting our community.",
    features: ["Security Hub", "24/7 Operations", "Round-the-Clock Service"],
  },
  {
    name: "Holiday Inn Express",
    tag: "Holiday Inn",
    icon: Hotel,
    image: "/images/locations/holiday-inn-express.webp",
    imageSrcSet: "/images/locations/holiday-inn-express-800.webp 800w, /images/locations/holiday-inn-express.webp 1600w",
    description:
      "Providing convenient refreshments for hotel guests and visitors 24/7. Our modern vending machines offer a wide selection of snacks and drinks, perfect for travellers and staff at any hour.",
    features: ["Hotel Location", "24/7 Access", "Tourist Friendly"],
  },
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

/* ------------------------------------------------------------------ */
/* FAQs — shown on the page and published as FAQPage structured data.  */
/* ------------------------------------------------------------------ */

function listNames(names: string[]) {
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
}

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Do you supply vending machines in Gibraltar?",
    answer:
      "Yes. SnackStation is a Gibraltar-based vending machine supplier. We provide fully managed snack and drink vending machines for businesses and venues across Gibraltar, including offices, hotels, shipyards, warehouses and sports venues.",
  },
  {
    question: "How much does a vending machine cost?",
    answer:
      "It depends on your location. We offer three models: high-footfall sites can have a fully managed machine with no upfront or ongoing costs, lower-footfall sites pay a small management fee, and premium locations can share in the profits. Get in touch and we'll recommend the right option for your site.",
  },
  {
    question: "Can I get a free vending machine for my business?",
    answer:
      "Eligible locations with high footfall can have a fully managed vending machine at no cost to the business. If your location doesn't meet the criteria, we also offer a small monthly fee option, so you can still benefit from our fully managed service.",
  },
  {
    question: "Do I need to buy or rent a vending machine?",
    answer:
      "You don't need to. Rather than buying or renting a machine yourself, you can use SnackStation's fully managed vending service: we supply, install, stock and maintain the machine for you under one of our three business models.",
  },
  {
    question: "What snacks and drinks do your machines stock?",
    answer:
      "Our vending machines stock popular snack and drink brands such as Coca-Cola, Pepsi, Fanta, Sprite, 7Up, Powerade, Aquarius, Font Vella, Cadbury, M&M's, Skittles, Kettle and Grenade.",
  },
  {
    question: "How do customers pay?",
    answer:
      "Our machines are card-only and cashless. Customers pay with contactless cards and mobile payments, which keeps things quick and reduces maintenance issues.",
  },
  {
    question: "Who restocks and maintains the machine?",
    answer:
      "We do. Our local Gibraltar team handles installation, restocking, servicing and maintenance, and uses a digital inventory management system to plan restocking visits.",
  },
  {
    question: "Are your vending machines available 24/7?",
    answer:
      "Our machines can run 24 hours a day, 365 days a year. When people can use them depends on the access and opening hours of the venue where they're installed.",
  },
  {
    question: "Where are SnackStation vending machines in Gibraltar?",
    answer: `You'll find SnackStation vending machines at ${listNames(
      LOCATIONS.map((l) => l.name),
    )}, with more locations joining our network.`,
  },
  {
    question: "How do I get a vending machine for my workplace?",
    answer: `Message us on WhatsApp on ${CONTACT.whatsappDisplay}. We'll arrange a site survey, recommend the right model for your location and take care of the installation.`,
  },
];
