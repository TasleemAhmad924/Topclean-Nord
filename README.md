# TopClean Nord

The TopClean Nord website uses Next.js, React, TypeScript and Tailwind CSS.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Contact form delivery

The contact form submits to `/api/contact`. Configure `CONTACT_WEBHOOK_URL` in the deployment environment with the receiving webhook URL before accepting inquiries. The endpoint must accept a JSON `POST` and return a successful HTTP status.

If the webhook is not configured or does not accept a submission, the form reports an error rather than confirming an undelivered inquiry. Do not commit webhook URLs or credentials to the repository.

## Search indexing and URL migration

`app/sitemap.ts` publishes only the homepage and approved service pages, and `app/robots.ts` points crawlers to that sitemap without blocking assets or public pages. `proxy.ts` applies server-side 301 redirects for legacy URLs found in the previous public sitemap when a relevant current destination exists.

Before launch, compare this redirect map with Google Search Console and analytics data. URLs for discontinued services without a relevant replacement are intentionally not redirected to unrelated pages; decide their final status using their traffic and backlink value. LocalBusiness data and legal pages also require current, client-verified company details before completion.

Set `GOOGLE_SITE_VERIFICATION` in the deployment environment to the verification token supplied by Google Search Console. The token is emitted as standard metadata only when configured. After domain verification, submit `/sitemap.xml` and monitor index coverage, queries, page experience and Core Web Vitals. Search does not provide a separate guaranteed AI Overview placement metric.

## Checks

```bash
npm run lint
npm run build
```
