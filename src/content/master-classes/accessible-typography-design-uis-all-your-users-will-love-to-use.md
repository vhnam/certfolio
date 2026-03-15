---
title: "Accessible Typography: Design UIs All Your Users Will Love to Use"
description: "Discover accessible typography strategies for web and UI design. Enhance readability and user experience for all audiences."
platform: "IxDF"
tags: ["accessibility", "typography", "ui", "ux"]
---

## Introduction to Typography & Accessibility

### Typography in Digital Products

- Typography: The way text is visually presented in apps, websites, and interfaces.
- Purpose: Gives words a voice — can be functional, expressive, traditional, modern, bold, or delicate.
- Designer’s Role: Responsible for how text is perceived visually, not just how it looks aesthetically.

### Rethinking Accessibility (A11y)

- A11y: Abbreviation for accessibility.
- Common Misconception: Accessibility is only for blind users and handled by developers.
- Reality: Vision exists on a spectrum.
  - 1.1 billion people globally live with some form of visual impairment.
  - Only ~44 million are fully blind.
- Visual conditions may affect:
  - Visual acuity
  - Color vision
  - Light sensitivity
  - Field of vision
- Key Insight: Designers are responsible for making typography accessible for people within this spectrum.

## Legibility Land – Clear Character Recognition

### Myth 1: Avoid Fancy Fonts (Accessibility = Boring)

- Accessibility is a range, not a checkbox.
- Depends on context and use case.

#### Core Principles

- Font follows feeling: Expressiveness is allowed (logos, headlines, short texts).
- Font follows function: In critical contexts (passwords, forms), clarity is essential.

#### Key Takeaway

- Know when to be expressive and when to prioritize clarity.

### Myth 2: Always Use Sans Serif Fonts

#### Guidance from Clear Print Guidelines (European Blind Union)

- Suggestion: Use standard sans-serif fonts like Arial.

#### Critical Analysis

- Serifs are not inherently bad.
- Character differentiation matters more than serif vs. sans-serif.

#### Legibility Factors

- Distinct letterforms:
  - Clear differentiation between:
    - I, l, 1
    - O, 0
- Open apertures:
  - Letters like C, E, S should not be overly closed.
  - Open shapes improve readability in small sizes or blurry conditions.
- Avoid mirrored letterforms when possible.

#### Example Insight

- Atkinson Hyperlegible:
  - Highly distinct letterforms.
  - Clear differentiation.
- Arial:
  - Less distinct shapes.
  - More mirrored forms.

#### Key Takeaway

- The question is not serif vs. sans-serif.
- It’s about:
  - Letter differentiation
  - Aperture openness
  - Stroke clarity
  - Context of use

### Myth 3: Comic Sans Helps Dyslexic Readers

#### About Dyslexia

- Dyslexia: A learning difficulty affecting reading, writing, and spelling.
- It is not a disability.
- Exists on a spectrum.

#### Common Advice

- Avoid mirrored letter shapes (e.g., b/d, p/q).

#### Reality Check

- Comic Sans and Open Dyslexic:
  - Do not consistently outperform other fonts in readability studies.
  - Irregular shapes may distract readers.
- Dedicated “dyslexia fonts” are not universally effective.

#### What Actually Helps

- Clear differentiation of letterforms.
- Adequate letter spacing.
- Adequate word spacing.
- Balanced line spacing.

#### Better Alternatives

- Atkinson Hyperlegible
- Lexend
- Open Sans / Noto Sans
- Shantell Sans

#### Key Takeaway

- No single font works for all dyslexic users.
- Avoid treating Comic Sans or Open Dyslexic as a universal solution.

## Readability Land – Making Text Pleasant to Read

### Quick Wins for Immediate Improvement

1. Make text large enough.
2. Avoid justified text.
3. Avoid excessive underlining.
4. Avoid all caps for body text.
5. Use regular weight for body copy.
6. Use italics sparingly.
7. Avoid negative letter spacing (tracking).

### Myth 4: High Contrast Is Optional

#### WCAG (Web Content Accessibility Guidelines)

- Contrast ratio: Measures luminosity difference between foreground and background.

#### Minimum Requirements (WCAG 2.2)

- Normal text:
  - 4.5:1 (AA minimum)
  - 7:1 (AAA recommended for fluent reading)
- Large text (≥ 24px regular or ≥ 19px bold):
  - 3:1 minimum

#### Practical Recommendations

- Aim for 7:1 for body text.
- Use tools:
  - Figma built-in contrast checker
  - Stark plugin
  - Browser extensions (e.g., Fontanello)

#### Key Takeaway

- Contrast is non-negotiable.
- You cannot “eyeball” contrast — test it.

### Myth 5: Text Must Be At Least 16px

#### What WCAG Actually Requires

- Text must be resizable up to 200%:
  - Without loss of content
  - Without loss of functionality

#### Important Distinctions

- No strict minimum font size in WCAG.
- Practical recommendation:
  - Body text: At least 16px (1rem)
  - Avoid going below 12px for functional text.

#### X-Height Matters

- Two fonts at same font size can look different.
- Larger x-height = better perceived readability at small sizes.

#### Responsive Considerations

- On desktop:
  - Larger text is often appropriate (24–26px body text).
- On mobile:
  - Slightly smaller may work due to closer viewing distance.

#### Technical Advice

- Use relative units (rem) in CSS.
- Avoid fixed pixel values.

### Myth 6: Space Text Very Loosely

#### Line Length

- Ideal range:
  - 60–80 characters per line.
- Long lines increase eye fatigue.
- Use max-width to control measure.

#### Line Height (Leading)

- For body text:
  - 1.4–1.5 is typically optimal.
- Narrow columns:
  - Slightly reduce line height.
- Wider columns:
  - Slightly increase line height.

#### WCAG Text Spacing Success Criterion

Required user override support:

- Line height: ≥ 1.5× font size
- Letter spacing: ≥ 0.12× font size
- Word spacing: ≥ 0.16× font size

Important Clarification:

- Designers are NOT required to set these values by default.
- Requirement: Layout must not break when users apply these overrides.

#### Key Insight

- Accessibility is about robustness.
- One design never fits all.
- Users must be able to adjust text spacing if needed.

## Choosing Fonts in Practice

### Font Selection Checklist

1. Define use case:
   - Body text?
   - Headlines?
   - UI labels?
2. Consider brand tone:
   - Traditional → Serif
   - Neutral/modern → Sans-serif
3. Evaluate technical features:
   - Open apertures
   - Stroke contrast
   - Letter differentiation
4. Test in real browser:
   - Figma renders fonts more smoothly than browsers.
5. Consider licensing.

## Designing for Dyslexia – Separate Mode?

- Separate “dyslexia mode” is often unnecessary.
- Users can override fonts in browsers.
- Better strategy:
  - Choose a highly readable base font.
  - Ensure good spacing and contrast.

## Non-Negotiable Accessibility Guidelines

- Meet WCAG contrast ratios.
- Ensure text resizes to 200%.
- Avoid images of text.
- Use real text elements (semantic HTML).
- Make layout resilient to spacing overrides.

### Important Distinction

- WCAG = minimum compliance.
- Accessible design = going beyond minimum.

## Why Do Many Apps Fail Contrast?

- Some rely on alternative accessibility settings.
- Designers prioritize aesthetics over readability.
- Dual versions increase complexity.

### Core Argument for Stakeholders

- Accessibility increases robustness.
- Improves usability for everyone:
  - Bright sunlight
  - Low battery
  - Poor display quality
- Expands audience reach.

## Final Principle

- Accessible typography is not separate from good typography.
- Key ingredients:
  - Font choice
  - Contrast
  - Size
  - Spacing

Accessible design is not about making things ugly — it’s about making them more robust, inclusive, and readable for more people.
