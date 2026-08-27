# TE-TECH-01 — Performance / Technical SEO baseline

Status: In Progress
Date: 2026-08-27

## Scope

Establish a reproducible baseline before optimisation work. This slice is measurement/documentation only and does not make performance-tuning changes.

Priority production pages:

- `/`
- `/services/tiling`
- `/services/tiling/cape-town`
- `/locations/cape-town`
- `/locations/bellville`
- `/projects`
- `/contact`

## Confirmed technical baseline

### Runtime / rendering

- Next.js `16.2.4` with App Router.
- React Strict Mode enabled.
- Vercel previews for the preceding P0/P1 SEO slices reached `Ready`, so the current production code path is buildable on the Team Edlick Vercel project.
- `@vercel/speed-insights` is installed and `<SpeedInsights />` is mounted in the root layout, so field performance collection is already instrumented.

### Crawlability / indexation controls

- Root metadata defaults to `index: true` / `follow: true` and gives Googlebot large image/snippet previews.
- `app/robots.ts` allows the public site, blocks `/api/`, does not block `/_next/*`, and declares the canonical sitemap.
- Johannesburg legacy location/service-location URLs permanently redirect to Cape Town equivalents.
- The sitemap is generated in code and now respects the shared location SEO evidence gates.
- Bellville is allowed as a standalone location page; service-by-Bellville pages remain blocked until stronger local evidence exists.

### Security / response headers

Global headers currently include:

- `X-DNS-Prefetch-Control: on`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- restrictive `Permissions-Policy`

### Client-side JavaScript risk to measure

Every page currently passes through a client-side `Providers` component which initializes:

- `QueryClientProvider`
- `TooltipProvider`
- `StickyConversionBar`
- shadcn `Toaster`
- Sonner `Toaster`

This does not prove a performance defect, but it is the clearest architecture-level candidate for TE-TECH-02 because global hydration/client bundle work may be larger than necessary on content-heavy SEO pages.

## External measurement status

### Vercel Speed Insights

Instrumentation is present in code. Field values for LCP, INP and CLS still need to be read from the Team Edlick Vercel Speed Insights dashboard after enough production traffic is available.

### Google Search Console — owner-supplied evidence, 2026-08-27

The owner supplied Search Console screenshots and Coverage Drilldown exports for the `teamedlick.co.za` property. The Page indexing summary shown is last updated **2026-08-21**, so these values predate the latest SEO/location merges and must be treated as a historical baseline rather than proof of the current deployment state.

Observed values:

- **1 indexed page**
- **7 not indexed pages**
- Not-indexed reasons:
  - **Blocked due to other 4xx issue — 6 pages**
  - **Blocked by robots.txt — 1 page**
- Search Console Overview shows **4 total web search clicks** in the visible period.
- Core Web Vitals shows **No data** for both mobile and desktop.
- Search Console Enhancements shows **No enhancements yet**.

### Exact GSC exclusion URLs and classification

| URL | Last crawled | Classification | Required outcome |
| --- | --- | --- | --- |
| `https://www.teamedlick.co.za/about` | 2026-08-21 | Legacy alternate-host crawl | Permanent redirect to `https://teamedlick.co.za/about` |
| `https://www.teamedlick.co.za/` | 2026-08-17 | Legacy alternate-host crawl | Permanent redirect to `https://teamedlick.co.za/` |
| `https://teamedlick.co.za/blog/tiling-mistakes-to-avoid` | 2026-08-02 | Current valid article route | Should return `200` and remain indexable |
| `https://teamedlick.co.za/` | 2026-07-26 | Current canonical homepage | Should return `200` and remain indexable |
| `http://teamedlick.co.za/` | 2026-07-23 | Legacy HTTP crawl | Permanent redirect to `https://teamedlick.co.za/` |
| `https://www.teamedlick.co.za/privacy` | 2026-07-19 | Obsolete path on alternate host | Permanent redirect to `https://teamedlick.co.za/privacy-policy` |
| `https://www.teamedlick.co.za/book/bb93cc76-2c22-4d7e-acd3-e48fc6d2cb56` | 2026-06-29 | Legacy booking URL; no current Team Edlick `/book` route | Intentional exclusion / retired URL; do not index |

Repository evidence supporting that classification:

- The canonical production origin is `https://teamedlick.co.za`.
- `/about`, `/`, `/blog/[slug]`, and `/privacy-policy` are current routes.
- `tiling-mistakes-to-avoid` is present in the current blog registry.
- There is no current `/book` application route in this repository.
- Current `robots.ts` blocks only `/api/`; therefore the old robots classification for `/book/<uuid>` reflects historical crawl state rather than the current robots configuration.

### Defect vs stale-report conclusion

- **Four entries are stale host/scheme variants** (`www` or `http`) and should consolidate to the HTTPS apex domain.
- **Two URLs are current canonical content** (`/` and `/blog/tiling-mistakes-to-avoid`) and should be re-crawled as `200`.
- **One code-level redirect gap was fixed:** `/privacy` now permanently redirects to `/privacy-policy` via TE-TECH-02A / PR #28, merged as `33b945abb51b8c68d412b8cc7eb3b598abe08933`.
- **The `/book/<uuid>` URL is a retired legacy route**, not a public Team Edlick page that should be restored. It should stay non-indexable/retired; no new booking route should be created to satisfy this historical URL.

### Vercel canonical-domain evidence — owner-supplied, 2026-08-27

The owner supplied a Vercel Domains screenshot for the Team Edlick `redbrick-build-vision` project showing:

- `teamedlick.co.za` — **Valid Configuration**, attached to **Production**.
- `www.teamedlick.co.za` — **Valid Configuration**, configured with a **307 redirect** to `teamedlick.co.za`.
- `redbrick-build-vision-omega.vercel.app` — **Valid Configuration**, attached to **Production**.

This closes the canonical-host configuration gap: the apex domain is the production origin and the `www` host is explicitly redirected to it at the Vercel domain layer. HTTP → HTTPS on the apex was separately observed during the TE-TECH-02A verification flow.

The historical Search Console host/scheme 4xx rows should therefore be treated as stale crawl evidence pending Google re-crawl/validation, not as evidence that current domain routing is still broken.

### Search Console validation status — 2026-08-27

Owner-supplied Search Console screenshots confirm validation was started on **2026-08-27** for both historical exclusion buckets:

- **Blocked due to other 4xx issue** — validation started; **6 affected pages**.
- **Blocked by robots.txt** — validation started; **1 affected page** (`/book/bb93cc76-2c22-4d7e-acd3-e48fc6d2cb56`).

Expected outcome:

- The 4xx bucket should shrink or pass as Google re-crawls the canonical homepage/article, follows `www`/HTTP redirects, and sees `/privacy` redirect to `/privacy-policy`.
- The historical `/book/<uuid>` URL should **not** be restored. Because current `robots.txt` does not block `/book`, Google may move that URL out of the robots bucket and classify it as a retired/not-found URL instead. That reclassification is acceptable and is not a defect.

Do not add a booking route or robots rule solely to force this historical URL into an indexed state.

### GSC Wizard connector

GSC Wizard MCP access could not be used directly for this baseline because the connected GSC Wizard subscription/trial is currently inactive. The owner-supplied Search Console evidence above therefore serves as the current GSC source.

### Live synthetic test

The current execution environment could not resolve `teamedlick.co.za` directly for a Lighthouse-style network run. Synthetic performance values are therefore intentionally left blank rather than estimated.

## TE-TECH-02 measurement targets

When field/synthetic metrics are accessible, record mobile and desktop for the priority pages above:

| Metric | Good target |
| --- | --- |
| LCP | <= 2.5 s |
| INP | <= 200 ms |
| CLS | <= 0.1 |
| TTFB | <= 0.8 s target for cached public pages |
| Lighthouse Performance | >= 90 target |
| Lighthouse SEO | >= 95 target |

Also record:

- total transferred bytes
- image bytes and largest image
- initial JavaScript transferred / executed
- render-blocking resources
- unused JavaScript
- cache policy on static assets
- number of third-party requests
- canonical/indexability result
- structured data validity
- internal broken links
- sitemap URL count and sitemap/indexability mismatches

## Initial optimisation candidates (not yet authorised as fixes)

1. Monitor the Search Console validation runs already started for the historical 4xx and robots buckets; do not restore the retired `/book/<uuid>` route.
2. Measure the cost of the global client `Providers` wrapper and remove providers from routes that do not need them if the bundle/hydration impact is material.
3. Check whether both toaster implementations are needed globally.
4. Audit large project/service images and hero LCP images for correct dimensions, compression and `next/image` priority/preload behaviour.
5. Confirm font delivery and whether any font/CSS resources delay first render.
6. Inspect route-level JavaScript for content pages and move avoidable client components back to server components.
7. Validate cache headers and immutable delivery for static assets.
8. Re-run sitemap/canonical/robots checks after every route-architecture change.

## Completion gate

TE-TECH-01 is complete when:

- code/config technical baseline is documented;
- priority URLs are fixed as the standard benchmark set;
- Search Console indexing baseline is captured;
- the exact Search Console 4xx/robots URLs are identified and classified;
- canonical Vercel host routing is confirmed;
- Search Console validation has been initiated for the historical exclusion buckets;
- field CWV values are captured from Vercel Speed Insights when accessible, or explicitly recorded as unavailable due to insufficient field traffic;
- a synthetic Lighthouse/PageSpeed run is captured for mobile and desktop when the production domain is reachable from the measurement environment;
- TE-TECH-02 fixes are prioritised from measured impact rather than assumption.
