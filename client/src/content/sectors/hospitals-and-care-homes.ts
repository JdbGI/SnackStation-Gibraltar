import type { SectorContent } from "./types";

const hospitalsAndCareHomes: SectorContent = {
  title: "Hospital & Care Home Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for hospitals, clinics and care homes in Gibraltar. Snacks and drinks for night shifts, visitors and families, run by our local team.",
  headline: "Hospital and care home vending in *Gibraltar.*",
  intro:
    "Hospitals and care homes don't close at night, but cafés do. A vending machine means nurses on nights, families waiting for news and visitors at the end of a long day can still get a drink and a snack.",
  facts: [
    { label: "Usual plan", value: "Standard for most sites" },
    { label: "Best spots", value: "Waiting rooms, staff rooms, main entrances" },
    { label: "Popular picks", value: "Font Vella, Cadbury, dental kits" },
  ],
  ticker: [
    "Hospitals",
    "Clinics",
    "Care homes",
    "Night shifts",
    "Visitors",
    "Card-only",
    "Fully managed",
  ],
  sections: [
    {
      heading: "For the hours the café is shut",
      body: [
        "St Bernard's Hospital at Europort, with the Primary Care Centre on the same site, has patients, visitors and staff coming and going around the clock. Gibraltar's care homes never close either, and clinics and community services keep long days.",
        "Hospital cafés and shops have opening hours. Night shifts, emergencies and long waits don't. With a machine on site, a nurse finishing at 3am or a family waiting for news can get a drink and something to eat without leaving the building.",
        "Community clinics, dental practices and physiotherapy centres have the same problem on a smaller scale: patients waiting, and staff with back-to-back appointments.",
      ],
    },
    {
      heading: "Staff, visitors and families",
      body: [
        "Healthcare staff work long shifts and rarely get a break at a fixed time. A machine in or near the staff room lets them grab something in the few minutes they have.",
        "Visitors often arrive with nothing, especially after an emergency admission. As well as snacks and drinks, our machines can stock travel toiletries such as dental kits, mouthwash, shampoo, deodorant and hand cream, which help when someone stays longer than they planned.",
        "In a care home, a machine near the entrance gives visiting families a drink for the visit, and staff don't have to stop and make tea for everyone.",
      ],
    },
    {
      heading: "Lighter options, sensible placement",
      body: [
        "In a healthcare setting we can lean the range towards water, juice and lighter snacks while keeping a few treats. If you have a policy on what can be sold, tell us and we'll follow it.",
        "We put machines where they won't block corridors or get in the way of trolleys and wheelchairs, and we restock at times that suit your wards and visiting hours. Ambulance and other emergency teams have their own page: [police and emergency services](/vending-machines/police-and-emergency-services).",
      ],
      points: [
        "There when the café is closed",
        "Toiletries for unplanned stays",
        "A range that follows your policy",
        "Restocking around visiting hours",
      ],
    },
  ],
  stock: {
    intro:
      "Healthcare machines carry a balanced range, with more water and lighter options, plus toiletries for people who didn't plan to stay.",
    groups: [
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Oasis", "Simon Life"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "7Up", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Grenade bars"] },
      {
        title: "Toiletries",
        items: ["Dental kits", "Colgate Plax", "Sanex deodorant", "Pantene shampoo", "Nivea hand cream", "Simple face wash"],
      },
    ],
  },
  spots: [
    {
      title: "Waiting areas",
      text: "Outpatients, emergency and clinic waiting rooms, where people may sit for hours.",
    },
    {
      title: "Staff rooms",
      text: "Close enough for a quick break on a long shift, and away from public areas.",
    },
    {
      title: "Main entrances",
      text: "Visitors pass on the way in and out, including late in the evening.",
    },
    {
      title: "Care home reception",
      text: "Where visiting families sign in and often wait.",
    },
  ],
  plan: {
    text: "Hospitals, busy waiting areas and care homes usually go on Standard, and smaller clinics on Small Team, depending on staff and visitor numbers. We confirm the plan after a free site visit.",
    fits: [
      { plan: "Standard", when: "Hospitals, care homes and larger clinics" },
      { plan: "Small Team", when: "Smaller clinics and practices" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Already working *round the clock.*",
    text: "Our machines serve people at all hours at the Gibraltar Defence Police headquarters and the Holiday Inn Express, so we know how to keep a 24-hour site stocked.",
    locations: ["Gibraltar Defence Police HQ", "Holiday Inn Express"],
  },
  faqTitle: "Hospital vending, *answered.*",
  faqs: [
    {
      question: "Do you supply vending machines to hospitals and care homes in Gibraltar?",
      answer:
        "Yes. We supply and run vending machines for hospitals, clinics, care homes and other healthcare settings, for staff, visitors or both.",
    },
    {
      question: "Can the machine stock healthier options?",
      answer:
        "Yes. We can weight the range towards water, juice and lighter snacks, and follow any food and drink policy you have, while keeping a few favourites in.",
    },
    {
      question: "Can visitors buy toiletries from the machine?",
      answer:
        "Yes. We can stock dental kits, mouthwash, shampoo, deodorant, hand cream and face wash alongside snacks and drinks. They're useful for anyone staying with a relative for longer than they planned.",
    },
    {
      question: "Will restocking disturb patients or residents?",
      answer:
        "We agree visit times with you, so restocking happens when it suits the ward, clinic or home. Our team is quick and keeps out of the way.",
    },
    {
      question: "Can visitors pay with cash?",
      answer:
        "No. The machines are card-only and take contactless cards and phone payments. That keeps them quick to use and means there's no cash on site.",
    },
    {
      question: "How much does a machine cost for a care home?",
      answer:
        "It depends on the number of staff and visitors on a normal day. Many care homes suit our Standard plan, with a one-off installation fee and no monthly fee, while smaller homes may suit Small Team. We confirm the plan after a free site visit.",
    },
    {
      question: "Can we have a separate machine for staff?",
      answer:
        "Yes. We can put one machine in a public waiting area and another in a staff room, so night staff can grab something without walking through public areas.",
    },
  ],
  related: ["government-buildings", "police-and-emergency-services", "hotels"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for a hospital, clinic or care home.",
};

export default hospitalsAndCareHomes;
