---
title: "Interview: Accessibility Testing in Action"
---

# Mobile Accessibility Testing with Screen Readers (Case Study: Banking Website)

## Real-World Mobile Accessibility Testing

### Scenario Overview

- Task: Find what types of accounts are offered and what is available for students.
- Context: Mobile browsing using Android with TalkBack.
- Entry method: Google search → Deep link into banking website.

Key insight:

- Entry point matters. Users often arrive via search results, not the homepage.

## Initial Page Accessibility

### What Worked Well

- Page content was mostly readable.
- Headings and links were navigable.
- Account details were clearly announced.
- Some structured content appeared accessible.

Observation:

- Overall accessibility estimated around 70–100% on key content sections.

## Pop-Ups and Location Prompts

### Issue: Location Modal

- Pop-up requested ZIP code.
- Text was readable.
- ZIP code input field was not easily discoverable in default navigation.

Problem:

- Field was skipped during normal swipe navigation.
- User had to change navigation granularity to find it.

Impact:

- New or less experienced users may think the page is broken.
- Pop-ups obscure page context and create confusion.

## Screen Reader Navigation Strategies

### Granularity Navigation (Android TalkBack)

- Granularity: A setting that changes how a user navigates content.
- Navigation modes include:
  - Characters
  - Words
  - Controls
  - Links
  - Headings
  - Landmarks

Process to Locate Hidden Input Field:

1. Swipe up/down to change granularity.
2. Switch to "Controls".
3. Swipe right to move between interactive elements.
4. Locate the ZIP code edit box.
5. Double-tap to activate.

Key insight:

- Advanced screen reader skills are often required to access poorly exposed elements.
- Accessibility sometimes depends on user proficiency.

## Pop-Up Confusion

### Overlay Behavior

- Alert appeared over page.
- User temporarily thought the page changed.
- Page context was lost visually and auditorily.

Impact:

- Disorienting for new users.
- Requires experience to recognize modal overlays.

Lesson:

- Pop-ups should:
  - Be clearly announced.
  - Maintain focus.
  - Restore focus correctly when dismissed.

## PDF Accessibility Testing

### Downloaded Account Fee Disclosure PDF

- Disclaimer: “May not be fully accessible to screen readers.”
- Screen reader successfully read structured content.
- Fee information was understandable.

Observation:

- Despite disclaimer, document was largely readable.
- Indicates partial compliance effort.

Key principle:

- Always test PDFs directly.
- Do not assume accessibility from disclaimers.

## Finding “Compare All Accounts”

### Navigation Challenge

- Link existed but was buried.
- Difficult to locate using default swipe navigation.
- Easily found using link-based granularity navigation.

Process:

1. Change granularity to "Links".
2. Swipe through links.
3. Locate "Compare all accounts".
4. Activate link.

Insight:

- Without advanced navigation knowledge, important functionality may remain hidden.
- Accessibility should not depend on expert-level screen reader knowledge.

## Assistive Technology Proficiency

### Important Observation

- Screen reader expertise varies.
- Some features (granularity switching) require:
  - Training
  - Familiarity
  - Practice

Key takeaway:

- Accessibility testing must consider:
  - Experienced users
  - Moderately experienced users
  - New users

Accessibility should not require advanced AT mastery to complete basic tasks.

## Strengths Observed

- Core content readable.
- Account details accessible.
- Mobile app reportedly more accessible than mobile website.
- Some effort made toward structured content.

## Weaknesses Observed

- ZIP code field not discoverable in default navigation.
- Confusing pop-up overlays.
- Discoverability of comparison link required advanced navigation skills.
- PDF accessibility uncertain without testing.

## Key Lessons for Accessibility Testing

### 1. Test Real Entry Points

- Use search engines.
- Follow deep links.
- Do not only test homepage flows.

### 2. Test Mobile + Screen Reader Together

- Mobile accessibility differs from desktop.
- Touch navigation adds complexity.

### 3. Test Pop-Ups and Modals

- Verify focus behavior.
- Ensure fields are reachable via default navigation.

### 4. Test Granularity-Based Navigation

- Headings
- Links
- Controls
- Landmarks

Ensure essential functions are discoverable without advanced techniques.

## Core Insight

Mobile accessibility is not just about:

- Proper labels
- Readable content
- ARIA compliance

It is also about:

- Discoverability
- Navigation efficiency
- Minimizing reliance on advanced assistive technology expertise

Accessibility should support both expert and novice screen reader users.
