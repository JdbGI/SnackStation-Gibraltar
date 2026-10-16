import {
  Building,
  Building2,
  Dumbbell,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  MonitorSmartphone,
  Mountain,
  Plane,
  Sailboat,
  Ship,
  Siren,
  Ticket,
  Trophy,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/*
 * The places SnackStation puts vending machines, one landing page each at
 * /vending-machines/<slug>. This file is the light index (names, icons,
 * one-line summaries) used by the homepage, menus and footer. The full page
 * copy and FAQs live in client/src/content/sectors/, which only loads on the
 * sector pages themselves.
 */

export const SECTORS_PATH = "/vending-machines";

export const sectorPath = (slug: string) => `${SECTORS_PATH}/${slug}`;

/** The hub page that lists every sector. */
export const SECTORS_HUB = {
  title: "Vending Machines for Every Sector in Gibraltar | SnackStation",
  description:
    "Offices, hotels, gyms, marinas, warehouses, attractions and more: see how SnackStation's fully managed vending machines work across Gibraltar.",
};

export type SectorGroupId = "workplaces" | "public" | "tourism" | "leisure" | "residential";

export const SECTOR_GROUPS: {
  id: SectorGroupId;
  label: string;
  /** Hub page heading. Wrap words in *asterisks* to highlight them. */
  heading: string;
  description: string;
}[] = [
  {
    id: "workplaces",
    label: "Workplaces",
    heading: "For the *working day.*",
    description:
      "Offices, warehouses, shipyards and building sites. Anywhere a team needs a snack or a drink during the working day.",
  },
  {
    id: "public",
    label: "Public sector & services",
    heading: "For *public* services.",
    description:
      "Government buildings, healthcare, emergency services and education, where staff work long hours and the public often waits.",
  },
  {
    id: "tourism",
    label: "Tourism & hospitality",
    heading: "For *visitors* and guests.",
    description:
      "Hotels, attractions, marinas and transport hubs, serving the visitors who arrive in Gibraltar every day.",
  },
  {
    id: "leisure",
    label: "Sport & leisure",
    heading: "For *sport* and fun.",
    description: "Gyms, stadiums, sports centres and entertainment venues, before, during and after the action.",
  },
  {
    id: "residential",
    label: "Residential",
    heading: "For the *people who live there.*",
    description: "Apartment complexes and student housing with a lobby, a residents' gym or a shared space.",
  },
];

export type Sector = {
  slug: string;
  group: SectorGroupId;
  /** Card, menu and breadcrumb label. */
  name: string;
  /** Very short label for illustrated card art. */
  tag: string;
  icon: LucideIcon;
  /** One line for cards and link lists. */
  summary: string;
};

export const SECTORS: Sector[] = [
  {
    slug: "offices",
    group: "workplaces",
    name: "Offices",
    tag: "Offices",
    icon: Building2,
    summary:
      "Snacks and drinks for office teams from Europort to Main Street, on a plan sized to your headcount.",
  },
  {
    slug: "gaming-and-finance",
    group: "workplaces",
    name: "Online gaming & finance",
    tag: "Gaming & finance",
    icon: MonitorSmartphone,
    summary:
      "Refreshments around the clock for gaming, fintech and insurance teams working shifts across several floors.",
  },
  {
    slug: "warehouses-and-industrial",
    group: "workplaces",
    name: "Warehouses & industrial units",
    tag: "Warehouses",
    icon: Warehouse,
    summary:
      "A machine in the staff area for early starts, late finishes and sites with nowhere nearby to buy food.",
  },
  {
    slug: "port-and-shipyards",
    group: "workplaces",
    name: "Port, shipyards & marine",
    tag: "Port & marine",
    icon: Ship,
    summary:
      "Food and drink for shipyard crews, port teams and visiting seafarers, however late the job runs.",
  },
  {
    slug: "construction-sites",
    group: "workplaces",
    name: "Construction sites",
    tag: "Construction",
    icon: HardHat,
    summary:
      "A vending machine in the site welfare unit, for crews who start early and work far from the shops.",
  },
  {
    slug: "business-centres",
    group: "workplaces",
    name: "Business centres & co-working",
    tag: "Business centres",
    icon: Building,
    summary:
      "One machine every tenant can use, run by us, for business centres, shared offices and co-working spaces.",
  },
  {
    slug: "government-buildings",
    group: "public",
    name: "Government buildings",
    tag: "Government",
    icon: Landmark,
    summary:
      "Refreshments for public sector staff and for the people waiting at counters and in queues.",
  },
  {
    slug: "hospitals-and-care-homes",
    group: "public",
    name: "Hospitals, clinics & care homes",
    tag: "Healthcare",
    icon: HeartPulse,
    summary:
      "Snacks and drinks for night shifts, visitors and families, including when the café is closed.",
  },
  {
    slug: "police-and-emergency-services",
    group: "public",
    name: "Police & emergency services",
    tag: "Emergency services",
    icon: Siren,
    summary: "Food and drink on hand for officers and crews working around the clock.",
  },
  {
    slug: "education",
    group: "public",
    name: "University, colleges & schools",
    tag: "Education",
    icon: GraduationCap,
    summary:
      "Machines for students, lecturers and staff rooms at the university, colleges and schools.",
  },
  {
    slug: "hotels",
    group: "tourism",
    name: "Hotels & serviced apartments",
    tag: "Hotels",
    icon: Hotel,
    summary:
      "Late-night snacks, drinks and forgotten toiletries for guests, plus a machine for your staff.",
  },
  {
    slug: "tourist-attractions",
    group: "tourism",
    name: "Tourist attractions & beaches",
    tag: "Attractions",
    icon: Mountain,
    summary:
      "Drinks and snacks where visitors need them most: up the Rock, at Europa Point and by the beaches.",
  },
  {
    slug: "marinas",
    group: "tourism",
    name: "Marinas",
    tag: "Marinas",
    icon: Sailboat,
    summary:
      "Drinks, snacks and travel toiletries for berth holders and crews, even when they arrive after dark.",
  },
  {
    slug: "airport-and-transport",
    group: "tourism",
    name: "Airport & transport hubs",
    tag: "Transport",
    icon: Plane,
    summary:
      "Refreshments for travellers and drivers at the airport, the cruise terminal, coach parks and car parks.",
  },
  {
    slug: "gyms",
    group: "leisure",
    name: "Gyms & fitness studios",
    tag: "Gyms",
    icon: Dumbbell,
    summary:
      "Protein bars, sports drinks, water and shower essentials for members, before and after training.",
  },
  {
    slug: "sports-venues",
    group: "leisure",
    name: "Stadiums & sports centres",
    tag: "Sports venues",
    icon: Trophy,
    summary:
      "Drinks and snacks for players, spectators and coaches at stadiums, sports halls, pools and clubs.",
  },
  {
    slug: "leisure-venues",
    group: "leisure",
    name: "Leisure & entertainment",
    tag: "Leisure",
    icon: Ticket,
    summary:
      "Snacks and drinks for visitors at the cinema, bowling, bouldering, theatres and event venues.",
  },
  {
    slug: "residential-buildings",
    group: "residential",
    name: "Apartment buildings & student housing",
    tag: "Residential",
    icon: Users,
    summary:
      "A vending machine in the lobby or the residents' gym, for apartment complexes and student housing.",
  },
];

export function getSector(slug: string) {
  return SECTORS.find((sector) => sector.slug === slug);
}

export function sectorsInGroup(group: SectorGroupId) {
  return SECTORS.filter((sector) => sector.group === group);
}
