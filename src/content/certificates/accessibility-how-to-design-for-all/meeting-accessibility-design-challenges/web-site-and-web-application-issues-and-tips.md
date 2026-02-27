---
title: Web Site and Web Application Issues and Tips
---

## Start With Tasks: Assign Active Images First

Accessibility begins with task clarity.

### Image Priority Model

1. **Active images**
   - Support core task actions
   - Include Calls to Action (CTAs)
   - Must use verb/action-oriented labels
   - Must make sense when read aloud without visual context
   - Use **buttons** (not links) for major CTAs
   - Consider placement (“button gravity” – natural eye/action flow)

2. **Static images**
   - Support storytelling or context
   - Helpful but not task-critical

3. **Decorative images**
   - Purely aesthetic
   - Lowest priority

Design the task first. Visual hierarchy comes after functional clarity.

## Link Design: Make Meaning Stand Alone

### Links Must:

- Contain enough text to clearly describe destination.
- Make sense when read out of context (screen reader link lists).
- Not appear directly adjacent without separation.
- Avoid being interpreted as one merged link.

### Avoid Classic No-Nos

- “More”
- “Click here”
- “Learn more”
- “This”
- “Item 1, Item 2, Item 3”

Use `aria-describedby` if contextual clarification is necessary—but prefer clear link text first.

### Graphical Links

- Avoid image-only links.
- If used, pair with visible or accessible text.
- Prefer semantic HTML links.

## Native HTML Over Custom Controls

### Always Prefer Native Elements

Use:

- `<button>`
- `<a>`
- `<input>`
- `<select>`

Because native controls provide:

- Built-in keyboard support (Enter + Space)
- Automatic focus management
- Proper semantic roles
- Disabled behavior
- Screen reader compatibility

Custom `div` buttons require:

- `tabindex`
- `role="button"`
- Keyboard handlers
- Disabled logic
- Focus styling

This creates unnecessary complexity and accessibility risk.

## Focus & Keyboard Principles

### Rule of Thumb

If it works with a mouse, it must work with a keyboard.

### Requirements

- All interactive elements must be keyboard accessible.
- All keyboard interactions must have visible focus.
- Focus should be task-driven, not arbitrarily applied.
- Focus logic must be defined during wireframing.

## Backgrounds, Text & Contrast

### Backgrounds

- Prefer solid colors over textured/patterned backgrounds.
- Contrast matters more than color choice.
- Ensure browser color overrides remain functional.
- Support high-contrast system modes.

### Text Rules

- Avoid italics (may appear “wobbly”).
- Avoid ALL CAPS sentences.
- Avoid underlining non-links.
- Avoid very small or extremely large text.
- Use responsive typography appropriately.

### Color Combinations to Avoid

- Light red + dark green
- Red + purple
- Yellow + white/light gray
- Lavender + pink
- Gray on white (low contrast)

Contrast is the core requirement.

## Forms & Labels

### Avoid Borderless Forms

- Invisible boundaries reduce clarity.
- Users may click outside actual input area.
- Low contrast reduces usability.

### Labeling Best Practices

- Always label form fields explicitly.
- Do not rely on placeholder text alone.
- Avoid placing labels only inside fields.
- Ensure sufficient contrast.

## Hover States: Avoid “Hover to Find”

### Problem

Hiding actions behind hover:

- Increases cognitive load.
- Breaks keyboard-only workflows.
- Fails on touch devices.
- Causes stress for users with ADHD, autism, dyslexia.

### Best Practice

- Primary actions must always be visible.
- Secondary actions may be placed inside menus—not hidden behind hover.
- Use visible triggers (e.g., info icon).
- Do not rely on whitespace as a hover trigger.
- Reduce memory burden by showing labels instead of icon-only navigation.

## Sound & Motion (Material Design + WCAG)

### Sound

- No autoplay background audio.
- Avoid unnecessary sounds layered on native controls.
- Provide pause/stop control for background audio.

### Motion

- Auto-moving content >5 seconds must be pausable.
- Limit flashing to ≤3 times per second.
- Avoid flashing large central areas.
- Avoid excessive animation stress.

## Timed Controls & Disappearing UI

### Timed Controls

- Controls should not disappear before task completion.
- Avoid timers on high-priority actions.
- Screen readers (e.g., TalkBack) may not finish reading before controls vanish.

If controls disappear:

- Provide alternative way to trigger them again.
- Do not block task completion.

## Mobile & Material Design Accessibility

### Navigation

- Provide clear feedback.
- Show where users are in the app.
- Use minimal steps for task flow.
- Implement focus control for frequently used tasks.

### Icon Labeling

Icons must describe the action—not the shape.

Correct:

- “Edit”
- “Search”
- “Delete”

Incorrect:

- “Pencil”
- “Magnifying glass”

On mobile:

- Use `contentDescription` (Android) or accessibility labels (iOS).
- Ensure tappable elements are announced clearly.

## Reduce Cognitive Load

Universal accessibility improves usability for everyone.

Lower:

- Memory requirements
- Hidden UI
- Hover dependencies
- Visual-only cues

Increase:

- Clarity
- Explicit labeling
- Task visibility
- Predictable structure

## Core Takeaways

- Design tasks before visuals.
- Assign active images first.
- Use native HTML elements.
- Make links self-explanatory.
- Ensure strong contrast.
- Avoid hiding UI behind hover.
- Respect motion and timing limits.
- Label icons by action.
- Reduce cognitive overhead.

Accessibility is not a feature—it is structural design discipline applied from the beginning.

## References

- [RNIB](https://www.rnib.org.uk/)
