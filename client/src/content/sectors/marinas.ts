import type { SectorContent } from "./types";

const marinas: SectorContent = {
  title: "Marina Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar's marinas. Drinks, snacks and travel toiletries for berth holders, crews and visiting yachts, at no cost to most marinas.",
  headline: "Marina vending machines in *Gibraltar.*",
  intro:
    "Yachts arrive in Gibraltar at all hours, often after a long passage, and the first thing crews want is a cold drink and a few basics. A machine at your marina is open when they tie up.",
  facts: [
    { label: "Usual plan", value: "Free Placement" },
    { label: "Best spots", value: "Marina office, shower block, pontoon entrance" },
    { label: "Popular picks", value: "Font Vella, Coca-Cola, shower gel" },
  ],
  ticker: [
    "Marinas",
    "Berth holders",
    "Visiting yachts",
    "Crew essentials",
    "Card-only",
    "Indoor or outdoor",
    "Free Placement",
  ],
  sections: [
    {
      heading: "For crews arriving at any hour",
      body: [
        "Gibraltar sits at the entrance to the Mediterranean, so its marinas see a steady flow of yachts stopping on the way in or out, as well as boats that stay for the season. Ocean Village and Marina Bay, Queensway Quay and Mid Harbour at Coaling Island all have berth holders, visiting crews and guests coming and going.",
        "A crew that arrives after dark may find the marina office closed and the shops shut. A machine near the pontoons gives them water, a soft drink and something to eat straight away, along with the basics they ran out of at sea.",
        "Summer is the busiest time, with more visiting yachts, more guests aboard and long evenings on the pontoons.",
      ],
    },
    {
      heading: "Toiletries for life on board",
      body: [
        "Space on a boat is tight, and things run out. Marina machines can stock travel-size shampoo, shower gel, deodorant, shaving gel, dental kits and hand cream, which makes sense next to a shower block or laundry room.",
        "Laundry rooms are a good example. People hang around while the machines run, and a drink and a snack make the wait go quicker.",
        "Crews come from all over the world, so the machine is card-only and takes contactless cards and phone payments. Nobody needs to find pounds before they can buy a drink.",
      ],
    },
    {
      heading: "Built for the waterfront",
      body: [
        "Machines can go indoors or outside. On a quay or pontoon we look for power and shelter from sun, wind and spray, and we check the spot on a free site visit.",
        "Marinas are on our Free Placement list, so there's usually no installation fee and no monthly fee. Our local team does the installing, restocking and repairs. Commercial quays and shipyards have their own page: [port and shipyard vending](/vending-machines/port-and-shipyards).",
        "If your marina also has a boatyard or repair business, a second machine can go where the yard team takes its breaks.",
      ],
      points: [
        "Open when the marina office isn't",
        "Travel toiletries for crews",
        "Indoor or waterfront machines",
        "Free Placement for marinas",
      ],
    },
  ],
  stock: {
    intro:
      "Marina machines carry plenty of drinks and snacks, plus the toiletries crews run out of on a passage.",
    groups: [
      { title: "Drinks", items: ["Font Vella", "Aquarius", "Coca-Cola", "Pepsi", "Fanta", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Grenade bars"] },
      {
        title: "Shower & wash",
        items: ["Sanex shower gel", "Original Source", "Pantene", "Head & Shoulders", "Sanex deodorant"],
      },
      {
        title: "Essentials",
        items: ["Gillette shaving gel", "Colgate Plax", "Dental kits", "Nivea hand cream"],
      },
    ],
  },
  spots: [
    {
      title: "Marina office",
      text: "Where visiting crews check in. Indoors, powered and easy to find.",
    },
    {
      title: "Shower and laundry block",
      text: "Toiletries and a drink, exactly where people need them.",
    },
    {
      title: "Pontoon entrance",
      text: "Catches crews on the way to and from their boats, day or night.",
    },
    {
      title: "Next to the marina bar",
      text: "For marinas with a bar or café, a machine covers the hours when it's closed.",
    },
  ],
  plan: {
    text: "Marinas are high-footfall sites, so they usually qualify for Free Placement, subject to a quick site visit.",
    fits: [{ plan: "Free Placement", when: "Marinas" }],
  },
  proof: {
    heading: "Already on the *waterfront.*",
    text: "Our machines already serve the waterfront at Gibdock, where we run one at reception and one in the warehouse.",
    locations: ["Gibdock Reception", "Gibdock Warehouse"],
  },
  faqTitle: "Marina vending, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in a marina in Gibraltar?",
      answer:
        "Yes. We supply and run machines for marinas, indoors in offices and shower blocks or outdoors near the pontoons, wherever there's power and shelter.",
    },
    {
      question: "Is a marina vending machine free?",
      answer:
        "Usually. Marinas are on our Free Placement list, so there's no installation fee and no monthly fee. Like every plan, it has a 12-month minimum term, and the free site visit confirms it.",
    },
    {
      question: "Can the machine sell toiletries for crews?",
      answer:
        "Yes. We stock travel-size shampoo, shower gel, deodorant, shaving gel, mouthwash, dental kits and hand cream alongside drinks and snacks.",
    },
    {
      question: "Will a machine cope outside on the quay?",
      answer:
        "We find a spot with power and as much shelter from sun, wind and spray as we can, and check it on the site visit. If anything goes wrong, our local team will come and fix it.",
    },
    {
      question: "Can visiting crews from abroad use it?",
      answer:
        "Yes. It's card-only and takes contactless cards and phone payments, so crews can pay with the card they already carry.",
    },
    {
      question: "Who restocks the machine?",
      answer:
        "Our own local team, on visits planned from the machine's sales data. In the summer season, busy marina machines get restocked more often.",
    },
    {
      question: "Is it useful for people living aboard?",
      answer:
        "Yes. Liveaboards and long-stay berth holders can use it as much as visiting crews, for a cold drink, a snack or a toiletry they've run out of late in the evening.",
    },
    {
      question: "Can a yacht club have a machine?",
      answer:
        "Yes, if there's enough use. Smaller clubs with lighter footfall usually suit Standard or Small Team rather than Free Placement. We'll look at how busy the club is on a free site visit.",
    },
  ],
  related: ["port-and-shipyards", "tourist-attractions", "hotels"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our marina.",
};

export default marinas;
