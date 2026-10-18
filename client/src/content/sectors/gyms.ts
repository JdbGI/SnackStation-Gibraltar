import type { SectorContent } from "./types";

const gyms: SectorContent = {
  title: "Gym Vending Machines in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar gyms and fitness studios. Protein bars, sports drinks, water and shower essentials for members, run by our local team.",
  updated: "2026-10-18",
  headline: "Gym vending machines in *Gibraltar.*",
  intro:
    "Members finish a session thirsty and hungry, and plenty of them forget their shower gel. A machine stocks what they need, from protein bars to deodorant, and we run it for you.",
  facts: [
    { label: "Usual plan", value: "Based on daily footfall" },
    { label: "Best spots", value: "Reception, outside the changing rooms, the gym floor" },
    { label: "Popular picks", value: "Grenade bars, Powerade, Wowhydrate" },
  ],
  ticker: [
    "Gyms",
    "Fitness studios",
    "Protein bars",
    "Sports drinks",
    "Shower essentials",
    "Card-only",
    "Fully managed",
  ],
  sections: [
    {
      heading: "What members reach for",
      body: [
        "After a class or a heavy session, people want water, a sports drink or something with protein in it. Before an early session, they want something quick. Our gym machines are built around that: Font Vella water, Powerade and Aquarius, Wowhydrate protein water and Grenade protein bars, plus a few treats for the people who feel they've earned one.",
        "If you sell drinks from a fridge at reception now, a machine takes that job off your staff and keeps selling after they've gone home.",
        "It helps personal trainers too. They can point clients to a protein bar or a bottle of water at the end of a session without sending them out of the building.",
      ],
    },
    {
      heading: "Shower and kit essentials",
      body: [
        "The changing room is where a gym machine really proves its worth. Forgotten shower gel, deodorant or shampoo is a common complaint, and we can stock all of them, plus face wash, hand cream and dental kits.",
        "That's useful for members who train before or after work and go straight on to the office.",
        "Everything comes in travel sizes, so whatever members buy fits in a gym bag for next time.",
      ],
    },
    {
      heading: "Gyms, studios and clubs",
      body: [
        "Fitness is popular in Gibraltar, with gyms, CrossFit boxes, martial arts clubs and studios around town. Many are run by small teams, and every minute behind the desk counts. A card-only machine sells without anyone watching it, early in the morning and late at night.",
        "Bigger gyms with high footfall usually suit our Standard plan, with no monthly fee. Smaller studios usually suit Small Team, with a small monthly fee that drops away when the machine sells well. Both start with a one-off installation fee.",
        "Sports clubs, pools and leisure centres have their own page: [stadiums and sports centres](/vending-machines/sports-venues).",
      ],
      points: [
        "Protein, water and sports drinks",
        "Toiletries for the changing room",
        "Sells when reception is closed",
        "Card-only, so no cash at the desk",
      ],
    },
  ],
  stock: {
    intro: "Gym machines are about recovery and the changing room, with a few treats on the side.",
    groups: [
      { title: "Hydration", items: ["Font Vella", "Powerade", "Aquarius"] },
      { title: "Protein", items: ["Grenade protein bars", "Wowhydrate protein water"] },
      {
        title: "Soft drinks & treats",
        items: ["Coca-Cola", "7Up", "Sugar-free soft drinks", "Cadbury", "Kettle Chips"],
      },
      {
        title: "Changing room",
        items: ["Sanex shower gel", "Original Source", "Head & Shoulders", "Pantene", "Sanex deodorant", "Simple face wash"],
      },
    ],
  },
  spots: [
    {
      title: "Reception",
      text: "Members pass it on the way in and out, and your staff can keep an eye on it.",
    },
    {
      title: "Outside the changing rooms",
      text: "Shower gel, shampoo and deodorant right where people need them.",
    },
    {
      title: "The gym floor",
      text: "Water and sports drinks within reach of the weights and the machines.",
    },
    {
      title: "By the studio door",
      text: "Catches class members before and after a session.",
    },
  ],
  plan: {
    text: "Gyms are priced on daily footfall, so busy gyms suit Standard and smaller studios suit Small Team. We'll tell you which after a free site visit.",
    fits: [
      { plan: "Standard", when: "Busy and mid-sized gyms" },
      { plan: "Small Team", when: "Small studios and boxes" },
      { plan: "Profit Sharing", when: "The busiest gyms, by invitation" },
    ],
  },
  proof: {
    heading: "Already where *Gibraltar trains.*",
    text: "Players, coaches and visitors already use our machine at Europa Point Stadium, where Gibraltar's national football team plays.",
    locations: ["Europa Point Stadium"],
  },
  faqTitle: "Gym vending, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in my gym in Gibraltar?",
      answer:
        "Yes. We supply and run vending machines for gyms, fitness studios, CrossFit boxes and sports clubs. We stock the machine, service it and fix it, and members pay by card or phone.",
    },
    {
      question: "Do your gym machines stock protein products?",
      answer:
        "Yes. We stock Grenade protein bars and Wowhydrate protein water alongside Font Vella water and sports drinks such as Powerade and Aquarius.",
    },
    {
      question: "Can the machine sell shower and changing room essentials?",
      answer:
        "Yes. We can stock shower gel, shampoo, deodorant, face wash, hand cream and dental kits, which members often forget to bring.",
    },
    {
      question: "What about the drinks fridge we already have?",
      answer:
        "The machine usually replaces it, so your staff no longer have to restock a fridge or take payments for drinks. We'll talk through what you sell now on the site visit.",
    },
    {
      question: "Does my gym need to be big?",
      answer:
        "No. Small studios usually suit our Small Team plan, and the monthly fee drops away when the machine sells well. Busier gyms go on Standard, which has no monthly fee.",
    },
    {
      question: "Can members use the machine at 6am?",
      answer:
        "Yes, if they can get in. The machine runs around the clock, so early and late sessions are covered whenever your doors are open.",
    },
    {
      question: "Do you stock sugar-free drinks?",
      answer:
        "Yes. We can include sugar-free soft drinks alongside water, sports drinks and protein water, then adjust the mix as we see what your members buy.",
    },
    {
      question: "Can a machine go in a CrossFit box or martial arts club?",
      answer:
        "Yes. Smaller training spaces usually suit our Small Team plan, and a machine by the entrance gives members water and protein before and after class.",
    },
  ],
  related: ["sports-venues", "leisure-venues", "residential-buildings"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our gym.",
};

export default gyms;
