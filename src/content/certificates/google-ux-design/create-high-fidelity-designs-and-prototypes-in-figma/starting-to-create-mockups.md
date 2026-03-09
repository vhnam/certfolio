---
title: "Starting to create mockups"
description: ""
---

## Contents (TOCS)

```md
- Introduction to Course 5
- Begin to create a mockup
- Use typography in mockups
- Use color in mockups
- Use iconography in mockups
- Understand page layouts - grid and containment
- Understand page layouts - negative space
- Module 1 review
```

## Mockups and Visual Design Foundations

### Overview

Mockups represent detailed, **high-fidelity visual designs** that use **real content**, flexible layouts, and accessibility-aligned visual elements.  
They serve as both a **design reference** and a **communication tool** for design, engineering, and product teams — helping everyone align on the product’s final appearance, functionality, and purpose.

## Foundational Elements of Visual Design

### Key Components

1. **Typography** – Creates hierarchy, readability, and style.
2. **Color** – Communicates meaning, emotion, and strengthens brand identity.
3. **Iconography** – Uses recognizable symbols to enhance usability and navigation.

## Typography

### Classification and Selection

1. **Type Classification:** Serif, Sans-serif, etc.
2. **Typeface:** The family of letters (e.g., Times New Roman).
3. **Font:** The specific style or weight (e.g., Times New Roman Bold, 18 pt).

### Hierarchy and Legibility

- **Typographic hierarchy** structures content for easy scanning and comprehension.
- **Legibility** ensures readability for all users, especially those with low vision.
  - Example: Use bold, high-contrast text for checkout or warning messages.

### Adding Product Copy to Mockups

#### Placeholder Text

- Useful during early wireframing.
- Focuses on layout before real copy is available.
- Downsides: Can mislead stakeholders or distort layout later.

#### Real Copy

- Creates a more authentic, content-driven design.
- Encourages earlier feedback on tone, clarity, and structure.
- Downsides: Requires regular updating and maintenance.

**Best Practice:**  
Use **placeholder text** in low-fidelity wireframes and **real copy** in high-fidelity mockups.  
A **hybrid approach** works well — e.g., real navigation labels and placeholder body text.

## Color

### Importance in UX Design

Color impacts both **usability** and **emotion**. It can:

- Convey moods (e.g., red = urgency, blue = calmness)
- Indicate interactive states
- Reinforce brand recognition
- Enhance accessibility

### Color for Emphasis and Branding

- Follow the **60–30–10 rule:**
  - 60% neutral, 30% secondary, 10% accent (e.g., CTA color).
- Consistent brand colors ensure recognition (e.g., Google’s blue, red, yellow, green).

### Color and Accessibility

- Ensure **high contrast ratios** (min 4.5:1 for text per WCAG).
- Test color schemes across devices and lighting conditions.
- Use **symbols or textures** in addition to color for accessibility.

**Tools for Testing:**

- [Stark Plugin for Figma](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Color Safe](http://colorsafe.co/) for accessible palette generation.

**Additional Tips:**

- Avoid relying solely on color to convey meaning.
- Provide dark mode or high-contrast options for light-sensitive users.
- Test designs for **color blindness**, **low contrast**, and **light sensitivity**.

## Iconography

### Overview

Icons are **visual cues** that simplify navigation and reinforce meaning.

### Universal vs. Cultural Icons

- **Universal:** Understood globally (e.g., house = home).
- **Cultural:** May vary across audiences (e.g., sports icons).

### Accessibility and Best Practices

- Pair icons with **text labels** for screen readers.
- Maintain **consistent color, size, and style** to align with brand tone.
- Use **clear, universally recognizable symbols**.

## Additional Visual Design Elements

- **Lines:** Divide or organize content.
- **Size:** Affects usability and emphasis; ensure accessible touch targets.
- **Shape:** Suggests meaning (circle = add, X = close).
- **Images:** Enhance storytelling and emotional connection.
  - Always include **alt text** for accessibility.

## Images in UX Design

- Communicate ideas quickly without text.
- Build emotional engagement and brand personality.
- Use purposefully — avoid decorative or irrelevant visuals.

**Resources:**

- [Blush](https://blush.design/) – Custom illustrations.
- [Unsplash](https://unsplash.com/) – High-resolution stock photos.

## Layout and Structure

### Layouts

Organize text, icons, and visuals logically for easy scanning and comprehension.  
Highlight key elements through layout flow and proportion.

### Using Grids

- **Purpose:** Ensure consistent spacing and alignment.
- **Grid Types:**
  - Web: ~12 columns
  - Tablets: 4–8 columns
  - Smartwatches: 1 column
- **Benefits:** Improves consistency, collaboration, and reusability across screen sizes.

### Containment Techniques

Use visual boundaries to structure layouts:

- **Dividers:** Separate unrelated sections.
- **Borders:** Define clickable or grouped areas.
- **Fill:** Draw attention using background color.
- **Shadow:** Add depth and hierarchy.

## Spacing (White Space)

### Definition

White space, or **negative space**, separates elements to improve readability and focus.

### Benefits

1. **Emphasis:** Draws attention to CTAs or key content.
2. **Grouping:** Clarifies relationships between elements.
3. **Readability:** Prevents clutter and interaction errors.

### How to Use

- **Line spacing:** Enhance readability.
- **Padding:** Add inner spacing to components.
- **Margins:** Add outer spacing for structure and alignment.

**Key Principle:** White space improves comprehension and usability — it’s not wasted space.

## Common Mobile Design Patterns

### Key Screens

1. **Home Screen:** Simple and intuitive; highlights core features.
2. **Onboarding Screens:** Introduce features; concise copy and engaging visuals reduce drop-off.
3. **Profile Screen:** Organizes personal details and settings.
4. **Checkout Screen:** Simplifies payment with clear visual cues and trust signals.

### Design Tip

Use familiar UI conventions like **navigation drawers**, **FABs**, and **splash screens** to create a seamless user experience.

## Designing Accessible Webpages

### Overview

Designing with accessibility ensures all users — including those with disabilities — can interact with your website effectively.  
Follow the **Web Content Accessibility Guidelines (WCAG)** to meet inclusive design standards.

## Accessible Markup Techniques

### 1. Navigation Order (Annotations)

- Defines how users **tab** through elements using a keyboard or screen reader.
- **Annotations:** Add numbered circles to show focus order.
- Default navigation typically moves **top-left to bottom-right**.
- Annotate any elements that fall **outside this natural order** or require **custom focus behavior**.

**Why It Matters:**  
Screen readers and keyboards rely on this structure to provide logical, predictable navigation.

### 2. Hierarchical Headings

- Use **HTML heading tags (H1–H6)** to communicate structure to assistive technology.
- **H1:** Main title
- **H2:** Section title
- **H3:** Subsection title
- Annotate heading levels in mockups to help engineers implement correct markup.

**Benefit:**  
Improves screen reader navigation and helps users orient themselves within content.

### 3. Accessibility Labels

- Add **textual descriptions** for interactive elements (buttons, checkboxes, menus).
- Labels should describe both **purpose** and **type** of control (e.g., “Submit button”).
- Group related elements (like checkbox sets) for easier comprehension.

**Example:**  
Gmail’s “Compose” floating button → Label: “Compose,” Role: “Button.”

**Design Tip:**  
Annotate every label and semantic role so developers can apply **ARIA attributes** effectively.

## Accessible Color and Contrast

### Luminosity Contrast Ratio

- Measures visibility difference between text and background.
- Use **light backgrounds with dark text** or vice versa.
- Maintain at least **4.5:1** contrast for normal text (WCAG standard).

### Color Combinations

- Avoid problematic color pairs (e.g., red–green, gray–white).
- Reference [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) for compliance.

### For Color Vision Deficiencies

- Use **icons, text, or patterns** alongside color.
- Do not rely solely on hue differences to communicate information.

**Tools:**

- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Stark Plugin](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker)

## Making Responsive Websites Accessible

### Responsive Design Accessibility

- Websites should resize dynamically as users zoom in or adjust font sizes.
- Elements must **reflow** instead of overlapping or breaking layout.

**Best Practices:**

1. Design flexible grids and fluid layouts.
2. Test zoom levels (200–400%).
3. Provide mockups for both **default** and **enlarged** views.
4. Communicate responsive behavior clearly to developers.

**Goal:**  
Ensure that users who rely on magnification tools can navigate and read content comfortably.

## Accessibility Resources

- **Google Material Design:** [Designing with Accessibility in Mind](https://material.io/design) — hierarchy, color, layout guidance.
- **The A11Y Project:** Community resources for digital accessibility.
- **WCAG:** [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- **Medium:** [Annotating Your Design Work](https://medium.com)
- **WebAIM:** [Introduction to ARIA](https://webaim.org/techniques/aria/)

## Key Takeaways

- Accessibility must be **planned during design**, not added afterward.
- Use **annotations**, **heading hierarchy**, **labels**, and **contrast testing** for inclusivity.
- Ensure responsiveness works with zoom and scaling.
- Collaborate with developers to implement WCAG and ARIA standards.
- Accessible design benefits **all users** — improving usability, clarity, and satisfaction.

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design: Applying Color to UI](https://m2.material.io/design/color/applying-color-to-ui.html)
- [NNGroup: Legibility, Readability, and Comprehension](https://www.nngroup.com/articles/legibility-readability-comprehension/)
- [UX Planet: 7 Basic Rules for Button Design](https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4)
- [Smashing Magazine: Layout Grids](https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/)
- [Toptal: The Role of Color in UX](https://www.toptal.com/designers/ux/color-in-ux)
- [Intechnic: Icon Usability Guidelines](https://www.intechnic.com/blog/icon-usability-best-ux-tips-and-design-guidelines/)
- [Digital.gov: Accessibility Guides](https://digital.gov/guides/)
- [The A11Y Project](https://www.a11yproject.com/)
