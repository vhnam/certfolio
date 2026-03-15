#!/usr/bin/env node
/**
 * Scaffold a new certificate course folder with index.mdx and optional chapter/lesson.
 * Usage: node scripts/scaffold-course.mjs <course-slug> [options]
 * Example: node scripts/scaffold-course.mjs my-new-course --title "My New Course" --platform IxDF
 *
 * Options:
 *   --title "Course Title"   Course title (default: slug formatted)
 *   --platform IxDF         One of: IxDF, Coursera
 *   --chapter "Chapter 1"   Add a first chapter folder with one placeholder lesson
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.join(
  __dirname,
  "..",
  "src",
  "content",
  "certificates",
);

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseArgs() {
  const args = process.argv.slice(2);
  const slug = args.find((a) => !a.startsWith("--"));
  if (!slug) {
    console.error(
      'Usage: node scripts/scaffold-course.mjs <course-slug> [--title "..."] [--platform IxDF] [--chapter "Chapter name"]',
    );
    process.exit(1);
  }
  const getOpt = (name) => {
    const i = args.indexOf(name);
    return i !== -1 && args[i + 1] ? args[i + 1] : null;
  };
  return {
    slug,
    title: getOpt("--title") ?? slugToTitle(slug),
    platform: getOpt("--platform") ?? "Other",
    chapter: getOpt("--chapter"),
  };
}

const indexMdx = (title, platform) => `---
title: "${title}"
description: ""
platform: "${platform}"
status: "in-progress"
tags: []
courseLink: ""
certificateLink: null
completedDate: null
---

Add your course overview and learning objectives here.
`;

const lessonMd = (title) => `---
title: "${title}"
---

Add your notes here.
`;

function main() {
  const { slug, title, platform, chapter } = parseArgs();
  const courseDir = path.join(CONTENT_BASE, slug);

  if (fs.existsSync(courseDir)) {
    console.error(`Directory already exists: ${courseDir}`);
    process.exit(1);
  }

  fs.mkdirSync(courseDir, { recursive: true });
  const indexPath = path.join(courseDir, "index.mdx");
  fs.writeFileSync(indexPath, indexMdx(title, platform), "utf8");
  console.log(`Created ${indexPath}`);

  if (chapter) {
    const chapterSlug = chapter
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const chapterDir = path.join(courseDir, chapterSlug);
    fs.mkdirSync(chapterDir, { recursive: true });
    const lessonPath = path.join(chapterDir, "lesson-01.md");
    fs.writeFileSync(lessonPath, lessonMd("Lesson 1"), "utf8");
    console.log(`Created ${lessonPath}`);
  }

  console.log(`\nDone. Add content to:\n  src/content/certificates/${slug}/`);
}

main();
