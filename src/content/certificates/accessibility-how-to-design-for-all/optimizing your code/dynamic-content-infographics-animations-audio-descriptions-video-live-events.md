---
title: "Dynamic Content: Infographics, Animations, Audio Descriptions, Video, Live Events"
---

## What Is Dynamic Content

Dynamic content refers to page content that changes based on user input, context, or time—often powered by JavaScript and AJAX. Examples include carousels, infographics, animations, audio, video, live feeds, auto-updating data, and parallax effects.

The core accessibility risk is that **changes may not be announced, focus may be lost, and users may lose control**.

## Core Accessibility Risks

### Common Problems

- Dynamic updates are **not announced** to screen reader users
- Keyboard-only users **lose focus** or cannot reach new content
- Content **moves, updates, or plays automatically** without user control

## General Guidelines for Dynamic Content

### User Control Comes First

If content updates automatically and lasts **more than 5 seconds**, users must be able to:

- Pause
- Stop
- Hide
- Trigger updates manually

### Focus Management

- Use `.focus()` when appropriate to move keyboard focus to updated content
- Never steal focus unexpectedly
- Ensure updated content is reachable by keyboard

### ARIA for Announcements

- Use `aria-live` and `aria-atomic` to announce updates
- Prefer user-triggered updates over automatic ones
- Avoid over-announcing non-critical changes

## Carousels

### Accessibility Requirements

- Provide **Play / Pause** controls
- Provide **Next / Previous** buttons with clear accessible names
- Ensure all controls work with **keyboard and mouse**
- Use `aria-label` to name carousel controls and slides
- Display a **clear visible focus indicator** on all focusable elements

Carousels are often inaccessible by default and require deliberate design.

## Audio Content

### Pre-recorded Audio

- Must include **text transcripts**
- Transcripts must describe:
  - Significant sounds
  - Key actions
  - Contextual audio cues

## Live Audio and Video

### Requirements

- **Captions are required for all video**
- Live audio or video must include a **descriptive label** explaining:
  - What the feed is
  - What is happening
  - Where it is happening

Clear descriptions prevent users from entering content without context.

## Scrolling and Moving Content

### Automatic Motion

If scrolling or moving content:

- Starts automatically
- Lasts more than 5 seconds

You must provide:

- Pause / Stop controls
- A way to hide the content

### Best Practices

- Avoid `<marquee>`
- Do not rely on motion to convey meaning
- Loader animations are exempt if they indicate progress only

## Parallax Scrolling

### Accessibility Considerations

- Keep parallax effects **minimal**
- All content must be **keyboard accessible**
- Maintain **minimum contrast ratios**:
  - 4.5:1 for normal text
  - 3:1 for large or bold text
- Avoid motion-heavy designs that cause discomfort

Parallax must never trap focus or rely on background images for essential information.

## Auto-Updating Content

### Required Controls

- Pause / Stop automatic updates
- Allow users to control update frequency
- Use `aria-live` and `aria-atomic` to announce updates
- Move focus thoughtfully when updates occur
- Prefer user-initiated refresh actions

## Infographics

### Best Practice: Text First

- Provide a **text-only version**
- Offer a clear “Text version” link at the top
- Keep infographic structure simple and well-grouped
- Use headings (H1–H3) to create navigable structure

Infographics should be designed **from text first**, not retrofitted later.

## Motion, Animation, and Cognitive Load

- Minimize unnecessary motion
- Avoid rapid animations and flashing effects
- Consider users with:
  - Motion sensitivity
  - Cognitive disabilities
  - Screen magnification

Motion should never overwhelm or distract from content comprehension.

## Key Takeaway

Dynamic content is accessible when it is:

- **Controllable** by the user
- **Keyboard accessible**
- **Announced properly** via ARIA
- **Visually and cognitively considerate**
- **Predictable and respectful of focus**

Accessibility in dynamic content is not about avoiding interactivity—it’s about **designing interaction responsibly**.

## References

- WebAIM, [Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/#dynamic)
- W3C Web Accessibility Initiative, [Carousels Tutorial](https://www.w3.org/WAI/tutorials/carousels/)
- W3C Group Note, [Understanding SC 2.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)
- W3C Web Accessibility Initiative, [Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
