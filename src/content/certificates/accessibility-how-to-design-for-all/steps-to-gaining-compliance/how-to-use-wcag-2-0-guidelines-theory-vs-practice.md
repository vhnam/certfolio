---
title: "How to Use WCAG 2.0 Guidelines: Theory vs Practice"
---

## WCAG as Theory vs. Practice

### Disconnect Between Guidelines and Reality

- Common challenge:
  - Identifying whether an issue is a WCAG violation.
  - Determining the correct violation level (A, AA, AAA).
- WCAG often:
  - Requires actions that may not always improve real usability.
  - Encourages “going through the motions.”
- Result:
  - Many organizations avoid AAA and focus on AA for legal compliance.

### Motivation Behind Accessibility

- Primary driver: Legal compliance.
- Secondary driver: Empathy.
- Effective strategy:
  - Carrot: Empathy and user-centered design.
  - Stick: Legal and regulatory risk.

## Compliance Does Not Guarantee Accessibility

### “Rubber Meets the Road” Problem

- A product can be 90% compliant and still inaccessible.
- Common failure examples:
  - Forms without a submit button.
  - Unlabeled submit buttons.
  - Untagged navigation elements (e.g., hamburger menus).
- Outcome:
  - Users reach a dead end despite compliant markup.

## WCAG as a QA Tool

### Role of WCAG in Practice

- WCAG should be treated as:
  - A QA reference, not a final solution.
- QA value:
  - Identifies many technical issues.
  - Helps prioritize fixes.
- Limitation:
  - QA alone does not ensure a good user experience.

## Accessible QA and User Testing

### Accessible QA Definition

- Accessible QA:
  - Regular QA + testing with users with disabilities.
- Impact:
  - Can uncover ~80% of real accessibility issues.

### Real-World Issues Found in Testing

- Platform inconsistencies:
  - Zoom works on iOS but not on macOS.
- Example:
  - Low-vision users forced to use browser-level zoom on every page.
  - Technically accessible but extremely tedious and frustrating.
- Key insight:
  - Accessibility can exist without usability.

## Internal vs. External Testing

### Internal Users with Disabilities

- Benefits:
  - Valuable ongoing accessibility QA.
  - Strong advocacy and insight.
- Requirements:
  - Accessibility testing must be part of their formal role.
- Limitation:
  - Does not replace testing with external users.

## Role of Automated Tools

### Strengths and Limits

- Automated checkers:
  - Essential for prioritization.
  - Useful early and throughout development.
- Limitations:
  - Do not catch last-mile accessibility issues.
- Safer tools:
  - Color blindness and contrast checkers.
- Weaker tools:
  - Section 508 checkers (often theoretical).

## WCAG Standards and Evolution

### WCAG Versions

- WCAG 2.0:
  - Current standard reference.
- WCAG 2.1:
  - Emerging standard.
  - Stronger emphasis on mobile accessibility.
  - Focus on making responsive web design accessible.

### WCAG Conformance Levels

- Level A:
  - Absolute minimum.
- Level AA:
  - Practical standard most organizations aim for.
- Level AAA:
  - Aspirational; useful as a review lens.

## Section 508 Refresh and Quality Focus

### Section 508 Refresh

- Introduces:
  - Stronger regulations.
  - Greater emphasis on quality of experience.
- Goal:
  - Move beyond “getting by.”
  - Address last-mile accessibility.

## Accessibility as Quality Experience

### Core Principles

- Accessibility is not just compliance.
- Quality matters:
  - Ease
  - Efficiency
  - Comfort
  - Satisfaction
- Accessibility builds on:
  - Empathy
  - Clean, semantic code
  - Usability best practices

## Key Takeaways

- WCAG and guidelines = theory.
- User testing with assistive technology = reality.
- True accessibility requires:
  - WCAG compliance
  - Automated and manual QA
  - Accessible QA with users
  - Focus on real-world experience
- Responsive web design and modern HTML/CSS:
  - Accelerate accessibility progress.
