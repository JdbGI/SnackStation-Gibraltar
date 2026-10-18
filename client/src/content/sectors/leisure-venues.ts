import type { SectorContent } from "./types";

const leisureVenues: SectorContent = {
  title: "Leisure Venue Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for cinemas, bowling, bouldering, theatres, event halls and play centres in Gibraltar. Snacks and drinks for visitors, fully managed.",
  headline: "Leisure venue vending in *Gibraltar.*",
  intro:
    "A night out, a birthday party or a rainy afternoon with the kids. Whatever brings people to your venue, they'll want a drink and a snack while they're there, and a machine can sell both without adding to your staff's workload.",
  facts: [
    { label: "Usual plan", value: "Standard for busy venues" },
    { label: "Best spots", value: "Foyer, waiting areas, party rooms" },
    { label: "Popular picks", value: "M&M's, Coca-Cola, Skittles" },
  ],
  ticker: [
    "Cinemas",
    "Bowling",
    "Bouldering",
    "Theatres",
    "Event halls",
    "Play centres",
    "Card-only",
  ],
  sections: [
    {
      heading: "Where people come to have fun",
      body: [
        "Gibraltar's leisure venues are busiest in the evenings, at weekends and in the school holidays. The King's Bastion Leisure Centre on Line Wall Road has a cinema, bowling and a bouldering centre under one roof, and theatres, event halls and play centres around the Rock draw their own crowds.",
        "Visitors often arrive early, wait between games or before a show and stay longer than they planned. A machine in the foyer or waiting area means they don't have to queue at a counter or leave the building to find a shop.",
        "Rainy days and school holidays are the big peaks, when families look for something to do indoors.",
      ],
    },
    {
      heading: "Popular with families and groups",
      body: [
        "Children's parties, school trips and group bookings mean a lot of thirsty people at once. A machine stocked with M&M's, Skittles, Swizzels Squashies, crisps and soft drinks goes down well, and card payments mean parents don't have to hunt for change.",
        "Teenagers at the bowling or the cinema can pay with a card or a phone, which is how most of them pay for everything now.",
        "We can add water and lighter options too, and agree the range with you if your venue has its own food and drink.",
      ],
    },
    {
      heading: "Works alongside your bar or kiosk",
      body: [
        "If you run a kiosk or bar, a machine takes the pressure off at peak times and keeps selling when the counter is closed. For venues without catering, it's a simple way to offer refreshments with no staff and no stock to manage.",
        "Busy leisure venues usually go on our Standard plan, and smaller venues suit Small Team. Sports halls and pools are covered on our [stadiums and sports centres page](/vending-machines/sports-venues).",
      ],
      points: [
        "Foyers, waiting areas and party rooms",
        "Family favourites and lighter options",
        "Sells when the kiosk is closed",
        "Restocked before big events",
      ],
    },
  ],
  stock: {
    intro:
      "Leisure machines are heavy on sweets and soft drinks, because that's what a night out calls for, with water and lighter options too.",
    groups: [
      { title: "Sweets & chocolate", items: ["M&M's", "Skittles", "Swizzels Squashies", "Cadbury"] },
      { title: "Crisps & bars", items: ["Kettle Chips", "Grenade bars"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Tango", "7Up", "Sprite", "Oasis"] },
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Simon Life"] },
    ],
  },
  spots: [
    {
      title: "Foyer",
      text: "Seen by everyone on the way in and out, and easy for your staff to keep an eye on.",
    },
    {
      title: "Waiting areas",
      text: "Where people sit between games, before a show or while a party finishes.",
    },
    {
      title: "Party rooms",
      text: "For venues that host birthdays and group bookings.",
    },
    {
      title: "Next to the kiosk",
      text: "Handles the quick sales when a queue builds at the counter.",
    },
  ],
  plan: {
    text: "Busy leisure venues usually go on Standard and smaller venues on Small Team. We'll confirm yours on a free site visit.",
    fits: [
      { plan: "Standard", when: "Busy venues and event halls" },
      { plan: "Small Team", when: "Small venues and studios" },
      { plan: "Profit Sharing", when: "The busiest venues, by invitation" },
    ],
  },
  proof: {
    heading: "Already where *people gather.*",
    text: "Our machine at Europa Point Stadium serves visitors on match and event days, and guests use ours at the Rock Hotel and the Holiday Inn Express late into the evening.",
    locations: ["Europa Point Stadium", "Rock Hotel Lobby", "Holiday Inn Express"],
  },
  faqTitle: "Leisure venues, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in a cinema, bowling alley or theatre in Gibraltar?",
      answer:
        "Yes. We supply and run machines for cinemas, bowling, bouldering and climbing centres, theatres, event halls, play centres and other leisure venues across Gibraltar.",
    },
    {
      question: "Will a machine take sales from our bar or kiosk?",
      answer:
        "It's there for the quick purchases and for the hours when your counter is closed. We'll look at what you sell now and plan the range around it on the site visit.",
    },
    {
      question: "What does a machine cost for a leisure venue?",
      answer:
        "Busy leisure venues usually go on our Standard plan, with a one-off installation fee and no monthly fee. Smaller venues suit Small Team. We confirm the plan after a free site visit.",
    },
    {
      question: "Can we choose what goes in the machine?",
      answer:
        "Yes. We build the range from sales data across Gibraltar, then adjust it for your venue. If you'd like more water and lighter options, or nothing that clashes with your own menu, just tell us.",
    },
    {
      question: "Can it keep up on a busy weekend?",
      answer:
        "Yes. Card payments are quick, our stock tracking tells us when a machine is selling fast, and we can restock before big events if you let us know the dates.",
    },
    {
      question: "Do you supply machines for one-off events and festivals?",
      answer:
        "Our machines go in on a 12-month agreement, so they suit permanent venues rather than one-off events. If your venue hosts regular events, a permanent machine can cover all of them.",
    },
    {
      question: "Can the machine go in a soft play or party venue?",
      answer:
        "Yes. Play centres and party venues work well with a range that suits families. We'll agree it with you, including how many sweets you're happy to have in it.",
    },
  ],
  related: ["sports-venues", "gyms", "tourist-attractions"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our venue.",
};

export default leisureVenues;
