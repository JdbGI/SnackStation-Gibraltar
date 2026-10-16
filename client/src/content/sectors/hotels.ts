import type { SectorContent } from "./types";

const hotels: SectorContent = {
  title: "Hotel Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar hotels, hostels and serviced apartments. Snacks, drinks and travel toiletries for guests 24/7, at no cost to most hotels.",
  headline: "Hotel vending machines in *Gibraltar.*",
  intro:
    "Guests check in late, get peckish after the bar shuts and forget their toothbrush. A machine in your lobby sorts all three, and most hotels pay nothing for it.",
  facts: [
    { label: "Usual plan", value: "Free Placement" },
    { label: "Best spots", value: "Lobby, guest floors, staff canteen" },
    { label: "Popular picks", value: "Coca-Cola, Cadbury, dental kits" },
  ],
  ticker: [
    "Hotels",
    "Late check-ins",
    "Guest toiletries",
    "Staff canteens",
    "Card-only",
    "Free Placement",
    "Restocked by us",
  ],
  heroLocation: "Holiday Inn Express",
  sections: [
    {
      heading: "What guests want at midnight",
      body: [
        "Gibraltar's hotels host business travellers, coach tours, weekenders and people on the last flight in. A lot of them want something after the kitchen closes, whether that's a cold drink, a bag of crisps or the toothbrush they left at home.",
        "Room service isn't always running and the nearest shop may be shut. A machine in the lobby or on a guest floor gives them what they need straight away, and your night porter doesn't have to go hunting for it.",
        "If you have a gym or pool for guests, a second machine there can carry water, sports drinks and protein bars. Our [gym vending page](/vending-machines/gyms) shows what we stock for that.",
      ],
    },
    {
      heading: "Toiletries as well as snacks",
      body: [
        "Hotel machines can carry travel-size toiletries alongside snacks and drinks: Pantene and Head & Shoulders shampoo, Sanex and Original Source shower gel, deodorant, Gillette shaving gel, Colgate Plax mouthwash, dental kits, Nivea hand cream and Simple face wash.",
        "That takes pressure off reception at busy times, and it covers the guest who turns up without a wash bag.",
        "They're small things, but each one saves a guest a late-night walk to find a shop that's still open.",
      ],
    },
    {
      heading: "A machine for your staff too",
      body: [
        "Hotel teams work early, late and through the night. At the Rock Hotel we run two machines: one in the lobby for guests and one in the staff canteen for the team. It's a simple way to look after staff on every shift.",
        "Because hotels see so many people, most qualify for Free Placement, with no installation fee and no monthly fee. We install, stock and repair the machine at no cost to you.",
      ],
      points: [
        "Free Placement for most hotels",
        "Travel toiletries for guests",
        "A second machine for staff",
        "Card-only, so no cash at reception",
      ],
    },
  ],
  stock: {
    intro: "Hotel machines balance late-night treats with the things guests forget to pack.",
    groups: [
      { title: "Drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "Font Vella", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles", "Swizzels Squashies"] },
      {
        title: "Travel toiletries",
        items: ["Pantene", "Head & Shoulders", "Sanex", "Original Source", "Gillette", "Colgate Plax"],
      },
      {
        title: "Care & essentials",
        items: ["Dental kits", "Nivea hand cream", "Nivea micellar water", "Simple face wash", "Femfresh wipes"],
      },
    ],
  },
  spots: [
    {
      title: "Lobby",
      text: "Seen by every guest, and close enough to reception to feel part of the hotel.",
    },
    {
      title: "Guest floors",
      text: "A machine by the lifts saves guests a trip downstairs in their slippers.",
    },
    {
      title: "Staff canteen",
      text: "Looks after the team on early, late and night shifts. The Rock Hotel has one.",
    },
    {
      title: "Pool or terrace",
      text: "For hotels with outdoor space, a machine can go outside where there's power and some shade.",
    },
  ],
  plan: {
    text: "Hotels are on our Free Placement list because they see so many people. A free site visit confirms which plan applies.",
    fits: [
      { plan: "Free Placement", when: "Most hotels" },
      { plan: "Standard", when: "Smaller hotels and serviced apartments" },
    ],
  },
  proof: {
    heading: "Already in Gibraltar *hotels.*",
    text: "Guests at the Holiday Inn Express on Devil's Tower Road and the Rock Hotel on Europa Road use SnackStation machines, and the Rock Hotel's staff have one in their canteen too.",
    locations: ["Holiday Inn Express", "Rock Hotel Lobby", "Rock Hotel Canteen"],
  },
  faqTitle: "Hotel vending, *answered.*",
  faqs: [
    {
      question: "Is a hotel vending machine free in Gibraltar?",
      answer:
        "For most hotels, yes. Hotels qualify for our Free Placement plan because of the number of guests and staff, so there's no installation fee and no monthly fee. There's a 12-month minimum term, and we confirm the plan after a free site visit.",
    },
    {
      question: "Can the machine sell toiletries for guests?",
      answer:
        "Yes. We stock travel-size shampoo, shower gel, deodorant, shaving gel, mouthwash, dental kits, hand cream and face wash, as well as snacks and drinks.",
    },
    {
      question: "Can we have a machine for staff as well as guests?",
      answer:
        "Yes. The Rock Hotel has one in the lobby for guests and another in the staff canteen. We'll suggest the right setup for your hotel when we visit.",
    },
    {
      question: "Can guests use the machine in the middle of the night?",
      answer:
        "Yes. It runs around the clock and takes contactless cards and phone payments, so guests can use it at any hour without help from reception.",
    },
    {
      question: "Can guests pay if they only have euros?",
      answer:
        "Yes, with a card or phone. The machine is card-only, so guests can pay with most contactless cards, including ones issued in Spain or further afield. Their bank handles any currency conversion.",
    },
    {
      question: "Where in the hotel should the machine go?",
      answer:
        "We agree the exact spot with you on the site visit so it suits the space, usually the lobby or a guest floor. If you want it moved later, we'll move it for you at cost.",
    },
    {
      question: "Do you supply guesthouses and serviced apartments?",
      answer:
        "Yes. Smaller places with lighter footfall usually go on our Standard plan rather than Free Placement. A machine in the entrance or a shared lounge looks after guests who arrive when nobody is on the desk.",
    },
  ],
  related: ["tourist-attractions", "airport-and-transport", "marinas"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our hotel.",
};

export default hotels;
