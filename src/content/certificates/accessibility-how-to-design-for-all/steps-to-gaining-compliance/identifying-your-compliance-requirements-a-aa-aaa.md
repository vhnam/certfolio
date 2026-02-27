---
title: "Identifying Your Compliance Requirements: A, AA, AAA"
---

## WCAG Compliance Levels

### Conformance Levels Overview

- Level A:
  - Lowest level of compliance.
  - Basic access (“getting in the door”).
- Level AA:
  - Moderate standard.
  - Most organizations aim for this level.
- Level AAA:
  - Gold standard.
  - Highest level of accessibility.

Most companies (e.g., large tech organizations and enterprise clients) target **AA** as their baseline and go beyond it when it benefits users.

## Using WCAG as a Compliance Framework

### Guidelines as a Baseline

- WCAG guidelines:
  - Are essential for compliance.
  - Act as a reference and checklist.
- Limitation:
  - Guidelines alone do not guarantee real accessibility.
- Best practice:
  - Combine WCAG compliance with accessibility testing involving real users.

### Mapping Guidelines to UI Elements

- Each accessible UI element should be mapped to:
  - A WCAG success criterion.
  - A specific conformance level (A, AA, AAA).
- Purpose:
  - Track compliance.
  - Systematically “check off” requirements.

## WCAG Quick Reference and Cheat Sheets

### Quick Reference Tool

- WCAG Quick Reference:
  - Allows filtering by conformance level.
  - Easier to review requirements for A, AA, or AAA.
- Recommended workflow:
  1. Review AA criteria.
  2. Review AAA criteria.
  3. Review A + AA together for practical compliance.

### Cheat Sheets

- Cheat sheets:
  - Simplify navigation of WCAG criteria.
  - Enable faster searching (e.g., Ctrl/Cmd + F).
- Use case:
  - Faster lookup than the official WCAG tables.

## Applying WCAG to Real Issues

### Example Issues to Map to WCAG

1. Search form has no submit button:
   - Impact: Screen reader users cannot submit the form.
2. Popup form has no accessible name on `fieldset`:
   - Impact: Users lack context for grouped inputs.
3. Popup form has `fieldset` elements with no `legend`:
   - Impact: Screen reader output becomes meaningless (e.g., unlabeled options).

### Violation Levels Identified

- No submit button:
  - Level A violation.
- Popup with no accessible name:
  - Level AA violation.
- Fieldset without legend:
  - Level A violation.
  - Also relevant to AA and AAA.

Result:

- All three issues fail WCAG compliance at required levels.

## Challenges of Using WCAG Directly

### Practical Difficulties

- WCAG is:
  - Dense.
  - Structured by principles, not by code patterns.
- Some issues (e.g., alt text):
  - Easy to locate.
- Others (e.g., `fieldset` / `legend`):
  - Require more research.

### Research and Interpretation

- WCAG does not always:
  - Clearly label violation levels by HTML element.
- Requires:
  - Cross-referencing documentation.
  - Manual investigation.

## Role of Automated Checker Tools

### Benefits of Tools (axe, WAVE)

- Automatically:
  - Identify issues.
  - Label violation levels (A, AA, AAA).
- Provide:
  - Developer-friendly explanations.
  - Direct code references.

### Recommended Workflow

1. Run checker tools (axe or WAVE).
2. Identify issues and their severity.
3. Reference WCAG to understand legal and technical context.
4. Fix issues.
5. Validate with users.

## WCAG as “Legal Language”

### Conceptual Comparison

- WCAG:
  - Represents the legal and regulatory position.
  - Written in formal, technical language.
- Checker tools:
  - Translate guidelines into practical, actionable feedback.
  - More accessible to designers and developers.

## Key Takeaways

- WCAG and checker tools must be used together.
- Checker tools surface issues quickly.
- WCAG provides the authoritative standard.
- Mastery comes from:
  - Repeated use.
  - Research.
  - Applying fixes.
  - Testing with real users.
- Final goal:
  - Move beyond compliance and validate accessibility with users.

## References

- W3C, [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0)
- Squiz, [WCAG 2.1 Standard: Summary](https://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/)
