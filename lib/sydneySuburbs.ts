// Sydney suburb pages (home visits).
// Keep this list small and genuinely local — only add a suburb when there is
// something specific and true to say about it. Facts checked October 2026.

export type SydneySuburb = {
  slug: string;
  name: string;
  postcode: string;
  council: string;
  metaDescription: string;
  intro: string;
  local: string[];
  homeVisitNotes: string[];
  hospitals: { name: string; note: string }[];
  nearby: string[];
  faqs: { q: string; a: string }[];
};

const CRGH = {
  name: "Concord Repatriation General Hospital (Concord West)",
  note: "Large teaching hospital with an Aged Chronic Care & Rehabilitation service — a common hospital for residents of the inner west.",
};
const AUBURN = {
  name: "Auburn Hospital (Auburn)",
  note: "Community hospital in the Western Sydney Local Health District.",
};
const BANKSTOWN_HOSP = {
  name: "Bankstown-Lidcombe Hospital (Bankstown)",
  note: "Major public hospital in the South Western Sydney Local Health District, with aged care and rehabilitation services.",
};
const FAIRFIELD_HOSP = {
  name: "Fairfield Hospital (Prairiewood)",
  note: "Community hospital in the South Western Sydney Local Health District.",
};
const LIVERPOOL_HOSP = {
  name: "Liverpool Hospital (Liverpool)",
  note: "Large teaching hospital in the South Western Sydney Local Health District.",
};
const ROYAL_REHAB = {
  name: "Royal Rehab Private (Ryde)",
  note: "Inpatient and outpatient rehabilitation hospital.",
};

export const sydneySuburbs: SydneySuburb[] = [
  {
    slug: "physiotherapy-sydney-olympic-park",
    name: "Sydney Olympic Park",
    postcode: "2127",
    council: "City of Parramatta",
    metaDescription:
      "Mobile physio in Sydney Olympic Park. Home visits for older adults, NDIS and Support at Home — falls prevention and rehab.",
    intro:
      "Home visit physiotherapy in Sydney Olympic Park — for older adults, NDIS participants, Support at Home clients and people recovering after hospital.",
    local: [
      "Sydney Olympic Park is the centre of our Sydney service area. Its growing residential precinct sits alongside Newington and Wentworth Point, with many residents living in apartments around the town centre and parklands.",
      "It's one of the areas where we can usually offer the most flexible home visit times for Sydney clients.",
    ],
    homeVisitNotes: [
      "Apartment living brings its own challenges — lifts, long corridors, car-park access and compact bathrooms. Seeing you at home lets us practise the exact routes and transfers you use every day.",
      "We can also include the paths and parklands you want to walk in, so your program builds confidence for getting out and about, not just moving around the unit.",
    ],
    hospitals: [CRGH, AUBURN],
    nearby: ["Newington", "Wentworth Point", "Homebush", "Lidcombe", "Rhodes"],
    faqs: [
      {
        q: "Do you have a clinic in Sydney Olympic Park?",
        a: "No. In Sydney Olympic Park we come to you — at home, in a retirement village or an aged care residence. Our nearest clinics are in Parramatta (Wednesdays) and Yagoona (Tuesdays).",
      },
      {
        q: "Can you visit me in an apartment building?",
        a: "Yes. Most of our Sydney Olympic Park visits will be in apartments. Let us know about parking, building access and lifts when you book, and we'll plan the visit around them.",
      },
    ],
  },
  {
    slug: "physiotherapy-concord",
    name: "Concord",
    postcode: "2137",
    council: "City of Canada Bay",
    metaDescription:
      "Home visit physio in Concord. Rehab after hospital discharge, falls prevention, NDIS and Support at Home physio at home.",
    intro:
      "Home visit physiotherapy in Concord — supporting older adults, people coming home from hospital, NDIS participants and Support at Home clients.",
    local: [
      "Concord is an established residential suburb in the City of Canada Bay, with many long-term residents in family homes — people who want to stay living independently in the home they know.",
      "It's also close to Concord Repatriation General Hospital in Concord West, so many residents are recovering at home after a hospital stay, surgery or a period of rehabilitation.",
    ],
    homeVisitNotes: [
      "The weeks after leaving hospital are when strength and confidence are often at their lowest. Home physiotherapy lets you keep progressing without the effort of travelling to appointments.",
      "In older homes we often look at front steps, internal stairs, bathroom access and getting in and out of the car — the practical things that decide whether someone can stay safely at home.",
    ],
    hospitals: [CRGH, ROYAL_REHAB],
    nearby: ["Concord West", "North Strathfield", "Rhodes", "Cabarita", "Mortlake", "Strathfield"],
    faqs: [
      {
        q: "Can you continue my rehab after Concord Hospital?",
        a: "Yes. With your consent we can liaise with your discharge team or GP, then continue your rehabilitation at home. Bring any discharge paperwork or exercise sheets to your first visit.",
      },
      {
        q: "Do I need a referral from the hospital?",
        a: "No. You can book privately without a referral. A GP referral is only needed for Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP).",
      },
    ],
  },
  {
    slug: "physiotherapy-strathfield",
    name: "Strathfield",
    postcode: "2135",
    council: "Strathfield Municipal Council",
    metaDescription:
      "Mobile physio in Strathfield. Home visits for falls prevention, strength, balance, pain and rehab — NDIS, Support at Home, private.",
    intro:
      "Home visit physiotherapy in Strathfield — strength, balance, falls prevention and rehabilitation in your own home.",
    local: [
      "Strathfield combines established, leafy residential streets with newer apartments around Strathfield station, one of Sydney's major rail interchanges.",
      "Many older residents and their families want care that comes to them — especially when getting through a busy station or finding parking makes clinic visits hard work.",
    ],
    homeVisitNotes: [
      "For larger, multi-level homes we focus on stairs, outdoor steps and garden access as well as indoor mobility. In apartments, we work on lifts, corridors and getting to local shops and transport.",
      "Families are welcome to join sessions, so everyone understands the program and how to help between visits.",
    ],
    hospitals: [CRGH, AUBURN],
    nearby: ["Homebush", "North Strathfield", "Strathfield South", "Burwood", "Concord"],
    faqs: [
      {
        q: "Can my family join the physiotherapy session?",
        a: "Yes. Family members and carers are welcome, and it often helps — they can learn the exercises and safety strategies and support practice between visits.",
      },
      {
        q: "Can you help after a fall?",
        a: "Yes. We assess strength, balance and walking, look at what may have contributed to the fall, review hazards at home and build a program to help you regain confidence. If you've fallen, please also let your GP know.",
      },
    ],
  },
  {
    slug: "physiotherapy-homebush",
    name: "Homebush",
    postcode: "2140",
    council: "Strathfield Municipal Council",
    metaDescription:
      "Home visit physio in Homebush. Mobile physio for older adults, NDIS and Support at Home — mobility, falls prevention and rehab.",
    intro:
      "Home visit physiotherapy in Homebush — practical, goal-focused physiotherapy without needing to travel.",
    local: [
      "Homebush sits between Strathfield and Sydney Olympic Park, with a mix of older homes and apartments close to Homebush station and Parramatta Road.",
      "It's right next to Sydney Olympic Park, so Homebush residents are among the easiest for us to reach.",
    ],
    homeVisitNotes: [
      "Home visits suit people who find it difficult to get across busy roads or onto public transport, and anyone who'd rather spend their energy on rehabilitation than on getting to appointments.",
      "We tailor programs to your own home layout — steps, narrow hallways, bathrooms and outdoor areas.",
    ],
    hospitals: [CRGH, AUBURN],
    nearby: ["Homebush West", "Strathfield", "North Strathfield", "Concord", "Sydney Olympic Park"],
    faqs: [
      {
        q: "How soon can I get an appointment in Homebush?",
        a: "Call us and we'll let you know the next available time — Homebush is close to our base, so it's usually one of the easier areas for us to fit in.",
      },
      {
        q: "Do you see NDIS participants in Homebush?",
        a: "Yes. We're a registered NDIS provider and see agency-managed, plan-managed and self-managed participants.",
      },
    ],
  },
  {
    slug: "physiotherapy-rhodes",
    name: "Rhodes",
    postcode: "2138",
    council: "City of Canada Bay",
    metaDescription:
      "Mobile physio in Rhodes. Apartment-friendly home visits for older adults, rehab after hospital, NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Rhodes — physiotherapy that fits apartment living, delivered in your own home.",
    local: [
      "Rhodes is a high-density waterfront suburb on the Parramatta River, linked to Wentworth Point by the Bennelong Bridge and served by Rhodes station.",
      "It borders Concord West, home to Concord Repatriation General Hospital, so we expect many Rhodes clients to be recovering at home after a hospital stay.",
    ],
    homeVisitNotes: [
      "Apartment living can make rehab tricky: lifts, building entries, compact bathrooms and limited space for exercise. We design programs that work in the space you actually have.",
      "We can also practise outdoor walking along the foreshore paths, building confidence for getting out in the community.",
    ],
    hospitals: [CRGH, ROYAL_REHAB],
    nearby: ["Concord West", "Wentworth Point", "Liberty Grove", "Concord", "Meadowbank"],
    faqs: [
      {
        q: "Is there enough room in my apartment for physiotherapy?",
        a: "Almost always. We bring compact equipment and use your own furniture, hallway and lift area — practising in your real space is one of the main benefits of a home visit.",
      },
      {
        q: "Can you visit someone in a Rhodes retirement or aged care residence?",
        a: "Yes. We visit private homes, retirement living and aged care residences, and coordinate with staff and families as needed.",
      },
    ],
  },
  {
    slug: "physiotherapy-lidcombe",
    name: "Lidcombe",
    postcode: "2141",
    council: "Cumberland City Council",
    metaDescription:
      "Home visit physio in Lidcombe. Mobile physio for older adults, NDIS and Support at Home — strength, balance and rehab at home.",
    intro:
      "Home visit physiotherapy in Lidcombe — for older adults, NDIS participants, Support at Home clients and families.",
    local: [
      "Lidcombe is an established, diverse residential suburb around Lidcombe station — the rail junction for services to Sydney Olympic Park — with a mix of houses and newer apartments.",
      "It's a short drive from Sydney Olympic Park, making it an easy area for regular home visits.",
    ],
    homeVisitNotes: [
      "Seeing you at home lets us work on what matters in your daily routine — getting in and out of bed and chairs, managing steps, and walking safely to local shops and transport.",
      "Family members and carers are welcome to take part, and we'll keep your GP, provider or support coordinator informed with your consent.",
    ],
    hospitals: [AUBURN, CRGH],
    nearby: ["Auburn", "Berala", "Homebush West", "Sydney Olympic Park", "Regents Park"],
    faqs: [
      {
        q: "Can a family member help organise physiotherapy for my parent?",
        a: "Yes. Many enquiries come from adult children. With your parent's consent we'll discuss their needs, funding and the best time to visit, and keep you updated.",
      },
      {
        q: "How is physiotherapy paid for?",
        a: "Options include NDIS, Support at Home (formerly Home Care Packages), Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), or private payment. We'll explain what applies to you.",
      },
    ],
  },

  {
    slug: "physiotherapy-bankstown",
    name: "Bankstown",
    postcode: "2200",
    council: "City of Canterbury-Bankstown",
    metaDescription:
      "Physio for Bankstown: home visits plus our nearby Yagoona clinic (Tuesdays). Older adults, NDIS, Support at Home and bulk billing for eligible patients.",
    intro:
      "Physiotherapy for Bankstown residents — home visits for older adults, NDIS participants and Support at Home clients, or see us at our Yagoona clinic next door.",
    local: [
      "Bankstown is a large, diverse centre in south-west Sydney, built around Bankstown station, Bankstown Central and the Chapel Road and Restwell Street shopping strips.",
      "Our Fletcher Physiotherapy Yagoona clinic is just next door, inside Yagoona Family HealthCare at 457 Hume Highway (Tuesdays, book on 02 8766 2477). If getting out is hard, we can come to you at home instead.",
    ],
    homeVisitNotes: [
      "Many of our clients are older adults who find travel, parking and waiting rooms tiring. At home we work on the things you do every day — getting up from chairs and bed, managing steps and walking to the shops.",
      "Family members and carers are welcome to join in, and with your consent we keep your GP, Support at Home provider or support coordinator informed.",
    ],
    hospitals: [BANKSTOWN_HOSP, AUBURN],
    nearby: ["Yagoona", "Bass Hill", "Condell Park", "Greenacre", "Punchbowl", "Birrong", "Georges Hall", "Chester Hill"],
    faqs: [
      {
        q: "Is there a physio clinic near Bankstown?",
        a: "Yes. Fletcher Physiotherapy Yagoona is inside Yagoona Family HealthCare, 457 Hume Highway, Yagoona. We consult there on Tuesdays — book through the clinic on 02 8766 2477. Bulk billing is available for eligible patients on a GP Chronic Condition Management Plan (GPCCMP).",
      },
      {
        q: "Can you visit my parent at home in Bankstown?",
        a: "Yes. Home visits suit older adults who find it hard to get to a clinic. Call us to check availability, and with your parent's consent we'll talk through their needs and funding.",
      },
    ],
  },
  {
    slug: "physiotherapy-cabramatta",
    name: "Cabramatta",
    postcode: "2166",
    council: "Fairfield City Council",
    metaDescription:
      "Physiotherapy for Cabramatta: our Yagoona clinic (Tuesdays) is a short drive away, with home visits for older adults and NDIS participants where available.",
    intro:
      "Physiotherapy for Cabramatta residents — at our Yagoona clinic a short drive away, or at home for older adults, NDIS participants and Support at Home clients where available.",
    local: [
      "Cabramatta is a busy, multicultural centre in south-west Sydney, known for its John Street and Freedom Plaza shopping area and its large Vietnamese and Chinese communities.",
      "Our nearest clinic is Fletcher Physiotherapy Yagoona, inside Yagoona Family HealthCare at 457 Hume Highway — about 15 minutes' drive along the Hume Highway. We consult there on Tuesdays (book on 02 8766 2477).",
    ],
    homeVisitNotes: [
      "If travelling is hard, ask us about a home visit. We'll confirm availability for your street and plan the visit around your day.",
      "At home we can practise the transfers, steps and walking routes you use every day, and set up a simple program that family and carers can help with.",
    ],
    hospitals: [FAIRFIELD_HOSP, LIVERPOOL_HOSP],
    nearby: ["Canley Vale", "Canley Heights", "Lansvale", "Cabramatta West", "Fairfield", "Bass Hill"],
    faqs: [
      {
        q: "Where is your nearest clinic to Cabramatta?",
        a: "Fletcher Physiotherapy Yagoona, inside Yagoona Family HealthCare at 457 Hume Highway, Yagoona. We consult there on Tuesdays — book through the clinic on 02 8766 2477. Bulk billing is available for eligible patients on a GP Chronic Condition Management Plan (GPCCMP).",
      },
      {
        q: "Do you do home visits in Cabramatta?",
        a: "Call us to check. Cabramatta is at the edge of our Sydney home visit area, so availability depends on the day and your location.",
      },
    ],
  },
];

export const sydneySuburbSlugs = sydneySuburbs.map((s) => s.slug);
