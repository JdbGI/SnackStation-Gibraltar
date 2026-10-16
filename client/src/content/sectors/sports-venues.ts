import type { SectorContent } from "./types";

const sportsVenues: SectorContent = {
  title: "Stadium & Sports Centre Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for stadiums, sports halls, pools and clubs in Gibraltar. Drinks and snacks for players and spectators, as used at Europa Point Stadium.",
  headline: "Stadium and sports centre vending in *Gibraltar.*",
  intro:
    "Players need a drink after training, spectators want one at half-time and parents on the touchline want a snack. Our machine at Europa Point Stadium already serves all of them, and we can do the same at your venue.",
  facts: [
    { label: "Usual plan", value: "Free Placement" },
    { label: "Best spots", value: "Concourse, changing rooms, club house" },
    { label: "Popular picks", value: "Powerade, Font Vella, Aquarius" },
  ],
  ticker: [
    "Stadiums",
    "Sports halls",
    "Pools",
    "Clubs",
    "Match days",
    "Card-only",
    "Free Placement",
  ],
  sections: [
    {
      heading: "Training nights and match days",
      body: [
        "Sport keeps Gibraltar busy for a place this size. Europa Point Stadium, built for the 2019 Island Games, now hosts the national football team's UEFA matches, and a new national stadium is on its way at Victoria Stadium. The Bayside and Lathbury sports complexes, the Tercentenary Sports Hall and the pools are in use most days of the week.",
        "Between training, league games and events, these venues see a lot of thirsty people, often at times when nothing nearby is open.",
        "School sport adds to it. During the week, sports halls and pitches host PE lessons and school matches as well as club training.",
      ],
    },
    {
      heading: "What works at a sports venue",
      body: [
        "Drinks come first. Our sports machines carry plenty of Font Vella water, Powerade and Aquarius, plus soft drinks for spectators. Grenade protein bars, crisps and chocolate cover the rest.",
        "Machines can go indoors or outside, so a covered spot by a stand, a pitch entrance or a pool can work as well as a concourse or club house.",
        "Card-only payment keeps the queue moving at half-time, and there's no cash to count after the game.",
      ],
    },
    {
      heading: "Clubs and associations",
      body: [
        "Clubs that share a venue or run their own club house can have a machine too. Members and visiting teams get a drink without anyone running a bar or a tuck shop, and it's there for early training and late fixtures.",
        "For the volunteers who run a club, that's one less job on match day.",
        "Stadiums and busy sports centres are on our Free Placement list. Smaller club houses usually suit Standard or Small Team, depending on how many people use them. For private gyms and studios, see our [gym vending page](/vending-machines/gyms).",
      ],
      points: [
        "A machine already at Europa Point Stadium",
        "Indoor or outdoor spots",
        "Plenty of water and sports drinks",
        "Quick card payments at half-time",
      ],
    },
  ],
  stock: {
    intro:
      "Sports machines carry more drinks than anything else, with snacks for spectators and something with protein for after training.",
    groups: [
      { title: "Hydration", items: ["Font Vella", "Powerade", "Aquarius", "Wowhydrate"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "7Up", "Tango"] },
      { title: "Snacks", items: ["Grenade bars", "Kettle Chips", "Cadbury", "M&M's", "Skittles"] },
      { title: "Changing room", items: ["Sanex shower gel", "Head & Shoulders", "Sanex deodorant"] },
    ],
  },
  spots: [
    {
      title: "Concourse or entrance",
      text: "Every spectator passes it on the way in, at half-time and on the way out.",
    },
    {
      title: "Outside the changing rooms",
      text: "Drinks and shower essentials for players before and after a game.",
    },
    {
      title: "Pool reception",
      text: "Swimmers come out hungry, and parents waiting for lessons want a drink.",
    },
    {
      title: "Club house",
      text: "For clubs with their own space, a machine that sells when nobody's behind the bar.",
    },
  ],
  plan: {
    text: "Stadiums and sports centres are high-footfall sites, so they usually qualify for Free Placement. Smaller club houses suit Standard or Small Team.",
    fits: [
      { plan: "Free Placement", when: "Stadiums and sports centres" },
      { plan: "Standard", when: "Larger club houses" },
      { plan: "Small Team", when: "Small clubs" },
    ],
  },
  proof: {
    heading: "Already at *Europa Point.*",
    text: "Our machine at Europa Point Stadium serves players, staff and visitors on training nights and match days.",
    locations: ["Europa Point Stadium"],
  },
  faqTitle: "Sports venues, *answered.*",
  faqs: [
    {
      question: "Do you put vending machines in sports venues in Gibraltar?",
      answer:
        "Yes. We already run a machine at Europa Point Stadium, and we supply stadiums, sports halls, pools, club houses and other sports venues across Gibraltar.",
    },
    {
      question: "Is a vending machine free for a stadium or sports centre?",
      answer:
        "Usually. Stadiums and busy sports centres are high-footfall sites, so they normally qualify for Free Placement, with nothing to pay up front or monthly.",
    },
    {
      question: "Can the machine go outdoors by a pitch?",
      answer:
        "Yes, as long as there's power. We'll look for a covered spot near the pitch, the stand or the entrance on the site visit.",
    },
    {
      question: "What do sports machines stock?",
      answer:
        "Mostly drinks: Font Vella water, Powerade, Aquarius, Wowhydrate and soft drinks. We add Grenade protein bars, crisps and chocolate, and shower essentials if the machine is near the changing rooms.",
    },
    {
      question: "Can a small club have a machine?",
      answer:
        "Yes. Smaller club houses usually suit Standard or Small Team. Tell us how many members and visitors use the club on a typical day and we'll recommend a plan.",
    },
    {
      question: "Can it handle a match day crowd?",
      answer:
        "Card-only machines are quick to use, which helps at half-time. Let us know your big fixtures and we'll restock beforehand, and we can talk about a second machine if one isn't enough.",
    },
    {
      question: "Do you put machines at swimming pools?",
      answer:
        "Yes. Pool receptions and changing areas work well. Swimmers come out hungry and thirsty, and parents waiting during lessons are glad of a drink.",
    },
    {
      question: "Our club house isn't open every day. Can we still have one?",
      answer:
        "Possibly. A machine needs regular use to stay on site, so we'll look at how busy the club house is on the site visit and be honest about whether a machine would sell.",
    },
  ],
  related: ["gyms", "leisure-venues", "tourist-attractions"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our sports venue.",
};

export default sportsVenues;
