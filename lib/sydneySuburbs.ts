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
  covers?: string[];          // suburbs this page covers (grouped pages)
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
const WESTMEAD = {
  name: "Westmead Hospital (Westmead)",
  note: "Major teaching hospital in the Western Sydney Local Health District.",
};
const CANTERBURY = {
  name: "Canterbury Hospital (Campsie)",
  note: "Public hospital in the Sydney Local Health District.",
};
const BALMAIN = {
  name: "Balmain Hospital (Balmain)",
  note: "Sub-acute hospital in the Sydney Local Health District with aged care and rehabilitation services.",
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
    slug: "physiotherapy-wentworth-point",
    name: "Wentworth Point",
    postcode: "2127",
    council: "City of Parramatta",
    metaDescription:
      "Home visit physio in Wentworth Point. Apartment-friendly mobile physio for older adults, NDIS and Support at Home, next to Sydney Olympic Park.",
    intro:
      "Home visit physiotherapy in Wentworth Point — for older adults, NDIS participants, Support at Home clients and anyone recovering after hospital.",
    local: [
      "Wentworth Point is a waterfront apartment peninsula on Homebush Bay, right next to Sydney Olympic Park and linked to Rhodes by the Bennelong Bridge.",
      "It's one of the closest suburbs to the centre of our Sydney home visit area, so it's usually easy for us to find a time that suits you.",
    ],
    homeVisitNotes: [
      "Almost everyone in Wentworth Point lives in an apartment. We plan visits around building access, lifts and visitor parking, and work on the routes you use every day — from the lift to the foyer and out to the street.",
      "The flat foreshore paths around Homebush Bay are a good place to build walking confidence, so we can take part of your program outside when it's safe to do so.",
    ],
    hospitals: [CRGH, AUBURN],
    nearby: ["Sydney Olympic Park", "Newington", "Rhodes", "Homebush Bay", "Silverwater"],
    faqs: [
      {
        q: "Can you visit me in a Wentworth Point apartment?",
        a: "Yes. Tell us about building entry, the lift and where to park when you book, and we'll plan the visit around them.",
      },
      {
        q: "Where is your nearest clinic to Wentworth Point?",
        a: "Our Parramatta clinic (Wednesdays, 02 8320 9300) is the closest. Most Wentworth Point clients prefer home visits, which save the trip altogether.",
      },
    ],
  },
  {
    slug: "physiotherapy-newington",
    name: "Newington & Silverwater",
    postcode: "2127 · 2128",
    council: "City of Parramatta",
    covers: ["Newington", "Silverwater"],
    metaDescription:
      "Mobile physio in Newington and Silverwater. Home visits for older adults, falls prevention, rehab after hospital, NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Newington and Silverwater — practical physio at home for older adults, families and NDIS participants.",
    local: [
      "Newington was built as the Athletes' Village for the Sydney 2000 Olympics and is now a settled residential suburb of townhouses, houses and apartments beside Millennium Parklands.",
      "Neighbouring Silverwater is mainly industrial, with a small residential pocket. Both are a few minutes from Sydney Olympic Park, the centre of our Sydney home visit area.",
    ],
    homeVisitNotes: [
      "Many Newington homes are multi-level townhouses, so stairs often come up. We look at how you manage them, the entry steps and the bathroom, and build a program around your own home.",
      "Millennium Parklands and the Newington Armory paths are close by, which makes it easy to add outdoor walking practice once you're ready.",
    ],
    hospitals: [AUBURN, CRGH],
    nearby: ["Sydney Olympic Park", "Wentworth Point", "Lidcombe", "Auburn", "Homebush Bay"],
    faqs: [
      {
        q: "I live in a townhouse with stairs. Can physio help?",
        a: "Yes. Stairs are one of the most common things we work on at home. We assess how you manage them now and set exercises and strategies to help you use them more safely.",
      },
      {
        q: "Do you visit Silverwater as well as Newington?",
        a: "Yes. We visit both. Call us to check the next available time for your street.",
      },
    ],
  },
  {
    slug: "physiotherapy-breakfast-point",
    name: "Breakfast Point, Cabarita & Mortlake",
    postcode: "2137",
    council: "City of Canada Bay",
    covers: ["Breakfast Point", "Cabarita", "Mortlake"],
    metaDescription:
      "Home visit physio in Breakfast Point, Cabarita and Mortlake. Mobile physio for older adults, falls prevention and rehab, plus NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Breakfast Point, Cabarita and Mortlake — for older adults, retirees and anyone recovering at home.",
    local: [
      "Breakfast Point is a master-planned riverside community on the Parramatta River, built on the former Mortlake gasworks site, with apartments, terraces and a large community of retirees.",
      "Next door, Cabarita is known for Cabarita Park and its ferry wharf, and Mortlake for the Putney–Mortlake vehicle punt. All three are a short drive from Sydney Olympic Park and Concord Hospital.",
    ],
    homeVisitNotes: [
      "We see many retirees here who want to stay active and independent. We focus on strength, balance and walking confidence for the riverside paths, steps and slopes you use every day.",
      "For people coming home from Concord Repatriation General Hospital, home visits are an easy way to keep rehab going without travelling back for appointments.",
    ],
    hospitals: [CRGH, ROYAL_REHAB],
    nearby: ["Concord", "Rhodes", "Abbotsford", "Five Dock", "Concord West"],
    faqs: [
      {
        q: "Do you see retirees in Breakfast Point?",
        a: "Yes. We visit people at home, including in apartments and terraces, and can work with family members or your Support at Home provider with your consent.",
      },
      {
        q: "Can you continue my rehab after Concord Hospital?",
        a: "Yes. With your consent we can liaise with your discharge team or GP and continue your rehab at home. Bring any discharge paperwork or exercise sheets to the first visit.",
      },
    ],
  },
  {
    slug: "physiotherapy-concord-west",
    name: "Concord West & North Strathfield",
    postcode: "2138 · 2137",
    council: "City of Canada Bay",
    covers: ["Concord West", "North Strathfield"],
    metaDescription:
      "Home visit physio in Concord West and North Strathfield, near Concord Hospital. Rehab after discharge, falls prevention, NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Concord West and North Strathfield — continuing your recovery at home after hospital, or staying strong and steady.",
    local: [
      "Concord West is home to Concord Repatriation General Hospital, and its quiet residential streets run between Concord West station and Bicentennial Park.",
      "North Strathfield, one stop down the line, mixes older homes with newer apartments around the Bakehouse Quarter on the old Arnott's biscuit factory site.",
    ],
    homeVisitNotes: [
      "Many people here are recovering at home after a stay at Concord Hospital. Home physio lets you practise getting in and out of bed, the car and the shower in your own home, at your own pace.",
      "For older family homes, we look at front steps, internal stairs and garden access, as well as walking to the local shops and station.",
    ],
    hospitals: [CRGH, ROYAL_REHAB],
    nearby: ["Concord", "Rhodes", "Strathfield", "Homebush", "Liberty Grove"],
    faqs: [
      {
        q: "Can you see me at home after I leave Concord Hospital?",
        a: "Yes. With your consent we can liaise with your discharge team or GP, then continue rehab at home. Fletcher Physiotherapy is independent of the hospital.",
      },
      {
        q: "Do you visit North Strathfield too?",
        a: "Yes. We visit homes and apartments in both Concord West and North Strathfield.",
      },
    ],
  },
  {
    slug: "physiotherapy-homebush-west",
    name: "Homebush West",
    postcode: "2140",
    council: "Strathfield Municipal Council",
    covers: ["Homebush West", "Flemington"],
    metaDescription:
      "Mobile physio in Homebush West and Flemington. Home visits for older adults, NDIS and Support at Home, a few minutes from Sydney Olympic Park.",
    intro:
      "Home visit physiotherapy in Homebush West and around Flemington — practical physio at home, a few minutes from Sydney Olympic Park.",
    local: [
      "Homebush West is a busy, multicultural suburb around Flemington station and the Sydney Markets, with a mix of older houses and newer apartment blocks.",
      "It sits between Lidcombe, Homebush and Sydney Olympic Park, so it's a short trip for our Sydney home visits.",
    ],
    homeVisitNotes: [
      "Busy roads, station stairs and crowded shopping strips can make getting to appointments hard work. Home visits let you spend your energy on the exercises instead.",
      "Family members are welcome to join in. It helps everyone understand the plan and how to help between visits.",
    ],
    hospitals: [AUBURN, CRGH],
    nearby: ["Homebush", "Lidcombe", "Strathfield", "Sydney Olympic Park", "Berala"],
    faqs: [
      {
        q: "Can a family member help book for my parent?",
        a: "Yes. Many enquiries come from adult children. With your parent's consent, we'll talk through their needs, funding and the best time to visit.",
      },
      {
        q: "Can you visit me in an apartment?",
        a: "Yes. Let us know about building access, lifts and parking when you book, and we'll plan the visit around them.",
      },
    ],
  },
  {
    slug: "physiotherapy-auburn",
    name: "Auburn & Berala",
    postcode: "2144 · 2141",
    council: "Cumberland City Council",
    covers: ["Auburn", "Berala"],
    metaDescription:
      "Home visit physio in Auburn and Berala, near Auburn Hospital. Mobile physio for older adults, NDIS and Support at Home, plus our Parramatta clinic.",
    intro:
      "Home visit physiotherapy in Auburn and Berala — or see us at our Parramatta clinic on Wednesdays.",
    local: [
      "Auburn is a large, diverse suburb in Cumberland City, centred on Auburn station and Auburn Road, and home to Auburn Hospital and the Auburn Botanic Gardens.",
      "Berala is a smaller residential neighbour around Berala station. Both are a short drive from Sydney Olympic Park, and our Parramatta clinic is nearby too.",
    ],
    homeVisitNotes: [
      "Seeing you at home lets us work on the things that matter in your day: chairs and beds, steps, the bathroom, and walking to the shops or the station.",
      "If you'd rather come to us, Fletcher Physiotherapy Parramatta is at 144 Marsden Street on Wednesdays, with bulk billing for eligible GP care plan (GPCCMP) patients.",
    ],
    hospitals: [AUBURN, WESTMEAD],
    nearby: ["Lidcombe", "Regents Park", "Granville", "Newington", "Homebush West"],
    faqs: [
      {
        q: "Is there a clinic near Auburn?",
        a: "Yes. Fletcher Physiotherapy Parramatta, inside Parramatta Medical and Dental Centre at 144 Marsden Street, is open Wednesdays. Book on 02 8320 9300.",
      },
      {
        q: "Can you continue my rehab after Auburn Hospital?",
        a: "Yes. With your consent we can liaise with your GP or discharge team and continue your rehab at home or in clinic.",
      },
    ],
  },
  {
    slug: "physiotherapy-burwood",
    name: "Burwood & Croydon",
    postcode: "2134 · 2132",
    council: "Burwood Council",
    covers: ["Burwood", "Croydon"],
    metaDescription:
      "Mobile physio in Burwood and Croydon. Home visits for older adults, falls prevention, rehab after hospital, NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Burwood and Croydon — strength, balance and rehab in your own home.",
    local: [
      "Burwood is one of the Inner West's busiest centres, built around Burwood station, Burwood Road and Westfield Burwood, with high-rise apartments alongside older family homes.",
      "Croydon, next door, is a quieter residential suburb of Federation-era homes around Croydon station.",
    ],
    homeVisitNotes: [
      "Older homes often have front steps, narrow hallways and older-style bathrooms. We look at how you manage them and suggest practical changes alongside your exercises.",
      "In apartments we work on lifts, corridors and getting out to Burwood's shops and transport with confidence.",
    ],
    hospitals: [CRGH, CANTERBURY],
    nearby: ["Strathfield", "Enfield", "Five Dock", "Ashfield", "Concord"],
    faqs: [
      {
        q: "Can you help after a fall?",
        a: "Yes. We assess strength, balance and walking, look at what may have contributed to the fall, review hazards at home and set a program to help you regain confidence. Please let your GP know about the fall too.",
      },
      {
        q: "Is there a clinic near Burwood?",
        a: "Our nearest clinics are Parramatta (Wednesdays, 02 8320 9300) and Yagoona (Tuesdays, 02 8766 2477). For Burwood and Croydon, most people find a home visit easier.",
      },
    ],
  },
  {
    slug: "physiotherapy-five-dock",
    name: "Five Dock & Drummoyne",
    postcode: "2046 · 2047",
    council: "City of Canada Bay",
    covers: ["Five Dock", "Drummoyne"],
    metaDescription:
      "Home visit physio in Five Dock and Drummoyne. Mobile physio for older adults, falls prevention, rehab after surgery, NDIS and Support at Home.",
    intro:
      "Home visit physiotherapy in Five Dock and Drummoyne — physio at home for older adults, families and anyone recovering after surgery.",
    local: [
      "Five Dock is an established Inner West suburb centred on Great North Road, with a strong Italian heritage and many long-term residents.",
      "Drummoyne sits on the Parramatta River beside Iron Cove, with waterfront apartments and older family homes. Both are in the City of Canada Bay.",
    ],
    homeVisitNotes: [
      "Many residents have lived in the same home for decades and want to stay there. We focus on the practical things that make that possible: steps, stairs, the bathroom and walking to the local shops.",
      "The foreshore paths around Iron Cove and the river are a good goal for walking practice once you're ready.",
    ],
    hospitals: [CRGH, BALMAIN],
    nearby: ["Abbotsford", "Russell Lea", "Rodd Point", "Concord", "Haberfield"],
    faqs: [
      {
        q: "Can you help me prepare for or recover from a knee or hip replacement?",
        a: "Yes. We can see you at home before surgery to plan ahead, and afterwards to work on walking, stairs and daily tasks, keeping your surgeon and GP informed with your consent.",
      },
      {
        q: "How is physiotherapy paid for?",
        a: "Options include Support at Home, NDIS, DVA, Medicare-subsidised sessions under a GP Chronic Condition Management Plan (GPCCMP), or private payment. We'll explain what applies to you.",
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
