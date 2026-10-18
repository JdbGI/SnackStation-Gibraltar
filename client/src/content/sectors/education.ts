import type { SectorContent } from "./types";

const education: SectorContent = {
  title: "College & University Vending in Gibraltar | SnackStation",
  description:
    "Vending machines for universities, colleges, schools and student housing in Gibraltar. Snacks and drinks for students and staff, run by our local team.",
  updated: "2026-10-18",
  headline: "University, college and school vending in *Gibraltar.*",
  intro:
    "Students study late, lecturers teach back to back and school staff rooms are busy from the first bell. A vending machine gives them all a drink and a snack on site, and we look after everything.",
  facts: [
    { label: "Usual plan", value: "Standard for busy campuses" },
    { label: "Best spots", value: "Common rooms, library entrances, staff rooms" },
    { label: "Popular picks", value: "Font Vella, Kettle Chips, Grenade bars" },
  ],
  ticker: [
    "University",
    "Colleges",
    "Schools",
    "Student housing",
    "Staff rooms",
    "Card-only",
    "Fully managed",
  ],
  sections: [
    {
      heading: "Students, lecturers and late nights",
      body: [
        "The University of Gibraltar has been at Europa Point since it opened in 2015, with student studios nearby at Europa Suites. Gibraltar College is on Line Wall Road and is due to move to a new campus at Europa Point. Add the schools and the training centres, and education brings a lot of people together every day.",
        "Europa Point is a long way from the shops on Main Street, and a student on a study day doesn't want to walk into town for a drink. A machine in a common room or by the library keeps them on campus and is there whenever the building is open.",
        "Staff benefit too. Lecturers and support staff often eat between classes, and a machine in the staff room saves them the walk.",
      ],
    },
    {
      heading: "Schools and staff rooms",
      body: [
        "Every school sets its own rules on food and drink for pupils, and we follow them. In schools, our machines usually go in staff rooms and staff areas, where teachers and support staff get a few minutes between lessons.",
        "For sixth forms and colleges, a machine in a student area can carry a range that suits older students. We agree it with you before the machine goes in.",
      ],
    },
    {
      heading: "Student accommodation",
      body: [
        "Student residences are a natural fit. Students keep late hours, and a machine in the lobby or common room sells drinks, snacks and toiletries when the shops are shut.",
        "Our page on [apartment buildings and student housing](/vending-machines/residential-buildings) covers residential machines in more detail.",
      ],
      points: [
        "Machines for students and staff",
        "We follow each school's food rules",
        "Snacks and toiletries for student housing",
        "No cash on campus",
      ],
    },
  ],
  stock: {
    intro:
      "Student machines have plenty of variety, while staff room machines stick to the quick drinks and treats teachers reach for between lessons. We agree the range with you first.",
    groups: [
      { title: "Water & juice", items: ["Font Vella", "Aquarius", "Oasis", "Simon Life"] },
      { title: "Soft drinks", items: ["Coca-Cola", "Pepsi", "Fanta", "7Up", "Tango"] },
      {
        title: "Study snacks",
        items: ["Kettle Chips", "Cadbury", "M&M's", "Skittles", "Swizzels Squashies"],
      },
      { title: "Lighter picks", items: ["Grenade bars", "Wowhydrate", "Sugar-free soft drinks"] },
    ],
  },
  spots: [
    {
      title: "Student common room",
      text: "Where students already meet between lectures. Usually the busiest spot on a campus.",
    },
    {
      title: "Library entrance",
      text: "For long study sessions, especially around exams.",
    },
    {
      title: "Staff room",
      text: "For teachers, lecturers and support staff, away from students.",
    },
    {
      title: "Accommodation lobby",
      text: "For residents who want a drink, a snack or a toothbrush late at night.",
    },
  ],
  plan: {
    text: "Busy campuses and big student residences usually go on Standard. School staff rooms suit Small Team or Standard, depending on staff numbers.",
    fits: [
      { plan: "Standard", when: "Campuses, colleges and large staff rooms" },
      { plan: "Small Team", when: "School staff rooms of 20 to 60" },
      { plan: "Profit Sharing", when: "The busiest campuses, by invitation" },
    ],
  },
  proof: {
    heading: "Trusted across *Gibraltar.*",
    text: "Our machines already run in busy places like Europa Point Stadium, close to the University's campus, and in offices such as Gibtelecom and GBC.",
    locations: ["Europa Point Stadium", "Gibtelecom Mount Pleasant", "Gibraltar Broadcasting Corporation"],
  },
  faqTitle: "Education vending, *answered.*",
  faqs: [
    {
      question: "Can you put a vending machine in a school in Gibraltar?",
      answer:
        "Yes, in staff rooms and staff areas, and in student areas where the school is happy for us to. Every school sets its own food rules for pupils, and we stick to them.",
    },
    {
      question: "Do you supply vending machines for university and college campuses?",
      answer:
        "Yes. We can place machines in common rooms, libraries, study areas and student accommodation. Busy campuses usually suit our Standard plan, with no monthly fee.",
    },
    {
      question: "Can the school or college choose what goes in the machine?",
      answer:
        "Yes. We agree the range with you before the machine goes in and can change it whenever you like. If you want the focus on water, juice and lighter snacks, that's easy to do.",
    },
    {
      question: "What happens in the holidays when the campus is quiet?",
      answer:
        "We plan restocking around term dates, so we visit less often when the campus is quiet. The agreement keeps running as normal.",
    },
    {
      question: "Do students need cash?",
      answer:
        "No. The machines take cards, contactless and phone payments, which is how most students pay anyway.",
    },
    {
      question: "Can a machine go in student accommodation?",
      answer:
        "Yes. A machine in a lobby or common room gives residents drinks, snacks and travel toiletries at any time, without a trip into town.",
    },
    {
      question: "Do you put machines in training centres?",
      answer:
        "Yes. Training centres, language schools and anywhere people study or sit exams can work well, especially when courses run into the evening.",
    },
    {
      question: "How much does a machine cost for a school staff room?",
      answer:
        "Most school staff rooms suit our Small Team plan: a one-off installation fee and a small monthly fee, which drops away when the machine sells well. Larger staff rooms may suit Standard, which has no monthly fee.",
    },
    {
      question: "Can lecturers and students share a machine?",
      answer:
        "Yes. On a small campus, one machine in a busy shared area can serve everyone. On a bigger one, a separate machine in the staff room keeps lecturers out of the queue between classes.",
    },
  ],
  related: ["residential-buildings", "government-buildings", "sports-venues"],
  enquiry: "Hi SnackStation! I'd like to find out about a vending machine for our school, college or campus.",
};

export default education;
