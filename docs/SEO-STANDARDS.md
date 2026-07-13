# Fletcher Physiotherapy — SEO Standards & Checklist

> This is the governing SEO standard for the Fletcher Physiotherapy website.
> Apply it to every new page, edit and content change. Derived from the SIXGUN
> SEO audit (2026) plus SEO best practice. Business focus: **home visit /
> mobile physiotherapy for older adults, NDIS, aged care, Support at Home &
> falls prevention across Newcastle, Lake Macquarie, Central Coast & the Hunter.**

Canonical domain: `https://www.fletcherphysiotherapy.com.au` (www, apex 301s to www).

---

## 1. On-page rules (every page)

- **Unique `<title>`** — never reuse. Format: `<Primary Keyword> | <Qualifier> | Fletcher Physiotherapy`
  (the layout auto-appends `| Fletcher Physiotherapy`, so page titles set only the front part).
- **One unique `<h1>` per page** — must differ meaningfully from every other page's H1.
- **Unique meta description** — 140–160 chars, includes the primary keyword + a location.
- **NO `meta keywords`** — deprecated & a keyword-stuffing signal. Never add them back.
- **Canonical tag** on every page, always the www URL.
- **Crawlable HTML NAP** — name, phone (0404 791 756), email as real text (not images).
- **Descriptive image `alt` text** on every image — include subject + location where natural.

## 2. Content rules (avoid cannibalisation & duplication)

- **One primary keyword per page.** Two pages must never target the same primary keyword.
  - `home-visit-physiotherapy-newcastle` = "home visit physiotherapy Newcastle" (care IN the home).
  - `mobile-physiotherapist-newcastle` = "mobile physiotherapist Newcastle" (we travel to you anywhere:
    home, retirement village, aged-care facility). Keep these two angles distinct.
- **Location pages must be genuinely unique** — unique intro, local landmarks/hospitals, real nearby
  suburbs, and varied phrasing. Target ~1000 words. Do not clone paragraphs across suburbs.
- **Keyword cluster & hierarchy** — each core service is a hub; conditions & suburbs are spokes that
  link up to the hub, and the hub links down to them.
- **E-E-A-T** — attribute clinical content to Daniel Lee (APA Titled Pain Physiotherapist); keep the
  author byline, Person schema and clinician page current.
- Keep internal duplicate content low; the SIXGUN audit measured 22% duplicate / 49% common — every
  new page should add genuinely new copy, not reworded boilerplate.

## 3. Internal linking rules

- **Link directly to canonical URLs** — never link to a URL that 301-redirects (no redirect hops).
- Homepage → service hubs → condition/suburb spokes → contact/referral. Every page ≤3 clicks from home.
- **Blog posts must link internally** to relevant service/location pages within the article and via
  the "Explore our services" block.
- Location pages link to: the 6 core services, nearby suburbs, and the relevant condition pages.
- Every page has a clear CTA (Book a Home Visit / Make a Referral) and the phone number.

## 4. Structured data (schema) — required

- Site-wide: `Organization`, `WebSite`, `MedicalBusiness` (LocalBusiness) with `areaServed`.
- Service/condition pages: `MedicalProcedure`/`Service` + `FAQPage` + `BreadcrumbList`.
- Location pages: `MedicalBusiness` with `areaServed` + `serviceArea` + `FAQPage` + `BreadcrumbList`.
- People: `Person` schema for Daniel Lee (credentials, alumniOf, knowsAbout).
- Blog: `BlogPosting` with author + publisher + datePublished.
- Validate new schema at Google's Rich Results Test before/after deploy.

## 5. Technical rules

- `sitemap.xml` auto-generated — must include every indexable page, exclude redirected URLs.
- `robots.txt` allows all, references the sitemap, host = www.
- Keep 301 redirects for any retired/duplicate URL; never leave two live URLs for the same intent.
- Page speed target: keep load time low (audit: 634ms — good). Compress images, use next/image,
  serve modern formats (avif/webp already configured).
- Mobile-first; check Core Web Vitals after major changes.

## 6. Local SEO (ongoing — mostly off-site)

- **Google Business Profile:** service-area business; exact NAP match; category "Physiotherapist";
  suggested description: *"Fletcher Physiotherapy | Mobile Physiotherapist"*; post regularly; respond
  to reviews.
- **Active review acquisition** — steady stream of Google reviews (biggest local ranking lever).
- **NAP consistency** across all directories & citations (HealthEngine, Cliniko directory, Yellow
  Pages, True Local, Australian physio directories).
- Embed a map on the Contact page (done).

## 7. Link building (off-site — highest-impact gap)

- Audit baseline: 48 referring domains, 162 backlinks, **Domain Rating 0** — mostly low-quality/spam.
- **Consider a disavow** of spammy backlinks (via Search Console) — get a professional to review first.
- Build **quality, contextual, local links**: GPs, aged-care & Home Care providers, NDIS/support-
  coordinator directories, local Newcastle press/community, provider listings, sponsorships.
- Anchor text: healthy mix of **branded** ("Fletcher Physiotherapy") and a few **commercial**
  ("home visit physiotherapy Newcastle") — avoid over-optimised/spam anchors.

## 8. Publishing workflow (each new blog post / page)

1. Pick ONE primary keyword (check nothing else targets it).
2. Unique title + H1 + meta description; add to the right hub cluster.
3. 700+ words of genuinely unique content; attribute clinical claims appropriately.
4. Add internal links (up to the hub, out to 2–3 related pages) and a CTA.
5. Add/confirm schema; add image + alt text.
6. Deploy → request indexing in Search Console for important new pages.

---

## SIXGUN audit items — status tracker

| # | Audit finding | Type | Status |
|---|---|---|---|
| Titles overlap / cannibalisation | Make titles more unique | On-page | Addressed (per-service & per-suburb formats); keep monitoring |
| Duplicated H1 tags | Make H1s unique | On-page | Addressed (unique per page) |
| Duplicate meta-keywords | Remove (deprecated) | On-page | **Fixed** — removed site-wide |
| Not re-indexed after launch | Request indexing in GSC | Technical | **User action** — sitemap submitted; request top pages |
| Page speed 634ms | Optimise a few images | Technical | Good; swap placeholder images for optimised real photos |
| GBP description | "Fletcher Physiotherapy \| Mobile Physiotherapist" | Local | **User action** (GBP) |
| Embed maps on /contact | Add map embed | Local | **Fixed** — map embedded |
| Active review acquisition | Get Google reviews | Local | **User action** — ongoing |
| Location content more unique | Unique per-suburb copy | Content | Partly done (unique intros/local); keep enriching |
| Home Visit vs Mobile overlap | Consolidate/differentiate | Content | Addressed — distinct angles & primary keywords |
| Blog internal linking | Add internal link structure | Content | **Fixed** — service links + related posts in every article |
| Keyword cluster/hierarchy | Define clusters | Content | Hub-and-spoke structure in place; maintain |
| Internal duplicate content 22% / common 49% | Reduce duplication | Content | Ongoing — add unique copy on new/edited pages |
| 48 ref domains, DR 0, spammy links | Build quality links, consider disavow | Link building | **User/agency action** — highest-impact gap |
| Local directory/citation coverage | Full coverage | Link building | **User action** — ongoing |

---

### The honest priority order (biggest ranking impact first)
1. **Google reviews + Google Business Profile** (local rankings)
2. **Quality local backlinks + citations** (domain authority — DR 0 is the ceiling right now)
3. **Consider disavowing spam backlinks** (professional review first)
4. Keep publishing unique content + enriching location pages
5. On-page/technical is already strong — maintain the standards above
