# Brandmedia Website — Content Editing Guide

## Main pages

- `/index.html` — Homepage
- `/brand/index.html` — Brand Strategy & Identity
- `/brand-guardian/index.html` — Brand Guardian
- `/brand-toolkit/index.html` — Brand Toolkit
- `/digital/index.html` — Digital Fast-Track
- `/packaging/index.html` — Packaging Design
- `/work/index.html` — Work overview
- `/about/index.html` — About Brandmedia
- `/brand-review/index.html` — Brand Review
- `/insights/index.html` — Insights overview
- `/contact/index.html` — Contact
- `/privacy/index.html` — Privacy placeholder

## Reusable templates

- `/work/project-template/index.html` — Work / case-study template
- `/insights/article-template/index.html` — Insights article template

Both templates are marked `noindex` until duplicated and turned into real content.

## Brand styling

All shared styling is in:

`/assets/styles.css`

Main Brandmedia orange:

```css
--accent: #F7941D;
```

Font family:

```css
--sans: 'Roboto', Arial, sans-serif;
```

## Global navigation and footer

Because this is a static prototype, the header and footer are repeated in each HTML page. If you change navigation labels or links, update them across the pages before launch.

If the site is later converted to Astro, WordPress/Kadence, or another CMS, make the header/footer shared global components so they only need editing once.

## Contact form

The visual contact form is complete, but it currently uses a `mailto:` fallback. Before public launch, connect it to a proper form handler or Cloudflare-compatible email workflow.

## Portfolio imagery

The abstract visuals in the prototype are intentional placeholders and should be replaced by approved Brandmedia client work before final launch.
