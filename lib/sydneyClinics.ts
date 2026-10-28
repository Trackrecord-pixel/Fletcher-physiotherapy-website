// Sydney clinics — Fletcher Physiotherapy consulting rooms inside GP practices.
// Appointments are booked through each medical centre's reception (no online booking).
// Name format "Fletcher Physiotherapy {Suburb}" must match signage and Google Business Profile exactly.
// Details checked October 2026 from healthdirect / practice listings.

export type SydneyClinic = {
  slug: string;
  suburb: string;
  brandName: string;          // e.g. "Fletcher Physiotherapy Yagoona"
  hostCentre: string;         // the GP practice we consult inside
  streetAddress: string;
  postcode: string;
  phone: string;              // medical centre reception — they book physio appointments
  startDate: string;          // first day consulting (internal record only — not shown on the site)
  days?: string;              // e.g. "Tuesdays, 9:00am – 4:30pm" — leave undefined until confirmed
  hours?: { dayOfWeek: string; opens: string; closes: string }[]; // for Google (schema), 24h times
  metaDescription: string;
  intro: string;
  about: string[];
  nearby: string[];           // nearby suburbs patients come from
  hospitals: string[];        // real nearby hospitals (context only)
  transport: string;          // getting there
  // Clinic photos in /public/images/clinics/ — the gallery only shows once photos are added.
  // Only use photos you own; no identifiable patients without written consent.
  photos?: { src: string; alt: string }[];
  poster?: { src: string; alt: string }; // square promo image shown near the top of the page
};

export const sydneyClinics: SydneyClinic[] = [
  {
    slug: "physiotherapy-yagoona",
    suburb: "Yagoona",
    brandName: "Fletcher Physiotherapy Yagoona",
    hostCentre: "Yagoona Family HealthCare",
    poster: {
      src: "/images/clinics/fletcher-physiotherapy-yagoona.jpg",
      alt: "Fletcher Physiotherapy at Yagoona Family HealthCare, 457 Hume Highway, Yagoona — book on (02) 8766 2477",
    },
    streetAddress: "457 Hume Highway",
    postcode: "2199",
    phone: "02 8766 2477",
    days: "Tuesdays, 9:00am – 4:30pm",
    hours: [{ dayOfWeek: "Tuesday", opens: "09:00", closes: "16:30" }],
    startDate: "17 November 2026",
    metaDescription:
      "Physio in Yagoona at Yagoona Family HealthCare, 457 Hume Hwy. Pain, injuries, rehab and falls prevention. Medicare GPCCMP, DVA, NDIS and private. Call to book.",
    intro:
      "Physiotherapy inside Yagoona Family HealthCare on the Hume Highway — for pain, injuries, rehabilitation, balance and falls prevention. Book through the clinic's reception.",
    about: [
      "Fletcher Physiotherapy Yagoona consults inside Yagoona Family HealthCare at 457 Hume Highway. Because we work alongside your GP, it's easy to be referred, share updates and keep your care joined up — especially if you're on a GP Chronic Condition Management Plan (GPCCMP).",
      "Our physiotherapy is led by an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management). We see people with persistent pain, back and neck pain, arthritis, injuries, and those wanting to get stronger and steadier on their feet — and we focus on practical goals that fit your everyday life.",
    ],
    nearby: ["Bankstown", "Bass Hill", "Birrong", "Regents Park", "Greenacre", "Condell Park", "Georges Hall", "Chester Hill"],
    hospitals: ["Bankstown-Lidcombe Hospital"],
    transport:
      "The clinic is on the Hume Highway in Yagoona. Yagoona and Birrong stations are nearby, and several bus routes run along the Hume Highway. Ask reception about parking when you book.",
  },
  {
    slug: "physiotherapy-parramatta",
    suburb: "Parramatta",
    brandName: "Fletcher Physiotherapy Parramatta",
    hostCentre: "Parramatta Medical and Dental Centre",
    poster: {
      src: "/images/clinics/fletcher-physiotherapy-parramatta-v2.jpg",
      alt: "Fletcher Physiotherapy at Parramatta Medical and Dental Centre, Shop 1, 144 Marsden Street, Parramatta",
    },
    streetAddress: "Shop 1, 144 Marsden Street",
    postcode: "2150",
    phone: "02 8320 9300",
    days: "Wednesdays, 9:00am – 4:30pm",
    hours: [{ dayOfWeek: "Wednesday", opens: "09:00", closes: "16:30" }],
    startDate: "18 November 2026",
    metaDescription:
      "Physio in Parramatta at Parramatta Medical and Dental Centre, 144 Marsden St. Pain, injuries, rehab, falls prevention. GPCCMP, DVA, NDIS and private.",
    intro:
      "Physiotherapy inside Parramatta Medical and Dental Centre on Marsden Street — for pain, injuries, rehabilitation, balance and falls prevention. Book through the clinic's reception.",
    about: [
      "Fletcher Physiotherapy Parramatta consults inside Parramatta Medical and Dental Centre at 144 Marsden Street, in the Parramatta CBD. Working within a GP practice makes referrals simple and keeps your GP up to date — including for patients on a GP Chronic Condition Management Plan (GPCCMP).",
      "Our physiotherapy is led by an APA Titled Pain Physiotherapist with a Master of Medicine (Pain Management). We help with persistent pain, back and neck pain, desk-related neck and shoulder pain, arthritis, injuries, and strength and balance — with practical goals that fit your work and home life.",
    ],
    nearby: ["North Parramatta", "Harris Park", "Westmead", "Rosehill", "Granville", "Rydalmere", "Northmead", "Merrylands"],
    hospitals: ["Westmead Hospital"],
    transport:
      "The clinic is on Marsden Street in the Parramatta CBD, a short walk from Parramatta station and the light rail. Ask reception about nearby parking when you book.",
  },
];

export const sydneyClinicSlugs = sydneyClinics.map((c) => c.slug);
