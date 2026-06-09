# Energy Plus — Hotel Landing Page

Conversion-focused landing page for Energy Plus, an Independent Energy Solutions
Partner for hotels. Built with [Astro](https://astro.build).

**Live:** https://danknowsaguy-web.github.io/energy-plus-landing/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages automatically.

## Content placeholders

Several values are intentional placeholders, marked in source with `PLACEHOLDER`
comments and a `.ph` class in the markup. Replace before publishing for real:

- Verified floor rate (`[X]%`) — held blank until the methodology is locked
- Calculator floor rate constant (`src/components/Calculator.astro`)
- Case studies (`src/components/Proof.astro`)
- The booking CTA link (currently an in-page anchor)
