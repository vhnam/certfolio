---
title: Design Refactoring and Iterating
---

## The Anti-Pattern: Ship and Forget

### Common Problem

- Teams rush to ship features.
- Once marked “Done,” features are rarely improved.
- Minor bug fixes happen, but no meaningful refinement.
- Violates core agile principle: learning from feedback.

### Core Agile Principle

- Shipping fast: A means to get feedback sooner.
- Not the goal: The goal is learning and improving.
- Tradeoffs made to ship early must include commitment to improvement.

## What Is Iteration?

### Definition

- Iteration: Repeatedly improving the same feature over time.
- Opposite of:
  - Ship once and abandon.
  - Wait for a massive redesign.

### What Iteration Is Not

- Not just adding more features.
- Not piling complexity onto the existing product.

### Iteration Cycle

1. Release a feature.
2. Gather user feedback.
3. Improve based on insights.
4. Measure again.
5. Repeat.

### Core Mindset

- Nothing is permanently “done.”
- Features evolve as user needs and technology change.

## What Is Refactoring?

### Engineering Refactoring

- Refactoring (code): Change internal structure without changing external behavior.
- Goals:
  - Reduce complexity.
  - Improve maintainability.
  - Increase performance.
  - Prevent breakage.

### Design Refactoring

- Refactoring (design): Change structural aspects of the interface.
- Does not necessarily:
  - Add new features.
  - Remove functionality.
- Purpose:
  - Enable scaling.
  - Support new goals.
  - Maintain usability as the product grows.

## Example: Navigation Growth

### Initial State

- Simple top navigation:
  - Profile
  - Jobs
- Appropriate for early-stage product.

### Gradual Expansion

New features added over time:

- Applications
- Resources
- Companies
- Portfolio

Problem:

- Navigation becomes crowded.
- Tabs are hard to read.
- Interface no longer scales.

### Refactor Solution

Options:

- Combine top-level categories.
- Introduce secondary navigation.
- Switch to left-side navigation.

Result:

- Same functionality.
- Improved scalability.
- Better mobile support.
- Structural change without a full redesign.

## Why Not Over-Design Early?

- Early product had only two nav items.
- Side navigation initially would:
  - Waste space.
  - Add unnecessary complexity.
- Refactoring later:
  - More efficient than premature optimization.

## When to Refactor

### Refactor When:

- Current structure blocks growth.
- Scaling is required.
- User or business goals demand change.

### Do Not Refactor When:

- It’s only for aesthetic reasons.
- Change would disrupt users unnecessarily.
- Small adjustments suffice.

## Balancing Stability and Change

### Risks to Avoid

- Never improving features.
- Massive, infrequent redesigns.
- Constant UI changes that frustrate users.

### Healthy Agile Practice

- Small, frequent iterations.
- Occasional structural refactors.
- Continuous feedback loop.
- Measured, intentional improvements.

## Key Takeaways

- Iteration is central to agility.
- Refactoring enables long-term scalability.
- Shipping early requires commitment to improvement.
- Not every change is a refactor.
- Build small, improve often, restructure when necessary.
