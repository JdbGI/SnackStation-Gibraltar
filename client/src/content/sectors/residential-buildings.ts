import type { SectorContent } from "./types";

const residentialBuildings: SectorContent = {
  title: "Residential Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for apartment complexes, residential towers and student housing in Gibraltar. Snacks, drinks and toiletries for residents, fully managed.",
  headline: "Vending for apartment buildings in *Gibraltar.*",
  intro:
    "Gibraltar's big residential developments house hundreds of people under one roof. A machine in the lobby, the residents' gym or the games room sells them drinks, snacks and toiletries without a trip to the shop.",
  facts: [
    { label: "Usual plan", value: "Depends on the number of residents" },
    { label: "Best spots", value: "Concierge lobby, residents' gym, games room" },
    { label: "Popular picks", value: "Coca-Cola, Font Vella, dental kits" },
  ],
  ticker: [
    "Apartment blocks",
    "Residential towers",
    "Student housing",
    "Residents' gyms",
    "Concierge lobbies",
    "Card-only",
    "Fully managed",
  ],
  sections: [
    {
      heading: "An extra for residents",
      body: [
        "Developments like Ocean Village, Kings Wharf, Midtown, Eurocity, E1 and the newer estates on the east side are small communities in their own right, and many have a concierge, a residents' gym, a pool or a shared lounge. Some are a fair walk from the nearest shop.",
        "A vending machine gives residents something they notice straight away: a cold drink, a snack or a forgotten toothbrush at any hour, without leaving the building. For a managing agent or developer, it's an easy extra to offer, with no stock or repairs to deal with.",
        "It also suits people working from home, who don't always want to stop and walk to the shop.",
      ],
    },
    {
      heading: "Student housing",
      body: [
        "Student accommodation is a particularly good fit. Students keep late hours, and the University's Europa Suites studios at Europa Point are a long way from Main Street. A machine in a common room or lobby sells them snacks, drinks and toiletries whenever they want them.",
        "Campus machines are covered on our page for [the university, colleges and schools](/vending-machines/education).",
      ],
    },
    {
      heading: "How it works for a building",
      body: [
        "The agreement is with whoever manages the common areas, usually the managing agent, the residents' association or the developer. Residents just use the machine and pay by card or phone.",
        "We price by how many people use the building each day. Large developments usually suit our Standard plan, while smaller blocks suit Small Team. We'll confirm the plan when we come to look at the building.",
        "Our team restocks and services the machine on visits arranged with your concierge or building manager, and we follow the building's access rules.",
        "If you manage several buildings, we can look at them together and suggest where a machine would get the most use.",
      ],
      points: [
        "An easy extra for residents",
        "Drinks, snacks and toiletries",
        "Restocking arranged with your concierge",
        "Card-only, so no cash in the building",
      ],
    },
  ],
  stock: {
    intro: "Residential machines cover late-night snacks and the essentials people run out of at home.",
    groups: [
      { title: "Drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Font Vella", "Aquarius", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles", "Grenade bars"] },
      {
        title: "Toiletries",
        items: ["Dental kits", "Colgate Plax", "Sanex deodorant", "Pantene", "Head & Shoulders", "Nivea hand cream"],
      },
    ],
  },
  spots: [
    {
      title: "Concierge lobby",
      text: "Seen by every resident, and under the eye of the concierge.",
    },
    {
      title: "Residents' gym",
      text: "Water, sports drinks and protein bars where people work out.",
    },
    {
      title: "Games room or lounge",
      text: "For shared spaces where residents spend an evening.",
    },
    {
      title: "Student common room",
      text: "In student housing, the room everyone ends up in.",
    },
  ],
  plan: {
    text: "We count the people who use the building on a normal day. Large developments usually suit Standard, and smaller blocks suit Small Team.",
    fits: [
      { plan: "Standard", when: "Large developments and student housing" },
      { plan: "Small Team", when: "Smaller blocks" },
      { plan: "Profit Sharing", when: "The largest developments, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted in *busy lobbies.*",
    text: "The Rock Hotel and the Holiday Inn Express both have SnackStation machines in their lobbies, serving guests at all hours, which is very close to what a residential lobby needs.",
    locations: ["Rock Hotel Lobby", "Holiday Inn Express"],
  },
  faqTitle: "Apartment blocks, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in an apartment building in Gibraltar?",
      answer:
        "Yes. We supply and run machines for residential developments, apartment towers and student housing, in lobbies, residents' gyms, lounges and other shared spaces.",
    },
    {
      question: "Who pays for the machine?",
      answer:
        "Nobody buys or rents it. There's a one-off installation fee, plus a small monthly fee on our Small Team plan for smaller buildings. Residents pay for what they buy, by card or phone.",
    },
    {
      question: "Do residents need to sign anything?",
      answer:
        "No. The agreement is with the building's managing agent, residents' association or developer. Residents just use the machine.",
    },
    {
      question: "Can the machine sell toiletries?",
      answer:
        "Yes. We can stock dental kits, mouthwash, deodorant, shampoo and hand cream alongside drinks and snacks, which is handy when someone runs out at home.",
    },
    {
      question: "Will restocking disturb residents?",
      answer:
        "No. We arrange visits with your concierge or building manager, keep them short and follow the building's access rules.",
    },
    {
      question: "Can a machine go in a student residence?",
      answer:
        "Yes. Student housing is a good fit because students keep late hours. A machine in a common room or lobby gives them drinks, snacks and toiletries at any time.",
    },
    {
      question: "Can the machine go in the residents' gym?",
      answer:
        "Yes. A machine in or by the residents' gym can carry water, sports drinks and protein bars, as well as shower gel and deodorant.",
    },
    {
      question: "Can a developer plan a machine into a new building?",
      answer:
        "Yes. If you're finishing a new development, tell us early and we'll help plan a spot with power in the lobby or a shared space. The machine can go in once residents start moving in.",
    },
    {
      question: "Can short-let apartments have one?",
      answer:
        "Yes. A machine in the entrance helps guests who arrive late, and we can stock the travel toiletries that visitors tend to forget.",
    },
  ],
  related: ["education", "gyms", "business-centres"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our residential building.",
};

export default residentialBuildings;
