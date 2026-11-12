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
