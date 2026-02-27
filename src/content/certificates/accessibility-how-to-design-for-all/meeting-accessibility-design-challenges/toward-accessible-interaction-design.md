---
title: Toward Accessible Interaction Design
---

## Design Phase Foundations

### Core Accessibility Considerations

- Typography: Ensure readable font sizes and clear hierarchy.
- Color contrast: Avoid low-contrast combinations (e.g., gray on gray).
- Link visibility & target size: Links must be visually distinct and easy to activate.
- Label proximity: Labels must be clearly associated with their controls.
- Predictable and consistent navigation: Users should not guess how the UI behaves.
- Visual focus indicator: Focus must be clearly visible.
- Content blocks separated and distinct: Related content grouped spatially and semantically.

These fundamentals should be handled early in the design phase — not fixed later.

## Design Content by Blocks

### Why Group Content into Blocks?

Grouping content into blocks helps you:

- Define the path a screen reader will take.
- Establish logical relationships between content.
- Control reading order independent of visual layout.
- Document structure for developers.

### Block Strategy Process

1. Organize content into blocks (groupings).
2. Identify the value/purpose of each block.
3. Determine the best order for blocks to be read by a screen reader.
4. Define relationships (large blocks containing smaller blocks).
5. Document block ordering (for visual design and coding later).

## Think Accessible Layout

When designing layout, determine:

- The order in which elements receive focus.
- The way in which elements are grouped.
- Where focus moves when the element in focus disappears.
- How focus is clarified (visual indicators + accessibility text).

### Key Principle

- Structure the flow by context, not by visual layout.
- Group similar items under meaningful headings.
- Ensure transitions (modals, menus, panels) return focus logically.

## Prioritizing Content

Accessibility is also about content hierarchy.

### Prioritization Guidelines

- Weigh content by persona need/priority.
- Identify metadata (Headers, Headings, Images).
- Push interruptible elements out of flow (e.g., share, print, cross-promotion).
- Avoid interrupting core content.
- Develop a lightweight Accessibility “style guide” early (Blocks, Order, Flow rationale).

## Design for Focusability

### Focusability Definition

- Focusability: The ability to access essential UI elements without a mouse.
- It is both:
  - A layout schema for mapping content priorities.
  - A navigation aid to reduce screen reader overhead and “loopy navigation.”

### Keyboard Access Must Include

- Links
- Buttons
- Form fields / controls
- Menu items
- Hover-triggered elements (tooltips)
- Widgets (e.g., calendar pickers)

## Design Tips for Focusability

### Visual & Behavioral Guidelines

- Good contrast: Focus must be clearly visible.
- Complementary shape and size: Focus indicator should match element boundaries.
- Color scheme: Complementary but stands out.
- Doesn’t need to be identical for all elements.
- Animations can help track focus movement.
- Must degrade gracefully (older browsers).
- Must behave consistently across browsers.

## Focus Design Tips (Practical)

1. List your focusable elements:
   - How many variations exist?
   - Will the same focus indicator work for primary and secondary buttons?

2. Think about your color scheme:
   - Does your highlight color work for focus?
   - If not, define a dedicated focus color.

3. Mirror hover states:
   - If hover state is clear, it can inform focus design.
   - Hover ≠ focus, but it’s a useful reference.

4. Custom style your focus:
   - Replace native browser focus styles with consistent custom styling.
   - Ensure accessibility remains intact.

## Accessible Pattern vs Anti-Pattern (Landing Page Activity)

### Anti-Pattern (Old Way)

- Designed for visual impact only.
- No consideration of focus order.
- Dynamic panels not announced.
- Unlabeled form inputs.
- Poor error handling.
- Ambiguous button labels.

### Accessible Pattern (New Way)

1. Define clear task steps.
2. Label all inputs properly.
3. Announce dynamic state changes.
4. Handle timeouts and errors clearly.
5. Provide multiple interaction paths (e.g., resend code, reenter number).
6. Define logical tab order.
7. Ensure buttons use meaningful labels (e.g., “Submit”, “Save PIN”).

## Designer Checklist

Designers should ensure:

- Content has good color contrast.
- Tab order is identified and logical.
- Non-native elements (e.g., div-based controls) are not breaking accessibility.
- Controls have accessible labels.
- Multiple ways to interact with the UI are supported.

Important note:

- Not all elements are focusable by default (e.g., div, span).
- If used as controls, they must be made accessible (or use proper semantic elements like `<button>`).

## Developer Checklist

Developers must verify:

- Tab order is logical.
- Focus is properly managed and visible.
- Interactive elements support keyboard.
- ARIA roles and attributes are applied when needed.
- Elements are properly labeled.
- Accessibility testing is automated.

## Core Integration: Designer + Developer

Accessibility works best when:

- Designers define structure, blocks, and focus logic early.
- Developers implement semantic structure and keyboard behavior.
- Both collaborate on contrast, focus states, labeling, and flow.

The key themes across everything:

- Contrast
- Logical focus order
- Block-based content structure
- Clear labeling
- Keyboard accessibility
- Context-driven flow (not visual-driven)

Accessibility is not a separate layer — it is part of interaction design.

## References

- Material Design, [Accessibility Basics](https://m3.material.io/foundations/overview/principles)
