---
title: What Poor and Good Accessibility Looks Like
---

## The Impact of Accessibility Quality

### Universal Access and Everyday Scenarios

- Core idea:
  - Accessibility is about universal access, not edge cases.
- Insight:
  - Situational limitations (bright sunlight, high mouse sensitivity, low literacy) affect everyone.
  - Accessibility design benefits all users, not only users with disabilities.

## Characteristics of Good Accessibility

### Proactive and Meaningful Alt Text

- Alt text should:
  - Describe the **meaning or purpose** of an image.
  - Avoid decorative or irrelevant descriptions.
- Best practice:
  - Use empty `alt=""` for spacer or decorative images so screen readers skip them.
- Common failure:
  - Missing alt text in navigation, breadcrumbs, or headers.
- Consequence:
  - Users miss essential navigation and page context.

### Enabling Content Access

- Video content:
  - Must include captions, especially for public or government information.
- Legal context:
  - Section 508 and the ADA require accessible public information.
- Structural requirements:
  - Proper heading hierarchy.
  - Clear document structure for screen reader navigation.

### ARIA and Semantic Structure

- ARIA supports:
  - Navigation landmarks
  - JavaScript widgets
  - Form hints and interactions
- Importance:
  - Helps screen readers understand page regions and functionality.
- Limitation:
  - ARIA supports accessibility but cannot fix poor structure on its own.

## Real-World Accessibility Failures

### Government Website Case Study

- Example:
  - City of Portland website accessibility audit.
- Findings:
  - Missing alt text
  - No video captions
  - Poor heading structure
  - Inaccessible PDFs
- Real consequences:
  - Users unable to apply for jobs.
  - Citizens unable to access meeting information.
- Key lesson:
  - Goodwill and audits are not enough without strong advocacy and execution.

## Navigation, Affordances, and Usability

### Design Affordances

- Affordances:
  - Visual cues that indicate interactivity (buttons, links, controls).
- Accessibility requirement:
  - Elements must look, behave, and be tagged consistently.
- Example:
  - A button should look like a button, act like a button, and be coded as a button.

### High Contrast and Assistive Settings

- Observation:
  - Users may rely on system-level contrast or inversion settings.
- Risk:
  - Interfaces that appear clear to designers may be confusing or ambiguous.
- Outcome:
  - Accessibility often amplifies existing usability problems.

## The Cost of Poor Accessibility

### Accessibility quality goals

- Avoid redundancy and repetition of information "Audio Clutter"
- Avoid "double" navigation excess Assistive Technology navigation
- Avoid "lost" loops (eg poor headings, weak structural help)
- Avoid "hidden" content (eg hamburger menu un-tagged)
- Avoid content "exclusion" eg (visual is intuitive at first glance, but ALT is missing or different altering the meaning requiring extra thinking)
- Optimize for "compactness" (eg tab an image 'block' with text versus text+image)

### Audio Clutter and Cognitive Load

- Screen reader experience:
  - Excessive repetition, redundant navigation, and poor headings.
- Effects:
  - Users loop through content repeatedly.
  - Users lose context and forget their original goal.

### Common Accessibility Failures

- Missing or weak heading structure.
- Untagged hamburger menus on mobile.
- Hidden or excluded content.
- Inaccessible PDFs.
- Overly verbose or “marketing fluff” alt text.
- Keyword-stuffed alt text that adds noise instead of meaning.

### Compactness and Efficiency

- Quality goal:
  - Reduce the number of elements users must traverse.
- Techniques:
  - Combine text and images where appropriate.
  - Avoid duplicating information.
  - Optimize for fast, linear navigation.
- Benefit:
  - Faster task completion and less fatigue.

## Key Accessibility Principles Reinforced

### Accessibility as a Legal, Moral, and Business Imperative

- Legal:
  - ADA Section 508 (US)
  - European Accessibility Act
  - UN Rights of Persons with Disabilities
- Moral:
  - Prevents exclusion and discrimination.
- Business:
  - Improves usability, SEO, and overall experience quality.

### Core Disability Categories

- Visual impairments:
  - Blindness, low vision, color blindness
- Hearing impairments
- Cognitive impairments
- Motor impairments

### Foundational Practices

- Meaningful and consistent alt text.
- Keyboard and screen reader testing.
- Clear structure and navigation.
- Avoidance of loops, redundancy, and audio clutter.

## Final Takeaways

- Poor accessibility:
  - Forces users to work harder, think harder, and listen harder.
  - Creates barriers no sighted user would tolerate.
- Good accessibility:
  - Enables efficient, frustration-free access.
  - Supports user advocacy and disability advocacy.
- Best path forward:
  - Combine automated tools with real accessibility testing.
  - Treat accessibility as a core quality standard, not an afterthought.
