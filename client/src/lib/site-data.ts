import {
  BadgeCheck,
  Clock,
  CreditCard,
  MapPin,
  PackageCheck,
  Settings,
  ShieldCheck,
  Sparkles,
  Timer,
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
  "Snacks & drinks 24/7",
  "Card-only · cashless",
  "Free installation",
  "Fully managed",
  "Local Gibraltar team",
  "365 days a year",
  "Always fully stocked",
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
      "We handle supply, stocking, servicing and maintenance to ensure your machine is always fully operational.",
  },
  cashless: {
    icon: CreditCard,
    title: "Cashless Operation",
    description:
      "Our card-only system minimises maintenance issues and keeps your machine running efficiently.",
  },
  install: {
    icon: Settings,
    title: "Free Installation",
    description: "Our local team manages the complete installation process at no extra cost.",
  },
  allDay: {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock access to refreshments, perfect for any schedule.",
  },
  local: {
    icon: PackageCheck,
    title: "Local Team, Smart Stock",
    description:
      "A Gibraltar-based team provides ongoing support, using a digital inventory management system to keep machines stocked.",
  },
} satisfies Record<string, Feature>;

export const MANAGED_TASKS = ["Supply", "Stocking", "Servicing", "Maintenance"];

export const STATS = [
  { value: 24, suffix: "/7", label: "Round-the-clock access" },
  { value: 365, suffix: "", label: "Days a year, no closing time" },
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
    description: "Enjoy snacks without delays — our machines are always on schedule.",
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
    title: "Always Within Reach",
    description: "Our growing network ensures a SnackStation is never far away.",
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
    features: ["Free installation", "No ongoing costs", "Full management", "Enhanced service"],
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
      "Our team visits regularly to ensure your station runs smoothly and remains fully stocked.",
  },
];

export type Location = {
  name: string;
  image: string;
  description: string;
  features: string[];
};

export const LOCATIONS: Location[] = [
  {
    name: "Gibtelecom Mount Pleasant",
    image: "https://www.barton.gi/wp-content/uploads/2025/02/Gibtel-Machine-Image.jpg",
    description:
      "Supporting Gibtelecom's workforce with quality refreshments throughout the day. Our machines help keep their team energised and productive.",
    features: ["Corporate Location", "Premium Snacks", "Staff Favourite"],
  },
  {
    name: "Gibraltar Broadcasting Corporation",
    image: "https://www.barton.gi/wp-content/uploads/2025/03/GBC-Web-image.jpg",
    description:
      "From morning radio hosts to evening news teams, the busy staff at GBC now have drinks and snacks available on site throughout their workday, keeping them energised and focused.",
    features: ["Media Centre", "24/7 Access", "Staff Favourite"],
  },
  {
    name: "Bus Company Depot",
    image: "https://www.barton.gi/wp-content/uploads/2025/03/Bus-Company.jpg",
    description:
      "Providing essential refreshments for Gibraltar's transport workers at all hours. Our strategically placed vending machines ensure drivers and staff stay fuelled throughout their shifts.",
    features: ["Transportation Hub", "24/7 Access", "Staff Essential"],
  },
  {
    name: "Gibraltar Defence Police HQ",
    image: "/images/locations/gibraltar-defence-police.webp",
    description:
      "Supporting Gibraltar's security forces around the clock. Our vending machines provide quick refreshments for officers working around the clock, ensuring they stay alert and energised while protecting our community.",
    features: ["Security Hub", "24/7 Operations", "Round-the-Clock Service"],
  },
  {
    name: "Holiday Inn Express",
    image: "/images/locations/holiday-inn-express.webp",
    description:
      "Providing convenient refreshments for hotel guests and visitors 24/7. Our modern vending machines offer a wide selection of snacks and drinks, perfect for travellers and staff at any hour.",
    features: ["Hotel Location", "24/7 Access", "Tourist Friendly"],
  },
];
