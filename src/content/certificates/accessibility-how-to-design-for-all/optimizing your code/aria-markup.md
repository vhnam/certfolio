---
title: ARIA Markup
---

## What WAI-ARIA Is

- **WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)** is used to make **rich internet applications accessible**.
- It helps make **widgets, navigation, and dynamic behaviors** usable by assistive technologies.
- ARIA works by adding **roles, states, and properties** that communicate meaning and behavior to screen readers and other assistive tools.

## When ARIA Is Needed

- Most accessibility needs can be met with **semantic HTML** alone.
- ARIA is intended to **fill gaps** where native HTML elements cannot fully express:
  - Custom widgets
  - Complex interactions
  - Dynamic UI updates

## Accessibility Semantics

- **Accessibility semantics** describe:
  - What an element is
  - What it does
  - How users can interact with it

- ARIA allows authors to “dress up” HTML and SVG elements with semantics that assistive technologies cannot reliably infer on their own.

## Core ARIA Principles

### A Role Is a Promise

- Assigning an ARIA role is a **contract with the user**.
- Example:

  ```html
  <div role="button">Place Order</div>
  ```

- This promises that the element:
  - Supports expected **keyboard interactions**
  - Behaves like a real button

- **ARIA does not provide keyboard behavior or styling automatically** — unlike native HTML elements.
- Developers must implement all required behavior with JavaScript and CSS.

### ARIA Creates Both Power and Danger

- ARIA can **enhance accessibility** by adding meaning to otherwise neutral elements.
- ARIA can also **cloak or override native semantics**, which can:
  - Hide content from screen readers
  - Misrepresent visual structure
  - Severely damage non-visual experiences

## Risks of Incorrect ARIA

- Incorrect ARIA can misrepresent what sighted users see.
- Assistive technology users may:
  - Hear incorrect labels
  - Miss content entirely
  - Be given misleading interaction cues

- This is why the W3C explicitly warns that **bad ARIA is worse than no ARIA**.

## ARIA vs Native HTML

- Native HTML elements:
  - Provide built-in semantics
  - Include default keyboard behavior
  - Are safer and more predictable

- ARIA:
  - Does not add behavior
  - Requires careful implementation
  - Should **never replace native elements when they already exist**

## Best Practices for Using ARIA

- Use **semantic HTML first**
- Add ARIA **only when necessary**
- Never use ARIA to “fix” poor HTML structure
- Always define and implement:
  - Keyboard support
  - Focus behavior
  - State updates

- Test with:
  - Keyboard navigation
  - Screen readers
  - Automated tools (as a supplement, not a replacement)

## Key Takeaway

ARIA is a powerful accessibility tool—but it is not a shortcut.
Every ARIA role is a promise, every misuse has consequences, and careful testing is essential. When used strategically and correctly, ARIA enhances accessibility; when used carelessly, it can break it.

## References

- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
