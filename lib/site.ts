export const site = {
  name: "Fletcher Physiotherapy",
  shortName: "Fletcher Physio",
  legalName: "Fletcher Physiotherapy",
  tagline: "We Come To You",
  description:
    "Professional home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast. Specialising in NDIS, Support at Home and Home Care Package physiotherapy for older adults, families and private clients.",
  url: "https://www.fletcherphysiotherapy.com.au",
  phone: "0404 791 756",
  phoneHref: "tel:+61404791756",
  email: "info@fletcherphysiotherapy.com.au",
  emailHref: "mailto:info@fletcherphysiotherapy.com.au",
  bookingUrl: "https://fletcher-physiotherapy.au2.cliniko.com/bookings",
  reviewsUrl: "https://g.page/r/Ca_B6HnMsfgrEBM/review",
  areasServed: ["Newcastle", "Lake Macquarie", "Central Coast", "Sydney"],
  region: "NSW",
  geo: { lat: -32.9283, lng: 151.7817 },
  hours: "Mon–Fri 8:00am – 6:00pm",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Locations", href: "/locations" },
  { label: "Sydney", href: "/physiotherapy-sydney" },
  { label: "Blog", href: "/blog" },
  { label: "Refer a Patient", href: "/refer-a-patient" },
  { label: "Contact", href: "/contact" },
];

export const servicesNav: NavLink[] = [
  { label: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy-newcastle" },
  { label: "Mobile Physiotherapist", href: "/mobile-physiotherapist-newcastle" },
  { label: "Aged Care Physiotherapy", href: "/aged-care-physiotherapy-newcastle" },
  { label: "NDIS Physiotherapy", href: "/ndis-physiotherapy-newcastle" },
  { label: "Support at Home Physiotherapy", href: "/support-at-home-physiotherapy-newcastle" },
  { label: "Falls Prevention", href: "/falls-prevention-physiotherapy-newcastle" },
  { label: "All Services", href: "/services" },
];

export const conditionsNav: NavLink[] = [
  { label: "Stroke Rehabilitation", href: "/stroke-rehabilitation-newcastle" },
  { label: "Parkinson's Physiotherapy", href: "/parkinsons-physiotherapy-newcastle" },
  { label: "Arthritis Physiotherapy", href: "/arthritis-physiotherapy-newcastle" },
  { label: "Hip Replacement Rehab", href: "/hip-replacement-rehabilitation-newcastle" },
  { label: "Knee Replacement Rehab", href: "/knee-replacement-rehabilitation-newcastle" },
  { label: "Senior Exercise Programs", href: "/senior-exercise-programs-newcastle" },
];

export const locationsNav: NavLink[] = [
  { label: "Jesmond Clinic", href: "/physiotherapy-jesmond" },
  { label: "Elermore Vale Clinic", href: "/physiotherapy-elermore-vale" },
  { label: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy-newcastle" },
];

export type Clinic = {
  slug: string;
  name: string;
  hostCentre: string;
  address: string;
  suburb: string;
  postcode: string;
  region: string;
  consultingDay: string;
  dayShort: string;
  geo: { lat: number; lng: number };
  intro: string;
  about: string[];
  parking: string;
  accessibility: string;
};

export const clinics: Clinic[] = [
  {
    slug: "physiotherapy-jesmond",
    name: "Jesmond",
    hostCentre: "HealthSure Medical Centre Jesmond",
    address: "Shop G01–G07, Jesmond Central, 28 Blue Gum Road, Jesmond NSW 2299",
    suburb: "Jesmond",
    postcode: "2299",
    region: "Newcastle",
    consultingDay: "Monday",
    dayShort: "Mondays",
    geo: { lat: -32.8944, lng: 151.6931 },
    intro:
      "Fletcher Physiotherapy now consults at HealthSure Medical Centre Jesmond every Monday, offering experienced physiotherapy for pain, injuries, rehabilitation, balance and falls prevention — alongside our established home visit service across Newcastle.",
    about: [
      "Our Jesmond clinic is located inside HealthSure Medical Centre at Jesmond Central, a convenient and easily accessible location in central Newcastle close to the University of Newcastle and John Hunter Hospital. Consultations are available each Monday.",
      "Care is led by an APA Titled Pain Physiotherapist with extensive experience in chronic pain, musculoskeletal injuries, sports injuries, balance and falls prevention, and post-operative rehabilitation. We take the time to understand your goals and build a practical, evidence-based plan tailored to you.",
    ],
    parking:
      "On-site and street parking is available at Jesmond Central, with easy access from Blue Gum Road and Newcastle Road.",
    accessibility:
      "The clinic offers step-free, wheelchair-accessible entry with accessible parking nearby, making appointments comfortable for older adults and people with limited mobility.",
  },
  {
    slug: "physiotherapy-elermore-vale",
    name: "Elermore Vale",
    hostCentre: "Elermore Vale Medical Centre",
    address: "Shop 10–13, 137 Croudace Road, Elermore Vale NSW 2287",
    suburb: "Elermore Vale",
    postcode: "2287",
    region: "Newcastle",
    consultingDay: "Monday",
    dayShort: "Mondays",
    geo: { lat: -32.9132, lng: 151.664 },
    intro:
      "Fletcher Physiotherapy consults at Elermore Vale Medical Centre every Monday, providing experienced physiotherapy for pain, injuries, rehabilitation, balance and falls prevention — as well as home visits throughout Newcastle and Lake Macquarie.",
    about: [
      "Our Elermore Vale clinic operates from Elermore Vale Medical Centre on Croudace Road, a welcoming local practice serving the western Newcastle community. Consultations are available each Monday.",
      "Care is led by an APA Titled Pain Physiotherapist experienced in chronic pain, musculoskeletal and sports injuries, balance and falls prevention, and post-operative rehabilitation. Every plan is practical, evidence-based and tailored to your individual goals.",
    ],
    parking:
      "Free on-site parking is available at Elermore Vale Medical Centre, directly off Croudace Road.",
    accessibility:
      "The centre provides ground-floor, wheelchair-accessible access with accessible parking close to the entrance, so appointments are easy and comfortable for everyone.",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  href: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "home-visit-physiotherapy",
    title: "Home Visit Physiotherapy",
    short:
      "Professional physiotherapy delivered in the comfort and safety of your own home — no travel, no waiting rooms.",
    icon: "home",
    href: "/home-visit-physiotherapy-newcastle",
    featured: true,
  },
  {
    slug: "ndis-physiotherapy",
    title: "NDIS Physiotherapy",
    short:
      "Functional, goal-focused physiotherapy for NDIS participants — self-managed, plan-managed and agency-managed.",
    icon: "shield",
    href: "/ndis-physiotherapy-newcastle",
    featured: true,
  },
  {
    slug: "support-at-home-physiotherapy",
    title: "Support at Home Physiotherapy",
    short:
      "Physiotherapy for Home Care Package and Support at Home clients to stay strong, mobile and safely independent.",
    icon: "heart",
    href: "/support-at-home-physiotherapy-newcastle",
    featured: true,
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    short:
      "Evidence-based, compassionate care that reduces fear of movement and helps you return to the things that matter.",
    icon: "pulse",
    href: "/chronic-pain-management",
  },
  {
    slug: "falls-prevention",
    title: "Falls Prevention",
    short:
      "Balance assessment, home safety review and tailored exercise to reduce falls risk and build confidence.",
    icon: "balance",
    href: "/falls-prevention-physiotherapy-newcastle",
  },
  {
    slug: "post-hospital-rehabilitation",
    title: "Post Hospital Rehabilitation",
    short:
      "Recover safely at home after surgery, illness or a hospital stay with structured, supported rehabilitation.",
    icon: "recovery",
    href: "/services#post-hospital-rehabilitation",
  },
  {
    slug: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    short:
      "Assessment and hands-on treatment for joint, muscle and back pain, combined with practical exercise.",
    icon: "joint",
    href: "/services#musculoskeletal-physiotherapy",
  },
  {
    slug: "balance-training",
    title: "Balance Training",
    short:
      "Targeted programs to improve stability, coordination and confidence on your feet, indoors and out.",
    icon: "balance",
    href: "/services#balance-training",
  },
  {
    slug: "strength-mobility-programs",
    title: "Strength & Mobility Programs",
    short:
      "Personalised strengthening and mobility plans to keep you active, independent and moving well.",
    icon: "strength",
    href: "/services#strength-mobility-programs",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  credentials: string;
  bio: string[];
  interests: string[];
  languages?: string;
};

export const team: TeamMember[] = [
  {
    slug: "daniel-lee",
    name: "Daniel Lee",
    role: "Director & Principal Physiotherapist",
    photo: "/team/daniel-lee.jpg",
    credentials: "APA Titled Pain Physiotherapist · Master of Pain Management (University of Sydney)",
    bio: [
      "Daniel Lee is the Director and Principal Physiotherapist at Fletcher Physiotherapy and an APA Titled Pain Physiotherapist — a credential awarded by the Australian Physiotherapy Association (APA) to physiotherapists who have completed advanced training and demonstrated specialist expertise in pain management.",
      "He holds a Master of Pain Management from the University of Sydney and works extensively with chronic pain, complex conditions and older adults, combining hands-on treatment with practical, evidence-based strategies that help people move with confidence.",
      "Daniel's focus is functional rehabilitation and long-term outcomes — reducing fear around movement, rebuilding strength and mobility, and helping clients return to the everyday activities that matter to them, safely in their own homes.",
    ],
    interests: [
      "Chronic Pain",
      "Complex Conditions",
      "Older Adults & Aged Care",
      "Functional Rehabilitation",
      "Home Visit Physiotherapy",
      "Falls Prevention",
    ],
  },
  {
    slug: "christine-nguyen",
    name: "Christine Nguyen",
    role: "Physiotherapist",
    photo: "/team/christine-nguyen.jpg",
    credentials: "Bachelor of Physiotherapy, University of Newcastle",
    bio: [
      "Christine is a University of Newcastle graduate physiotherapist who is passionate about helping people move better, feel stronger, and return to the activities they enjoy. She uses an evidence-based approach and tailors treatment plans to each person's goals and lifestyle.",
      "Christine has experience working in hospital and private practice rehabilitation settings, supporting patients recovering from stroke, post-operative orthopaedic surgery, and musculoskeletal injuries. She also has a strong interest in geriatric rehabilitation, helping older adults improve mobility, balance, and confidence while reducing falls risk.",
      "Her treatment approach focuses on exercise-based rehabilitation, supported by manual therapy when appropriate. Christine is trained in the Mulligan Concept and dry needling. She works with private patients, Chronic Disease Management (EPC) referrals, and Workers Compensation patients.",
      "Outside the clinic, Christine enjoys staying active through badminton, bouldering, running, and gym training. Fluent in English, Cantonese, and Mandarin, she strives to create a welcoming and supportive environment for all patients.",
    ],
    interests: [
      "Geriatric Rehabilitation",
      "Musculoskeletal Physiotherapy",
      "Post-Operative Rehabilitation",
      "Stroke Recovery",
      "Dry Needling",
      "Mulligan Concept",
    ],
    languages: "English, Cantonese, Mandarin",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you provide home visits?",
    a: "Yes. Home visits are our core service. We come to you and deliver physiotherapy in the comfort and safety of your own home, so there is no travel, parking or waiting rooms to worry about.",
  },
  {
    q: "Do you accept NDIS participants?",
    a: "Yes. We work with NDIS participants who are self-managed, plan-managed and agency-managed. We provide functional assessments, mobility and exercise programs, falls prevention and pain management aligned to your plan goals.",
  },
  {
    q: "Do you see Home Care Package clients?",
    a: "Yes. We regularly support clients with Home Care Packages, working alongside your provider and care plan to help you stay strong, mobile and independent at home.",
  },
  {
    q: "Do you provide Support at Home services?",
    a: "Yes. We provide physiotherapy for Support at Home clients, focused on maintaining independence, mobility, strength, balance and falls prevention so you can remain safely in your own home.",
  },
  {
    q: "Do I need a GP referral?",
    a: "Not for private physiotherapy — you can contact us directly. A GP referral may be required for some funding streams, such as Chronic Disease Management (EPC) plans. We are happy to guide you through what applies to your situation.",
  },
  {
    q: "Do you service Newcastle?",
    a: "Yes. Newcastle is one of our primary service areas and we provide home visit physiotherapy across the region.",
  },
  {
    q: "Do you service Lake Macquarie?",
    a: "Yes. We provide mobile physiotherapy throughout Lake Macquarie and surrounding suburbs.",
  },
  {
    q: "Do you service the Central Coast?",
    a: "Yes. We provide home visit physiotherapy across the Central Coast. Contact us to confirm availability in your suburb.",
  },
  {
    q: "What should I prepare for my first appointment?",
    a: "Just a comfortable space to move and any relevant medical information, medications list, referrals or reports. We bring the equipment needed for your assessment and treatment.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book online through our contact page, or call us on 0466 488 869. We will confirm your appointment and answer any questions about funding and what to expect.",
  },
];

export type LocationArea = {
  name: string;
  blurb: string;
  suburbs: string[];
};

export const locations: LocationArea[] = [
  {
    name: "Newcastle",
    blurb:
      "Home visit physiotherapy across Newcastle and inner suburbs, supporting older adults, NDIS participants and rehabilitation clients.",
    suburbs: [
      "Newcastle",
      "New Lambton",
      "Hamilton",
      "Mayfield",
      "Merewether",
      "Wallsend",
      "Charlestown",
      "Adamstown",
    ],
  },
  {
    name: "Lake Macquarie",
    blurb:
      "Mobile physiotherapy throughout the Lake Macquarie region, helping clients stay mobile, strong and safely at home.",
    suburbs: [
      "Belmont",
      "Warners Bay",
      "Toronto",
      "Cardiff",
      "Morisset",
      "Swansea",
      "Mount Hutton",
      "Glendale",
    ],
  },
  {
    name: "Central Coast",
    blurb:
      "Home-based physiotherapy across the Central Coast for Support at Home, Home Care Package and private clients.",
    suburbs: [
      "Gosford",
      "Wyong",
      "The Entrance",
      "Tuggerah",
      "Erina",
      "Woy Woy",
      "Terrigal",
      "Bateau Bay",
    ],
  },
  {
    name: "Sydney",
    blurb:
      "New from November 2026 — nursing-home and in-home physiotherapy around Sydney Olympic Park for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    suburbs: [
      "Sydney Olympic Park",
      "Homebush",
      "Lidcombe",
      "Auburn",
      "Strathfield",
      "Concord",
      "Ryde",
      "Parramatta",
    ],
  },
];

export const whyChoose = [
  {
    title: "We Come To You",
    text: "No travel, no parking, no waiting rooms. We deliver expert physiotherapy in the comfort and safety of your home.",
    icon: "home",
  },
  {
    title: "NDIS Experience",
    text: "Confident support for self-managed, plan-managed and agency-managed NDIS participants and their goals.",
    icon: "shield",
  },
  {
    title: "Support at Home Experience",
    text: "Experienced working with Home Care Package and Support at Home clients and their providers.",
    icon: "heart",
  },
  {
    title: "Personalised Care",
    text: "Individualised, patient-centred plans built around your goals, lifestyle and long-term outcomes.",
    icon: "user",
  },
  {
    title: "Falls Prevention",
    text: "Balance training, home safety review and tailored exercise to reduce falls risk and build confidence.",
    icon: "balance",
  },
  {
    title: "Rehabilitation",
    text: "Structured recovery after surgery, illness or hospital — safely supported in your own home.",
    icon: "recovery",
  },
  {
    title: "Chronic Pain Expertise",
    text: "Master's-qualified pain management, reducing fear of movement and restoring meaningful activity.",
    icon: "pulse",
  },
];

// Real, verified Google reviews. Add new ones here as they come in.
export const testimonials = [
  {
    quote:
      "Excellent service. Very convenient home visit and a lovely physiotherapist. I am very pleased with the treatment.",
    author: "Georgie H.",
    detail: "Verified Google review",
  },
  {
    quote:
      "I saw Daniel Lee for an initial evaluation for an injury I have had for a long time, educated me a lot around why it is happening and what factors are contributing to it and put me on a path to resolving the issue. Highly recommend.",
    author: "Ethan",
    detail: "Verified Google review",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Does a Home Care Package cover physiotherapy?",
    a: "Yes. Physiotherapy is an allied health service that can be funded through a Home Care Package (Levels 1–4) when it supports your goals — such as improving mobility, building strength or reducing falls risk. We work directly with your Home Care provider and care plan, and can provide the documentation they need.",
  },
  {
    q: "Can NDIS funding be used for physiotherapy?",
    a: "Yes. Physiotherapy is commonly funded under Capacity Building – Improved Daily Living for eligible NDIS participants. We support self-managed, plan-managed and agency-managed participants with functional assessments, home exercise programs, mobility and falls-prevention work, and clear reports for plan reviews.",
  },
  {
    q: "Do you provide physiotherapy at home?",
    a: "Yes — home visits are our core service. Our mobile physiotherapists come to you across Newcastle, Lake Macquarie and the Central Coast, so there is no travel, parking or waiting room. You receive expert care in the comfort and safety of your own home.",
  },
  {
    q: "What suburbs do you visit?",
    a: "We provide home visit physiotherapy across Newcastle, Lake Macquarie, the Central Coast and the wider Hunter Region — including Charlestown, Belmont, Warners Bay, Cardiff, Fletcher, New Lambton, Gosford and Wyong. If your suburb isn't listed, contact us and we'll confirm availability.",
  },
  {
    q: "How can physiotherapy prevent falls?",
    a: "Falls prevention physiotherapy combines a balance and mobility assessment, a tailored strength and balance exercise program, gait and confidence training, and a review of hazards in your home. This evidence-based approach is proven to reduce falls risk and help older adults stay safely independent.",
  },
  {
    q: "Do I need a GP referral?",
    a: "Not for private physiotherapy — you can contact us directly. A GP referral may be required for certain funding streams, such as a Chronic Disease Management (CDM/EPC) plan. We're happy to explain what applies to your situation.",
  },
];

export type Suburb = {
  slug: string;
  name: string;
  region: string;
  postcode?: string;
  intro: string;
  local: string;
  nearby: string[];
  // Optional researched local data — when present, the page renders unique local sections.
  localArea?: string;      // extra unique paragraph about the community
  gpClinics?: string[];    // real nearby GP clinics / medical centres
  hospitals?: string[];    // real nearby hospitals
  agedCare?: string[];     // real nearby aged care facilities
  retirement?: string[];   // real nearby retirement villages
  landmarks?: string[];    // recognisable local landmarks
  gettingAround?: string;  // parking, transport, travel time note
};

export const suburbs: Suburb[] = [
  {
    slug: "physiotherapy-newcastle",
    name: "Newcastle",
    region: "Newcastle",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy across Newcastle NSW, bringing expert mobile aged care, NDIS and Support at Home physiotherapy to residents throughout the city and its suburbs.",
    local:
      "Newcastle is home to a large and growing older population, from the inner-city suburbs through to the coast and the western growth areas. Our mobile physiotherapists visit homes right across Newcastle \u2014 near John Hunter Hospital, the beaches and the city centre \u2014 supporting people who find travelling to a clinic difficult, from falls prevention to post-hospital recovery.",
    nearby: ["New Lambton", "Adamstown", "Hamilton", "Merewether", "Wallsend", "Kotara"],
    postcode: "2300",
    localArea:
      "As the second-oldest city in Australia, Newcastle combines a historic harbour city with fast-growing residential suburbs \u2014 and with that comes one of the largest older populations in regional New South Wales. From the terraces of Cooks Hill and The Hill to the beaches at Bar Beach and Merewether, many residents want to age in the homes and streets they love. A dedicated home visit service lets them do exactly that, without the barrier of travelling to a clinic.",
    gpClinics: ["Zion Medical Centre, Newcastle", "Newcastle city and Hamilton medical practices", "Newcastle Community Health Service"],
    hospitals: ["John Hunter Hospital, New Lambton Heights", "Calvary Mater Newcastle, Waratah"],
    landmarks: ["Newcastle Beach & Nobbys Lighthouse", "Newcastle Harbour foreshore", "Cooks Hill & The Hill"],
    gettingAround: "Parking and traffic around the city centre and hospital precinct can be difficult for older residents. Because we come to you anywhere in Newcastle, there is no travel, parking or waiting room to manage.",
  },
  {
    slug: "physiotherapy-charlestown",
    name: "Charlestown",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy throughout Charlestown, bringing expert mobile care to older adults, NDIS participants and Support at Home clients across this busy Lake Macquarie centre.",
    local:
      "As one of Lake Macquarie's largest suburbs, Charlestown is home to many families caring for ageing parents. We visit private homes and residential settings around Charlestown Square, Dudley Road and the surrounding streets, so you never have to battle traffic or parking to receive quality physiotherapy.",
    nearby: ["Kotara", "Gateshead", "Dudley", "Whitebridge", "Adamstown"],
    postcode: "2290",
    localArea:
      "Charlestown has grown into one of the busiest commercial and residential centres in Lake Macquarie, anchored by Charlestown Square. With that growth has come a large population of older adults and multi-generational families — many of whom would much rather receive physiotherapy at home than navigate the traffic and parking around the town centre. That is exactly where a mobile service fits.",
    gpClinics: ["Charlestown General Practice, 99 Pacific Highway", "Smith Street Medical Centre, Charlestown", "Charlestown Medical & Dental Centre"],
    hospitals: ["John Hunter Hospital, New Lambton Heights (about 15 minutes)", "Calvary Mater Newcastle, Waratah"],
    landmarks: ["Charlestown Square", "Charlestown Swim Centre", "Dudley Road shops"],
    gettingAround: "Charlestown is roughly 15 minutes from John Hunter Hospital and well served by local bus routes. Because we come to you, there is no travel, parking or waiting room to worry about.",
  },
  {
    slug: "physiotherapy-belmont",
    name: "Belmont",
    region: "Lake Macquarie",
    intro:
      "We deliver home visit physiotherapy across Belmont and the eastern Lake Macquarie peninsula, helping residents stay strong, steady and independent in their own homes.",
    local:
      "Belmont has a large community of retirees and older adults living close to the lake. Our mobile physiotherapists regularly visit homes near Belmont Hospital, Marks Point and Swansea, supporting falls prevention, post-hospital recovery and Home Care Package clients throughout the area.",
    nearby: ["Marks Point", "Swansea", "Valentine", "Croudace Bay", "Jewells"],
    postcode: "2280",
    localArea:
      "Belmont anchors the eastern side of Lake Macquarie between the lake and the ocean, and is home to a large retirement and older-adult community. As the site of Belmont Hospital — the area's only public hospital — it sees many residents returning home after admissions who need physiotherapy to recover their strength and confidence in their own homes.",
    gpClinics: ["Belmont town centre medical practices", "GP services near Belmont Hospital"],
    hospitals: ["Belmont Hospital, Croudace Bay Road, Belmont", "Lake Macquarie Private Hospital, Gateshead"],
    agedCare: ["Arcare Belmont", "Belmont Residential Care"],
    retirement: ["Uniting Narla, Belmont North", "Calvary Nazareth Village, Belmont North"],
    landmarks: ["Belmont town centre", "Belmont Baths & foreshore", "Lake Macquarie"],
    gettingAround: "With Belmont Hospital in the suburb itself, this is a key area for recovery at home. We visit you directly, so there is no need to travel or find parking.",
  },
  {
    slug: "physiotherapy-warners-bay",
    name: "Warners Bay",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy offers home visit physiotherapy in Warners Bay, a popular lakeside suburb where many older residents want to stay active and independent for as long as possible.",
    local:
      "From the foreshore to the streets around Warners Bay township, we bring balance training, strength programs and mobility rehabilitation directly to your door. We work closely with local GPs, Home Care providers and support coordinators across the Warners Bay and Boolaroo area.",
    nearby: ["Boolaroo", "Speers Point", "Eleebana", "Mount Hutton", "Cardiff Heights"],
    postcode: "2282",
    localArea:
      "Warners Bay is one of Lake Macquarie's most popular lakeside suburbs, with a busy foreshore, a thriving café strip and a large community of retirees and older adults who want to stay active by the water. For many, home visit physiotherapy is the ideal way to keep up strength, balance and mobility without the need to travel to a clinic.",
    gpClinics: ["Medical centres around Warners Bay township", "Stockland Medical Centre, Glendale (nearby)"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "Belmont Hospital, Croudace Bay Road, Belmont"],
    landmarks: ["Warners Bay foreshore & lake", "Warners Bay township café strip", "Fernleigh Track"],
    gettingAround: "Warners Bay is a short drive from both Lake Macquarie Private and Belmont hospitals. Because we come to your home, there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-cardiff",
    name: "Cardiff",
    region: "Lake Macquarie",
    intro:
      "We provide mobile physiotherapy across Cardiff and the surrounding western Lake Macquarie suburbs, supporting older adults, NDIS participants and people recovering from injury or surgery at home.",
    local:
      "Cardiff's mix of established homes and busy community makes home visits especially valuable for residents who find travelling to a clinic difficult. Our physiotherapists visit homes across Cardiff, Cardiff South and Glendale, delivering personalised rehabilitation and falls-prevention programs.",
    nearby: ["Glendale", "Cardiff South", "Edgeworth", "Macquarie Hills", "New Lambton"],
    postcode: "2285",
    localArea:
      "Cardiff sits at the busy western gateway to Lake Macquarie, next to the major Glendale City Centre shopping and transport hub. It is a well-established, working community with a significant older population, many of whom find in-home physiotherapy a far easier option than negotiating the traffic and car parks around Glendale and Cardiff.",
    gpClinics: ["Stockland Medical Centre, Glendale City Centre", "The Doctors Glendale", "Cardiff medical practices"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "John Hunter Hospital, New Lambton Heights"],
    landmarks: ["Glendale City Centre (Stockland Glendale)", "Cardiff town centre", "Pasterfield Sports Complex"],
    gettingAround: "Cardiff is close to Glendale's shopping and transport hub and a short drive from Lake Macquarie Private Hospital. Because we come to you, there is no travel or parking to worry about.",
  },
  {
    slug: "physiotherapy-fletcher",
    name: "Fletcher",
    region: "Newcastle",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy in Fletcher, a growing north-western Newcastle suburb with many families and older residents who value care delivered at home.",
    local:
      "Fletcher's newer estates and quiet streets are ideal for home-based rehabilitation, where our physiotherapists can assess your real living environment. We support Home Care Package and Support at Home clients, and people returning home after a hospital stay, across Fletcher, Minmi and Maryland.",
    nearby: ["Maryland", "Minmi", "Wallsend", "Cameron Park", "Blue Gum Hills"],
    postcode: "2287",
    localArea:
      "Fletcher is one of north-western Newcastle's fastest-growing communities, built around Fletcher Village and bordered by the natural bushland of Blue Gum Hills Regional Park. Its mix of young families and older residents in newer, single-level homes makes it well suited to home-based rehabilitation, where our physiotherapists can tailor a program to your actual living environment.",
    gpClinics: ["Fletcher Clinic, Fletcher Village, 221 Minmi Road", "Sanctuary Medical Practice, 50 Kurraka Drive", "Healthsure Medical Centre Fletcher"],
    hospitals: ["John Hunter Hospital, New Lambton Heights", "Calvary Mater Newcastle, Waratah"],
    landmarks: ["Fletcher Village shopping centre", "Blue Gum Hills Regional Park, Minmi", "Maryland shops"],
    gettingAround: "Fletcher's newer streets are easy to access, but a clinic trip still means travel and parking. We come to your Fletcher home, so there is nothing to arrange but your appointment time.",
  },
  {
    slug: "physiotherapy-new-lambton",
    name: "New Lambton",
    region: "Newcastle",
    intro:
      "We offer home visit physiotherapy throughout New Lambton and surrounding inner-Newcastle suburbs, helping older adults improve mobility, balance and confidence at home.",
    local:
      "Close to John Hunter Hospital, New Lambton is a key area for post-hospital and rehabilitation clients returning home. Our mobile physiotherapists visit homes across New Lambton, New Lambton Heights and Lambton, coordinating with hospital teams, GPs and Home Care providers for a smooth recovery.",
    nearby: ["Lambton", "New Lambton Heights", "Kotara", "Broadmeadow", "Adamstown"],
    postcode: "2305",
    localArea:
      "New Lambton sits right beside the John Hunter Hospital and Newcastle Private Hospital precinct in New Lambton Heights, which makes it one of the most important suburbs in Newcastle for post-hospital rehabilitation. Many residents are discharged home after surgery, a fall or a hospital admission and need physiotherapy to rebuild strength and confidence — delivered in the very home they are recovering in.",
    gpClinics: ["Medical suites at Newcastle Private Hospital, New Lambton Heights", "GP practices along Regent Street, New Lambton", "Lambton medical practices"],
    hospitals: ["John Hunter Hospital, New Lambton Heights", "Newcastle Private Hospital, New Lambton Heights", "Calvary Mater Newcastle, Waratah"],
    agedCare: ["St John's Villa, New Lambton"],
    retirement: ["Calvary Ephesus Retirement Village, Lambton"],
    landmarks: ["Blackbutt Reserve", "Regent Street shops", "John Hunter Hospital precinct"],
    gettingAround: "With John Hunter and Newcastle Private hospitals on its doorstep, New Lambton is central for recovery at home. We visit you directly, so there is no parking or travel to manage during your rehabilitation.",
  },
  {
    slug: "physiotherapy-gosford",
    name: "Gosford",
    region: "Central Coast",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy across Gosford, bringing aged care, NDIS and Support at Home physiotherapy to residents throughout the central Central Coast.",
    local:
      "Gosford's large older population and proximity to Gosford Hospital make home-based physiotherapy an ideal option for people who prefer to recover and exercise at home. We visit suburbs across the Gosford area, supporting falls prevention, strength and post-hospital rehabilitation.",
    nearby: ["East Gosford", "West Gosford", "Point Clare", "Narara", "Erina"],
    postcode: "2250",
    localArea:
      "Gosford is the civic and medical heart of the Central Coast, set on the shores of Brisbane Water with a large and growing older population. As the site of the region\u0027s principal referral hospital, it sees many residents recovering at home after a hospital stay \u2014 exactly when good physiotherapy makes the biggest difference.",
    gpClinics: ["Gosford and West Gosford medical practices", "Central Coast private general practices"],
    hospitals: ["Gosford Hospital (principal referral & regional trauma centre)", "Woy Woy Hospital (sub-acute)"],
    landmarks: ["Gosford Waterfront & Brisbane Water", "Kibble Park", "Gosford CBD"],
    gettingAround: "Gosford is the Central Coast\u0027s main hospital and service hub. We come to your home, so there is no parking or travel to manage.",
  },
  {
    slug: "physiotherapy-wyong",
    name: "Wyong",
    region: "Central Coast",
    intro:
      "We deliver home visit physiotherapy in Wyong and the northern Central Coast, helping older adults and NDIS participants stay mobile, strong and safely independent at home.",
    local:
      "Wyong and its surrounding communities have a strong need for accessible, in-home care. Our physiotherapists visit homes across Wyong, Tuggerah and Kanwal — close to Wyong Hospital — providing balance training, mobility programs and Home Care Package physiotherapy without the need to travel.",
    nearby: ["Tuggerah", "Kanwal", "Watanobbi", "Tumbi Umbi", "The Entrance"],
    postcode: "2259",
    localArea:
      "Wyong anchors the northern Central Coast around its town centre and hospital, with a strong community and many older residents in the surrounding suburbs. In-home physiotherapy lets them keep up strength, balance and mobility without needing to travel or find parking.",
    gpClinics: ["Wyong town centre medical practices", "Central Coast general practices"],
    hospitals: ["Wyong Hospital", "Gosford Hospital (referral)"],
    landmarks: ["Wyong River", "The Art House Wyong", "Wyong town centre"],
    gettingAround: "Wyong is served by Wyong Hospital and well connected by rail. Because we visit you at home, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-wallsend",
    name: "Wallsend",
    region: "Newcastle",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy throughout Wallsend, delivering mobile aged care, NDIS and Support at Home physiotherapy to residents across this established western Newcastle suburb.",
    local:
      "Wallsend is a busy hub with a large older population and strong community ties. Our physiotherapists visit homes around Wallsend town centre, Nelson Street and the surrounding estates, supporting people who find travelling to a clinic difficult — from falls prevention to post-hospital recovery.",
    nearby: ["Elermore Vale", "Maryland", "Fletcher", "Jesmond", "Shortland"],
    postcode: "2287",
    localArea:
      "Wallsend is one of western Newcastle's oldest and busiest centres, with a large, established older population and strong community ties. Many long-term residents want to stay in the homes and streets they know as they age — and in-home physiotherapy makes that far more achievable, whether the goal is preventing falls, recovering after hospital, or simply staying strong and mobile.",
    gpClinics: ["Wallsend GP Clinic, 136 Nelson Street", "Wallsend Family Medical Centre", "Wallsend Healthcare, 25–27 Kokera Street"],
    hospitals: ["John Hunter Hospital, New Lambton Heights (about 10 minutes)", "Calvary Mater Newcastle, Waratah"],
    agedCare: ["SummitCare Wallsend", "Wallsend Manor Aged Care"],
    landmarks: ["Wallsend town centre and Nelson Street", "Wallsend Village shopping centre", "Federal Park"],
    gettingAround: "Wallsend is a short drive from John Hunter Hospital and well connected by bus. Because we visit you at home, there is no need to travel or find parking around the town centre.",
  },
  {
    slug: "physiotherapy-adamstown",
    name: "Adamstown",
    region: "Newcastle",
    intro:
      "Fletcher Physiotherapy offers home visit physiotherapy in Adamstown, helping residents improve mobility, balance and confidence in the comfort of their own homes.",
    local:
      "Adamstown's mix of heritage homes and established streets is home to many older residents who value care that comes to them. Our mobile physiotherapists support falls prevention, aged care rehabilitation and Home Care Package clients across Adamstown, Adamstown Heights and beyond.",
    nearby: ["Adamstown Heights", "Kotara", "Broadmeadow", "Hamilton", "New Lambton"],
    postcode: "2289",
    localArea:
      "Adamstown is a well-established suburb of heritage homes and leafy streets between Newcastle's city and Kotara, with a settled, ageing population and a busy village centre along Brunker Road. For residents managing arthritis, recovering after surgery, or simply wanting to stay steady on their feet, physiotherapy delivered at home removes the hassle of travelling to and parking at a clinic.",
    gpClinics: ["Brunker Road Medical Centre, 282 Brunker Road", "Broadmeadow Medical Centre, 154 Lambton Road (nearby)"],
    hospitals: ["John Hunter Hospital, New Lambton Heights", "Calvary Mater Newcastle, Waratah"],
    landmarks: ["Brunker Road village shops", "Adamstown train station", "Adamstown Oval"],
    gettingAround: "Adamstown is centrally located between the city, Kotara and the hospital precinct. Because we come to your home, there is no travel, parking or waiting room involved.",
  },
  {
    slug: "physiotherapy-kotara",
    name: "Kotara",
    region: "Newcastle",
    intro:
      "We provide home visit physiotherapy across Kotara, supporting older adults, NDIS participants and people recovering from injury or surgery in their own homes.",
    local:
      "Kotara's quiet residential streets are ideal for home-based rehabilitation, where our physiotherapists can tailor programs to your real environment. We support clients across Kotara and Kotara South with balance training, strength programs and post-hospital recovery.",
    nearby: ["Kotara South", "Adamstown", "Garden Suburb", "New Lambton", "Charlestown"],
    postcode: "2289",
    localArea:
      "Centred on Westfield Kotara and the Kotara train station, Kotara is one of Newcastle's most accessible suburbs — yet for older residents recovering from injury or surgery, even a short trip to a clinic can be a barrier. Home visit physiotherapy removes that barrier entirely, delivering care in the living rooms, hallways and gardens where you actually move each day.",
    gpClinics: ["Ochre Medical Centre Kotara, Westfield Kotara", "Kotara Family Practice, Westfield Kotara"],
    hospitals: ["John Hunter Hospital, New Lambton Heights (nearby)", "Calvary Mater Newcastle, Waratah"],
    landmarks: ["Westfield Kotara", "Kotara train station", "Blackbutt Reserve nearby"],
    gettingAround: "Kotara is centrally located near Westfield and Kotara station and just minutes from John Hunter Hospital. We take care of all the travel by coming to your home.",
  },
  {
    slug: "physiotherapy-mount-hutton",
    name: "Mount Hutton",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy in Mount Hutton, delivering aged care, NDIS and Support at Home physiotherapy across this central Lake Macquarie suburb.",
    local:
      "With a strong community of retirees and families, Mount Hutton is well suited to home-based care. Our mobile physiotherapists visit homes near Mount Hutton shopping centre and the surrounding streets, focusing on falls prevention, strength and independence.",
    nearby: ["Gateshead", "Windale", "Charlestown", "Bennetts Green", "Belmont North"],
    postcode: "2290",
    localArea:
      "Mount Hutton is a central Lake Macquarie suburb built around its shopping centre and close to Charlestown, Gateshead and the shores of the lake. With a settled, older population and easy access to major services, it is well suited to home visit physiotherapy — particularly for residents recovering after a stay at nearby Lake Macquarie Private Hospital.",
    gpClinics: ["Mount Hutton medical practices", "Charlestown and Gateshead medical centres (nearby)"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead (nearby)", "Belmont Hospital, Croudace Bay Road"],
    landmarks: ["Mount Hutton shopping centre", "Charlestown Square (nearby)", "Lake Macquarie foreshore"],
    gettingAround: "Mount Hutton is minutes from Lake Macquarie Private Hospital and Charlestown Square. We take care of the travel by coming to your home for every appointment.",
  },
  {
    slug: "physiotherapy-swansea",
    name: "Swansea",
    region: "Lake Macquarie",
    intro:
      "We deliver home visit physiotherapy across Swansea and the southern Lake Macquarie coast, helping older adults stay strong, steady and independent at home.",
    local:
      "Swansea's coastal community includes many older residents living near the channel and lake. Our physiotherapists regularly visit homes throughout Swansea, Caves Beach and Blacksmiths, supporting balance, mobility and post-hospital rehabilitation without the need to travel.",
    nearby: ["Caves Beach", "Blacksmiths", "Belmont", "Pelican", "Nords Wharf"],
    postcode: "2281",
    localArea:
      "Swansea sits where Lake Macquarie meets the ocean at the lake\u0027s southern entrance, a relaxed community with a large retiree population drawn to the waterside lifestyle. Home visit physiotherapy helps them stay strong, steady and independent without the trip to a clinic.",
    gpClinics: ["Swansea town centre medical practices", "Lake Macquarie Medical Centre, Belmont (nearby)"],
    hospitals: ["Belmont Hospital, Croudace Bay Road (nearby)", "Lake Macquarie Private Hospital, Gateshead"],
    landmarks: ["Swansea Channel & bridge", "Swansea town centre", "Caves Beach"],
    gettingAround: "Swansea sits between the lake and the ocean, a short drive from Belmont Hospital. We visit you at home, so there is no travel to arrange.",
  },
  {
    slug: "physiotherapy-toronto",
    name: "Toronto",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy offers home visit physiotherapy in Toronto, bringing mobile aged care and rehabilitation physiotherapy to residents across western Lake Macquarie.",
    local:
      "Toronto's lakeside setting and established community make home visits especially valuable for older residents. We visit homes throughout Toronto, Booragul and Kilaben Bay, delivering personalised strength, balance and falls-prevention programs close to Toronto Polyclinic.",
    nearby: ["Booragul", "Kilaben Bay", "Blackalls Park", "Fassifern", "Boolaroo"],
    postcode: "2283",
    localArea:
      "Toronto is the main hub of Lake Macquarie\u0027s western shore, a lakeside town with its own medical services and a strong community of families and retirees. For residents who find travel difficult, physiotherapy delivered at home is a natural fit for the town\u0027s relaxed, waterside way of life.",
    gpClinics: ["Toronto town centre medical practices", "Toronto Polyclinic"],
    hospitals: ["Belmont Hospital, Croudace Bay Road", "Lake Macquarie Private Hospital, Gateshead"],
    landmarks: ["Toronto foreshore & Lake Macquarie", "Toronto town centre", "Toronto Men\u0027s Shed"],
    gettingAround: "Toronto is a western-shore hub on Lake Macquarie with its own medical services. Because we come to your home, there is no travel or parking to worry about.",
  },
  {
    slug: "physiotherapy-glendale",
    name: "Glendale",
    region: "Lake Macquarie",
    intro:
      "We provide home visit physiotherapy across Glendale, supporting older adults, NDIS participants and Home Care Package clients in the comfort of their own homes.",
    local:
      "Centrally located in Lake Macquarie, Glendale is easy for our mobile physiotherapists to reach, and home to many families caring for ageing parents. We deliver mobility, strength and rehabilitation programs across Glendale, Cardiff and Argenton.",
    nearby: ["Cardiff", "Argenton", "Edgeworth", "Boolaroo", "Speers Point"],
    postcode: "2285",
    localArea:
      "Glendale is one of Lake Macquarie\u0027s busiest commercial and transport hubs, built around the large Glendale City Centre and the Cardiff-Glendale interchange. Even with everything close by, a clinic visit still means parking and queues \u2014 which is why so many residents prefer physiotherapy that comes to them.",
    gpClinics: ["Stockland Medical Centre, Glendale City Centre", "The Doctors Glendale"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "John Hunter Hospital, New Lambton Heights"],
    landmarks: ["Glendale City Centre (Stockland Glendale)", "Pasterfield Sports Complex", "Cardiff-Glendale interchange"],
    gettingAround: "Glendale is a major shopping and transport hub, but a clinic visit still means parking and queues. We come to you instead.",
  },
  {
    slug: "physiotherapy-tuggerah",
    name: "Tuggerah",
    region: "Central Coast",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy in Tuggerah, delivering aged care, NDIS and Support at Home physiotherapy across the central Central Coast.",
    local:
      "Tuggerah and its surrounding suburbs have a growing need for accessible in-home care. Our physiotherapists visit homes throughout Tuggerah, close to Tuggerah Lakes and Westfield Tuggerah, supporting falls prevention, strength and mobility for older adults.",
    nearby: ["Wyong", "Kanwal", "Berkeley Vale", "Ourimbah", "Long Jetty"],
    postcode: "2259",
    localArea:
      "Tuggerah is built around Westfield Tuggerah and the northern rail line, a busy retail and transport hub beside the Tuggerah Lakes. For older residents recovering from injury or surgery, home visit physiotherapy removes the need to navigate the centre\u0027s car parks and crowds.",
    gpClinics: ["Medical practices around Westfield Tuggerah", "Wyong medical centres (nearby)"],
    hospitals: ["Wyong Hospital (nearby)", "Gosford Hospital"],
    landmarks: ["Westfield Tuggerah", "Tuggerah railway station", "Tuggerah Lakes"],
    gettingAround: "Tuggerah is centred on Westfield and the rail line, minutes from Wyong Hospital. We take care of the travel by coming to your home.",
  },
  {
    slug: "physiotherapy-erina",
    name: "Erina",
    region: "Central Coast",
    intro:
      "We deliver home visit physiotherapy across Erina and the surrounding Central Coast, helping older adults and NDIS participants stay mobile, strong and independent at home.",
    local:
      "Erina is a busy Central Coast centre with a large older population. Our mobile physiotherapists visit homes throughout Erina, Terrigal and Wamberal, providing balance training, aged care rehabilitation and Home Care Package physiotherapy in the comfort of home.",
    nearby: ["Terrigal", "Wamberal", "Green Point", "East Gosford", "Springfield"],
    postcode: "2250",
    localArea:
      "Erina is the Central Coast\u0027s major retail centre, home to the huge Erina Fair, and sits just minutes from both Gosford and the beaches at Terrigal and Avoca. Its mix of families and retirees makes home-based physiotherapy a practical, comfortable option for anyone who would rather not travel to a clinic.",
    gpClinics: ["Erina Fair Medical Centre, 230 The Entrance Road", "Erina medical & allied health practices"],
    hospitals: ["Gosford Hospital (about 10 minutes)", "Woy Woy Hospital"],
    landmarks: ["Erina Fair shopping centre", "Terrigal Drive", "close to Terrigal & Avoca beaches"],
    gettingAround: "Erina sits around 10 minutes from Gosford Hospital and the beaches. Because we come to you, there is no parking at Erina Fair to contend with.",
  },
  {
    slug: "physiotherapy-lambton",
    name: "Lambton",
    region: "Newcastle",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy in Lambton, delivering mobile aged care, NDIS and Support at Home physiotherapy to residents across this established inner-Newcastle suburb.",
    local:
      "Close to John Hunter Hospital, Lambton is an ideal area for home-based rehabilitation, including for people returning home after a hospital stay. Our physiotherapists visit homes throughout Lambton, North Lambton and New Lambton, supporting falls prevention, strength and mobility for older adults.",
    nearby: ["North Lambton", "New Lambton", "Jesmond", "Waratah", "Kotara"],
    postcode: "2299",
    localArea:
      "Lambton is a historic village-style suburb built around Lambton Park and the Elder Street shops, with a long-established community and many older residents. Its closeness to John Hunter Hospital makes it a natural base for people recovering at home after surgery or a hospital stay — the point at which good physiotherapy makes the biggest difference to getting strong and steady again.",
    gpClinics: ["Lambton and North Lambton family medical practices", "Broadmeadow Medical Centre (nearby)"],
    hospitals: ["John Hunter Hospital, New Lambton Heights (nearby)", "Calvary Mater Newcastle, Waratah"],
    retirement: ["Calvary Ephesus Retirement Village, Dickson Street, Lambton"],
    landmarks: ["Lambton Park", "Elder Street village shops", "Blackbutt Reserve nearby"],
    gettingAround: "Lambton is minutes from John Hunter Hospital, making it central for recovery at home. We visit you directly, so there is no parking or travel to arrange.",
  },
  {
    slug: "physiotherapy-mayfield",
    name: "Mayfield",
    region: "Newcastle",
    intro:
      "We deliver home visit physiotherapy across Mayfield, bringing expert mobile physiotherapy to older adults, NDIS participants and Support at Home clients in this historic inner-Newcastle suburb.",
    local:
      "Mayfield's established streets and strong community are home to many older residents who value care that comes to them. Our mobile physiotherapists visit homes across Mayfield, Mayfield East and Mayfield West, delivering falls prevention, aged care rehabilitation and post-hospital recovery.",
    nearby: ["Waratah", "Warabrook", "Islington", "Tighes Hill", "Georgetown"],
    postcode: "2304",
    localArea:
      "Mayfield is one of Newcastle's oldest and most established inner suburbs, with a strong sense of community and a large population of long-term, older residents along Maitland Road and the surrounding streets. Many have lived in the area for decades and would far rather receive physiotherapy at home than travel — which is exactly what a mobile service makes possible.",
    gpClinics: ["Mayfield Medical Centre, 278 Maitland Road", "Waratah and Mayfield family medical practices"],
    hospitals: ["Calvary Mater Newcastle, Waratah (nearby)", "John Hunter Hospital, New Lambton Heights"],
    agedCare: ["Mayfield Aged Care", "Hippocrates Aged Care Centre, Mayfield"],
    landmarks: ["Maitland Road shopping strip", "Throsby Creek foreshore", "Mayfield Park"],
    gettingAround: "Mayfield sits right beside the Calvary Mater hospital precinct in Waratah. We visit you at home, so there is no need to travel or find parking for your appointment.",
  },
  {
    slug: "physiotherapy-valentine",
    name: "Valentine",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy offers home visit physiotherapy in Valentine, helping residents of this eastern Lake Macquarie suburb stay strong, steady and independent at home.",
    local:
      "Valentine's peaceful lakeside setting is home to many retirees and older adults. Our physiotherapists regularly visit homes around Valentine, Croudace Bay and Eleebana, supporting balance, mobility and Home Care Package clients close to the lake.",
    nearby: ["Eleebana", "Croudace Bay", "Belmont", "Warners Bay", "Belmont North"],
    postcode: "2280",
    localArea:
      "Valentine is a quiet, sought-after lakeside suburb beside Croudace Bay, with a large community of retirees and older adults enjoying the waterfront lifestyle. Its position next to Belmont Hospital makes it a key area for recovery at home after a hospital admission.",
    gpClinics: ["Valentine and Belmont medical practices", "Lake Macquarie Medical Centre, Belmont (nearby)"],
    hospitals: ["Belmont Hospital, Croudace Bay Road (nearby)", "Lake Macquarie Private Hospital, Gateshead"],
    landmarks: ["Croudace Bay Park & sporting fields", "Valentine foreshore", "Lake Macquarie"],
    gettingAround: "Valentine sits on the lake beside Croudace Bay and Belmont Hospital. Because we come to your home, there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-cameron-park",
    name: "Cameron Park",
    region: "Lake Macquarie",
    intro:
      "We provide home visit physiotherapy across Cameron Park, delivering mobile aged care, NDIS and Support at Home physiotherapy to families and older adults in this growing western suburb.",
    local:
      "Cameron Park's newer estates and quiet streets are well suited to home-based rehabilitation, where our physiotherapists can tailor programs to your real environment. We support clients across Cameron Park, Edgeworth and West Wallsend with strength, balance and falls-prevention programs.",
    nearby: ["Edgeworth", "West Wallsend", "Killingworth", "Barnsley", "Fletcher"],
    postcode: "2285",
    localArea:
      "Cameron Park is one of Lake Macquarie\u0027s fastest-growing residential communities, close to the M1 and the Pasterfield Sports Complex. Its newer, single-level homes are well suited to home-based rehabilitation, where our physiotherapists can tailor a program to your actual living environment.",
    gpClinics: ["Edgeworth and Glendale medical centres (nearby)", "Cameron Park medical practices"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "John Hunter Hospital, New Lambton Heights"],
    landmarks: ["Pasterfield Sports Complex", "Cameron Park shopping", "Blue Gum Hills Regional Park nearby"],
    gettingAround: "Cameron Park is a newer, growing Lake Macquarie suburb close to the M1. We bring physiotherapy to your door, so there is no travel or parking involved.",
  },
  {
    slug: "physiotherapy-maitland",
    name: "Maitland",
    region: "Hunter Region",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy across Maitland NSW, bringing mobile aged care, NDIS and Support at Home physiotherapy to residents throughout the Maitland and lower Hunter area.",
    local:
      "Maitland has a large and growing older population across its historic town centre and surrounding suburbs. Our physiotherapists visit homes throughout Maitland, East Maitland and Rutherford — close to Maitland Hospital — supporting falls prevention, aged care and post-hospital rehabilitation without the need to travel.",
    nearby: ["East Maitland", "Rutherford", "Thornton", "Lorn", "Metford"],
    postcode: "2320",
    localArea:
      "Maitland is one of the Hunter\u0027s fastest-growing regional cities, centred on its historic High Street and The Levee precinct and the busy Green Hills retail and medical hub. With a new hospital and a rapidly ageing population, it is an important area for home-based rehabilitation and falls prevention.",
    gpClinics: ["Better Health Greenhills, East Maitland", "Good Health Greenhills, Green Hills", "Maitland and East Maitland medical practices"],
    hospitals: ["Maitland Hospital, Metford (opened 2022)", "Maitland Private Hospital, East Maitland"],
    landmarks: ["Stockland Green Hills", "Maitland High Street & The Levee", "Maitland Park"],
    gettingAround: "Maitland is served by the new Maitland Hospital and the Green Hills medical precinct. We visit you at home, so there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-edgeworth",
    name: "Edgeworth",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy in Edgeworth, delivering mobile aged care, NDIS and Support at Home physiotherapy to residents across this established western Lake Macquarie suburb.",
    local:
      "Edgeworth is a busy residential suburb around Northlakes and the shores of Cockle Creek, with a large community of families and older residents. Our mobile physiotherapists visit homes throughout Edgeworth, West Wallsend and Cameron Park, supporting falls prevention, post-hospital recovery and Home Care Package clients.",
    nearby: ["West Wallsend", "Cameron Park", "Glendale", "Barnsley", "Holmesville"],
    postcode: "2285",
    localArea:
      "Edgeworth sits at the western edge of Lake Macquarie around Northlakes and Cockle Creek, a settled community with a strong mix of long-term families and older residents. For those who find travelling to a clinic difficult, in-home physiotherapy keeps strength, balance and mobility on track without leaving home.",
    gpClinics: ["Edgeworth medical practices", "Stockland Medical Centre, Glendale (nearby)"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "John Hunter Hospital, New Lambton Heights"],
    landmarks: ["Northlakes shopping precinct", "Cockle Creek", "Edgeworth Tavern"],
    gettingAround: "Edgeworth is close to Glendale's shopping and transport hub and a short drive from Lake Macquarie Private Hospital. Because we come to you, there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-lake-macquarie",
    name: "Lake Macquarie",
    region: "Lake Macquarie",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy right across Lake Macquarie, bringing expert mobile aged care, NDIS and Support at Home physiotherapy to residents around Australia's largest coastal saltwater lake.",
    local:
      "Lake Macquarie is one of the largest local government areas in NSW and has a significantly older age profile than Newcastle, with many retirees settled here for the lakeside lifestyle. Our physiotherapists visit homes right around the lake — from Warners Bay and Belmont to Charlestown, Cardiff, Toronto and Swansea — supporting people who find travelling to a clinic difficult.",
    nearby: ["Warners Bay", "Belmont", "Charlestown", "Cardiff", "Toronto", "Swansea"],
    postcode: "2280",
    localArea:
      "Home to more than 200,000 people, Lake Macquarie combines busy retail hubs like Charlestown and Glendale with quiet lakeside villages, and has one of the highest proportions of older residents in the region. That makes accessible, in-home physiotherapy especially valuable — from falls prevention and aged care to post-hospital rehabilitation right around the lake.",
    gpClinics: ["Stockland Medical Centre, Glendale", "Lake Macquarie Medical Centre, Belmont", "medical practices in Charlestown, Warners Bay & Toronto"],
    hospitals: ["Lake Macquarie Private Hospital, Gateshead", "Belmont Hospital, Croudace Bay Road"],
    landmarks: ["Lake Macquarie (largest coastal saltwater lake in Australia)", "Warners Bay foreshore", "Speers Point Park"],
    gettingAround: "Lake Macquarie's size and traffic can make clinic visits difficult for older residents. Because we come to your home anywhere around the lake, there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-central-coast",
    name: "Central Coast",
    region: "Central Coast",
    intro:
      "Fletcher Physiotherapy provides home visit physiotherapy across the Central Coast, bringing mobile aged care, NDIS and Support at Home physiotherapy to residents from Gosford and Erina through to Wyong and Tuggerah.",
    local:
      "The Central Coast has one of the fastest-growing older populations in NSW, spread across Gosford, Wyong, Erina, Terrigal and the surrounding towns. Our physiotherapists visit homes throughout the region — close to Gosford and Wyong hospitals — supporting falls prevention, strength and post-hospital rehabilitation without the need to travel.",
    nearby: ["Gosford", "Erina", "Wyong", "Tuggerah", "Terrigal", "The Entrance"],
    postcode: "2250",
    localArea:
      "Stretching from Brisbane Water and Gosford in the south to the Tuggerah Lakes and Wyong in the north, the Central Coast blends beaches, waterways and fast-growing residential communities with a large and ageing population. In-home physiotherapy lets residents recover and stay mobile without long drives to a clinic.",
    gpClinics: ["Erina Fair Medical Centre, Erina", "private general practices in Gosford, Wyong & Terrigal"],
    hospitals: ["Gosford Hospital (principal referral & trauma centre)", "Wyong Hospital", "Woy Woy Hospital (sub-acute)"],
    landmarks: ["Gosford Waterfront & Brisbane Water", "Terrigal Beach", "The Entrance & Tuggerah Lakes"],
    gettingAround: "The Central Coast covers a large area between Gosford and Wyong. Because we come to your home, there is no travel or parking to arrange for your appointment.",
  },
  {
    slug: "physiotherapy-sydney",
    name: "Sydney",
    region: "Sydney",
    postcode: "2127",
    intro:
      "Fletcher Physiotherapy is expanding to Sydney from November 2026 — bringing nursing-home and in-home physiotherapy to residential aged care, Support at Home, NDIS and Rehab at Home clients across the Sydney Olympic Park area and surrounding suburbs.",
    local:
      "Based in the Sydney Olympic Park region, our Sydney service focuses on home visits and residential aged care, delivering mobile physiotherapy to older adults and NDIS participants in the inner west and surrounding suburbs — so you receive expert care without the need to travel.",
    localArea:
      "From November 2026, Fletcher Physiotherapy brings its home-visit model to Sydney. Based around Sydney Olympic Park, we focus on nursing-home physiotherapy and in-home care for residential aged care, Support at Home, NDIS and Rehab at Home clients across the inner west — including Homebush, Lidcombe, Auburn, Strathfield, Concord and nearby suburbs. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management and extensive experience in aged care, falls prevention and rehabilitation.",
    nearby: ["Sydney Olympic Park", "Homebush", "Lidcombe", "Auburn", "Strathfield", "Concord"],
    hospitals: ["Concord Hospital", "Auburn Hospital", "Westmead Hospital"],
    landmarks: ["Sydney Olympic Park", "Bicentennial Park", "Parramatta River"],
    gettingAround: "Our Sydney service is based around Sydney Olympic Park and reaches suburbs within roughly 30 minutes. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-sydney-olympic-park",
    name: "Sydney Olympic Park",
    region: "Sydney",
    postcode: "2127",
    intro:
      "Home-visit and nursing-home physiotherapy in Sydney Olympic Park from November 2026 — mobile care for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Sydney Olympic Park is the hub of our new Sydney service. We visit homes and residential aged care across the precinct and its growing residential communities at Newington and Wentworth Point, supporting older adults and NDIS participants with strength, balance, mobility and falls prevention.",
    localArea:
      "Sydney Olympic Park sits at the geographic heart of Sydney, surrounded by fast-growing residential communities at Newington, Wentworth Point and Sydney Olympic Park itself. From November 2026 it is the base for Fletcher Physiotherapy's Sydney service, focused on nursing-home and in-home physiotherapy for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Newington", "Wentworth Point", "Homebush", "Lidcombe", "Rhodes"],
    hospitals: ["Auburn Hospital", "Concord Hospital"],
    landmarks: ["Sydney Olympic Park & stadiums", "Bicentennial Park", "Wentworth Point marina"],
    gettingAround: "Sydney Olympic Park is central to the inner west and well connected by road and rail. We come to you at home or in residential care, so there is no travel or parking involved.",
  },
  {
    slug: "physiotherapy-homebush",
    name: "Homebush",
    region: "Sydney",
    postcode: "2140",
    intro:
      "Home-visit and nursing-home physiotherapy in Homebush from November 2026 — mobile care for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered at home.",
    local:
      "Right beside Sydney Olympic Park, Homebush is one of the first suburbs served by our new Sydney team. We visit homes and aged-care settings across Homebush and Homebush West, supporting mobility, balance, falls prevention and rehabilitation.",
    localArea:
      "Homebush is an established inner-west suburb with a mix of long-term residents and growing residential communities, right on the doorstep of Sydney Olympic Park. From November 2026 our Sydney physiotherapists visit homes and nursing homes across Homebush for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Homebush West", "Strathfield", "North Strathfield", "Concord", "Sydney Olympic Park"],
    hospitals: ["Concord Hospital", "Auburn Hospital"],
    landmarks: ["DFO Homebush", "Sydney Markets", "Mason Park"],
    gettingAround: "Homebush adjoins Sydney Olympic Park and is easy to reach from our Sydney base. We visit you at home or in residential care, so there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-lidcombe",
    name: "Lidcombe",
    region: "Sydney",
    postcode: "2141",
    intro:
      "Home-visit and nursing-home physiotherapy in Lidcombe from November 2026 — mobile physiotherapy for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    local:
      "Lidcombe sits next to Sydney Olympic Park and has a large, diverse community including many older residents and residential aged-care facilities. Our Sydney team visits homes and care settings across Lidcombe for strength, balance, mobility and falls prevention.",
    localArea:
      "Lidcombe is a busy, multicultural inner-west suburb beside Sydney Olympic Park, home to a significant older population and several aged-care facilities. From November 2026 Fletcher Physiotherapy provides nursing-home and in-home physiotherapy here for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Auburn", "Berala", "Regents Park", "Homebush", "Sydney Olympic Park"],
    hospitals: ["Auburn Hospital", "Concord Hospital"],
    landmarks: ["Lidcombe town centre", "Rookwood", "Wyatt Park"],
    gettingAround: "Lidcombe is minutes from our Sydney Olympic Park base. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-auburn",
    name: "Auburn",
    region: "Sydney",
    postcode: "2144",
    intro:
      "Home-visit and nursing-home physiotherapy in Auburn from November 2026 — mobile care for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients, at home.",
    local:
      "Auburn is a large, diverse inner-west suburb with a strong community and its own hospital. Our Sydney physiotherapists visit homes and aged-care settings across Auburn, supporting mobility, balance, falls prevention and recovery.",
    localArea:
      "Auburn is a major inner-west centre with a large, multicultural community and a significant older population, served by Auburn Hospital. From November 2026 Fletcher Physiotherapy offers nursing-home and in-home physiotherapy across Auburn for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Lidcombe", "Berala", "Regents Park", "Silverwater", "Newington"],
    hospitals: ["Auburn Hospital", "Westmead Hospital", "Concord Hospital"],
    landmarks: ["Auburn Botanic Gardens", "Auburn town centre", "Duck River"],
    gettingAround: "Auburn is a short drive from Sydney Olympic Park and home to Auburn Hospital. We visit you at home or in residential care, so there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-strathfield",
    name: "Strathfield",
    region: "Sydney",
    postcode: "2135",
    intro:
      "Home-visit and nursing-home physiotherapy in Strathfield from November 2026 — mobile physiotherapy for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    local:
      "Strathfield is an established, leafy inner-west suburb with many older residents and aged-care facilities. Our Sydney team visits homes and residential care across Strathfield and North Strathfield for strength, balance, mobility and falls prevention.",
    localArea:
      "Strathfield is a settled, well-connected inner-west suburb with grand homes, a busy town centre and a substantial older population. From November 2026 Fletcher Physiotherapy provides nursing-home and in-home physiotherapy here for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["North Strathfield", "Homebush", "Burwood", "Concord", "Flemington"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Strathfield Plaza", "Strathfield Park", "Homebush Bay Drive"],
    gettingAround: "Strathfield is a short drive from Sydney Olympic Park and a major rail hub. Because we come to you at home or in residential care, there is no travel or parking involved.",
  },
  {
    slug: "physiotherapy-concord",
    name: "Concord",
    region: "Sydney",
    postcode: "2137",
    intro:
      "Home-visit and nursing-home physiotherapy in Concord from November 2026 — mobile care for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered at home.",
    local:
      "Concord is an established riverside suburb home to the major Concord Hospital and a large older population. Our Sydney physiotherapists visit homes and aged-care settings across Concord, supporting post-hospital recovery, balance and mobility.",
    localArea:
      "Concord is a quiet, established inner-west suburb on the Parramatta River, anchored by Concord Hospital — a major centre for rehabilitation and aged care. From November 2026 Fletcher Physiotherapy provides nursing-home and in-home physiotherapy across Concord for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Concord West", "Rhodes", "Cabarita", "Mortlake", "Strathfield"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Concord Hospital", "Majors Bay Road", "Cabarita Park"],
    gettingAround: "Concord sits beside its own major hospital and the Parramatta River, a short drive from Sydney Olympic Park. We visit you at home or in residential care, so there is no travel or parking to manage.",
  },
  {
    slug: "physiotherapy-ryde",
    name: "Ryde",
    region: "Sydney",
    postcode: "2112",
    intro:
      "Home-visit and nursing-home physiotherapy in Ryde from November 2026 — mobile physiotherapy for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    local:
      "Ryde is a large northern-river suburb with its own hospital and a significant older population. Our Sydney team visits homes and residential aged care across Ryde and surrounds for strength, balance, mobility and falls prevention.",
    localArea:
      "Ryde is an established suburb on the northern side of the Parramatta River, served by Ryde Hospital and home to many older residents and aged-care facilities. From November 2026 Fletcher Physiotherapy provides nursing-home and in-home physiotherapy across Ryde for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["West Ryde", "Meadowbank", "Rhodes", "Gladesville", "Macquarie Park"],
    hospitals: ["Ryde Hospital", "Concord Hospital"],
    landmarks: ["Top Ryde City", "Ryde town centre", "Parramatta River"],
    gettingAround: "Ryde is just across the river from Sydney Olympic Park and served by Ryde Hospital. Because we come to you at home or in residential care, there is no travel or parking involved.",
  },
  {
    slug: "physiotherapy-parramatta",
    name: "Parramatta",
    region: "Sydney",
    postcode: "2150",
    intro:
      "Home-visit and nursing-home physiotherapy in Parramatta from November 2026 — mobile care for older adults, residential aged care, Support at Home, NDIS and Rehab at Home clients, at home.",
    local:
      "Parramatta is the thriving heart of Greater Sydney's west, with a large and growing population and major hospitals nearby. Our Sydney physiotherapists visit homes and residential aged care across Parramatta, supporting mobility, balance, falls prevention and recovery.",
    localArea:
      "Parramatta is Sydney's second CBD and a major health and residential centre, close to Westmead Hospital. From November 2026 Fletcher Physiotherapy provides nursing-home and in-home physiotherapy across Parramatta for residential aged care, Support at Home, NDIS and Rehab at Home clients.",
    nearby: ["Harris Park", "Rosehill", "Granville", "North Parramatta", "Westmead"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Parramatta CBD", "Parramatta River foreshore", "Parramatta Park"],
    gettingAround: "Parramatta is a short drive from Sydney Olympic Park and close to Westmead Hospital. We visit you at home or in residential care, so there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-granville",
    name: "Granville",
    region: "Sydney",
    postcode: "2142",
    intro:
      "Home-visit and aged-care physiotherapy in Granville, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Granville is a busy, multicultural centre on the edge of Parramatta. Our Sydney team visits homes and residential aged care across Granville, and surrounding suburbs including Parramatta, Harris Park, Rosehill, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Granville is a busy, multicultural centre on the edge of Parramatta, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Granville. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Parramatta", "Harris Park", "Rosehill", "Auburn", "Clyde"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Granville station", "Parramatta Road", "Duck River"],
    gettingAround: "Granville sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-ermington",
    name: "Ermington",
    region: "Sydney",
    postcode: "2115",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Ermington — for Support at Home, NDIS and Rehab at Home clients across the Parramatta area.",
    local:
      "Ermington is a quiet riverside suburb on the Parramatta River. Our Sydney team visits homes and residential aged care across Ermington, and surrounding suburbs including Rydalmere, Melrose Park, Dundas, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Ermington is a quiet riverside suburb on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Ermington. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Rydalmere", "Melrose Park", "Dundas", "Meadowbank", "Silverwater"],
    hospitals: ["Ryde Hospital", "Westmead Hospital"],
    landmarks: ["Parramatta River foreshore", "Halvorsen Park", "Ermington shops"],
    gettingAround: "Ermington sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-carlingford",
    name: "Carlingford",
    region: "Sydney",
    postcode: "2118",
    intro:
      "Mobile physiotherapy in Carlingford, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Carlingford is an established, leafy suburb in Sydney's north-west. Our Sydney team visits homes and residential aged care across Carlingford, and surrounding suburbs including Epping, Dundas, Eastwood, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Carlingford is an established, leafy suburb in Sydney's north-west, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Carlingford. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Epping", "Dundas", "Eastwood", "Beecroft", "Telopea"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Carlingford Court", "Carlingford village", "Rienits Reserve"],
    gettingAround: "Carlingford sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-epping",
    name: "Epping",
    region: "Sydney",
    postcode: "2121",
    intro:
      "Home-visit and aged-care physiotherapy in Epping, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Epping is a popular, well-connected suburb on the northern rail line. Our Sydney team visits homes and residential aged care across Epping, and surrounding suburbs including Carlingford, Eastwood, Marsfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Epping is a popular, well-connected suburb on the northern rail line, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Epping. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Carlingford", "Eastwood", "Marsfield", "Denistone", "North Ryde"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Epping station", "Epping town centre", "Boronia Park"],
    gettingAround: "Epping sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-eastwood",
    name: "Eastwood",
    region: "Sydney",
    postcode: "2122",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Eastwood — for Support at Home, NDIS and Rehab at Home clients across Ryde and the north.",
    local:
      "Eastwood is a vibrant, family-oriented suburb with a bustling shopping strip. Our Sydney team visits homes and residential aged care across Eastwood, and surrounding suburbs including Denistone, West Ryde, Epping, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Eastwood is a vibrant, family-oriented suburb with a bustling shopping strip, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Eastwood. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Denistone", "West Ryde", "Epping", "Marsfield", "Ryde"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Eastwood shopping precinct", "Eastwood Park", "Eastwood Oval"],
    gettingAround: "Eastwood sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-gladesville",
    name: "Gladesville",
    region: "Sydney",
    postcode: "2111",
    intro:
      "Mobile physiotherapy in Gladesville, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Gladesville is an established suburb on the lower north shore by the Parramatta River. Our Sydney team visits homes and residential aged care across Gladesville, and surrounding suburbs including Hunters Hill, Ryde, Putney, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Gladesville is an established suburb on the lower north shore by the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Gladesville. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Hunters Hill", "Ryde", "Putney", "Tennyson Point", "Drummoyne"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Gladesville shops", "Banjo Paterson Park", "Gladesville Bridge"],
    gettingAround: "Gladesville sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-hunters-hill",
    name: "Hunters Hill",
    region: "Sydney",
    postcode: "2110",
    intro:
      "Home-visit and aged-care physiotherapy in Hunters Hill, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Hunters Hill is a historic, leafy peninsula suburb on the river. Our Sydney team visits homes and residential aged care across Hunters Hill, and surrounding suburbs including Gladesville, Woolwich, Ryde, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Hunters Hill is a historic, leafy peninsula suburb on the river, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Hunters Hill. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Gladesville", "Woolwich", "Ryde", "Putney", "Henley"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["historic Hunters Hill village", "Boronia Park", "Lane Cove River"],
    gettingAround: "Hunters Hill sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-rhodes",
    name: "Rhodes",
    region: "Sydney",
    postcode: "2138",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Rhodes — for Support at Home, NDIS and Rehab at Home clients across the inner west.",
    local:
      "Rhodes is a fast-growing waterfront suburb on the Parramatta River. Our Sydney team visits homes and residential aged care across Rhodes, and surrounding suburbs including Concord West, Wentworth Point, Meadowbank, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Rhodes is a fast-growing waterfront suburb on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Rhodes. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Concord West", "Wentworth Point", "Meadowbank", "Liberty Grove", "Mortlake"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Rhodes Waterside", "Rhodes station", "Kokoda Track Memorial Walkway"],
    gettingAround: "Rhodes sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-wentworth-point",
    name: "Wentworth Point",
    region: "Sydney",
    postcode: "2127",
    intro:
      "Mobile physiotherapy in Wentworth Point, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Wentworth Point is a modern waterfront community beside Sydney Olympic Park. Our Sydney team visits homes and residential aged care across Wentworth Point, and surrounding suburbs including Sydney Olympic Park, Rhodes, Newington, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Wentworth Point is a modern waterfront community beside Sydney Olympic Park, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Wentworth Point. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Sydney Olympic Park", "Rhodes", "Newington", "Homebush Bay", "Concord West"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Wentworth Point marina", "Jim Ring Reserve", "Sydney Olympic Park"],
    gettingAround: "Wentworth Point sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-drummoyne",
    name: "Drummoyne",
    region: "Sydney",
    postcode: "2047",
    intro:
      "Home-visit and aged-care physiotherapy in Drummoyne, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Drummoyne is an established waterside suburb along the inner-west Bay Run. Our Sydney team visits homes and residential aged care across Drummoyne, and surrounding suburbs including Five Dock, Russell Lea, Rodd Point, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Drummoyne is an established waterside suburb along the inner-west Bay Run, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Drummoyne. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Five Dock", "Russell Lea", "Rodd Point", "Cabarita", "Chiswick"],
    hospitals: ["Concord Hospital", "Royal Prince Alfred Hospital"],
    landmarks: ["Birkenhead Point", "the Bay Run", "Drummoyne foreshore"],
    gettingAround: "Drummoyne sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-five-dock",
    name: "Five Dock",
    region: "Sydney",
    postcode: "2046",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Five Dock — for Support at Home, NDIS and Rehab at Home clients across the inner west.",
    local:
      "Five Dock is a welcoming inner-west suburb known for its Great North Road village. Our Sydney team visits homes and residential aged care across Five Dock, and surrounding suburbs including Drummoyne, Russell Lea, Abbotsford, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Five Dock is a welcoming inner-west suburb known for its Great North Road village, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Five Dock. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Drummoyne", "Russell Lea", "Abbotsford", "Canada Bay", "Croydon"],
    hospitals: ["Concord Hospital", "Royal Prince Alfred Hospital"],
    landmarks: ["Great North Road village", "Five Dock Park", "Canada Bay foreshore"],
    gettingAround: "Five Dock sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-burwood",
    name: "Burwood",
    region: "Sydney",
    postcode: "2134",
    intro:
      "Mobile physiotherapy in Burwood, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Burwood is a busy inner-west hub centred on Westfield Burwood. Our Sydney team visits homes and residential aged care across Burwood, and surrounding suburbs including Croydon, Strathfield, Concord, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Burwood is a busy inner-west hub centred on Westfield Burwood, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Burwood. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Croydon", "Strathfield", "Concord", "Enfield", "Ashfield"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Westfield Burwood", "Burwood Park", "Burwood town centre"],
    gettingAround: "Burwood sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-ashfield",
    name: "Ashfield",
    region: "Sydney",
    postcode: "2131",
    intro:
      "Home-visit and aged-care physiotherapy in Ashfield, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Ashfield is a lively, multicultural inner-west suburb. Our Sydney team visits homes and residential aged care across Ashfield, and surrounding suburbs including Croydon, Summer Hill, Haberfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Ashfield is a lively, multicultural inner-west suburb, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Ashfield. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Croydon", "Summer Hill", "Haberfield", "Burwood", "Canterbury"],
    hospitals: ["Concord Hospital", "Royal Prince Alfred Hospital"],
    landmarks: ["Ashfield Park", "Ashfield town centre", "Yeo Park"],
    gettingAround: "Ashfield sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-newington",
    name: "Newington",
    region: "Sydney",
    postcode: "2127",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Newington — for Support at Home, NDIS and Rehab at Home clients across the Olympic Park area.",
    local:
      "Newington is a modern residential community beside Sydney Olympic Park. Our Sydney team visits homes and residential aged care across Newington, and surrounding suburbs including Sydney Olympic Park, Silverwater, Wentworth Point, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Newington is a modern residential community beside Sydney Olympic Park, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Newington. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Sydney Olympic Park", "Silverwater", "Wentworth Point", "Homebush", "Lidcombe"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Blaxland Riverside Park", "Newington Nature Reserve", "Sydney Olympic Park"],
    gettingAround: "Newington sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-silverwater",
    name: "Silverwater",
    region: "Sydney",
    postcode: "2128",
    intro:
      "Mobile physiotherapy in Silverwater, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Silverwater is a riverside suburb next to Sydney Olympic Park. Our Sydney team visits homes and residential aged care across Silverwater, and surrounding suburbs including Newington, Sydney Olympic Park, Auburn, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Silverwater is a riverside suburb next to Sydney Olympic Park, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Silverwater. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Newington", "Sydney Olympic Park", "Auburn", "Ermington", "Rhodes"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Silverwater Park", "Newington Nature Reserve", "Parramatta River"],
    gettingAround: "Silverwater sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-meadowbank",
    name: "Meadowbank",
    region: "Sydney",
    postcode: "2114",
    intro:
      "Home-visit and aged-care physiotherapy in Meadowbank, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Meadowbank is a growing riverside suburb on the Parramatta River. Our Sydney team visits homes and residential aged care across Meadowbank, and surrounding suburbs including West Ryde, Melrose Park, Ermington, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Meadowbank is a growing riverside suburb on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Meadowbank. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["West Ryde", "Melrose Park", "Ermington", "Rhodes", "Denistone"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Meadowbank wharf", "Meadowbank Park", "Parramatta River"],
    gettingAround: "Meadowbank sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-homebush-west",
    name: "Homebush West",
    region: "Sydney",
    postcode: "2140",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Homebush West — for Support at Home, NDIS and Rehab at Home clients across the Olympic Park area.",
    local:
      "Homebush West is a diverse suburb beside Flemington and Sydney Olympic Park. Our Sydney team visits homes and residential aged care across Homebush West, and surrounding suburbs including Homebush, Flemington, Strathfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Homebush West is a diverse suburb beside Flemington and Sydney Olympic Park, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Homebush West. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Homebush", "Flemington", "Strathfield", "Lidcombe", "North Strathfield"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Flemington Markets", "Homebush West shops", "DFO Homebush"],
    gettingAround: "Homebush West sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-north-strathfield",
    name: "North Strathfield",
    region: "Sydney",
    postcode: "2137",
    intro:
      "Mobile physiotherapy in North Strathfield, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "North Strathfield is an established suburb around the Bakehouse Quarter. Our Sydney team visits homes and residential aged care across North Strathfield, and surrounding suburbs including Strathfield, Concord, Homebush, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "North Strathfield is an established suburb around the Bakehouse Quarter, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across North Strathfield. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Strathfield", "Concord", "Homebush", "Concord West", "Rhodes"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["the Bakehouse Quarter", "North Strathfield station", "Powells Creek"],
    gettingAround: "North Strathfield sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-strathfield-south",
    name: "Strathfield South",
    region: "Sydney",
    postcode: "2136",
    intro:
      "Home-visit and aged-care physiotherapy in Strathfield South, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Strathfield South is a quiet residential pocket south of Strathfield. Our Sydney team visits homes and residential aged care across Strathfield South, and surrounding suburbs including Strathfield, Enfield, Belfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Strathfield South is a quiet residential pocket south of Strathfield, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Strathfield South. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Strathfield", "Enfield", "Belfield", "Burwood", "Greenacre"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Cooke Park", "Strathfield South shops", "Roberts Park"],
    gettingAround: "Strathfield South sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-concord-west",
    name: "Concord West",
    region: "Sydney",
    postcode: "2138",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Concord West — for Support at Home, NDIS and Rehab at Home clients across the inner west.",
    local:
      "Concord West is a leafy riverside suburb beside Rhodes and Concord. Our Sydney team visits homes and residential aged care across Concord West, and surrounding suburbs including Concord, Rhodes, North Strathfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Concord West is a leafy riverside suburb beside Rhodes and Concord, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Concord West. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Concord", "Rhodes", "North Strathfield", "Liberty Grove", "Mortlake"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Concord West station", "Bicentennial Park", "Powells Creek"],
    gettingAround: "Concord West sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-cabarita",
    name: "Cabarita",
    region: "Sydney",
    postcode: "2137",
    intro:
      "Mobile physiotherapy in Cabarita, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Cabarita is a peaceful waterfront suburb on the Parramatta River. Our Sydney team visits homes and residential aged care across Cabarita, and surrounding suburbs including Concord, Mortlake, Breakfast Point, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Cabarita is a peaceful waterfront suburb on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Cabarita. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Concord", "Mortlake", "Breakfast Point", "Canada Bay", "Drummoyne"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Cabarita Park", "Cabarita wharf", "Parramatta River"],
    gettingAround: "Cabarita sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-mortlake",
    name: "Mortlake",
    region: "Sydney",
    postcode: "2137",
    intro:
      "Home-visit and aged-care physiotherapy in Mortlake, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Mortlake is a quiet peninsula suburb on the river. Our Sydney team visits homes and residential aged care across Mortlake, and surrounding suburbs including Cabarita, Breakfast Point, Concord, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Mortlake is a quiet peninsula suburb on the river, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Mortlake. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Cabarita", "Breakfast Point", "Concord", "Rhodes", "Canada Bay"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Majors Bay", "Mortlake wharf", "Parramatta River"],
    gettingAround: "Mortlake sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-breakfast-point",
    name: "Breakfast Point",
    region: "Sydney",
    postcode: "2137",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Breakfast Point — for Support at Home, NDIS and Rehab at Home clients across the inner west.",
    local:
      "Breakfast Point is a modern waterfront village on the Parramatta River. Our Sydney team visits homes and residential aged care across Breakfast Point, and surrounding suburbs including Cabarita, Mortlake, Concord, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Breakfast Point is a modern waterfront village on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Breakfast Point. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Cabarita", "Mortlake", "Concord", "Canada Bay", "Drummoyne"],
    hospitals: ["Concord Hospital", "Canterbury Hospital"],
    landmarks: ["Breakfast Point village", "the Promenade", "Parramatta River"],
    gettingAround: "Breakfast Point sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-croydon",
    name: "Croydon",
    region: "Sydney",
    postcode: "2132",
    intro:
      "Mobile physiotherapy in Croydon, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Croydon is an established, heritage inner-west suburb. Our Sydney team visits homes and residential aged care across Croydon, and surrounding suburbs including Ashfield, Burwood, Enfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Croydon is an established, heritage inner-west suburb, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Croydon. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Ashfield", "Burwood", "Enfield", "Croydon Park", "Summer Hill"],
    hospitals: ["Concord Hospital", "Royal Prince Alfred Hospital"],
    landmarks: ["Croydon station", "Croydon shops", "Malvern Hill heritage area"],
    gettingAround: "Croydon sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-berala",
    name: "Berala",
    region: "Sydney",
    postcode: "2141",
    intro:
      "Home-visit and aged-care physiotherapy in Berala, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Berala is a settled, community-minded suburb beside Lidcombe. Our Sydney team visits homes and residential aged care across Berala, and surrounding suburbs including Lidcombe, Regents Park, Auburn, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Berala is a settled, community-minded suburb beside Lidcombe, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Berala. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Lidcombe", "Regents Park", "Auburn", "Birrong", "Sefton"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Berala station", "Berala shops", "Wyatt Park"],
    gettingAround: "Berala sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-regents-park",
    name: "Regents Park",
    region: "Sydney",
    postcode: "2143",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Regents Park — for Support at Home, NDIS and Rehab at Home clients across the Parramatta area.",
    local:
      "Regents Park is a quiet, diverse suburb in Sydney's inner west. Our Sydney team visits homes and residential aged care across Regents Park, and surrounding suburbs including Berala, Lidcombe, Auburn, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Regents Park is a quiet, diverse suburb in Sydney's inner west, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Regents Park. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Berala", "Lidcombe", "Auburn", "Birrong", "Chullora"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Regents Park station", "Mona Park", "Regents Park shops"],
    gettingAround: "Regents Park sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-rosehill",
    name: "Rosehill",
    region: "Sydney",
    postcode: "2142",
    intro:
      "Mobile physiotherapy in Rosehill, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Rosehill is a riverside suburb beside Parramatta and its racecourse. Our Sydney team visits homes and residential aged care across Rosehill, and surrounding suburbs including Parramatta, Harris Park, Granville, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Rosehill is a riverside suburb beside Parramatta and its racecourse, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Rosehill. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Parramatta", "Harris Park", "Granville", "Camellia", "Rydalmere"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Rosehill Gardens Racecourse", "Parramatta River", "Rosehill station"],
    gettingAround: "Rosehill sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-harris-park",
    name: "Harris Park",
    region: "Sydney",
    postcode: "2150",
    intro:
      "Home-visit and aged-care physiotherapy in Harris Park, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Harris Park is a vibrant suburb beside Parramatta, known as Little India. Our Sydney team visits homes and residential aged care across Harris Park, and surrounding suburbs including Parramatta, Rosehill, Granville, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Harris Park is a vibrant suburb beside Parramatta, known as Little India, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Harris Park. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Parramatta", "Rosehill", "Granville", "Harris Park", "Rydalmere"],
    hospitals: ["Westmead Hospital", "Auburn Hospital"],
    landmarks: ["Harris Park 'Little India'", "Parramatta Park", "Experiment Farm"],
    gettingAround: "Harris Park sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-rydalmere",
    name: "Rydalmere",
    region: "Sydney",
    postcode: "2116",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to Rydalmere — for Support at Home, NDIS and Rehab at Home clients across the Parramatta area.",
    local:
      "Rydalmere is a riverside suburb home to Western Sydney University. Our Sydney team visits homes and residential aged care across Rydalmere, and surrounding suburbs including Ermington, Dundas, Melrose Park, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Rydalmere is a riverside suburb home to Western Sydney University, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Rydalmere. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Ermington", "Dundas", "Melrose Park", "Camellia", "Telopea"],
    hospitals: ["Ryde Hospital", "Westmead Hospital"],
    landmarks: ["Western Sydney University", "Parramatta River", "Rydalmere wharf"],
    gettingAround: "Rydalmere sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-melrose-park",
    name: "Melrose Park",
    region: "Sydney",
    postcode: "2114",
    intro:
      "Mobile physiotherapy in Melrose Park, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Melrose Park is a fast-growing riverside suburb on the Parramatta River. Our Sydney team visits homes and residential aged care across Melrose Park, and surrounding suburbs including Ermington, Rydalmere, Meadowbank, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Melrose Park is a fast-growing riverside suburb on the Parramatta River, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Melrose Park. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Ermington", "Rydalmere", "Meadowbank", "Dundas", "West Ryde"],
    hospitals: ["Ryde Hospital", "Westmead Hospital"],
    landmarks: ["Melrose Park foreshore", "Parramatta River", "Wilson Park"],
    gettingAround: "Melrose Park sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-dundas",
    name: "Dundas",
    region: "Sydney",
    postcode: "2117",
    intro:
      "Home-visit and aged-care physiotherapy in Dundas, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Dundas is an established, leafy suburb between Parramatta and Ryde. Our Sydney team visits homes and residential aged care across Dundas, and surrounding suburbs including Rydalmere, Ermington, Carlingford, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Dundas is an established, leafy suburb between Parramatta and Ryde, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Dundas. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Rydalmere", "Ermington", "Carlingford", "Telopea", "Oatlands"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Dundas Valley", "Dundas station", "Yates Avenue shops"],
    gettingAround: "Dundas sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-west-ryde",
    name: "West Ryde",
    region: "Sydney",
    postcode: "2114",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to West Ryde — for Support at Home, NDIS and Rehab at Home clients across Ryde and the north.",
    local:
      "West Ryde is a busy transport and shopping hub in the Ryde area. Our Sydney team visits homes and residential aged care across West Ryde, and surrounding suburbs including Ryde, Meadowbank, Denistone, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "West Ryde is a busy transport and shopping hub in the Ryde area, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across West Ryde. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Ryde", "Meadowbank", "Denistone", "Eastwood", "Melrose Park"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["West Ryde shops", "Anzac Park", "West Ryde station"],
    gettingAround: "West Ryde sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-putney",
    name: "Putney",
    region: "Sydney",
    postcode: "2112",
    intro:
      "Mobile physiotherapy in Putney, Sydney from November 2026 — aged-care, Support at Home, NDIS and post-hospital rehabilitation, delivered in your own home or residential care.",
    local:
      "Putney is a quiet riverside suburb on the Ryde peninsula. Our Sydney team visits homes and residential aged care across Putney, and surrounding suburbs including Ryde, Gladesville, Tennyson Point, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Putney is a quiet riverside suburb on the Ryde peninsula, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Putney. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Ryde", "Gladesville", "Tennyson Point", "Meadowbank", "Hunters Hill"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Putney Park", "Kissing Point Park", "Parramatta River"],
    gettingAround: "Putney sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-denistone",
    name: "Denistone",
    region: "Sydney",
    postcode: "2114",
    intro:
      "Home-visit and aged-care physiotherapy in Denistone, Sydney from November 2026 — mobile physio for residential aged care, Support at Home, NDIS and Rehab at Home clients, delivered where you live.",
    local:
      "Denistone is a leafy residential suburb beside Eastwood and West Ryde. Our Sydney team visits homes and residential aged care across Denistone, and surrounding suburbs including Eastwood, West Ryde, Ryde, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "Denistone is a leafy residential suburb beside Eastwood and West Ryde, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across Denistone. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Eastwood", "West Ryde", "Ryde", "Marsfield", "Meadowbank"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Denistone Park", "Eastwood Park", "Denistone station"],
    gettingAround: "Denistone sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
  {
    slug: "physiotherapy-north-ryde",
    name: "North Ryde",
    region: "Sydney",
    postcode: "2113",
    intro:
      "From November 2026, Fletcher Physiotherapy brings nursing-home and in-home physiotherapy to North Ryde — for Support at Home, NDIS and Rehab at Home clients across Ryde and the north.",
    local:
      "North Ryde is a suburb beside the Macquarie Park business and health precinct. Our Sydney team visits homes and residential aged care across North Ryde, and surrounding suburbs including Macquarie Park, Ryde, Marsfield, supporting strength, balance, mobility, falls prevention and recovery after hospital.",
    localArea:
      "North Ryde is a suburb beside the Macquarie Park business and health precinct, within easy reach of our Sydney base at Sydney Olympic Park. From November 2026, Fletcher Physiotherapy provides aged-care home sessions, in-home physiotherapy for Support at Home and NDIS clients, and Rehab at Home programs across North Ryde. Care is led by an APA Titled Pain Physiotherapist with a Master of Pain Management.",
    nearby: ["Macquarie Park", "Ryde", "Marsfield", "East Ryde", "Denistone"],
    hospitals: ["Ryde Hospital", "Macquarie University Hospital"],
    landmarks: ["Macquarie Park precinct", "North Ryde station", "Macquarie Centre"],
    gettingAround: "North Ryde sits within our Sydney service area around Sydney Olympic Park. Because we come to you at home or in residential care, there is no travel or parking to arrange.",
  },
];
