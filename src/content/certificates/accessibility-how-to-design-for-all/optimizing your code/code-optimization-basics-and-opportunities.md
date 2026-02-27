---
title: "Code Optimization Basics and Opportunities"
---

## Core Concept

### Accessibility as Optimization

- Accessibility: Built on usability by adding functional “handles” that help users access UI elements, content, and images.
- Optimization focus: Achieved mainly through proper tagging, semantic structure, and clean code.

## Foundational Technologies

### HTML5

- HTML5: Provides native semantic elements that significantly improve accessibility.
- Native semantics: Should be the first choice whenever possible.

### ARIA (Accessible Rich Internet Applications)

- ARIA: A markup language that enhances page semantics beyond native HTML.
- Purpose: Designed to fill the gap between standard HTML elements and complex, desktop-style UI controls used in dynamic web applications.
- Capability: Enables developers to describe widgets in more detail by adding specialized attributes.
- UI modeling: Provides roles and states that describe the behavior of common interface components.
- Usage principle: ARIA should complement HTML5, not replace it.

## Semantics and Landmarks

### HTML5 and ARIA Mapping

| HTML 5      | ARIA Role              |
| ----------- | ---------------------- |
| `<header>`  | `role="banner"`        |
| `<nav>`     | `role="nagivation"`    |
| `<main>`    | `role="main"`          |
| `<footer>`  | `role="contentinfo"`   |
| `<aside>`   | `role="complementary"` |
| `<section>` | `role="region"*`       |
| `none`      | `role="search"*`       |
| `<form>`    | `role="form"`          |

- Landmarks: Central ARIA features that expose page structure and enable efficient navigation for assistive technology users.
- The region and article roles are not ARIA landmarks

## Best Practices and Risks

### Preferred Approach

- Use native HTML elements first.
- Apply ARIA only when HTML semantics are insufficient to describe behavior or state.

### Common Pitfalls

- ARIA misuse: Incorrect or excessive ARIA can degrade accessibility more than omitting it entirely.
- Overuse risk: Poorly implemented ARIA attributes can confuse users of assistive technologies.

### Balanced Strategy

- HTML5 alone: Often sufficient and more predictable for accessibility.
- ARIA expertise: Developers should understand ARIA roles, states, and patterns to apply it correctly.
- Key warning: ARIA is powerful, but careless use can introduce serious accessibility issues.

## References

- MDN Web Docs, [An overview of accessible web applications and widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets)
