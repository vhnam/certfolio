---
title: Keyboard
---

## Core Importance

### Why Keyboard Accessibility Matters

- Keyboard accessibility: A critical requirement for users who cannot use a mouse.
- Scope: Essential for screen reader users, users with motor impairments, and power users.
- Principle: Every interactive element must be reachable and usable via keyboard.

## Basic Keyboard Interaction

### Core Keys to Test

- `Tab` / `Shift`+ `Tab`: Move focus forward and backward through interactive elements.
- `Arrow keys`: Navigate within components and structured content.
- `Enter` and `Space`:
  - Activate links, buttons, and controls.
  - Both must work consistently for selection.
- `Escape`:
  - Exit dialogs, modals, menus, and overlays.
  - Acts as the universal “get me out of here” key.

### First-Step Testing Habit

1. Load the page.
2. Start tabbing immediately.
3. Observe:
   - Can you reach all interactive elements?
   - Is the order logical?
   - Can you activate everything with Enter or Space?

## Focus and Logical Order

### Focus Management

- Focus state: Indicates where the keyboard user is currently located on the page.
- Visibility:
  - Focus indicators must always be visible for sighted keyboard users.
  - Avoid disabling focus styles (e.g. `outline: 0` or similar).
- Logical tab order:
  - All functionality must be keyboard-accessible.
  - Tab order should follow a logical, meaningful reading and interaction sequence.
- Planning focus:
  - Focus flow should support user tasks, not visual layout quirks.
  - Poor focus order leads to confusion and loss of orientation.

#### Structural Foundations for Focus

- Proper heading structure:
  - Use a clear, hierarchical heading order (`h1` → `h2` → `h3`).
  - Enables efficient navigation for keyboard and screen reader users.
- Landmarks:
  - Use HTML5 landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`) or ARIA landmarks.
  - Helps users skip repetitive content and reach key areas quickly.

#### Interactive Elements and Focusability

- Links:
  - An `<a>` element is keyboard-accessible only when it has a non-empty `href`.
  - Do not use `<a>` or `<a href="">` as placeholders or fake buttons.
- Focusable elements:
  - Only elements that perform an action should receive focus.
  - Avoid creating focus traps or focusing non-interactive elements.

#### Key Principle

- Focus management is both a technical and UX responsibility:
  - It depends on semantic HTML, correct structure, and visible focus styles.
  - Well-managed focus improves efficiency, clarity, and accessibility for all users.

### Logical Ordering

- Driven by:
  - Proper HTML structure.
  - Correct heading hierarchy.
  - Semantic landmarks (`header`, `nav`, `main`, `footer`).
- Poor structure leads to:
  - Confusing navigation.
  - Users getting “stuck” or lost.

## Keyboard Shortcuts and Conflicts

### Avoiding Conflicts

- Do not override system or assistive technology keys:
  - Caps Lock + combinations.
  - Insert + combinations.
  - Scroll Lock + combinations.
  - macOS: Control + Option (used by screen readers).
- Guideline:
  - Stick to established keyboard standards.
  - Avoid custom shortcuts unless absolutely necessary.

### Standards Over Creativity

- Most users rely on:
  - Tab
  - Arrow keys
  - Enter
  - Space
- Advanced shortcuts:
  - Rarely learned or used.
  - Increase cognitive load and usability risk.

## Focus as a UX Issue

### Task-Oriented Focus

- Focus should support user tasks, not visual decoration.
- Common problem:
  - Focus trapped in navigation, ads, or social icons.
- Goal:
  - Help users reach primary content and actions efficiently.

### Keyboard + Screen Reader Interaction

- Screen readers provide:
  - Heading navigation.
  - Landmark navigation.
  - Structural summaries.
- Good keyboard accessibility depends on:
  - Clean semantics.
  - Predictable focus behavior.

## Testing and QA Mindset

### Keyboard Testing Checklist

- Can all functionality be completed without a mouse?
- Is focus always visible?
- Is focus order logical and predictable?
- Do Enter and Space both activate controls?
- Does Escape consistently close dialogs and overlays?

### Build It In Early

- Keyboard accessibility must be designed upfront.
- Retrofitting keyboard and focus behavior is costly and error-prone.
- Accessibility, usability, and UX are tightly coupled.

## Key Takeaway

- Keyboard accessibility is not optional—it is foundational.
- Focus management is a design decision, not just a technical detail.
- Designing for keyboard users improves clarity, structure, and usability for everyone.

## References

- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- WebAIM, [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
