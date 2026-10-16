import type { SectorContent } from "./types";

const gamingAndFinance: SectorContent = {
  title: "iGaming & Finance Office Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for Gibraltar's online gaming, fintech and insurance firms. Snacks and drinks for every shift, fully managed by our local team.",
  headline: "Vending for gaming and finance firms in *Gibraltar.*",
  intro:
    "Online gaming, fintech and insurance employ thousands of people in Gibraltar, and plenty of them work shifts that run late into the night. A machine on the floor keeps every shift fed without anyone leaving the building.",
  facts: [
    { label: "Usual plan", value: "Standard for most firms" },
    { label: "Best spots", value: "Break-out areas and a kitchen on each floor" },
    { label: "Popular picks", value: "Grenade bars, Coca-Cola, Font Vella" },
  ],
  ticker: [
    "iGaming",
    "Fintech",
    "Insurance",
    "Every shift",
    "Card-only",
    "Multi-floor offices",
    "Fully managed",
  ],
  sections: [
    {
      heading: "Shifts that run around the clock",
      body: [
        "Online gaming employs around 3,500 people in Gibraltar, and the big operators run customer support, trading and risk teams well beyond office hours. Insurance and fintech firms keep long hours too, especially around renewals, product launches and month end.",
        "When a shift runs past midnight, the shops on Main Street are long shut and a takeaway takes a while to arrive. A vending machine on the floor puts a drink or a snack a few steps away at any hour.",
        "A lot of staff also cross the frontier from Spain every day. When you leave home early and get back late, anything that saves a trip out of the building is welcome.",
      ],
    },
    {
      heading: "One machine or one per floor",
      body: [
        "Gaming and finance firms often spread over several floors, in places like Europort, the World Trade Center on Bayside Road, Ocean Village and Midtown. We look at how people move around your building and suggest whether one central machine or one on each floor will work better.",
        "Large teams mean steady sales, so most firms of this size go on our Standard plan: a one-off installation fee, no monthly fee and no machine to buy. Smaller studios and start-ups may suit Small Team, and our busiest sites can be invited onto Profit Sharing. The [office vending page](/vending-machines/offices) explains how headcount sets the plan.",
      ],
    },
    {
      heading: "No admin for your office team",
      body: [
        "Office and facilities managers in these firms have enough on their plates. The machine is card-only, so there's no cash to handle, and there's no stock to order or supplier to chase. Our stock tracking tells us what's selling and we plan our visits around it.",
        "Regulated businesses take security seriously, so we agree restocking times and access with your reception or facilities team before the machine goes in, and keep to your site rules on every visit.",
        "If you run a staff wellbeing programme, we can lean the range towards water, protein bars and sugar-free drinks while keeping the favourites people ask for.",
      ],
      points: [
        "Machines that run around the clock",
        "One per floor or one central machine",
        "Restocking that fits your access rules",
        "A plan sized to your headcount",
      ],
    },
  ],
  stock: {
    intro:
      "For long shifts we stock plenty of water and protein alongside the usual treats, and we tune the mix to what your teams actually buy.",
    groups: [
      { title: "Hydration", items: ["Font Vella", "Aquarius", "Powerade", "Wowhydrate"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "7Up", "Lipton Ice Tea", "Oasis"] },
      { title: "Protein & lighter", items: ["Grenade protein bars", "Sugar-free soft drinks"] },
      { title: "Treats", items: ["Cadbury", "M&M's", "Kettle Chips", "Skittles"] },
    ],
  },
  spots: [
    {
      title: "Break-out areas",
      text: "Where people already go to step away from their screens, so the machine gets used on every shift.",
    },
    {
      title: "A kitchen on each floor",
      text: "In a building with several floors, a machine on each one saves people waiting for the lift at the busiest times.",
    },
    {
      title: "Near the support floor",
      text: "Night teams can grab something in seconds without being away from their desks for long.",
    },
    {
      title: "Beside the canteen",
      text: "If you already have a canteen, a machine next to it covers the hours when the canteen is closed.",
    },
  ],
  plan: {
    text: "Most gaming and finance offices have the headcount for Standard, and smaller firms go on Small Team. Profit Sharing is by invitation, for our busiest sites. A free site visit settles which one.",
    fits: [
      { plan: "Standard", when: "60 or more staff" },
      { plan: "Small Team", when: "20 to 60 staff" },
      { plan: "Profit Sharing", when: "Our busiest sites, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted by *big teams.*",
    text: "Our machines already look after large Gibraltar workforces that work around the clock, including Gibtelecom at Mount Pleasant and the Gibraltar Defence Police headquarters.",
    locations: ["Gibtelecom Mount Pleasant", "Gibraltar Defence Police HQ"],
  },
  faqTitle: "Gaming and finance, *answered.*",
  faqs: [
    {
      question: "Do you put vending machines in iGaming offices in Gibraltar?",
      answer:
        "Yes. We supply and run vending machines for offices of every size in Gibraltar, including the large, shift-based teams in online gaming, fintech and insurance. We install, stock, service and repair the machine, and your staff pay by card or phone.",
    },
    {
      question: "Our office runs 24 hours a day. Will the machine keep up?",
      answer:
        "Yes. The machine runs around the clock, and our stock tracking shows us what sells on each shift, so we can restock before the night team runs short.",
    },
    {
      question: "We have staff on several floors. How many machines do we need?",
      answer:
        "It depends on the layout and how many people work on each floor. Some firms do best with one central machine in a busy break area, others with one per floor. We'll recommend a setup when we visit.",
    },
    {
      question: "What does a vending machine cost a large company?",
      answer:
        "Large offices usually go on our Standard plan: a one-off installation fee, no monthly fee and nothing to buy. There's a 12-month minimum term, and if the machine doesn't sell, we remove it at our cost.",
    },
    {
      question: "Can the range support our staff wellbeing programme?",
      answer:
        "Yes. We can weight the range towards water, sugar-free drinks and protein bars and still keep a few favourites in. Tell us what you're aiming for and we'll set the machine up around it.",
    },
    {
      question: "How do you handle access to a secure office?",
      answer:
        "We agree restocking times and access with your facilities or reception team before the machine goes in, and our team follows your sign-in rules on every visit.",
    },
  ],
  related: ["offices", "business-centres", "gyms"],
  enquiry: "Hi SnackStation! I'd like to find out about vending machines for our gaming or finance office.",
};

export default gamingAndFinance;
