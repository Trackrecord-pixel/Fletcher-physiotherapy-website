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
  areasServed: ["Newcastle", "Lake Macquarie", "Central Coast"],
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

export const testimonials = [
  {
    quote:
      "Daniel came to Mum's home every week and her confidence on her feet has completely turned around. We finally feel she is safe at home.",
    author: "Sarah M.",
    detail: "Daughter & Home Care Package family, Newcastle",
  },
  {
    quote:
      "As a support coordinator I refer clients knowing they will get thorough functional assessments and clear reports. Communication is excellent.",
    author: "James P.",
    detail: "Support Coordinator, Lake Macquarie",
  },
  {
    quote:
      "After my hip surgery I dreaded travelling to a clinic. Having physio at home meant I actually did my program and recovered faster.",
    author: "Margaret T.",
    detail: "Post-surgical rehabilitation client, Central Coast",
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
  intro: string;
  local: string;
  nearby: string[];
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
  },
  {
    slug: "physiotherapy-jesmond",
    name: "Jesmond",
    region: "Newcastle",
    intro:
      "We deliver home visit physiotherapy across Jesmond, bringing expert mobile care to older adults, NDIS participants and Support at Home clients in this central Newcastle suburb.",
    local:
      "Close to the University of Newcastle and John Hunter Hospital, Jesmond is a convenient base for home-based rehabilitation, including for clients returning home after a hospital stay. We visit homes throughout Jesmond and its neighbouring suburbs to deliver strength, balance and mobility programs.",
    nearby: ["Birmingham Gardens", "Elermore Vale", "Wallsend", "Lambton", "North Lambton"],
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
  },
];
