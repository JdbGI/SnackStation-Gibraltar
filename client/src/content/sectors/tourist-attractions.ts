import type { SectorContent } from "./types";

const touristAttractions: SectorContent = {
  title: "Attraction & Beach Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar's attractions, viewpoints and beaches. Cold drinks and snacks for visitors, indoors or outdoors, run by our local team.",
  headline: "Vending for attractions and beaches in *Gibraltar.*",
  intro:
    "Millions of people visit Gibraltar, and a lot of them end up hot, thirsty and a long way from a shop. A machine at your attraction, viewpoint or beach gives them a cold drink and a snack on the spot.",
  facts: [
    { label: "Usual plan", value: "Standard" },
    { label: "Best spots", value: "Ticket offices, visitor centres, beach fronts" },
    { label: "Popular picks", value: "Font Vella, Aquarius, Coca-Cola" },
  ],
  ticker: [
    "Attractions",
    "Viewpoints",
    "Beaches",
    "Cold drinks",
    "Indoor or outdoor",
    "Card-only",
    "Hot days",
  ],
  sections: [
    {
      heading: "Where visitors get thirsty",
      body: [
        "Visitors walk a lot in Gibraltar. They climb up to St Michael's Cave and the Great Siege Tunnels, cross the Windsor Suspension Bridge, tackle the Mediterranean Steps and head out to the lighthouse at Europa Point. On a summer day, with highs around 28°C, a drink is the first thing on their mind.",
        "There are cafés in town and at some sites, but long stretches of the Upper Rock and the coast have nowhere to buy anything. A machine in the right spot fills that gap, and it sells all day without staff.",
      ],
    },
    {
      heading: "Machines that work outdoors",
      body: [
        "Our machines can go outside as well as in. At a viewpoint, beach or open-air attraction we look for a spot with power and some shade, and we check it on the site visit before anything is agreed.",
        "On the Upper Rock there's one more thing to plan for: the macaques. Around 230 of them live on the Rock, and they're quick to grab food and drinks from visitors. Feeding them is against the law, with fines of up to £4,000. So up there we'd put a machine somewhere staffed or enclosed, such as a ticket office or visitor centre, where people aren't unwrapping snacks in front of the apes.",
      ],
    },
    {
      heading: "Beaches and the busy season",
      body: [
        "Catalan Bay, Eastern Beach, Sandy Bay, Camp Bay and Little Bay fill up from June to September. Beach kiosks close in the evening, but a machine keeps going for late swimmers and families staying on.",
        "Visitors from Spain, cruise passengers and day-trippers don't always carry pounds. Our machines are card-only, so anyone can pay with a contactless card or a phone, and nobody needs the right change.",
        "Most attractions, viewpoints and beaches go on our Standard plan, with a one-off installation fee and no monthly fee. If you also run accommodation, see our [hotel vending page](/vending-machines/hotels).",
      ],
      points: [
        "Indoor or outdoor machines",
        "Placed with the macaques in mind",
        "Card and phone payments for every visitor",
        "Restocked more often in summer",
      ],
    },
  ],
  stock: {
    intro: "Tourist machines are mostly cold drinks, with snacks that travel well in a bag.",
    groups: [
      { title: "Water & sports drinks", items: ["Font Vella", "Aquarius", "Powerade"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Fanta", "Sprite", "7Up", "Lipton Ice Tea", "Oasis"] },
      { title: "Snacks", items: ["Kettle Chips", "M&M's", "Skittles", "Swizzels Squashies", "Cadbury"] },
    ],
  },
  spots: [
    {
      title: "Ticket offices and visitor centres",
      text: "Staffed, sheltered and on every visitor's route. The safest spot on the Upper Rock.",
    },
    {
      title: "Viewpoints and car parks",
      text: "Where coaches and taxis stop and people stretch their legs.",
    },
    {
      title: "Beach fronts",
      text: "By the promenade, the changing areas or a beach kiosk, with power and a bit of shade.",
    },
    {
      title: "Museum foyers",
      text: "For indoor attractions, a machine near the exit catches people on the way out.",
    },
  ],
  plan: {
    text: "Attractions, viewpoints and beaches usually go on our Standard plan, and our busiest sites may be invited onto Profit Sharing. The free site visit confirms it.",
    fits: [
      { plan: "Standard", when: "Attractions, viewpoints and beaches" },
      { plan: "Profit Sharing", when: "The busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Already where *visitors go.*",
    text: "Visitors already use our machines at Europa Point Stadium, a short walk from the lighthouse, and at the Rock Hotel and the Holiday Inn Express, where many of them stay.",
    locations: ["Europa Point Stadium", "Rock Hotel Lobby", "Holiday Inn Express"],
  },
  faqTitle: "Visitor sites, *answered.*",
  faqs: [
    {
      question: "Can vending machines go outdoors at attractions and beaches?",
      answer:
        "Yes. We can put machines outside as well as indoors. We look for a spot with power and some shade, and check it on a free site visit before anything is agreed.",
    },
    {
      question: "What does a machine cost for a tourist attraction?",
      answer:
        "Most attractions, viewpoints and beaches go on our Standard plan: a one-off installation fee and no monthly fee. There's a 12-month minimum term.",
    },
    {
      question: "What about the macaques on the Upper Rock?",
      answer:
        "We plan for them. The apes are quick to grab food and drink, and feeding them is illegal, so on the Upper Rock we'd place a machine somewhere staffed or enclosed, such as a ticket office or visitor centre.",
    },
    {
      question: "Can tourists pay without pounds?",
      answer:
        "Yes. The machines are card-only and take contactless cards and phone payments, including cards issued in Spain and further afield.",
    },
    {
      question: "What do tourist machines usually stock?",
      answer:
        "Mostly cold drinks: Font Vella water, Aquarius, Powerade and soft drinks such as Coca-Cola and Fanta, plus snacks that travel well, like crisps, M&M's and Skittles. We adjust the range as we see what sells at your site.",
    },
    {
      question: "Do you restock more often in summer?",
      answer:
        "Yes. Our stock tracking shows us when sales go up, so busy summer sites get more frequent visits from our local team.",
    },
    {
      question: "Can you put a machine at a museum or heritage site?",
      answer:
        "Yes. Museums, heritage sites and galleries can have a machine in the foyer or by the exit, where it won't get in the way of the displays. It's an easy way to offer drinks if you don't have a café.",
    },
  ],
  related: ["hotels", "marinas", "sports-venues"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our attraction or beach.",
};

export default touristAttractions;
