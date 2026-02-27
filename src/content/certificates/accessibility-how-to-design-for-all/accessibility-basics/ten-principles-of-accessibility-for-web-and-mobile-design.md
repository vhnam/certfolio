---
title: Ten Principles of Accessibility for Web and Mobile Design
---

## Core Accessibility Strategy

### Principle 1: Blindness Covers Most Accessibility Issues

- Blindness: Addressing blindness solves roughly 80% of accessibility problems.
- Disability categories:
  - Blindness: Includes total blindness, low vision, and color blindness.
  - Hearing impairments
  - Cognitive disabilities
  - Motor impairments
- Rationale:
  - Blind users rely on keyboards and screen readers.
  - Designing for these needs also supports motor-impaired users.

### Visual Impairment Spectrum

- Low vision:
  - Vision loss ranges from ~60% to 97%.
  - Users rely on screen magnifiers (300–400%).
  - Many magnifiers include built-in screen readers.
- Blind users:
  - Use screen readers only (e.g., VoiceOver, JAWS).

### Other Disability Types

- Hearing impairments:
  - Primarily addressed through captions and transcripts.
- Cognitive disabilities:
  - Includes dyslexia, ADHD, Asperger’s.
  - More variable and harder to test.
- Motor impairments:
  - Depend on keyboard navigation.
  - Strong overlap with blind-user requirements.

## Key Accessibility Principles in Practice

### Principle 2: Alt Text for Images

- Alt text purpose:
  - Describe the **meaning or information**, not the visual appearance.
- Guidelines:
  - Focus on what the image communicates.
  - Exclude irrelevant details (clothing, colors, background).
  - Do not include “image of” or “picture of”.
- Example:
  - Good alt text: “Man looking at wall with complex graphics or infographics”
- Importance:
  - Essential for screen readers.
  - Critical for SEO.
  - Frequently overlooked.

### Principle 3: Accessible Mobile Navigation

- Hamburger menus:
  - Often skipped by screen readers if not tagged.
- Fix:
  - Proper semantic markup and labeling when responsive layouts activate.

### Principle 4: Avoid “Out of the Way” Content

- Issue:
  - Screen readers follow code order, not visual layout.
- Example:
  - Map appears before a list of locations in the DOM.
- Impact:
  - Blind users miss essential information.
- Solution:
  - Place meaningful content (lists, results) before decorative visuals.

## Accessibility Testing

### Principle 5: Test with Real Users

- Key insight:
  - Automated tools and guidelines are not enough.
- Finding:
  - Accessibility testing is riskier than usability testing.
  - Blind users may take nearly 3× longer to complete tasks.

- Common causes of failure:
  - Missing labels
  - Improperly tagged dialogs
  - Incorrect form markup

### Real-World Example

- Public library website:
  - Chat feature inaccessible due to missing tags.
  - Users could not reach critical functionality.
- Additional issue:
  - Library only had trial versions of screen readers installed.
- Outcome:
  - Revealed major gaps in both software and organizational readiness.

## Additional Principles

### Principle 6: Do Not Disable Zoom on Mobile

- Low vision users rely on zoom and magnification.
- Disabling zoom locks users out of content.

### Principle 7: Accessibility Is Learnable

- Statistics:
  - ~20% of the population has a disability.
  - ~10% of men are colorblind.
- Insight:
  - Clean, accessible coding improves with practice.
  - Building accessibility early is cheaper than retrofitting.

### Principle 8: Accessibility Does Not Mean Ugly Design

- Myth:
  - Accessible design compromises aesthetics.
- Reality:
  - Visual bias hides contrast and readability issues.
  - High-contrast needs are often overlooked by designers.

### Principle 9: Check Mobile Accessibility Separately (Including Responsive Issues)

- Responsive design risks:
  - Important UI elements can become hidden or collapsed.
- Example:
  - Search UI hidden under a map and skipped by screen readers.
- Lesson:
  - Accessibility, usability, and responsive design intersect.

## Principle 10: Embrace the “Access Attitude”

### Design Mindset

- People first: Design for differences.
- Clear purpose: Understand users and personas.
- Solid structure: Follow standards; every image needs alt text.
- Easy interactions: Ensure full functionality across devices.
- Helpful wayfinding: Clear, logical navigation.
- Clean presentation: Support meaning, not decoration.
- Plain language: Crucial for cognitive accessibility.
- Accessible media:
  - Provide captions.
  - Offer alternative formats for complex visuals and tables.

### Key Takeaway

- Accessibility excellence comes from:
  - Standards
  - Real user testing
  - The right mindset (“access attitude”)
- The final “last mile” of accessibility can only be reached by testing with real users and designing beyond visual assumptions.

## The Takeaway

- If you can’t consider all disabilities, consider blindness. 80 percent of accessibility issues are related to blindness.
- Remember to create good `ALT` text (text that describes images).
- Remember to tag hamburger menus so screen readers don’t skip over them.
- Don’t place important content out of the way where screen readers won’t find it.
- You have to test for accessibility with real users.
- Don’t disable zoom in mobile interfaces.
- Accessibility is cheaper when it’s done up front – and easily learned.
- Be aware of visual bias, but remember that accessibility does not mean ugly design.
- Check mobile accessibility separately.
- Embrace the all-access attitude.
