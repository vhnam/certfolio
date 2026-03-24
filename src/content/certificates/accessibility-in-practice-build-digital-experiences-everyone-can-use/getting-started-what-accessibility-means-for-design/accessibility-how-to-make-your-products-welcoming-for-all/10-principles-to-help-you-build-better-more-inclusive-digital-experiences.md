---
title: "10 Principles to Help You Build Better, More Inclusive Digital Experiences"
---

## Core Accessibility Principles

### Principle 1: Blind Users Face Most Accessibility Issues

- Majority of issues relate to:
  - Blindness
  - Low vision
  - Color blindness
- Other disability groups:
  - Hearing
  - Cognitive
  - Motor / mobility
- Key interaction:
  - Relies on **keyboard + screen reader**

#### Screen Readers (Context)

- Desktop:
  - JAWS: Most used primary
  - NVDA: Most used overall
  - VoiceOver: Built-in (macOS)
  - Windows Narrator: Limited
- Mobile:
  - VoiceOver (iOS): Most used
  - TalkBack (Android): Second most used

### Principle 2: Images Require Alt Text

- Images must include ALT text
- Purpose:
  - Provide equivalent information for screen readers
- Requirement:
  - Describe meaning, not just visuals

#### Activity

- Write ALT text for an image
- Focus on conveying content clearly

### Principle 3: Hamburger Menus Are Usually Not Accessible

- Issues:
  - Hide navigation
  - Reduce discoverability
- Prefer:
  - Visible navigation

#### When Used

1. Proper labeling
   - Text label or ARIA label
2. State indication
   - Open / closed state must be communicated

### Principle 4: Hidden Content Won’t Be Found

#### Findings

- Screen readers:
  - May only detect part of the content (e.g., map but not results list)
  - Users lose context (don’t know number of results)
- Problem:
  - Map appears before results in DOM

#### Recommendation

- Ensure:
  - Results/content appear first in DOM
  - Logical reading order

### Principle 5: Accessibility Testing Reveals Gaps

- Testing with users shows:
  - Lower task success for blind / low vision users
- Cause:
  - Improper tagging (e.g., form elements)
- Insight:
  - Small implementation issues → large accessibility gaps

### Supporting Principle: Plain Language

- Essential for accessibility
- Use:
  - Common words
  - Short sentences
  - Active voice
  - Clear structure
  - Direct address

#### Resources

- PLAIN
- WCAG readability criteria
- International Plain Language Federation
- National standards
