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
├── scripts/
│   └── scaffold-course.mjs # Scaffold a new certificate course folder
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
│   │   └── master-classes/ # Master class content (flat .md/.mdx)
│   ├── content.config.ts   # Content collection schemas (Zod)
│   ├── hooks/
│   ├── layouts/
│   ├── lib/                # Utilities, navigation helpers
│   ├── models/             # TypeScript types (e.g. certificate)
│   ├── pages/
│   │   ├── index.astro     # Home: certs + master classes
│   │   ├── certificates/   # Certificate list & [...slug] course/lesson pages
│   │   └── master-classes/ # Master class list & [...slug] pages
│   └── styles/
├── astro.config.mjs
├── components.json
├── package.json
└── tsconfig.json
```

**Content collections**

- **Certificates** — Folder-based: `content/certificates/<course-slug>/index.mdx` (course metadata and intro) plus `content/certificates/<course-slug>/<chapter>/<lesson>.md(x)` for chapters and lessons. All metadata (title, description, platform, status, tags, courseLink, certificateLink, completedDate) lives in frontmatter. Course structure (chapters/lessons) is derived from the file tree.
- **Master classes** — Flat list: one `.md` or `.mdx` file per master class in `content/master-classes/`. Frontmatter: title, description; optional platform, tags.

## Commands

From the project root:

| Command                | Action                                          |
| ---------------------- | ----------------------------------------------- |
| `pnpm install`         | Install dependencies                            |
| `pnpm dev`             | Start dev server at `localhost:4321`            |
| `pnpm build`           | Build production site to `./dist/`              |
| `pnpm preview`         | Preview the production build locally            |
| `pnpm format`          | Format code with Prettier                       |
| `pnpm scaffold:course` | Scaffold a new certificate course (see below)   |
| `pnpm astro ...`       | Run Astro CLI (e.g. `astro add`, `astro check`) |

**Scaffold a new certificate**

```bash
pnpm run scaffold:course <course-slug> [--title "Course Title"] [--platform IxDF|Coursera] [--chapter "Chapter name"] [--lesson "Lesson name"]
```

- Creates `src/content/certificates/<course-slug>/index.mdx` with course frontmatter.
- **`--chapter`** — Adds a first chapter folder and one placeholder lesson: `<chapter-slug>/<lesson-slug>/<lesson-slug>.md`. Use **`--lesson`** to name the lesson (default: `lesson-01`). `--lesson` requires `--chapter`.
- **`--platform`** — One of `IxDF`, `Coursera`, or defaults to `Other`.

## Learn more

- [Astro docs](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [MDX in Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)
