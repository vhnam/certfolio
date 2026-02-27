---
title: "Using Automated Tools: Pros and Cons"
---

## Automated Accessibility Checkers

### Purpose and Role

- Automated tools: Software that scans websites for accessibility issues based on predefined rules.
- Primary role: Provide quick, early feedback and ongoing QA support.
- Limitation: Cannot replace real user testing with people with disabilities.

### Historical Context and False Confidence

- Bobby checker (1990s): Early accessibility checker that led to “Bobby approved” claims.
- False sense of security: Passing automated checks does not mean a site is truly accessible.
- Key lesson: Compliance tools can mislead teams into skipping real accessibility testing.

### Value vs. Limitations

- Pros:
  - Fast, convenient, and easy to run in a browser.
  - Useful early in development for quick issue detection.
  - Helpful after testing as ongoing QA and learning tools.
- Cons:
  - Miss many real-world usability issues.
  - Often flag theoretical or low-impact issues.
  - Cannot detect problems caused by user behavior, assistive tech, or platform bugs.

## Real User Accessibility Testing

### Importance of Testing with Users

- Accessibility testing: Observing real users with disabilities using assistive technologies.
- Key insight: Tools found 15 issues internally, while 7 real users revealed 45 new issues.
- Reason: Real users expose practical barriers tools cannot detect.

### Practical Challenges

- Testing often requires home visits.
- Must use users’ own assistive technologies (screen readers, magnifiers, etc.).
- More time-consuming but essential for true accessibility.

## Common Accessibility Issues Found by Checkers

### Global and Structural Issues

- HTML lang attribute missing: Prevents correct screen reader pronunciation.
- Disabled zoom on mobile: Blocks low-vision users from magnifying content.
- Duplicate ID attributes: Invalid HTML and accessibility failure.
- Invalid HTML structure:
  - `ul` elements containing `div` instead of `li`.

### Forms and Interactive Elements

- Missing labels on inputs: Screen reader users cannot identify form purpose.
- No submit button: Forms cannot be completed via screen readers.
- Fieldsets without legends: Lack of context for grouped inputs.
- Popup forms missing accessible names.

### Images, Links, and Media

- Missing alt text on images: Blocks non-visual users from understanding content.
- Image-only buttons without text or alt: Controls become invisible to screen readers.
- Iframes without titles: Users cannot identify embedded content.
- Links without discernible text: Navigation becomes meaningless.

### Navigation and Menus

- ARIA misuse:
  - `aria-expanded` used incorrectly with `role="menu"`.
- Insight:
  - Some ARIA issues are theoretical and may not cause real user problems.

## Visual Bias in Design

### Definition

- Visual bias: Assuming something is accessible because it “looks fine.”

### Examples

- Color swatches without text: Visible but unreadable by screen readers.
- Placeholder-only inputs: Appear labeled visually but lack semantic labels.

## Color and Contrast Evaluation

### Color Blindness Tools

- Color blindness simulation: Upload images to see how content appears to users with color vision deficiencies.
- Common issue:
  - Red/green (“Christmas colors”) combinations.

### Contrast Checker Tools

- Contrast checking: Tests text and background color ratios against WCAG standards.
- Findings:
  - Multiple AA and AAA failures on key brand colors.
- Benefit:
  - Clear pass/fail scorecards for designers using hex colors.

## Recommended Accessibility Tools

### Automated Checkers

- WAVE: Web-based tool and browser extension with explanations for violations.
- axe (Deque): Browser extension integrated with developer tools, more thorough than WAVE.

### Manual Inspection Tools

- Web Developer Toolbar:
  - View alt text.
  - Inspect image and structural markup manually.

## Best Practices for Using Automated Tools

### When to Use

1. Early development: Catch obvious issues quickly.
2. Preparation for user testing: Identify likely problem areas.
3. Ongoing QA: Monitor regressions over time.

### What Not to Do

- Do not rely on tools as proof of accessibility.
- Do not skip testing with real users.

### Key Principle

> Automated checkers are indicators, not validators.

## Accessibility Program Perspective

### Long-Term Approach

- Integrate accessibility testing into regular workflows.
- Combine:
  - Automated tools
  - Manual code reviews
  - Real user testing

### Outcome

- More accurate issue detection.
- Reduced risk of excluding users.
- Stronger, more reliable accessibility compliance.

## References

- [Compliance Checker Results](https://public-assets.interaction-design.org/course-documents/accessibility-how-to-design-for-all/compliance-checker-results.zip)
