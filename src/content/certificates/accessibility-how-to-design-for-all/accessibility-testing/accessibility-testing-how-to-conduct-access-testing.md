---
title: "Accessibility Testing: How to Conduct Access Testing"
---

## Empathy Is Key

### Empathy vs. Sympathy

- Empathy: Connecting with users by understanding and experiencing their challenges.
- Sympathy: Observing difficulty from a distance without true connection.

Quoted verbatim:

> **Empathy, not sympathy**
>
> “In most cases, when we give sympathy we do not reach across to understand the world as others see it… Sympathy is about separation. Empathy is about connection.”
> — Brené Brown

Key principle:

- Accessibility testing should activate deeper empathy by allowing you to feel, hear, and sense user pain during real interactions.

## Two Types of Accessibility Tests

### Formative Testing

- Formative testing: Forms your decisions; goal is to identify issues and fix them.
- Use cases:
  - Fixing code
  - Conducting Accessible QA
  - Agile iteration

Characteristics:

- Observation-heavy
- Insight-driven
- Focused on improvement

### Summative Testing

- Summative testing: Sums up metrics; goal is to benchmark user performance.
- Use cases:
  - Certification or compliance
  - Comparing performance (e.g., disabled vs. non-disabled users)
  - Evaluating third-party software accessibility

If metrics are present → Summative.
If primarily observations → Formative.

## Conducting Accessibility Testing

### Technical Preparation

Before the session:

- Ensure users have their Assistive Technology:
  - Available
  - Updated
  - Fully charged (especially mobile devices)
- In Agile/formative tests:
  - It is acceptable to let users review the site before testing to reduce anxiety and surface issues faster.

### Observation & Recording

- Observe carefully.
- Take structured notes.
- Record sessions for:
  - Later review
  - Team education
  - Evidence in reports

## Thinking Aloud Protocol

### Core Approach

- Ask users to “Think Aloud” while completing tasks.
- Usability testing protocol applies.

If user goes quiet:

- Gently remind them to verbalize thoughts.
- Ensure they are not silently processing a confusing page.

Guideline:

- Most of the time, you are quiet and listening.

### Agile Deviation

In formative testing:

- You may ask users to:
  - “Try that again.”
  - “Check that last thing again (e.g., search field).”

Major difference with usability testing:

- Due to accessibility barriers, users may accidentally skip UI elements or tasks.
- More delicate moderation is sometimes required.

Use discretion in summative testing to avoid biasing results.

## Moderation Exception

### Why More Moderation May Be Needed

- Screen readers may skip improperly coded elements.
- ARIA or tagging errors can hide controls.
- Users cannot always easily verify or troubleshoot like sighted users.

Examples of acceptable prompts:

- “Can you try that one more time?”
- “Can you check that last thing again?”

Caution:

- Do not over-direct.
- Preserve data integrity in summative tests.

## Verify and Clarify

If you (or your note-taker) are unsure:

1. Ask the user to repeat the task.
2. Double-check assumptions:
   - Was skipping the footer typical browsing behavior?
   - Or was it an accessibility issue?

Reminder:

- Good moderation is often minimal moderation.

## Common Accessibility Issues Observed (E-Commerce Example)

### Navigation & Menu Failures

- Submenus expand but do not read contents.
- Arrow keys do not expose submenu items.
- Links that appear but do not activate.

### Inaccessible Controls

- Elements announced only as “clickable” without context.
- Size selectors not usable via keyboard or screen reader.
- “Select size” required but no accessible control provided.

### Shopping Cart & Checkout Problems

- Items appear “added to bag” but are not actually added.
- Cart state inconsistent.
- Checkout button contains multiple overlapping labels.
- Forms enter “forms mode” but do not expose all options clearly.

### Image Accessibility Issues

- Thumbnails labeled generically (e.g., “graphic thumbnail”).
- No meaningful alternative text.
- No product context in image descriptions.

Impact:

- Task completion failure.
- Major barriers in transactional flows.

## Access Testing Advice

- Accessibility testing reveals new issues—follow the clues.
- Test with a variety of users.
- Ensure participants can provide structured feedback.
- Conduct a code audit and run checkers before testing.
- Compare automated results with real user experiences.

Key insight:

- Automated tools find violations.
- Users reveal real-world barriers.

## Creating a Test Report

### What to Include (Per Task)

- Observations and insights
- Guideline violations (A, AA, AAA)
- Verbatim user quotes
- Success rates:
  - 100% = Full success
  - 50% = Partial success
  - 0% = Failure
- Number of confusions
- Number of errors
- Bugs or weird issues to follow up on

Optional:

- Label finding as:
  - Accessibility issue
  - Usability issue

### Report Structure

- Screenshots
- Clear issue descriptions
- Evidence (quotes, recordings)
- Actionable recommendations

Core principle:

- Research is valuable only if it leads to concrete design and code improvements.

## Accessibility + Usability Integration

Accessibility testing:

- Is still user testing.
- Uses assistive technology.
- Surfaces usability and accessibility issues together.

Final takeaway:

- Accessibility testing combines empathy, structured observation, and metrics to improve experiences for everyone—not just users with disabilities.

## References

- [Checker results](https://www.dropbox.com/scl/fo/4hdkdmipuq8n9a6tysy13/AGz1deM9AKgjDu_526dfPQc?rlkey=iyf75nzffl1dfl4219igtzrmf&e=1&dl=0)
- https://web.archive.org/web/20190914233309/http://www.philippatston.com/blog/from-sympathy-to-empathy-understanding-disability
