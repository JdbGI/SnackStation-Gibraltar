import type { SectorContent } from "./types";

const businessCentres: SectorContent = {
  title: "Business Centre Vending Machines in Gibraltar | SnackStation",
  description:
    "One vending machine every tenant can use, run by us. For business centres, shared office buildings and co-working spaces in Gibraltar.",
  updated: "2026-10-18",
  headline: "Business centre and co-working vending in *Gibraltar.*",
  intro:
    "If you manage a business centre, a shared office building or a co-working space, one vending machine can serve every tenant. We run it, so your building gets a useful extra and you don't get any extra work.",
  facts: [
    { label: "Usual plan", value: "Based on everyone in the building" },
    { label: "Best spots", value: "Shared kitchen, main lobby, lift landing" },
    { label: "Popular picks", value: "Coca-Cola, Font Vella, Cadbury" },
  ],
  ticker: [
    "Business centres",
    "Co-working",
    "Shared offices",
    "Every tenant",
    "Card-only",
    "No admin",
    "Fully managed",
  ],
  sections: [
    {
      heading: "One machine, every tenant",
      body: [
        "Gibraltar has a lot of small companies: law firms, trust and company managers, accountants, consultants and start-ups. Many of them share buildings in places like Europort, the World Trade Center, Main Street, Line Wall Road and Irish Town.",
        "On their own, most of these companies are too small for a vending machine. Together, they're not. We count everyone in the building, so a shared machine often qualifies for a better plan than any single tenant could get.",
        "For a landlord or centre manager, it's an easy extra to offer: refreshments on site, run by someone else, with no cash, stock or repairs to deal with.",
      ],
    },
    {
      heading: "Good for co-working spaces",
      body: [
        "Co-working members expect the basics to be there when they arrive, and they don't always keep office hours. A card-only machine in the kitchen sells drinks and snacks at any time, so you don't need to staff a café or keep a fridge full.",
        "If your space already offers free tea and coffee, a vending machine sits happily alongside it and covers the snacks and soft drinks.",
        "Small teams in shared buildings also tend to eat at their desks. A machine down the corridor gives them a quick break without a trip out to the shops.",
      ],
    },
    {
      heading: "How the plan works for a shared building",
      body: [
        "We price by how many people use the site each day. For a shared building, that means everyone across all the tenants, plus visitors. Busy buildings usually suit our Standard plan, which has no monthly fee, and smaller ones suit Small Team.",
        "The agreement is usually with the landlord, managing agent or centre operator. Tenants just use the machine. If a single company fills the building, our [office vending page](/vending-machines/offices) explains the headcount guide.",
      ],
      points: [
        "One machine for all tenants",
        "A plan based on the whole building",
        "No cash, stock or repairs for you",
        "Works alongside free tea and coffee",
      ],
    },
  ],
  stock: {
    intro:
      "A shared building has a mixed crowd, so we start with a broad range and adjust it as we see what your tenants buy.",
    groups: [
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "7Up", "Lipton Ice Tea"] },
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Oasis", "Simon Life"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Swizzels Squashies"] },
      { title: "Lighter picks", items: ["Grenade bars", "Wowhydrate", "Sugar-free soft drinks"] },
    ],
  },
  spots: [
    {
      title: "Shared kitchen",
      text: "The natural spot in a co-working space, where members already make their drinks.",
    },
    {
      title: "Main lobby",
      text: "Every tenant passes it, and so do their visitors. Good for buildings without a shared kitchen.",
    },
    {
      title: "Lift landing",
      text: "In a tall building with a small lobby, a landing on a busy floor can work better.",
    },
    {
      title: "By the meeting rooms",
      text: "Handy for clients waiting for a meeting in a serviced office.",
    },
  ],
  plan: {
    text: "We count everyone in the building, across all the tenants. That's why shared buildings often do better than single offices. We confirm the plan after a free site visit.",
    fits: [
      { plan: "Standard", when: "60 or more people a day" },
      { plan: "Small Team", when: "20 to 60 people a day" },
      { plan: "Profit Sharing", when: "The busiest buildings, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted by Gibraltar *workplaces.*",
    text: "Our machines already run at Gibtelecom, the Gibraltar Broadcasting Corporation and Gibdock, where they serve staff, visitors and contractors every day.",
    locations: ["Gibtelecom Mount Pleasant", "Gibraltar Broadcasting Corporation", "Gibdock Reception"],
  },
  faqTitle: "Shared offices, *answered.*",
  faqs: [
    {
      question: "Can tenants from different companies share one vending machine?",
      answer:
        "Yes, that's the idea. The machine sits in a common area, anyone in the building can use it, and everyone pays by card or phone for what they buy.",
    },
    {
      question: "Who signs the agreement for a shared building?",
      answer:
        "Usually the landlord, managing agent or centre operator, because they look after the common areas. Tenants don't need to sign anything.",
    },
    {
      question: "How do you work out the plan for a building full of small companies?",
      answer:
        "We count everyone who uses the building on a normal day, across all the tenants, plus regular visitors. A building with 60 or more people a day usually suits our Standard plan, which has no monthly fee.",
    },
    {
      question: "We already offer free tea and coffee. Is a machine still worth it?",
      answer:
        "Usually, yes. A vending machine adds the snacks and soft drinks a tea point doesn't, and it keeps going whenever the building is open, with no restocking or tidying up for you.",
    },
    {
      question: "Can co-working members use the machine out of hours?",
      answer:
        "Yes, if they can get into the building. The machine runs around the clock, so members who work late or at weekends can still use it.",
    },
    {
      question: "Is there anything for the building manager to do?",
      answer:
        "Very little. Give us access for restocking visits and let us know if there's a problem. We handle the stock, the card payments, the servicing and any repairs.",
    },
    {
      question: "Can tenants ask for particular products?",
      answer:
        "Yes. Tenants can tell us what they'd like to see, on WhatsApp or through your building manager, and we'll add popular requests to the range. We also adjust it as we see what sells.",
    },
  ],
  related: ["offices", "gaming-and-finance", "residential-buildings"],
  enquiry: "Hi SnackStation! I'd like to find out about a shared vending machine for our building.",
};

export default businessCentres;
