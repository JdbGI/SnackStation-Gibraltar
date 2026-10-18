import type { SectorContent } from "./types";

const warehousesAndIndustrial: SectorContent = {
  title: "Warehouse Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for warehouses, depots, workshops and industrial units in Gibraltar. Snacks and drinks for early starts, run by our local team.",
  headline: "Warehouse and depot vending in *Gibraltar.*",
  intro:
    "Warehouse and depot teams start early, work on their feet and are often nowhere near a shop. A machine in the staff area gives them a drink and something to eat without leaving site.",
  facts: [
    { label: "Usual plan", value: "Standard for depots and staff rooms" },
    { label: "Best spots", value: "Mess room, clocking-in point, drivers' entrance" },
    { label: "Popular picks", value: "Coca-Cola, Powerade, Kettle Chips" },
  ],
  ticker: [
    "Warehouses",
    "Depots",
    "Workshops",
    "Early starts",
    "Card-only",
    "New Harbours to North Mole",
    "Fully managed",
  ],
  sections: [
    {
      heading: "Made for early starts",
      body: [
        "Much of what Gibraltar uses comes in by sea or by road and passes through a warehouse or depot at New Harbours, the North Mole or Coaling Island before it reaches shops and offices. The people who move it often start before seven, when nothing nearby is open.",
        "A machine in the staff area means a cold drink at break time and something to eat on a long shift, without a drive into town. It also keeps people on site, which matters when breaks are short and the next delivery is due.",
        "Workshops, garages, print shops and small factories have the same problem on a smaller scale. The fix is the same too.",
      ],
    },
    {
      heading: "Built for hard-working sites",
      body: [
        "Industrial sites can be dusty, busy and hard on equipment. We put the machine somewhere sensible, clear of forklift routes and loading doors and close to where people take their breaks.",
        "The machine is card-only, so there's no cash box on site to empty or protect. If it gets knocked or stops working, message us and our local team will sort it. Repairs are included.",
        "Machines can also go outdoors, under cover by a yard or an entrance, if that suits your site better.",
      ],
    },
    {
      heading: "Which plan fits a depot",
      body: [
        "Depots and staff rooms usually suit our Standard plan: a one-off installation fee and no monthly fee. Small workshops of 20 to 60 people suit Small Team, and our busiest sites may be invited onto Profit Sharing.",
        "Count everyone who uses the site on a normal day, including the drivers who come and go. They buy from the machine too. If you're running a building project rather than a warehouse, our page on [construction sites](/vending-machines/construction-sites) covers how that works.",
      ],
      points: [
        "No cash box on site",
        "Placed clear of working areas",
        "Indoor or covered outdoor spots",
        "Repairs included",
      ],
    },
  ],
  stock: {
    intro:
      "Physical work is thirsty work, so industrial machines carry more drinks than most, especially in summer, plus filling snacks for long shifts.",
    groups: [
      { title: "Cold drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Tango", "7Up", "Sprite"] },
      { title: "Rehydration", items: ["Powerade", "Aquarius", "Font Vella", "Wowhydrate"] },
      { title: "Filling snacks", items: ["Kettle Chips", "Grenade bars", "Cadbury", "M&M's"] },
      { title: "Essentials", items: ["Nivea hand cream", "Sanex deodorant", "Shower gel"] },
    ],
  },
  spots: [
    {
      title: "Mess room or staff room",
      text: "Where breaks happen. A machine gets used most when it's where people already sit down.",
    },
    {
      title: "By the clocking-in point",
      text: "Catches people at the start and end of a shift, when they're most likely to want a drink.",
    },
    {
      title: "At the drivers' entrance",
      text: "Delivery drivers and visiting hauliers can use it without walking through the warehouse.",
    },
    {
      title: "Under cover outside",
      text: "On a yard or open site, an outdoor machine near the gate can serve everyone without anyone coming indoors.",
    },
  ],
  plan: {
    text: "Depots and staff rooms usually sit on Standard, and small workshops suit Small Team. Profit Sharing is by invitation only.",
    fits: [
      { plan: "Standard", when: "Most depots and staff rooms" },
      { plan: "Small Team", when: "Workshops of 20 to 60" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Already working at *Gibdock.*",
    text: "Gibdock's warehouse team uses a SnackStation machine through the working day, and we run a second one at the shipyard's reception.",
    locations: ["Gibdock Warehouse", "Gibdock Reception"],
  },
  faqTitle: "Warehouse vending, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in a warehouse in Gibraltar?",
      answer:
        "Yes. We install and run vending machines in warehouses, depots, workshops and industrial units across Gibraltar, including New Harbours, the North Mole and Coaling Island. We stock the machine, service it and repair it.",
    },
    {
      question: "Our site is dusty and busy. Will the machine cope?",
      answer:
        "We choose a spot away from loading doors and forklift routes and close to where people take their breaks. If the machine gets knocked or stops working, our local team comes out to fix it.",
    },
    {
      question: "Can the machine go outside in our yard?",
      answer:
        "Yes. Machines can go outdoors as well as inside. We'll look for a spot with power and some cover from sun and rain on the site visit.",
    },
    {
      question: "We start at 6am. Will the machine be stocked?",
      answer:
        "The machine runs around the clock, and we plan restocking visits from its sales data so the popular lines don't run out before your early shift arrives.",
    },
    {
      question: "Do drivers and visitors count towards our plan?",
      answer:
        "Yes. We look at everyone who uses the site on a normal day, including drivers, contractors and visitors. More people means more sales, which can move you onto a better plan.",
    },
    {
      question: "Is there any cash in the machine?",
      answer:
        "No. It's card-only, so there's no cash on site to collect, protect or bank. People pay by card, contactless or phone.",
    },
    {
      question: "Can we have one machine in the warehouse and one in the office?",
      answer:
        "Yes. Gibdock has exactly that: one machine in the warehouse and one at reception. We'll suggest the right number for your site when we visit.",
    },
  ],
  related: ["port-and-shipyards", "construction-sites", "offices"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our warehouse or depot.",
};

export default warehousesAndIndustrial;
