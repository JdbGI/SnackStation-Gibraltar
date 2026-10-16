import type { SectorContent } from "./types";

const constructionSites: SectorContent = {
  title: "Construction Site Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for construction sites and welfare units in Gibraltar. Cold drinks and snacks for crews, restocked and serviced by our local team.",
  headline: "Construction site vending in *Gibraltar.*",
  intro:
    "Building sites start early, carry on in all weathers and are often a walk from the nearest shop. A machine in the welfare cabin keeps crews in drinks and snacks without anyone signing off site.",
  facts: [
    { label: "Usual plan", value: "Set by the size of the crew" },
    { label: "Best spots", value: "Welfare cabin, site canteen, site office" },
    { label: "Popular picks", value: "Font Vella, Powerade, Kettle Chips" },
  ],
  ticker: [
    "Building sites",
    "Welfare units",
    "Early starts",
    "Hot days",
    "Card-only",
    "Restocked by us",
    "Fully managed",
  ],
  sections: [
    {
      heading: "Why building sites need one",
      body: [
        "Gibraltar has seen a lot of building work in recent years, from new housing such as Hassan Centenary Terraces on the east side to new schools and public buildings around the Rock. Big projects bring large crews who start before seven and work through the hottest part of the day.",
        "On a busy site, a run to the shop costs time and usually means signing out and back in. A machine in the welfare area keeps people on site and gives them a cold drink when they need one.",
        "Good welfare facilities matter to crews, and a well-stocked machine is a simple way to show people they're looked after.",
      ],
    },
    {
      heading: "Machines that suit a project",
      body: [
        "Every plan has a 12-month minimum term, so a machine suits longer projects, a main contractor's compound or a site that runs for a year or more. If you run several sites, talk to us about where a machine would get the most use.",
        "We can put the machine in a welfare cabin, a site canteen or a covered spot outside, as long as there's power. It's card-only, so there's no cash box on site.",
        "Count the people on site on a normal day, including subcontractors. Bigger sites usually suit Standard, and smaller crews suit Small Team. Depots and yards that outlast the build are covered on our [warehouse and industrial page](/vending-machines/warehouses-and-industrial).",
      ],
    },
    {
      heading: "Hot days on the Rock",
      body: [
        "Summer highs in Gibraltar sit around 28°C, and it feels a lot hotter on scaffolding or in a concrete stairwell. We load site machines with plenty of water and sports drinks such as Powerade and Aquarius.",
        "Our stock tracking shows us when sales climb in the warmer months, so busy site machines get more frequent visits from our local team.",
      ],
      points: [
        "Welfare cabin, canteen or outdoors",
        "Plenty of water and sports drinks",
        "No cash on site",
        "Suits projects of 12 months or more",
      ],
    },
  ],
  stock: {
    intro: "Site machines are mostly about drinks, with filling snacks for the morning and afternoon breaks.",
    groups: [
      { title: "Water & sports drinks", items: ["Font Vella", "Powerade", "Aquarius", "Wowhydrate"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Tango", "7Up"] },
      { title: "Filling snacks", items: ["Kettle Chips", "Grenade bars", "Cadbury", "M&M's"] },
      { title: "Essentials", items: ["Nivea hand cream", "Sanex deodorant"] },
    ],
  },
  spots: [
    {
      title: "Welfare cabin",
      text: "Where crews eat and dry off. It's the most used spot on almost every site.",
    },
    {
      title: "Site canteen",
      text: "On bigger projects with a canteen, the machine covers early mornings and late finishes.",
    },
    {
      title: "Site office",
      text: "Handy for site managers, visitors and deliveries, and easy for us to reach when restocking.",
    },
    {
      title: "Under cover by the gate",
      text: "On open sites, an outdoor machine near the entrance can serve everyone on the way in and out.",
    },
  ],
  plan: {
    text: "Crew size decides it. Bigger sites suit Standard and small crews suit Small Team. Every plan starts with a one-off installation fee and runs for at least 12 months.",
    fits: [
      { plan: "Standard", when: "60 or more on site" },
      { plan: "Small Team", when: "Crews of 20 to 60" },
      { plan: "Profit Sharing", when: "The biggest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Proven on *working sites.*",
    text: "Our machines already run in hard-working places like the Gibdock warehouse and the Gibraltar Defence Police headquarters, where shifts are long and breaks are short.",
    locations: ["Gibdock Warehouse", "Gibraltar Defence Police HQ"],
  },
  faqTitle: "Site vending, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine on a construction site in Gibraltar?",
      answer:
        "Yes. We install machines in welfare cabins, site canteens, site offices and covered spots outdoors. All we need is power and access for our team.",
    },
    {
      question: "How long does the machine need to stay?",
      answer:
        "Every plan has a 12-month minimum term, so machines suit projects that run for a year or more. After that, either side can end the agreement with one month's notice and we collect the machine free of charge.",
    },
    {
      question: "What if the project finishes early?",
      answer:
        "Removing the machine during the minimum term carries a removal and early-exit charge, and on the Small Team plan any remaining monthly fees for that term also apply. We'll go through your programme before you sign, so there are no surprises.",
    },
    {
      question: "Will the machine cope with a dusty, busy site?",
      answer:
        "We put it in a sheltered spot away from plant and deliveries. If it stops working, message us and our local team comes out to sort it.",
    },
    {
      question: "Do subcontractors count towards our plan?",
      answer:
        "Yes. We look at everyone on site on a normal day, including subcontractors and regular delivery drivers. More people means more sales and can mean a better plan.",
    },
    {
      question: "Is there cash in the machine?",
      answer:
        "No. It's card-only, so there's no cash box on site to empty or protect. Crews pay by card, contactless or phone.",
    },
    {
      question: "Do you stock water for hot days?",
      answer:
        "Yes. Site machines carry plenty of Font Vella water and sports drinks such as Powerade and Aquarius. Our stock tracking shows us when sales rise in the summer, so we can visit more often.",
    },
    {
      question: "Can the main contractor and subcontractors share one machine?",
      answer:
        "Yes. One machine in the welfare area serves everyone on site, whoever they work for. The agreement is with the main contractor or whoever runs the site, and everyone pays for what they buy by card or phone.",
    },
  ],
  related: ["warehouses-and-industrial", "port-and-shipyards", "residential-buildings"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our construction site.",
};

export default constructionSites;
