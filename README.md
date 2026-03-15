# Certfolio

A static site for organizing and browsing professional certificates and master classes, with structured notes and key learnings. Built with [Astro](https://astro.build), React islands, MDX, and Tailwind CSS.

## Tech stack

- **Astro 6** — static site generation, content collections
- **React** — interactive components (navigation, sidebar, theme toggle)
- **MDX** — certificate/course content with JSX
- **Tailwind CSS 4** — styling
- **Base UI / shadcn** — UI components
- **Netlify** — deployment (static adapter)

## Project structure

```
.
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Images and files per certificate
│   │   ├── images/
│   │   └── files/
│   ├── components/         # React and Astro components
│   │   ├── ui/             # Reusable UI (button, collapsible, etc.)
│   │   ├── CertificateCard.astro
│   │   ├── ChapterOverview.tsx
│   │   ├── CourseOverview.tsx
│   │   ├── MobileDrawer.tsx
│   │   ├── Sidebar.tsx
│   │   └── ToggleTheme.tsx
│   ├── content/
│   │   ├── certificates/   # Certificate course content (MDX + markdown)
│   │   └── master-classes/ # Master class content
│   ├── hooks/
│   ├── layouts/
│   ├── lib/                # Utilities, navigation helpers
│   ├── models/             # Content collection schemas
│   ├── pages/
│   │   ├── index.astro     # Home: certs + master classes
│   │   ├── certificates/   # Certificate list & [...slug] course pages
│   │   └── master-classes/ # Master class list & [...slug] pages
│   └── styles/
├── astro.config.mjs
├── components.json
├── package.json
└── tsconfig.json
```

- **Certificates** and **master classes** use [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/). Metadata (title, description, platform, status, tags, etc.) lives in the frontmatter of each course’s `index.mdx` under `src/content/certificates/<slug>/` or `src/content/master-classes/`.
- Course structure (chapters, lessons) is derived from the file tree under each certificate folder.

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
