import {
  Anchor,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  ConciergeBell,
  CreditCard,
  Hotel,
  MapPin,
  MessageCircle,
  Mic,
  PackageCheck,
  PenLine,
  RadioTower,
  Shield,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  Truck,
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
    "Hi SnackStation! I'd like to book a free site visit to see which plan suits my location.",
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
  { id: "offer", label: "Plans" },
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

export type ServicePlan = {
  name: string;
  /** Who the plan is aimed at. */
  audience: string;
  /** Headline price, e.g. "£150". */
  price: string;
  /** Small text next to the price, e.g. "one-off". */
  priceSuffix?: string;
  priceCaption: string;
  installation: string;
  monthlyFee: string;
  minimumTerm: string;
  bestFor: string[];
  note: { title?: string; text: string };
  featured?: boolean;
  /** Numbers for structured data (GBP). */
  installationFee: number;
  monthlyFeeFrom?: number;
};

// From the SnackStation Service Plans (Gibraltar, 2026).
export const PLANS_INTRO =
  "The plan depends on the size of your site. Bigger sites sell more, so they cost you less.";

export const PLANS_FOOTNOTE =
  "Staff numbers are a guide. We confirm your plan after a free site visit, looking at how many people are on site each day and where the machine would go.";

export const INCLUDED_ON_EVERY_PLAN = [
  "A modern cashless machine, delivered and installed by our local team",
  "All stock supplied and restocked by us",
  "Card, contactless and mobile payments",
  "Repairs and maintenance, all handled by us",
  "A range of top brands chosen for your site",
  "Snacks and drinks for your people, 24/7",
];

export const PLANS: ServicePlan[] = [
  {
    name: "Free Placement",
    audience: "For high-footfall sites and large workforces",
    price: "Free",
    priceCaption: "Nothing up front. Nothing monthly.",
    installation: "Free",
    monthlyFee: "None",
    minimumTerm: "12 months",
    bestFor: [
      "Hotels and attractions",
      "Marinas, ports and stadiums",
      "Public waiting areas",
      "Workplaces of 150+ staff",
    ],
    note: { title: "Fully managed,", text: "at no cost to you." },
    featured: true,
    installationFee: 0,
  },
  {
    name: "Standard",
    audience: "For mid-sized offices and workplaces",
    price: "£150",
    priceSuffix: "one-off",
    priceCaption: "Installation only. No monthly fee.",
    installation: "£150",
    monthlyFee: "None",
    minimumTerm: "12 months",
    bestFor: [
      "Offices of 60–150 staff",
      "Company headquarters",
      "Depots and staff rooms",
      "Receptions with steady visitors",
    ],
    note: { text: "Pay once for delivery and installation. After that, everything is on us." },
    installationFee: 150,
  },
  {
    name: "Small Team",
    audience: "For smaller offices and teams",
    price: "£150",
    priceSuffix: "+ from £75/mo",
    priceCaption: "Installation plus a small service fee.",
    installation: "£150",
    monthlyFee: "From £75",
    minimumTerm: "12 months",
    bestFor: ["Teams of 20–60 staff", "Small offices", "Studios and workshops", "Sites with lighter footfall"],
    note: {
      title: "The fee switches itself off.",
      text: "You pay no fee in any month your machine has averaged £450+ in sales over the previous three months.",
    },
    installationFee: 150,
    monthlyFeeFrom: 75,
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
    icon: MessageCircle,
    title: "Get in Touch",
    description:
      "Message us on WhatsApp with your business, location and roughly how many people are on site.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Site Visit",
    description: "We look at the space, find the best spot and recommend the right plan.",
  },
  {
    icon: PenLine,
    title: "Sign Up",
    description: "A simple 12-month agreement. Any installation fee is paid when you sign.",
  },
  {
    icon: Truck,
    title: "We Install & Run It",
    description: "We deliver, install, stock, service and repair. You enjoy it.",
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
      "Yes. SnackStation is a Gibraltar-based vending machine supplier. We provide fully managed snack and drink vending machines for workplaces and venues across Gibraltar, including offices, hotels, shipyards, warehouses and sports venues. We stock it, service it and fix it. You just provide the plug.",
  },
  {
    question: "How much does a vending machine cost?",
    answer:
      "It depends on the size of your site. Free Placement, for high-footfall sites and workplaces of 150+ staff, has nothing to pay up front or monthly. Standard, for offices of 60–150 staff, is a £150 one-off installation fee with no monthly fee. Small Team, for teams of 20–60, is £150 installation plus a service fee from £75 a month. We confirm your plan after a free site visit.",
  },
  {
    question: "Can I get a free vending machine for my business?",
    answer:
      "Yes, if your site has high footfall. Hotels and attractions, marinas, ports and stadiums, public waiting areas and workplaces of 150+ staff can get a fully managed machine on our Free Placement plan, with nothing up front and nothing monthly. Smaller sites can choose our Standard or Small Team plans.",
  },
  {
    question: "How do I stop paying the Small Team fee?",
    answer:
      "Use it! In any month your machine has averaged £450+ in sales over the previous three months, there's no fee.",
  },
  {
    question: "Do I need to buy or rent a vending machine?",
    answer:
      "No. On every plan we supply a modern cashless machine and deliver, install, stock, service and repair it for you.",
  },
  {
    question: "Is there a minimum term?",
    answer:
      "Every plan has a 12-month minimum term, which lets us cover the cost of bringing a machine to you. After 12 months, either of us can end the agreement with one month's notice and we collect the machine free of charge.",
  },
  {
    question: "Can I end the agreement early?",
    answer:
      "Yes. If you ask us to remove the machine in the first 6 months, it costs £300 (removal and early exit); in months 7–12 it costs £150 (removal). On the Small Team plan, any remaining monthly fees for the first 12 months also apply. After 12 months, with one month's notice, there's nothing to pay.",
  },
  {
    question: "What if nobody uses the machine?",
    answer:
      "We monitor every machine's sales. If one isn't selling at your site, we'll remove it at our own cost, so you're never stuck with a machine nobody uses.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just a standard power socket and access for our team. During the agreement, SnackStation is the only vending or self-service snack and drink provider on your premises. If you want the machine moved somewhere else on site, we'll move it for you at cost.",
  },
  {
    question: "What snacks and drinks do your machines stock?",
    answer:
      "Our vending machines stock popular snack and drink brands such as Coca-Cola, Pepsi, Fanta, Sprite, 7Up, Powerade, Aquarius, Font Vella, Cadbury, M&M's, Skittles, Kettle and Grenade.",
  },
  {
    question: "Who chooses the products and prices?",
    answer:
      "We do, using sales data from across Gibraltar. Tell us what your team likes and we'll build the range around it.",
  },
  {
    question: "How do customers pay?",
    answer:
      "Our machines are cashless and take card, contactless and mobile payments, which keeps things quick and reduces maintenance issues.",
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
    answer: `Message us on WhatsApp on ${CONTACT.whatsappDisplay} with your business, location and roughly how many people are on site. We'll book a free site visit, find the best spot and recommend the right plan. Then it's a simple 12-month agreement, and we install and run the machine for you.`,
  },
];
