# TE-SEO-02 — Gallery evidence audit

Status: In Progress

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

## Publication rule

A project image may be used as proof only when a project evidence record exists in `lib/project-evidence.ts` with status `verified`.

A verified evidence packet should contain:

1. Real Team Edlick project/service scope.
2. Real location or an intentionally privacy-safe location label.
3. At least one genuinely unique project photo owned or permissioned for Team Edlick marketing use.
4. Confirmation that the photo belongs to that project.
5. A truthful alt text and scope summary.
6. Completion date only when it is known and supported.

Do not manufacture project names, locations, dates, testimonials, or duplicate images to fill the gallery.

## Closure condition

TE-SEO-02 can move to Completed when the public proof/gallery surfaces are driven only by verified evidence records and the initial verified project set contains genuinely unique Team Edlick photos.
