// Sydney suburb pages (home visits from 9 November 2026).
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
      "Mobile physiotherapy in Sydney Olympic Park from 9 November 2026. Home visits for older adults, NDIS and Support at Home clients — falls prevention, rehab after hospital and pain care.",
    intro:
      "Home visit physiotherapy in Sydney Olympic Park from 9 November 2026 — for older adults, NDIS participants, Support at Home clients and people recovering after hospital.",
    local: [
      "Sydney Olympic Park is the centre of our Sydney service area. Its growing residential precinct sits alongside Newington and Wentworth Point, with many residents living in apartments around the town centre and parklands.",
      "Because we're based around Sydney Olympic Park, it's where we can usually offer the most flexible appointment times for Sydney clients.",
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
        a: "No. In Sydney we are a mobile service — we come to your home, retirement village or aged care residence. Our clinics are in Newcastle (Jesmond and Elermore Vale).",
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
      "Home visit physiotherapy in Concord from 9 November 2026. Rehab after hospital discharge, falls prevention, NDIS and Support at Home physio in your own home.",
    intro:
      "Home visit physiotherapy in Concord from 9 November 2026 — supporting older adults, people coming home from hospital, NDIS participants and Support at Home clients.",
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
      "Mobile physiotherapy in Strathfield from 9 November 2026. Home visits for falls prevention, strength and balance, pain and rehab — NDIS, Support at Home and private.",
    intro:
      "Home visit physiotherapy in Strathfield from 9 November 2026 — strength, balance, falls prevention and rehabilitation in your own home.",
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
      "Home visit physiotherapy in Homebush from 9 November 2026. Mobile physio for older adults, NDIS and Support at Home clients — mobility, falls prevention and rehab at home.",
    intro:
      "Home visit physiotherapy in Homebush from 9 November 2026 — practical, goal-focused physiotherapy without needing to travel.",
    local: [
      "Homebush sits between Strathfield and Sydney Olympic Park, with a mix of older homes and apartments close to Homebush station and Parramatta Road.",
      "It's right next to our Sydney Olympic Park base, so Homebush residents are among the easiest for us to reach.",
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
        a: "Sydney home visits start on 9 November 2026. Call us and we'll let you know the next available time — Homebush is close to our base, so it's usually one of the easier areas for us to fit in.",
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
      "Mobile physiotherapy in Rhodes from 9 November 2026. Apartment-friendly home visits for older adults, rehab after hospital, NDIS and Support at Home physiotherapy.",
    intro:
      "Home visit physiotherapy in Rhodes from 9 November 2026 — physiotherapy that fits apartment living, delivered in your own home.",
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
      "Home visit physiotherapy in Lidcombe from 9 November 2026. Mobile physio for older adults, NDIS and Support at Home clients — strength, balance and rehab at home.",
    intro:
      "Home visit physiotherapy in Lidcombe from 9 November 2026 — for older adults, NDIS participants, Support at Home clients and families.",
    local: [
      "Lidcombe is an established, diverse residential suburb around Lidcombe station — the rail junction for services to Sydney Olympic Park — with a mix of houses and newer apartments.",
      "It's a short drive from our Sydney Olympic Park base, making it an easy area for regular home visits.",
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
        a: "Options include NDIS, Support at Home (formerly Home Care Packages), Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), DVA, or private payment. We'll explain what applies to you.",
      },
    ],
  },
];

export const sydneySuburbSlugs = sydneySuburbs.map((s) => s.slug);
