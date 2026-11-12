# Plesk deployment

This is a Next.js application, including the `/api/contact` server route. Deploy
as a Node.js application, not as static files. Existing redirects and headers are
implemented by Next.js and do not depend on Vercel.

## Application setup

1. Preserve the existing Plesk files and record the current DNS records before
   changing either. Deploy into a separate application directory.
2. Connect this repository using HTTPS and select the tested migration revision.
3. Enable Node.js for the subscription if it is not available on the domain.
   Select Node.js 22 or 24 and production mode.
4. Set application root to the repository checkout, document root to its `public`
   directory, and startup file to `server.cjs`. Do not expose the repository root
   as the public document root.
5. Install dependencies with `npm ci --include=dev`, then run `npm run build`.
   Build dependencies are required even when the runtime uses production mode.
6. Set `RESEND_API_KEY` securely in Plesk's environment settings. Never commit it.
   This is required for contact-form delivery; without it the endpoint returns 503.
7. Restart the Node.js application and verify the homepage, service pages, images,
   sitemap, robots.txt and canonical redirects against the Plesk origin.

## Domain cutover

The inspected Plesk domain was `teamedlick.co.za` (domain ID 742), server IP
`104.238.222.122`. Verify these values again before cutover.

Once the Plesk origin is qualified, change only the website DNS records for the
apex and `www`; preserve mail and verification records. Remove or update any
conflicting website AAAA records as appropriate. Issue and attach a trusted
certificate covering both names, then verify public HTTPS and the `www` to apex
redirect. Keep the Vercel deployment available during the rollback window.

Rollback: restore the recorded website DNS values and previous Plesk settings.
Do not delete Vercel or the previous Plesk files until the replacement is verified.

## Local verification

`npm ci`, `npm run build`, then `PORT=3100 node server.cjs` runs the same startup
entry point locally. Contact delivery testing sends real email and must use an
explicitly authorized test submission.

## Migration checkpoint — 12 November 2026

- Existing Plesk Git repository points to `shalean-developer/faraios`, master,
  deploying automatically into `/httpdocs`. It was not modified.
- Added the correct public HTTPS repository with manual deployment to
  `/teamedlick-app`, branch `deploy/plesk-20261112`.
- Deployed application revision `bf38bef46f0b8b8c3136aa1897259984867ba35a`.
- Selected Node.js 24.22.2, production, application root `/teamedlick-app`,
  document root `/teamedlick-app/public`, startup file `server.cjs`.
- Plesk clean install succeeded (355 packages). Initial build failed with EAGAIN
  after requesting 19 workers; the two-worker configuration then built all 46
  pages successfully. Node.js enabled, idle pending first request.
- Certificate named `Lets Encrypt teamedlick.co.za` expired 26 September 2026;
  apex and www reported Not Secured. Renewal has not been performed.
- Original apex A record: `216.198.79.1`, TTL 3600, record ID 95214. Existing www
  CNAME points to `teamedlick.co.za`. No website AAAA record was shown.
- Edited apex A record to `104.238.222.122` and submitted OK; the DNS zone then
  required Update. Clicked Update, but browser connection stalled before a
  post-save observation. CHECK WHETHER APPLIED before making further changes.
- Mail and verification DNS records were not edited. Vercel was not removed.
- Outstanding: confirm applied/public DNS and authoritative nameservers, renew
  SSL, verify Passenger origin/public HTTPS, configure RESEND_API_KEY securely,
  and verify contact delivery with an authorized test. The Allanux client-area
  session redirected to login when opening Domains.
