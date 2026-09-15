import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("legacy paving hub permanently redirects to the canonical Cape Town URL", () => {
  const config = read("next.config.ts");
  assert.match(config, /source: "\/services\/paving"[\s\S]*destination: "\/services\/paving\/cape-town"[\s\S]*permanent: true/);
});

test("sitemap retains the Cape Town paving URL and excludes the legacy paving hub", () => {
  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /serviceHubs = constructionServices\.filter\(\(s\) => s\.slug !== "paving"\)/);
  assert.match(sitemap, /\`\$\{siteOrigin\}\/services\/\$\{s\.slug\}\/\$\{loc\.city\}\`/);
});

test("canonical paving route helper protects internal-link consolidation", () => {
  const routes = read("lib/service-routes.ts");
  assert.match(routes, /serviceSlug === "paving"/);
  assert.match(routes, /"\/services\/paving\/cape-town"/);
});

test("known navigation sources do not link directly to the legacy paving hub", () => {
  const paths = [
    "components/layout/Header.tsx",
    "components/marketing/HomeCoreServiceShortcuts.tsx",
    "components/pages/ServicesPage.tsx",
    "components/services/ServiceHubView.tsx",
    "components/marketing/LocationCityHub.tsx",
    "app/services/[serviceSlug]/[city]/page.tsx",
  ];

  for (const path of paths) {
    const source = read(path);
    assert.doesNotMatch(source, /href=["{`]\/services\/paving["}`]/, path);
  }
});

test("Cape Town paving page remains self-canonical and indexable", () => {
  const page = read("app/services/[serviceSlug]/[city]/page.tsx");
  assert.match(page, /const path = \`\/services\/\$\{service\.slug\}\/\$\{loc\.city\}\`/);
  assert.match(page, /buildPageMetadata\(path, title, description/);
  assert.doesNotMatch(page, /noIndex:\s*true/);
});
