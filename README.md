# Certfolio

A static site for organizing and browsing professional certificates and master classes, with structured notes and key learnings. Built with [Astro](https://astro.build), React islands, MDX, and Tailwind CSS.

## Tech stack

- **Astro 5** — static site generation, content collections
- **React** — interactive components (navigation, UI)
- **MDX** — certificate/course content with JSX
- **Tailwind CSS 4** — styling
- **Base UI / shadcn-style** — UI components

## Project structure

```
.
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── components/         # React and Astro components
│   │   ├── ui/             # Reusable UI (button, collapsible, etc.)
│   │   ├── ChapterOverview.tsx
│   │   ├── CourseOverview.tsx
│   │   └── MobileDrawer.tsx
│   ├── content/
│   │   ├── certificates/   # Certificate course content (MDX + markdown)
│   │   └── master-classes/# Master class content
│   ├── data/              # JSON: certificates.json, master-classes.json
│   ├── layouts/
│   ├── lib/                # Utilities, navigation helpers
│   ├── models/             # Content collection schemas
│   └── pages/
│       ├── index.astro     # Home: certs + master classes
│       ├── certificates/   # Certificate list & [...slug] course pages
│       └── master-classes/ # Master class list & [...slug] pages
├── astro.config.mjs
├── components.json
├── package.json
└── tsconfig.json
```

- **Certificates** are defined in `src/data/certificates.json` and can have full course content under `src/content/certificates/<slug>/`.
- **Master classes** are listed in `src/data/master-classes.json` with content in `src/content/master-classes/`.
- Course structure (chapters, lessons) is driven by the file tree and optional per-certificate JSON in `src/data/certificates/<slug>.json`.

## Commands

From the project root:

| Command          | Action                                          |
| ---------------- | ----------------------------------------------- |
| `pnpm install`   | Install dependencies                            |
| `pnpm dev`       | Start dev server at `localhost:4321`            |
| `pnpm build`     | Build production site to `./dist/`              |
| `pnpm preview`   | Preview the production build locally            |
| `pnpm format`    | Format code with Prettier                       |
| `pnpm astro ...` | Run Astro CLI (e.g. `astro add`, `astro check`) |

## Learn more

- [Astro docs](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [MDX in Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)
