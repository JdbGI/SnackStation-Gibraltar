import type { SectorContent } from "./types";

const offices: SectorContent = {
  title: "Office Vending Machines in Gibraltar | SnackStation",
  description:
    "Snack and drink vending machines for Gibraltar offices, stocked and serviced by our local team. Card-only, with a plan sized to your headcount.",
  headline: "Office vending machines in *Gibraltar.*",
  intro:
    "A SnackStation machine gives your team snacks and drinks without leaving the building. We install it, keep it stocked and fix it, and the plan depends on how many people work in your office.",
  facts: [
    { label: "Usual plan", value: "Small Team or Standard, set by headcount" },
    { label: "Best spots", value: "Staff kitchen, reception, shared landings" },
    { label: "Popular picks", value: "Coca-Cola, Kettle Chips, Grenade bars" },
  ],
  ticker: [
    "Office vending",
    "Staff kitchens",
    "Break-out areas",
    "Card-only",
    "Restocked by us",
    "Europort to Main Street",
    "Sized to your team",
  ],
  heroLocation: "Gibtelecom Mount Pleasant",
  sections: [
    {
      heading: "Why offices choose vending",
      body: [
        "In a lot of Gibraltar offices, a snack or a drink means leaving the building. That might be a walk across Europort, a trip down the stairs to Main Street or a lunchtime queue in Casemates. Multiply it by a team of fifty and it adds up to a lot of time away from desks.",
        "A machine on your floor fixes that. People grab what they need in a minute and get back to work, whether they started at seven or are staying late to get something finished. There's no petty cash, no supermarket runs and no stock cupboard for anyone to keep tidy.",
        "It also costs your business very little. You pay a one-off installation fee, then we supply the machine, stock it, service it and repair it. Your staff simply pay for what they buy, by card or phone.",
      ],
    },
    {
      heading: "A plan sized to your headcount",
      body: [
        "We price office vending by the number of people on site each day, because more people means more sales. As a guide, teams of 20 to 60 suit our Small Team plan and offices of 60 or more suit Standard, which has no monthly fee. Our busiest workplaces may be invited onto Profit Sharing.",
        "Count everyone who is in the building on a normal day: staff, contractors and regular visitors. If you share a building with other companies, one machine in a shared area can serve all of you, which often moves everyone up a plan. Our page on [business centres and co-working spaces](/vending-machines/business-centres) explains how that works.",
        "We confirm the plan after a free site visit, so you know exactly where you stand before you sign anything.",
      ],
    },
    {
      heading: "What it's like day to day",
      body: [
        "Once the machine is in, you shouldn't have to think about it. Our digital stock tracking shows us what's selling, so we plan restocking visits around your office and arrive before the popular lines run out.",
        "If something stops working, message us on WhatsApp and our local team comes out to fix it. We look after the card reader, the stock and any repairs.",
        "Your team gets a say too. Tell us what people ask for and we'll build it into the range. Most offices end up with a mix of soft drinks, water, crisps and chocolate, plus a few protein bars for the people who train at lunchtime.",
      ],
      points: [
        "No cash to count or bank",
        "No orders to place",
        "Repairs by our local team",
        "A range tuned to what your team buys",
      ],
    },
  ],
  stock: {
    intro:
      "Office machines are built around quick breaks: something cold, something sweet and something to keep people going until lunch.",
    groups: [
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "7Up", "Tango", "Lipton Ice Tea"] },
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Oasis", "Simon Life"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles", "Swizzels Squashies"] },
      { title: "Lighter picks", items: ["Grenade protein bars", "Wowhydrate protein water", "Sugar-free soft drinks"] },
    ],
  },
  spots: [
    {
      title: "Staff kitchen or break room",
      text: "Usually the best spot. People already go there for a break, so the machine gets used without anyone changing their habits.",
    },
    {
      title: "Reception",
      text: "Handy for offices with regular visitors, and for clients kept waiting before a meeting.",
    },
    {
      title: "By the lifts or stairs",
      text: "On busy floors, a spot on the main route catches people on their way in, out and between meetings.",
    },
    {
      title: "A shared landing",
      text: "In a building with several companies, a shared area lets everyone use one machine, which can put you all on a better plan.",
    },
  ],
  plan: {
    text: "Office plans follow headcount. Count the people on site on a normal day and find your row below. We'll confirm it when we visit.",
    fits: [
      { plan: "Small Team", when: "20 to 60 people" },
      { plan: "Standard", when: "60 or more people" },
      { plan: "Profit Sharing", when: "Our busiest workplaces, by invitation" },
    ],
  },
  proof: {
    heading: "Already in Gibraltar *offices.*",
    text: "Teams at Gibtelecom's Mount Pleasant site and the Gibraltar Broadcasting Corporation use SnackStation machines through the working day, from early radio shows to the evening news.",
    locations: ["Gibtelecom Mount Pleasant", "Gibraltar Broadcasting Corporation"],
  },
  faqTitle: "Office vending, *answered.*",
  faqs: [
    {
      question: "How much does an office vending machine cost in Gibraltar?",
      answer:
        "It depends on your headcount. Every plan starts with a one-off installation fee. Offices of 60 or more people usually go on our Standard plan, which has no monthly fee, and teams of 20 to 60 go on Small Team, which adds a small monthly fee that drops away when the machine sells well. You never buy or rent the machine itself.",
    },
    {
      question: "Is our office big enough for a vending machine?",
      answer:
        "If around 20 or more people are in most days, yes. Smaller offices can still work, particularly if you have regular visitors or share a building with other companies. Tell us about your office and we'll be honest about whether a machine would sell.",
    },
    {
      question: "Do we have to handle any money?",
      answer:
        "No. Our machines are card-only, so there's no cash to collect, count or bank. Staff pay by card, contactless or phone, and we take care of everything to do with the machine and its stock.",
    },
    {
      question: "Can you replace the vending machine we already have?",
      answer:
        "Yes. During our agreement SnackStation is the only vending or self-service snack and drink provider on your premises, so we take over from your current machine once your existing arrangement ends. We'll talk through timing on the site visit.",
    },
    {
      question: "Can the machine include healthier options?",
      answer:
        "Yes. Alongside the favourites we can stock water, sugar-free soft drinks and protein bars. We build the range from sales data across Gibraltar and from what your team asks for, then adjust it as we see what sells.",
    },
    {
      question: "What happens if the machine breaks or runs out?",
      answer:
        "Our stock tracking shows us what's running low, so we restock before it empties. If anything goes wrong, message us on WhatsApp and our local team will come out to fix it. Repairs are included on every plan.",
    },
    {
      question: "Which parts of Gibraltar do you cover?",
      answer:
        "All of it. We put machines in offices from Europort and Ocean Village to Main Street and the south of the Rock, and our own local team restocks and services every one.",
    },
  ],
  related: ["business-centres", "gaming-and-finance", "warehouses-and-industrial"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our office.",
};

export default offices;
