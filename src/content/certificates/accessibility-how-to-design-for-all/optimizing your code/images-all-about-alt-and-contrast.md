---
title: "Images: All about Alt + Contrast"
---

## Images and Alternative Text

### Purpose of Alt Text

- Alt text: Conveys the content and function of an image for users who cannot see it.
- Goal: Provide meaningful information, not decorative or SEO-driven filler.
- Principle: Describe the information, not the image itself.

### Writing Effective Alt Text

- Meaningful: Communicates what the image contributes to the page.
- Succinct: Short and direct, avoiding fluffy or marketing language. Max 250 characters.
- Non-redundant: Do not repeat captions or surrounding text.
- Plain language: Avoid jargon, brand terms, or invented product names.
- No prefixes: Do not include phrases like “image of” or “graphic of”.

### Common Mistakes

- Keyword stuffing: Harms accessibility and SEO.
- Over-description: Adds audio clutter for screen reader users.
- Missing key information: Such as prices, status, or purpose.
- Duplicate content: Alt text identical to visible captions.

## Types of Images

### Image Classification

- Active images:
  - Support an action or task.
  - Alt text should be verb-oriented and describe the action.
- Static images:
  - Provide context or support the narrative.
  - Alt text should continue the story or explain relevance.
- Decorative images:
  - Do not convey meaningful information.
  - Use null alt (`alt=""`) so screen readers skip them.

### Grouping Images

- Group related icons, images, and text into a single accessible unit.
- Benefit: Reduces audio clutter and navigation effort.
- Use when:
  - Icons accompany text.
  - Multiple elements represent one action or idea.

## Complex Images

### Definition

- Complex images: Charts, graphs, infographics, diagrams, maps, or images with dense data or multiple meanings.
- Limitation: Short alt text alone is insufficient.

### Required Approach for Complex Images

#### Short Description

- Use `<img>` with `alt`:
  - Provide a concise summary of what the image represents.
  - Focus on the key message or insight.

#### Long Description Options

1. Inline description:
   - Place a full textual explanation immediately below the image.
2. Expandable content:
   - Provide a button that reveals a collapsed region containing the long description.
3. Separate page:
   - Provide a link below the image to a page with the full description.
4. Modal dialog:
   - Provide a button that opens a modal containing the long description.
5. Off-screen text:
   - Include a visually hidden long description for screen reader users only.

#### Semantic Mapping

- `aria-describedby`:
  - Use to associate the image with a long description that exists elsewhere on the page.
  - Useful when the description is not immediately before or after the image.
- `longdesc` attribute:
  - Can be used, but browser support is inconsistent.
  - Prefer HTML5 patterns such as `figure` and `figcaption`.

## Complex Data and Visualizations

### Charts, Graphs, and Tables

- Core rule: Always provide an alternative format.
- Recommended alternatives:
  - HTML tables containing the same data.
  - Text summaries explaining key comparisons or trends.
- Best practice:
  - Present the key takeaway first, then provide full data access.

## Images of Text

### Definition

- Images of text: Images that contain readable text rendered as pixels.
- Accessibility impact: Generally discouraged because they are not flexible or perceivable for all users.

### Common Issues

- Missing `alt` attributes.
- Pixelation when resized or zoomed.
- Poor readability for low-vision users.
- Text is not searchable or adaptable.

### Guidelines for Images of Text

- Prefer real HTML text styled with CSS.
- If an image of text is used:
  - The `alt` value must match the visible text exactly.
- Use images of text only when:
  - A specific visual style cannot be achieved using CSS.
- Provide equivalent HTML text:
  - Place the same text content below the image using HTML and CSS.

## Color, Contrast, and Motion

### Contrast

- High contrast: Dark on light or light on dark.
- Minimum contrast:
  - WCAG 2.0 AA requires **4.5:1** for normal text.
  - **3:1** is acceptable for large text.
- Applicability:
  - Text over images.
  - Buttons and calls to action.
  - Icons, SVGs, and UI controls.
- Images:
  - Ensure images (especially those containing text) meet minimum contrast against their background.

### Best Practices

- Bake contrast into the design from the beginning, not as a fix later.
- Use contrast checkers during design and development.
- Prefer high-contrast color pairs to improve readability for:
  - Low-vision users.
  - Users with color vision deficiencies.
  - Users in poor lighting or low-quality displays.
- Quick heuristic:
  - Print the design in black and white to reveal weak contrast areas.

### Colorblindness

- Do not rely on color alone to convey meaning.
- Avoid problematic combinations:
  - Red and green.
- Add supporting cues:
  - Icons, labels, or patterns.

### Motion and Cognitive Load

- Excessive or fast motion can:
  - Distract users.
  - Cause motion sickness or cognitive overload.
- Recommendation:
  - Reduce unnecessary animation.
  - Avoid aggressive or auto-playing background visuals.

## SVG and Text in Graphics

### SVG Accessibility

- SVGs follow the same rules as images.
- Requirements:
  - Correct semantic roles (`img`) and ARIA where needed.
  - Keyboard accessibility for interactive SVGs.
  - Adequate contrast, including support for high-contrast modes.
- Avoid:
  - Embedding essential text inside SVGs.
  - Placing SVGs inside iframes.

## Consistency and Inclusive Design

### Consistency Matters

- Accessibility must be applied consistently across the entire site.
- Partial accessibility creates barriers and user frustration.

### Accessibility as Usability

- Accessibility improvements often uncover usability issues.
- Clear language, reduced clutter, and simpler visuals benefit everyone.

### Key Takeaway

- Meaning comes first: Accessibility prioritizes clear, perceivable information.
- Complex images require layered solutions:
  - Short alt text plus accessible long descriptions.
- Images of text should be avoided whenever possible in favor of real HTML text.
- Inclusive design improves the experience for all users.

## References

- The DIAGRAM Center, [How to Describe Complex Images for Accessibility](https://www.youtube.com/watch?v=oSdz6KZpLjs)
- The Pennsylvania State University, [Charts & Accessibility](http://accessibility.psu.edu/images/charts/)
- WebAIM, [Alternative Text](https://webaim.org/techniques/alttext/)
- Digital Accessibility​ Services, [Technique: Text and images of text](https://accessibility.huit.harvard.edu/technique-use-real-text)
