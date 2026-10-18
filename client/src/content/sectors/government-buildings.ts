import type { SectorContent } from "./types";

const governmentBuildings: SectorContent = {
  title: "Government Building Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for government departments, public offices and waiting areas in Gibraltar. Snacks and drinks for staff and the public, fully managed.",
  updated: "2026-10-18",
  headline: "Vending for public buildings in *Gibraltar.*",
  intro:
    "Government departments and public bodies deal with a steady stream of people every week, and the staff behind the counter work long days. One machine can look after both, with no admin for your team.",
  facts: [
    { label: "Usual plan", value: "Standard for public waiting areas" },
    { label: "Best spots", value: "Waiting areas, staff rooms, entrance halls" },
    { label: "Popular picks", value: "Font Vella, Coca-Cola, Cadbury" },
  ],
  ticker: [
    "Public offices",
    "Waiting areas",
    "Staff rooms",
    "Card-only",
    "No admin",
    "Fully managed",
    "Local team",
  ],
  heroLocation: "Gibraltar Broadcasting Corporation",
  sections: [
    {
      heading: "Staff and visitors under one roof",
      body: [
        "Public offices see all sorts: residents renewing documents, businesses dropping off paperwork, families with appointments. Some wait a few minutes and some wait much longer, often with children in tow.",
        "A machine in the waiting area gives people a drink or a snack while they wait, and gives staff something close by on a short break. Nobody has to run a tuck shop or keep a petty cash tin in the office.",
        "It also helps with the awkward moments: a visitor who has been waiting a long time, a child who needs a drink, or a member of staff who skipped lunch to keep the queue moving.",
      ],
    },
    {
      heading: "How the plan is set",
      body: [
        "Footfall decides the plan. Public waiting areas see so many people that they usually suit our Standard plan: a one-off installation fee and no monthly fee.",
        "Staff-only buildings are priced by headcount like any other workplace: Standard from around 60 people and Small Team from 20. Profit Sharing is offered by invitation to our busiest sites.",
        "We confirm the plan after a free site visit, and everything is set out in the agreement before anyone signs.",
      ],
    },
    {
      heading: "Easy to sign off",
      body: [
        "Public sector managers need things that are simple to approve. The agreement is a straightforward 12-month term, there's nothing to buy, and after the first year either side can end it with a month's notice.",
        "We're a Gibraltar-based business with our own local team, and our machines already run at the Gibraltar Broadcasting Corporation and the Gibraltar Defence Police headquarters. Services that run day and night are covered on our [police and emergency services page](/vending-machines/police-and-emergency-services).",
        "If something goes wrong, there's one number to message. Send us a WhatsApp and we'll come out.",
      ],
      points: [
        "Nothing to buy or rent",
        "A simple 12-month agreement",
        "No cash or stock to manage",
        "One local number for everything",
      ],
    },
  ],
  stock: {
    intro:
      "Public buildings need a range that suits everyone who walks in, so we keep water and lighter options alongside the usual treats.",
    groups: [
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Oasis", "Simon Life"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "7Up", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles"] },
      { title: "Lighter picks", items: ["Grenade bars", "Sugar-free soft drinks"] },
    ],
  },
  spots: [
    {
      title: "Public waiting area",
      text: "Where people sit and wait. Usually the busiest spot in a public building.",
    },
    {
      title: "Within sight of the queue",
      text: "A machine people can see from the queue gets used far more than one tucked down a corridor.",
    },
    {
      title: "Staff room",
      text: "For the team behind the counter, away from the public.",
    },
    {
      title: "Entrance hall",
      text: "In a building with several departments, one machine by the entrance can serve visitors to all of them.",
    },
  ],
  plan: {
    text: "Public waiting areas usually go on our Standard plan. Staff-only buildings follow headcount, like any workplace.",
    fits: [
      { plan: "Standard", when: "Public waiting areas or 60+ staff" },
      { plan: "Small Team", when: "Teams of 20 to 60" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted by *public bodies.*",
    text: "The Gibraltar Broadcasting Corporation and the Gibraltar Defence Police headquarters both use SnackStation machines, for staff who work every hour of the day.",
    locations: ["Gibraltar Broadcasting Corporation", "Gibraltar Defence Police HQ"],
  },
  faqTitle: "Public sector, *answered.*",
  faqs: [
    {
      question: "Can you install vending machines in government buildings in Gibraltar?",
      answer:
        "Yes. We supply and run machines for public offices, departments and agencies, in staff areas, public waiting areas or both.",
    },
    {
      question: "What does a machine cost for a public waiting area?",
      answer:
        "Public waiting areas usually go on our Standard plan: a one-off installation fee and no monthly fee, which we confirm on a free site visit.",
    },
    {
      question: "What does the agreement involve?",
      answer:
        "A 12-month minimum term with nothing to buy or rent. After 12 months either side can end it with one month's notice, and we collect the machine free of charge.",
    },
    {
      question: "Who looks after the machine?",
      answer:
        "We do. Our local team installs it, restocks it, services it and repairs it. Your staff never handle cash or stock.",
    },
    {
      question: "Can members of the public pay with cash?",
      answer:
        "No. Our machines are card-only and take contactless cards and phone payments. That keeps them quick to use, means there's no cash to collect and cuts down on breakdowns.",
    },
    {
      question: "Can you put machines in more than one government building?",
      answer:
        "Yes. We cover all of Gibraltar and can look at several sites at once. Each building gets its own plan, based on how many people use it.",
    },
    {
      question: "Can the machine stock lighter options for staff and the public?",
      answer:
        "Yes. Alongside the usual favourites we can stock water, juice, sugar-free soft drinks and protein bars, and we'll agree the balance with you before the machine goes in.",
    },
    {
      question: "Can one machine serve several departments in the same building?",
      answer:
        "Yes. In a building shared by several departments, one machine in the entrance hall or a shared waiting area can serve staff and visitors from all of them, and the combined footfall counts towards the plan.",
    },
  ],
  related: ["hospitals-and-care-homes", "police-and-emergency-services", "education"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for a government building.",
};

export default governmentBuildings;
