# Team Edlick project evidence intake

This register supports future count-based claims such as **"100+ completed projects"** without publishing private customer records.

## Where future project photos go

Upload project photos under:

`public/projects/evidence/<project-id>/`

Example:

`public/projects/evidence/te-2026-001/before-01.jpg`
`public/projects/evidence/te-2026-001/after-01.jpg`

The upload itself can be done later. The SEO code is now prepared for those paths through `projectRegister` in `lib/project-evidence.ts`.

## One project = one completed customer job

Do not count every trade as a separate project when tiling, painting and plumbing were delivered under one job.

For each project add:

- project ID
- main service
- suburb/location
- short scope
- completion date when known
- photo paths
- private supporting reference, such as invoice/quote/job number
- status: `pending-upload` until evidence is attached, then `verified`

Never place customer names, phone numbers, invoice values or other private records in public image paths or public page copy.

## When "100+ completed projects" can be published

Only use the 100+ claim after `getVerifiedCompletedProjectCount()` is at least 100.

The public projects metadata intentionally avoids the 100+ statement until the register supports it.
