import type { SectorContent } from "./types";

const policeAndEmergencyServices: SectorContent = {
  title: "Police & Fire Station Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for police, fire, ambulance and border teams in Gibraltar. Snacks and drinks on every shift, fully managed by our local team.",
  headline: "Emergency services vending in *Gibraltar.*",
  intro:
    "Police officers, firefighters, paramedics and border teams work every hour of the day, and their breaks rarely come at a set time. A machine on station means food and drink are there whenever they get a minute.",
  facts: [
    { label: "Usual plan", value: "Set by the number of people on site" },
    { label: "Best spots", value: "Mess room, locker rooms, near the control room" },
    { label: "Popular picks", value: "Powerade, Coca-Cola, Grenade bars" },
  ],
  ticker: [
    "Police",
    "Fire & rescue",
    "Ambulance",
    "Customs & borders",
    "Every shift",
    "Card-only",
    "Local team",
  ],
  heroLocation: "Gibraltar Defence Police HQ",
  sections: [
    {
      heading: "Built around shift work",
      body: [
        "Gibraltar's emergency services never close. The Royal Gibraltar Police, the Gibraltar Defence Police, Gibraltar Fire and Rescue Service, the GHA's ambulance crews, HM Customs and the Borders and Coastguard Agency all have people on duty through the night, at weekends and on bank holidays.",
        "Crews eat when they can rather than when they'd like to. A machine on station means a drink and a snack are waiting when they get back from a call, at 4pm or 4am.",
        "Card-only machines also suit secure buildings: there's no cash on site and nothing for your staff to look after.",
      ],
    },
    {
      heading: "Already trusted at the Defence Police HQ",
      body: [
        "We already run a machine at the Gibraltar Defence Police headquarters, where officers work around the clock. On secure sites like this we arrange restocking visits in advance and follow the site's access rules.",
        "If the machine needs attention, message us on WhatsApp and our local team will come out. Repairs are part of every plan.",
      ],
    },
    {
      heading: "Food that fits the job",
      body: [
        "Physical, high-pressure shifts call for more than a chocolate bar. Station machines carry plenty of water and sports drinks, protein bars and filling snacks, as well as the usual soft drinks and treats.",
        "Locker rooms are another good spot. After a shift, deodorant, shower gel or a dental kit can be as welcome as a drink, and we can stock those too. Services based in hospitals and clinics are covered on our [healthcare page](/vending-machines/hospitals-and-care-homes).",
        "We can also keep lighter options in the range for officers who'd rather skip the chocolate on a night shift.",
      ],
      points: [
        "No cash on secure sites",
        "Restocking arranged in advance",
        "Food and drink for every shift",
        "Shower and kit essentials",
      ],
    },
  ],
  stock: {
    intro: "Station machines mix drinks and filling food for long shifts with a few essentials for after them.",
    groups: [
      { title: "Water & sports drinks", items: ["Font Vella", "Powerade", "Aquarius", "Wowhydrate"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "7Up", "Sprite"] },
      { title: "Filling snacks", items: ["Grenade bars", "Kettle Chips", "Cadbury", "M&M's"] },
      {
        title: "Locker room",
        items: ["Sanex shower gel", "Sanex deodorant", "Gillette shaving gel", "Dental kits"],
      },
    ],
  },
  spots: [
    {
      title: "Mess room",
      text: "Where crews eat between calls. The most used spot on any station.",
    },
    {
      title: "Locker rooms",
      text: "Toiletries and drinks at the start and end of every shift.",
    },
    {
      title: "Near the control room",
      text: "Control staff can't go far from their desks, so a machine close by helps.",
    },
    {
      title: "Front counter",
      text: "Where the public waits to report something, if you'd like the machine to serve visitors too.",
    },
  ],
  plan: {
    text: "Stations follow headcount like any workplace. Count everyone who uses the building on a normal day, across all shifts.",
    fits: [
      { plan: "Standard", when: "Stations and HQs with 60+ people" },
      { plan: "Small Team", when: "Smaller stations of 20 to 60" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted at *Defence Police HQ.*",
    text: "Our machine at the Gibraltar Defence Police headquarters keeps officers supplied around the clock, and GBC's broadcast teams use ours from the early shows to the late news.",
    locations: ["Gibraltar Defence Police HQ", "Gibraltar Broadcasting Corporation"],
  },
  faqTitle: "Emergency services, *answered.*",
  faqs: [
    {
      question: "Do you put vending machines in police and fire stations in Gibraltar?",
      answer:
        "Yes. We already run a machine at the Gibraltar Defence Police headquarters, and we can supply police, fire, ambulance, customs and border sites across Gibraltar.",
    },
    {
      question: "Can you work with our security procedures?",
      answer:
        "Yes. We agree access, visit times and any sign-in requirements before the machine goes in, then follow them on every restocking visit.",
    },
    {
      question: "Does the machine work through the night?",
      answer:
        "Yes. It runs around the clock and takes card, contactless and phone payments. Our stock tracking means busy machines get restocked more often.",
    },
    {
      question: "Can the machine stock toiletries for the locker room?",
      answer:
        "Yes. We can add shower gel, deodorant, shaving gel, shampoo and dental kits to the range, which crews find handy before and after a shift.",
    },
    {
      question: "How much does a machine for a station cost?",
      answer:
        "It depends on how many people use the site each day. Every plan starts with a one-off installation fee. Most stations and headquarters go on Standard, which has no monthly fee, and smaller stations on Small Team, which adds a small monthly fee.",
    },
    {
      question: "Can members of the public use the machine too?",
      answer:
        "If you'd like them to. A machine by the front counter or in a waiting area can serve visitors as well as staff, and the extra footfall can help you qualify for a better plan.",
    },
    {
      question: "Can you supply a machine to a border post or customs office?",
      answer:
        "Yes. Border, customs and coastguard teams work around the clock too. We can place a machine in a staff area, a crew room or a public waiting area, wherever there's power and the site is happy for us to.",
    },
    {
      question: "What if the machine breaks during a night shift?",
      answer:
        "Message us on WhatsApp and our local team will come out to fix it. Repairs cost nothing extra on any plan, and card-only machines break down less often than cash ones.",
    },
  ],
  related: ["government-buildings", "hospitals-and-care-homes", "airport-and-transport"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our station.",
};

export default policeAndEmergencyServices;
