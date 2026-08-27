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

### Google Search Console

GSC Wizard MCP access could not be used for this baseline because the connected GSC Wizard subscription/trial is currently inactive. Therefore no GSC clicks/impressions/indexing figures are fabricated here.

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

1. Measure the cost of the global client `Providers` wrapper and remove providers from routes that do not need them if the bundle/hydration impact is material.
2. Check whether both toaster implementations are needed globally.
3. Audit large project/service images and hero LCP images for correct dimensions, compression and `next/image` priority/preload behaviour.
4. Confirm font delivery and whether any font/CSS resources delay first render.
5. Inspect route-level JavaScript for content pages and move avoidable client components back to server components.
6. Validate cache headers and immutable delivery for static assets.
7. Re-run sitemap/canonical/robots checks after every route-architecture change.

## Completion gate

TE-TECH-01 is complete when:

- code/config technical baseline is documented;
- priority URLs are fixed as the standard benchmark set;
- field CWV values are captured from Vercel Speed Insights when accessible;
- GSC/indexing data is captured when the data connection is available;
- a synthetic Lighthouse/PageSpeed run is captured for mobile and desktop;
- TE-TECH-02 fixes are prioritised from measured impact rather than assumption.
