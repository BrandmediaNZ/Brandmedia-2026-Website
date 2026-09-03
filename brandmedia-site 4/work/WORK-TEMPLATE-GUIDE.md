# Brandmedia Work / Case Study Template Guide

The reusable case-study template lives at:

`/work/project-template/index.html`

## To create a new project

1. Duplicate the entire `/work/project-template/` folder.
2. Rename the duplicated folder using a short URL-friendly project name, for example:
   - `/work/sheffield-air-fryer/`
   - `/work/prebio/`
   - `/work/remarkable-foods/`
3. Open the duplicated `index.html` file.
4. Search for `EDIT:` comments. These mark the main content fields to replace.
5. Change the page `<title>`, meta description and canonical URL in the `<head>`.
6. Replace the placeholder image blocks with actual project images.
7. Add the project to `/work/index.html` by duplicating one portfolio card and changing its link to the new folder.
8. Add the final project URL to `/sitemap.xml` once it is ready to publish.

## Recommended case-study structure

### Challenge
Explain the business or communication problem, not only the design request.

### Thinking
Explain the strategic or creative reasoning that informed the work.

### Solution
Describe what Brandmedia created and how the system works.

### Application
Show the identity, packaging, website or campaign in real use.

### Outcome
Describe the practical improvement. Only include commercial statistics when the client has supplied or verified them.

## Replacing an image placeholder

Replace a block like:

```html
<div class="case-placeholder">
  <span>PROJECT IMAGE 01</span>
</div>
```

with:

```html
<img
  src="/assets/work/project-name/image-name.webp"
  alt="Describe the Brandmedia project image clearly"
  width="1600"
  height="1200"
  loading="lazy"
>
```

For the main hero image, do not use `loading="lazy"`.

## Image preparation

Recommended:
- WebP or AVIF
- 1600–2400 px wide for large case-study imagery
- Optimised before uploading
- Meaningful filenames
- Descriptive alt text

## Template publishing note

The supplied `/work/project-template/` page is marked `noindex` so search engines should not treat the placeholder as published client work. Remove the `noindex` meta tag from each duplicated real case study before launch.
