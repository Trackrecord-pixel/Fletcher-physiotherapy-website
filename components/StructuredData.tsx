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

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
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
    sameAs: [site.social.facebook, site.social.instagram],
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
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${site.url}/${slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areasServed,
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
        credentialCategory: "APA Titled Pain Physiotherapist",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master of Pain Management",
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
    ],
    location: clinicLocations,
    sameAs: [site.social.facebook, site.social.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
