# TE-SEO-02 — Gallery evidence audit

Status: Completed (safe verified mapping)

## Finding

The 25 `public/projects/gallery/edlick-*.png` filenames are not 25 unique images. Repository blob hashes show only 10 unique underlying image files.

### Exact duplicate groups

- `edlick-01.png`, `edlick-11.png`, `edlick-21.png`
- `edlick-02.png`, `edlick-12.png`
- `edlick-03.png`, `edlick-13.png`, `edlick-23.png`
- `edlick-04.png`, `edlick-14.png`
- `edlick-05.png`, `edlick-15.png`
- `edlick-06.png`, `edlick-16.png`, `edlick-22.png`
- `edlick-07.png`, `edlick-17.png`, `edlick-24.png`
- `edlick-08.png`, `edlick-18.png`
- `edlick-09.png`, `edlick-19.png`, `edlick-25.png`
- `edlick-10.png`, `edlick-20.png`

`public/projects/waterproofing-wet-areas-cape-town.jpg` is also byte-identical to the image used by `edlick-06.png`, `edlick-16.png`, and `edlick-22.png`.

## Verified mapping

The site owner confirmed that the existing site photos are genuine Team Edlick work. The 10 unique image blobs are now represented once in `lib/project-evidence.ts` and mapped using the repository's canonical service-asset assignments:

1. Construction
2. Tiling
3. Painting
4. Decking & flooring
5. Paving
6. Waterproofing
7. Renovations
8. Plumbing
9. Residential construction
10. Commercial construction

Where the repository does not contain an exact project name or suburb, the public evidence record uses the truthful privacy-safe label `Cape Town portfolio — exact suburb not recorded`. No suburb, date or client/project name is invented.

## Publication rule

A project image may be used as public proof only when a project evidence record exists in `lib/project-evidence.ts` with status `verified`.

Duplicate filenames do not create additional project records. Service pages now source project-proof cards directly from the verified evidence register rather than from the old rotating/hard-coded proof grid.

## Optional future enrichment

Exact project names, suburb labels and completion dates can be added later when supported by project records. They are not required for the current safe mapping and must never be inferred from a filename.
