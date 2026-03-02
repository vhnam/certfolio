---
title: Design Slices
---

## Designing Small in Practice

### Core Challenge

- Goal: Build something small but still valuable and usable.
- Constraint: Cannot design and build large features in one sprint.
- Requirement: Deliver user value and enable learning.

## Figuring Out the Big Picture

### Example: Job Search Feature

Assumptions:

- Employers can already post jobs.
- We know what job seekers need to see.
- There may eventually be many listings.

Core design stories:

- Job listings page (view all jobs).
- Search/filter functionality.
- Detailed job view page.
- Application process using existing profile.

Optional enhancements:

- Bookmark jobs.
- Similar jobs suggestions.
- Special landing pages.
- Targeted advertisements.

## What Not to Do

### Horizontal Slicing (Anti-Pattern)

- Build major technical components first (e.g., search engine).
- Problem:
  - No job listings yet → nothing to search.
  - No real data to test with.
  - No user value delivered.

### Premature Application System

- Building full application flow first:
  - Users have nothing to apply to.
- Overbuilding:
  - May not need a complex interface initially.
  - Could test with email or simple form instead.

## Finding the Fastest Slice to Deliver Value

### First Smart Slice

- Build a basic job listings page:
  - Show essential job information.
- Add a simple apply mechanism:
  - Upload PDF.
  - Send email.
  - Fill simple form.

Characteristics:

- Delivers immediate value.
- Testable with real users.
- Small enough for early release.
- Expandable later.

## Why Slice the Design Vertically?

### Vertical Slice Definition

- Vertical slice: Deliver a thin but complete piece of functionality across layers (UI + logic + data).
- Contrast:
  - Horizontal slice: Build isolated system layers (e.g., only search engine).

### Benefits

- Immediate user value.
- Real-world feedback.
- Early validation of assumptions.
- Reduced wasted effort.
- Faster course correction.

## What You Might Learn

- Jobs shown are not relevant.
- Missing critical information in listings.
- Users want different search filters.
- Employers must provide more data.
- Feature scope may be smaller than expected.

## Iterative Expansion

After first slice:

1. Measure usage and feedback.
2. Fix core issues if needed.
3. Add next most valuable slice.
4. Watch for diminishing returns.

Goal:

- Build only what users truly need.
- Stop when problem is sufficiently solved.

## Key Principles for Smart Slicing

- Do not design and build everything at once.
- Avoid tackling the biggest technical challenge first.
- Identify the smallest complete experience.
- Ensure each slice:
  - Is usable.
  - Delivers real value.
  - Enables learning.
- Choose slices contextually—there is no universal formula.

## Important Clarification

- Vertical slicing is not the opposite of designing from the outside in.
- Both approaches:
  - Enable incremental progress.
  - Support early feedback.
  - Reduce risk.
- Use the method that fits the context.

## Key Takeaways

- Large features cannot fit into a single sprint.
- Break features into vertical, end-to-end slices.
- Release the smallest meaningful piece first.
- Learn before expanding.
- Sometimes the feature is much smaller than originally imagined.
