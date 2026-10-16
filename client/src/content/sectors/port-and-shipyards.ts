import type { SectorContent } from "./types";

const portAndShipyards: SectorContent = {
  title: "Port & Shipyard Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar's port, shipyard and marine businesses. Snacks, drinks and essentials for crews and dock teams, fully managed.",
  headline: "Port and shipyard vending in *Gibraltar.*",
  intro:
    "Gibraltar's port works long after most offices close. Ship repair teams, bunkering crews, agents and visiting seafarers all need a drink and a bite at odd hours, often a long way from town, so we put the machine where they work.",
  facts: [
    { label: "Usual plan", value: "Standard for most port businesses" },
    { label: "Best spots", value: "Reception, mess room, gatehouse" },
    { label: "Popular picks", value: "Powerade, Coca-Cola, crew toiletries" },
  ],
  ticker: [
    "Port",
    "Shipyard",
    "Bunkering",
    "Crew essentials",
    "Card-only",
    "Round the clock",
    "Fully managed",
  ],
  sections: [
    {
      heading: "Work that doesn't keep office hours",
      body: [
        "Gibraltar is one of the biggest bunkering ports in the Mediterranean, and ship repair work in the old naval dockyard runs to tight deadlines. When a vessel is in, shifts stretch and people work through the night.",
        "Most port and yard areas are a long way from a shop, and leaving a secure area for a snack is rarely practical. A machine inside the site means a drink and something to eat are always close, whatever time the job finishes.",
      ],
    },
    {
      heading: "Crews need more than snacks",
      body: [
        "Seafarers coming ashore after weeks at sea often want a few basics as much as a cold drink. Our machines can carry travel toiletries such as shampoo, shower gel, deodorant, shaving gel and dental kits alongside the usual snacks and drinks.",
        "That makes a machine useful at a ship agent's office, in a crew welfare room or at a reception where visiting crews wait. For leisure berths and visiting yachts, see our page on [marina vending](/vending-machines/marinas).",
      ],
    },
    {
      heading: "Proven on the waterfront",
      body: [
        "We already run two machines at Gibdock, one at reception and one in the warehouse, so we know how a working yard operates. We plan restocking around shift patterns and follow the site's security rules on every visit.",
        "Card-only machines mean there's no cash on site, which keeps things simple in secure areas. Crews and staff pay by card, contactless or phone.",
        "We can stock machines differently on different parts of the site, with more water and sports drinks on the yard side and more toiletries where crews come ashore.",
      ],
      points: [
        "Two machines already at Gibdock",
        "Travel toiletries for crews",
        "Restocking around shift patterns",
        "Indoors or under cover outside",
      ],
    },
  ],
  stock: {
    intro:
      "Port machines lean towards drinks, because outdoor work in the Gibraltar sun is thirsty, with filling snacks and crew essentials alongside.",
    groups: [
      { title: "Drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "7Up", "Lipton Ice Tea"] },
      { title: "Rehydration", items: ["Powerade", "Aquarius", "Font Vella", "Wowhydrate"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "Grenade bars", "M&M's"] },
      {
        title: "Crew essentials",
        items: ["Head & Shoulders", "Sanex shower gel", "Gillette shaving gel", "Colgate Plax", "Dental kits"],
      },
    ],
  },
  spots: [
    {
      title: "Reception",
      text: "Where visitors, agents and crews arrive. It's also where our first Gibdock machine sits.",
    },
    {
      title: "Mess room or canteen",
      text: "Where yard teams take their breaks, and where a machine covers the hours the canteen is shut.",
    },
    {
      title: "Gatehouse or security office",
      text: "Security teams work every hour of the day, and everyone passes the gate.",
    },
    {
      title: "A covered spot on the quay",
      text: "For crews and dock teams who can't easily leave the quayside. It needs power and some shelter from the weather.",
    },
  ],
  plan: {
    text: "Ports, yards and most marine businesses go on our Standard plan. Smaller marine offices suit Small Team, and Profit Sharing is by invitation for our busiest sites.",
    fits: [
      { plan: "Standard", when: "Ports, yards and marine firms" },
      { plan: "Small Team", when: "Smaller marine offices" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Working at *Gibdock.*",
    text: "Gibdock's reception and warehouse both have a SnackStation machine, serving the shipyard's staff and visitors through the working day.",
    locations: ["Gibdock Reception", "Gibdock Warehouse"],
  },
  faqTitle: "Port and shipyard, *answered.*",
  faqs: [
    {
      question: "Do you supply vending machines to the port and shipyard in Gibraltar?",
      answer:
        "Yes. We already run two machines at Gibdock, at reception and in the warehouse, and we can supply port operators, ship agents, bunkering companies and other marine businesses across Gibraltar.",
    },
    {
      question: "Can the machine sell toiletries for visiting crews?",
      answer:
        "Yes. Alongside snacks and drinks we can stock travel toiletries such as shampoo, shower gel, deodorant, shaving gel, mouthwash and dental kits. They're handy for seafarers coming ashore.",
    },
    {
      question: "Can you install a machine inside a secure area?",
      answer:
        "Yes. We agree access and restocking times with your security team before installation, then follow your site rules on every visit.",
    },
    {
      question: "Can a machine go outside on the quay?",
      answer:
        "It can, as long as there's power and a sheltered spot. We check the location on the free site visit and recommend the best option.",
    },
    {
      question: "What happens when a job runs through the night?",
      answer:
        "The machine keeps working. It runs around the clock, and because it's card-only, nobody needs cash at 3am. Our stock tracking helps us restock busy machines more often.",
    },
    {
      question: "Is there a cost for a machine at a port or shipyard?",
      answer:
        "Every plan starts with a one-off installation fee. Most port and marine sites go on Standard, which has no monthly fee, while smaller marine offices go on Small Team, which adds a small monthly fee. Every plan has a 12-month minimum term.",
    },
    {
      question: "Can ship agents and crew welfare rooms have a machine?",
      answer:
        "Yes. Agents' offices, crew welfare rooms and receptions where visiting crews wait are all good spots. A machine there gives seafarers drinks, snacks and toiletries without a trip into town, whatever time the ship comes in.",
    },
    {
      question: "Can you restock outside office hours?",
      answer:
        "Usually, yes. If your site runs around the clock, we can agree restocking times that suit your shift pattern and your security team, so the machine is well stocked when the yard is busiest.",
    },
  ],
  related: ["marinas", "warehouses-and-industrial", "airport-and-transport"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our port or marine site.",
};

export default portAndShipyards;
