---
title: "Focus Control + Layout Considerations For UX Designers"
---

## Focus Fundamentals

### Keyboard Focus

- Keyboard focus: The location where keyboard events are directed and interpreted by the application.
- Common navigation keys:
  - Tab / Shift + Tab
  - Arrow keys (up/down/left/right)
- Visual indicators:
  - Cursor position
  - Highlighted outline or dotted focus rectangle
- Requirement:
  - Every focusable element must have a clear, visible focus indicator.

### Reading Focus

- Reading focus: The location where a screen reader begins rendering content.
- Purpose:
  - Provides orientation within the page.
  - Enables efficient navigation through structured content.
- Techniques:
  - Skip links (e.g. “Skip to content”) to bypass repetitive navigation.

## Focusability and Structure

### What Focusability Means

- Focusability:
  - The ability for an element to receive keyboard focus.
- Principle:
  - Interactive controls must be focusable.
  - Non-interactive elements do not need focus.

### Interactive vs Non-Interactive Elements

- Add focus to:
  - Inputs
  - Buttons
  - Links
  - Select controls
  - Primary calls to action (CTAs)
- Do not add focus to:
  - Static text
  - Decorative elements
  - Non-actionable content

## Tab Order and Logical Navigation

### Sensible Tab Order

- Tab order:
  - Must make sense in the context of the task.
  - Should follow reading and interaction order.
- Native HTML controls:
  - Inputs, selects, and buttons are implicitly focusable.
- HTML-driven focus:
  - Focus order follows DOM order.
  - Re-arrange the DOM if tabbing order is not logical.

### Reducing User Effort

- Group related elements:
  - Icons + text + control = one focus stop when they represent one action.
- Benefits:
  - Reduces excessive tabbing.
  - Lowers cognitive and physical fatigue.
  - Improves spatial understanding of the interface.

## Focus as a UX Design Decision

### Designing Focus Upfront

- Focus control:
  - Must be planned from a UX design perspective.
  - Should not be left solely to developers.
- Design without mouse bias:
  - Assume keyboard-only navigation as a primary use case.
- Goal:
  - Support task completion quickly and clearly.

## Directing, Retaining, and Preventing Focus

### Directing Focus

- Purpose:
  - Guide users to the next logical step.
- Examples:
  - Focusing the first field in a form.
  - Focusing a primary CTA after long content.

### Retaining Focus

- Problem:
  - Screen readers may read content behind overlays or modals.
- Solution:
  - Move focus into the active component.
  - Keep focus within dialogs until dismissed.

### Preventing Focus

- Use case:
  - Blocking access to inactive background content.
- Technique:
  - Use attributes like `inert` to prevent focus where interaction is not allowed.

## Focus Indicators and Styling

### Visibility Requirements

- Focus indicators must always be visible.
- Anti-pattern:
  - Removing focus outlines (e.g. `outline: none`).
- Recommended approach:
  - Use `:focus-ring` (or `:focus-visible` with the current browsers) to distinguish keyboard focus from mouse interaction.

## Event-Driven Focus Risks

### Avoid Unexpected Focus Changes

- Risk:
  - Triggering focus changes via event handlers (e.g. `onChange`).
- Problem:
  - Focus may move without user intent.
- Preferred pattern:
  - Use explicit buttons with clear labels to trigger actions.

## Structural Semantics Supporting Focus

### Headings

- Importance:
  - Provide orientation and page identity.
- Best practices:
  - Use proper hierarchy (`h1`, `h2`, `h3`).
  - Do not rely on visual styling alone.

### Lists and Emphasis

- Use semantic elements:
  - `ul` for unordered lists
  - `ol` for ordered steps
  - `dl` for definitions
- Emphasis:
  - Use `strong` or `em` instead of purely visual styling.

## Key Takeaways

- Focusability is about directing keyboard events intentionally.
- Tab order must be logical and task-oriented.
- Only interactive elements should receive focus.
- Visible focus indicators are mandatory.
- Focus control is a core UX responsibility that improves accessibility and usability for everyone.
