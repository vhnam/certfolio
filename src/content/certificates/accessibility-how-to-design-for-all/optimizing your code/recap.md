---
title: "Lession 3 Recap"
---

## HTML5 as the Foundation

HTML5 provides **native semantic elements** (like `header`, `nav`, `main`, `footer`) that make accessibility easier than older HTML versions. Using these correctly creates a strong, accessible structure from the start.

## ARIA: Powerful but Dangerous if Misused

ARIA was formally introduced as a way to **add accessibility semantics** where native HTML falls short. However:

- ARIA must be used **carefully and correctly**
- Incorrect ARIA can actively **make a site inaccessible**
- Native HTML should always be preferred first, with ARIA as a supplement

## Alt Text and Images

Alt text must be:

- **Informational and meaningful**
- Roughly **≤ 250 characters** (about a tweet length)

Image types require different handling:

- **Decorative images** → `alt=""`
- **Static images** → describe context and purpose
- **Functional/interactive images** → action-oriented alt text

For **complex images** (charts, infographics):

- Provide **alternative representations** (tables, text versions)
- SVGs follow the same rules, with extra attention to **contrast**

Avoid using **CSS background images** for meaningful content.

## Contrast and Visual Design

- Contrast should be planned **at the design stage**
- Common issues include **gray-on-gray** designs
- Color alone must not convey meaning (e.g. red/green → add symbols)

## Keyboard and Focus

Keyboard accessibility is **critical**:

- Focus helps users orient and navigate
- Focus can be directed, retained, or intentionally prevented
- Keyboard planning should be part of **UX design**, not an afterthought

## Headings and Page Structure

Headings are essential for navigation, especially for screen reader users:

- Use headings (`H1–H6`) **correctly and hierarchically**
- Do not skip heading levels
- Headings provide the **structural outline** of a page

## Forms, Tables, Search, Popups, and iFrames

All must be:

- Properly tagged
- Keyboard accessible
- Consistent in behavior

Inconsistency (e.g. one accessible modal and one inaccessible modal) is especially harmful.

## Dynamic Content

If content changes for **more than 5 seconds**, users must have controls:

- Pause
- Stop
- Hide

Dynamic updates must be **announced** and **focus-aware**.

## Audio and Video

- **All video** must be captioned
- **Live audio/video** requires descriptive labeling
- **Pre-recorded audio** requires text transcripts
- Transcripts should describe **key sounds and actions**

## Accessible Navigation as the Core Outcome

Accessible navigation depends on:

- Sensible structure
- Good headings
- Clear header links
- Consistent layout and behavior

Poor navigation leads to confusion, disorientation, and broken experiences—while good structure benefits **all users**, not just those using assistive technologies.

## Key Takeaway

Accessibility is not about adding fixes later—it’s about **writing good, semantic, consistent code** from the start. Lesson 3 ties together HTML5, ARIA, images, contrast, focus, dynamic content, and navigation into a single principle:

> **Structure first. Semantics second. ARIA carefully. Consistency always.**
