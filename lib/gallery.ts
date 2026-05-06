/**
 * Canonical on-disk filenames under /public/projects/gallery/.
 * Replace files on disk when you add unique shots; keep URLs stable for SEO/cache.
 *
 * Usage budget (same URL string max twice across TS/TSX imports & literals):
 * - edlick-01..08: homepage service cards + service hub heroes (two routes share each URL).
 * - edlick-09..19: service hub proof grids only (paired reuse across services).
 * - edlick-20..21: hub proof + HomeProofSection previews (two refs each).
 * - edlick-22..25: portfolio / About page only (single consumer each).
 */

export const gallery = {
  e01: "/projects/gallery/edlick-01.png",
  e02: "/projects/gallery/edlick-02.png",
  e03: "/projects/gallery/edlick-03.png",
  e04: "/projects/gallery/edlick-04.png",
  e05: "/projects/gallery/edlick-05.png",
  e06: "/projects/gallery/edlick-06.png",
  e07: "/projects/gallery/edlick-07.png",
  e08: "/projects/gallery/edlick-08.png",
  e09: "/projects/gallery/edlick-09.png",
  e10: "/projects/gallery/edlick-10.png",
  e11: "/projects/gallery/edlick-11.png",
  e12: "/projects/gallery/edlick-12.png",
  e13: "/projects/gallery/edlick-13.png",
  e14: "/projects/gallery/edlick-14.png",
  e15: "/projects/gallery/edlick-15.png",
  e16: "/projects/gallery/edlick-16.png",
  e17: "/projects/gallery/edlick-17.png",
  e18: "/projects/gallery/edlick-18.png",
  e19: "/projects/gallery/edlick-19.png",
  e20: "/projects/gallery/edlick-20.png",
  e21: "/projects/gallery/edlick-21.png",
  e22: "/projects/gallery/edlick-22.png",
  e23: "/projects/gallery/edlick-23.png",
  e24: "/projects/gallery/edlick-24.png",
  e25: "/projects/gallery/edlick-25.png",
} as const;
