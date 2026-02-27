---
title: Pop Ups + Iframes
---

- **Pop-ups and modal dialogs are frequently implemented incorrectly** and can completely block users with disabilities.
- Common failures include:
  - No **keyboard focus management**
  - No way to **close or escape** the modal using the keyboard
  - Screen readers continuing to read **background content**

- Modals **can be accessible**, but only if:
  - Focus is **moved into the dialog** when it opens
  - Focus is **trapped inside** the dialog
  - Focus is **returned logically** when it closes
  - The dialog is clearly **labeled as a modal/dialog**

- **Consistency is critical**:
  - Don't mix accessible and inaccessible modals on the same site
  - Marketing pop-ups are a common source of accessibility failures

- Sudden pop-ups are especially **disorienting for screen reader users**, causing “teleportation” without context.
- **Iframes do not come accessible by default** and require careful implementation.
- Avoid legacy **frames** entirely—they commonly trap users and break navigation.
- For accessible iframes:
  - Always include a **descriptive `title` attribute**
  - Ensure keyboard navigation works inside the iframe
  - Apply layout styling (height, width, borders) via **CSS**, not attributes
  - Provide an **alternative link** to the iframe content when possible

- Poorly implemented pop-ups and iframes can lock users into dead ends, similar to inaccessible PDFs.

**Key takeaway:**
Pop-ups and iframes are not inherently bad—but without proper focus control, keyboard support, labeling, and consistency, they become major accessibility blockers.

## References

- https://codepen.io/BeyondHyper/pen/NREjpP
