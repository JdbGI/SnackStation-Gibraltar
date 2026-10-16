import type { SectorContent } from "./types";

const airportAndTransport: SectorContent = {
  title: "Airport & Transport Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for terminals, waiting areas, car parks and coach parks in Gibraltar. Snacks and drinks for travellers, at no cost to most sites.",
  headline: "Airport and transport vending in *Gibraltar.*",
  intro:
    "Flights, cruise ships, buses and coaches bring a constant flow of people through Gibraltar, and most of them spend some of the trip waiting. A machine gives them a drink and a snack while they do.",
  facts: [
    { label: "Usual plan", value: "Free Placement for waiting areas" },
    { label: "Best spots", value: "Terminals, car park lifts, coach and taxi ranks" },
    { label: "Popular picks", value: "Font Vella, Coca-Cola, Kettle Chips" },
  ],
  ticker: [
    "Airport",
    "Cruise terminal",
    "Coach parks",
    "Car parks",
    "Bus routes",
    "Card-only",
    "Free Placement",
  ],
  sections: [
    {
      heading: "Where people wait",
      body: [
        "Gibraltar International Airport handles flights to and from the UK, the cruise terminal on the North Mole welcomes ship passengers through the season, and buses and coaches carry residents and day visitors around the Rock.",
        "All of them involve waiting: for a delayed flight, for the rest of a coach party, for the next bus or for the walk back to the ship. A machine in the right spot gives people a drink and a snack while they wait.",
        "Delays are the classic example. When a flight is held, a lot of people suddenly have an hour to fill and nowhere to go.",
      ],
    },
    {
      heading: "Car parks and coach parks",
      body: [
        "Multi-storey car parks such as Midtown, coach parks and taxi ranks see a lot of people pass through. Drivers waiting for passengers, coach drivers on a break and families heading back to the car are all likely customers.",
        "Taxi drivers waiting for fares at the airport or the cruise terminal also spend long stretches in their cars. A machine near the rank gives them a drink without losing their place.",
        "Machines can go indoors or outside, so a covered spot by a car park lift or pay station can work as well as a terminal building.",
        "Coach parks are busiest when cruise ships and coach tours arrive, with groups gathering before they set off and again before they leave.",
      ],
    },
    {
      heading: "Built for busy public spaces",
      body: [
        "Transport sites need machines that are quick to use. Ours are card-only and take contactless cards and phone payments, including cards issued in Spain and further afield, so nobody needs the right change in pounds.",
        "Waiting areas are on our Free Placement list, so most transport sites pay nothing for the machine. We install it, restock it from its sales data and repair it if anything goes wrong. Plenty of travellers stay nearby, which is why we also run machines in [hotels](/vending-machines/hotels).",
      ],
      points: [
        "Free Placement for public waiting areas",
        "Card and phone payments from anywhere",
        "Indoor or covered outdoor spots",
        "Restocked from sales data",
      ],
    },
  ],
  stock: {
    intro:
      "Travellers want a drink, something to eat on the move and, now and then, the toothbrush they left at home.",
    groups: [
      { title: "Drinks", items: ["Font Vella", "Coca-Cola", "Pepsi", "Fanta", "Aquarius", "Lipton Ice Tea"] },
      { title: "Snacks", items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles", "Grenade bars"] },
      {
        title: "Travel essentials",
        items: ["Dental kits", "Colgate Plax", "Sanex deodorant", "Nivea hand cream", "Femfresh wipes"],
      },
    ],
  },
  spots: [
    {
      title: "Terminal waiting areas",
      text: "The obvious spot: seats, people and time to spare.",
    },
    {
      title: "Arrivals",
      text: "For travellers who've just landed and want a drink before they set off.",
    },
    {
      title: "Car park lift lobbies",
      text: "Every driver passes the lifts, and a machine there is easy to find and easy to restock.",
    },
    {
      title: "Coach and taxi ranks",
      text: "For drivers on a break and groups waiting to move on, in a covered spot with power.",
    },
  ],
  plan: {
    text: "Waiting areas see so many people that they usually qualify for Free Placement. Staff-only depots are priced by headcount.",
    fits: [
      { plan: "Free Placement", when: "Terminals, waiting areas and car parks" },
      { plan: "Standard", when: "Transport depots and staff rooms" },
    ],
  },
  proof: {
    heading: "Trusted by *travellers.*",
    text: "Travellers already use our machines at the Holiday Inn Express on Devil's Tower Road, a few minutes from the airport, and at the Rock Hotel.",
    locations: ["Holiday Inn Express", "Rock Hotel Lobby"],
  },
  faqTitle: "Transport vending, *answered.*",
  faqs: [
    {
      question: "Can you put vending machines at transport sites in Gibraltar?",
      answer:
        "Yes. We supply and run machines for terminals, waiting areas, car parks, coach parks and transport depots across Gibraltar.",
    },
    {
      question: "Do transport sites pay for the machine?",
      answer:
        "Most don't. Public waiting areas and busy terminals usually qualify for Free Placement, with no installation fee and no monthly fee. Staff-only depots are priced by headcount.",
    },
    {
      question: "Can passengers from abroad pay?",
      answer:
        "Yes. The machines take contactless cards and phone payments, including cards from Spain, the UK and elsewhere. There's no cash, so nobody needs pounds.",
    },
    {
      question: "Can a machine go in a car park?",
      answer:
        "Yes. Machines can go indoors or outside, so a covered spot by the lifts or pay machines works well, as long as there's power.",
    },
    {
      question: "Do you stock travel essentials?",
      answer:
        "Yes. Alongside drinks and snacks we can stock dental kits, mouthwash, deodorant and hand cream, which travellers often forget.",
    },
    {
      question: "How do you keep a busy machine stocked?",
      answer:
        "Our stock tracking shows us what's selling and when, so busy transport machines get restocked more often, especially in summer and through the cruise season.",
    },
    {
      question: "Can you put a machine in a bus or coach depot?",
      answer:
        "Yes. Depots and staff rooms for drivers and engineers usually suit our Standard plan. Drivers on early and late runs can grab a drink before they set off.",
    },
    {
      question: "Will the machine cope on a busy cruise day?",
      answer:
        "Yes. Card payments keep the queue moving when a lot of people pass through at once, and we can restock beforehand if you share the ship schedule with us.",
    },
  ],
  related: ["hotels", "tourist-attractions", "marinas"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for a transport site.",
};

export default airportAndTransport;
