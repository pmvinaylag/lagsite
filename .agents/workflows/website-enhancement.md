---
description: Website enhancement consistency guidelines for lagence-web
---

# Website Enhancement Guidelines

Every change to `lagence-web` MUST follow these rules so the site stays cohesive across all pages and contributors.

## Design System — Non-Negotiables

These values are defined in `globals.css` and must NEVER be overridden inline:

| Token | Value | Use for |
|---|---|---|
| `--color-brand-orange` | `#FF801E` | CTAs, accents, highlights |
| `--color-brand-dark` | `#0D1D19` | Backgrounds, headings |
| `--color-brand-light` | `#F1F1F1` | Page backgrounds |

**Never use hardcoded hex values in component files.** Always use `var(--color-brand-*)`.

## Page Structure Consistency

Every new page must follow this skeleton:

```tsx
// 1. Hero section — dark background, text-white, pt-48 pb-32 mt-[-8rem]
<section className="bg-[var(--color-brand-dark)] text-white pt-48 pb-32 px-6 mt-[-8rem]">
  <div className="max-w-4xl mx-auto">
    <h1>Page Title</h1>       {/* text-5xl md:text-7xl font-light */}
    <p>Subtitle</p>           {/* text-xl text-gray-300 font-light */}
  </div>
</section>

// 2. Body content — light background
<section className="py-24 px-6 bg-[var(--color-brand-light)]">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>
```

## Typography Rules

- **Headings**: Always `font-light` or `font-medium`. Never `font-bold` on h1/h2.
- **Body text**: `font-light`, `text-gray-500` or `text-gray-600` on light backgrounds.
- **Uppercase labels**: Use `tracking-widest uppercase text-xs` for category tags.
- **Do NOT** mix tracking values randomly. Use `tracking-tight` for large headings, `tracking-widest` for labels.

## Components Must Be Reusable

Before creating any new UI element, check if a similar one exists in `src/components/`.
- If yes: extend it with a prop, don't duplicate it.
- If no: create a new component in `src/components/` and import it. Don't inline complex UI directly in page files.

## Data Fetching Rules

- All HubSpot API calls go through `src/lib/hubspot.ts` — never call the API directly from a page.
- All Google/Drive API calls go through `src/lib/google.ts` (when created).
- Use `next: { revalidate: N }` on all server fetches. Choose the right TTL:
  - Job postings: `300` (5 min)
  - Client portal deals: `60` (1 min)
  - Static content: `3600` (1 hour)

## Multi-Client / Multi-Role Requirements

Since L'Agence sources for **multiple clients and roles simultaneously**:

1. **Every HubSpot Deal MUST have** `lagence_client`, `lagence_role`, and `lagence_client_slug` properties set at creation time.
2. **Every Job Ticket MUST have** a client and role in its subject: `"Role Title — Client Name"`.
3. **The client portal** at `/client-portal/[client-slug]` filters by `lagence_client_slug` — never expose cross-client data.
4. **The jobs page** filters tickets to only show the `"2. Published to Web"` stage.

## Accessibility Baseline

- All `<img>` tags require a descriptive `alt` attribute.
- All interactive elements need a visible focus state.
- Color contrast must pass WCAG AA (use orange `#FF801E` on dark backgrounds, not light ones).

## Before Submitting Any Change

Run these checks:
```bash
# 1. TypeScript — no type errors
cd lagence-web && npm run build

# 2. No hardcoded hex colors (except in globals.css)
grep -r "#[0-9a-fA-F]\{6\}" src/app src/components --include="*.tsx" | grep -v "globals.css"

# 3. No 'any' types introduced
grep -r ": any" src/app src/components --include="*.tsx"
```

If any of these produce unexpected output, fix before committing.
