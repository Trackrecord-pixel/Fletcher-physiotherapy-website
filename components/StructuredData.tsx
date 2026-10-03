import { site, faqs, clinics } from "@/lib/site";

const clinicLocations = clinics.map((c) => ({
  "@type": ["MedicalClinic", "Physiotherapy"],
  name: `Fletcher Physiotherapy — ${c.suburb}`,
  url: `${site.url}/${c.slug}`,
  telephone: site.phone,
  medicalSpecialty: "Physiotherapy",
  address: {
    "@type": "PostalAddress",
    streetAddress: c.address.split(", ").slice(0, -1).join(", "),
    addressLocality: c.suburb,
    addressRegion: "NSW",
    postalCode: c.postcode,
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: c.consultingDay,
    opens: "08:00",
    closes: "17:00",
  },
}));

// Topics the practice is genuinely known for — shared by business + organisation entities.
const practiceKnowsAbout = [
  "Physiotherapy",
  "Home visit physiotherapy",
  "Mobile physiotherapy",
  "NDIS physiotherapy",
  "NDIS functional capacity assessment",
  "Support at Home physiotherapy",
  "Home Care Packages (now Support at Home)",
  "Aged care physiotherapy",
  "Falls prevention",
  "Balance and strength training for older adults",
  "Rehabilitation after hospital discharge",
  "Post-surgical rehabilitation",
  "Persistent pain management",
  "APA Titled Pain Physiotherapy",
  "GP Chronic Condition Management Plan (GPCCMP)",
];

const ndisCredential = site.ndisRegistered
  ? [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Registered NDIS Provider",
        credentialCategory: "NDIS provider registration",
        ...(site.ndisRegistrationNumber ? { identifier: site.ndisRegistrationNumber } : {}),
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "NDIS Quality and Safeguards Commission",
          url: "https://www.ndiscommission.gov.au",
        },
      },
    ]
  : [];

const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Physiotherapy services",
  itemListElement: [
    ["Home visit physiotherapy", "/home-visit-physiotherapy-newcastle"],
    ["NDIS physiotherapy", "/ndis-physiotherapy-newcastle"],
    ["Support at Home physiotherapy (formerly Home Care Packages)", "/support-at-home-physiotherapy-newcastle"],
    ["Aged care and retirement village physiotherapy", "/aged-care-physiotherapy-newcastle"],
    ["Falls prevention physiotherapy", "/falls-prevention-physiotherapy-newcastle"],
    ["Persistent pain management", "/chronic-pain-management"],
    ["Mobile physiotherapy in Sydney (from 9 November 2026)", "/physiotherapy-sydney"],
  ].map(([name, path]) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, url: `${site.url}${path}` },
  })),
};

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapy"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    medicalSpecialty: "Physiotherapy",
    image: `${site.url}/images/og-default.png`,
    logo: `${site.url}/images/logo.png`,
    areaServed: site.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: site.region,
      addressCountry: "AU",
      addressLocality: "Newcastle",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    location: clinicLocations,
    knowsAbout: practiceKnowsAbout,
    hasOfferCatalog: serviceCatalog,
    ...(ndisCredential.length ? { hasCredential: ndisCredential } : {}),
    employee: { "@type": "Person", name: "Daniel Lee", jobTitle: "APA Titled Pain Physiotherapist", url: `${site.url}/daniel-lee-physiotherapist-newcastle` },
    sameAs: [site.reviewsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqSchema({ items = faqs }: { items?: typeof faqs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${site.url}/${slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areasServed.map((n) => ({ "@type": "City", name: n })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Lee",
    jobTitle: "APA Titled Pain Physiotherapist",
    knowsLanguage: ["English", "Korean"],
    worksFor: { "@id": `${site.url}/#business` },
    url: `${site.url}/our-team`,
    image: `${site.url}/team/daniel-lee.jpg`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Sydney",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "APA Titled Pain Physiotherapist",
        credentialCategory: "Professional title",
        recognizedBy: { "@type": "Organization", name: "Australian Physiotherapy Association", url: "https://australian.physio" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master of Medicine (Pain Management)",
      },
    ],
    knowsAbout: [
      "Chronic pain",
      "Complex conditions",
      "Falls prevention",
      "Aged care physiotherapy",
      "Functional rehabilitation",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: "Fletcher Physiotherapy",
    alternateName: "Fletcher Physio",
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness"],
    "@id": `${site.url}/#organization`,
    name: "Fletcher Physiotherapy",
    alternateName: "Fletcher Physio",
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/logo.png`,
    },
    image: `${site.url}/images/og-default.png`,
    email: site.email,
    telephone: site.phone,
    medicalSpecialty: "Physiotherapy",
    areaServed: [
      { "@type": "City", name: "Newcastle", address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
      { "@type": "City", name: "Lake Macquarie", address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
      { "@type": "City", name: "Central Coast", address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
      { "@type": "City", name: "Sydney", address: { "@type": "PostalAddress", addressRegion: "NSW", addressCountry: "AU" } },
    ],
    location: clinicLocations,
    knowsAbout: practiceKnowsAbout,
    ...(ndisCredential.length ? { hasCredential: ndisCredential } : {}),
    sameAs: [site.reviewsUrl],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
