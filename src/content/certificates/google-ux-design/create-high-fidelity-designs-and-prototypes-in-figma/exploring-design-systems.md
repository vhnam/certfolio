---
title: "Exploring design systems"
description: ""
---

## Contents (TOCS)

```md
- Understand design systems
- Create a sticker sheet
- Use design systems
- Module 3 review
```

## What is a Design System

### Definitions

- **Design system**: A collection of reusable elements and guidelines that help teams design and develop products following predefined standards.
- **Brand guidelines**: Rules on logo, color usage, and typography.
- **Components**: UI parts like buttons, icons, and forms.
- **Color palettes**: Defines brand and functional colors.
- **Visual elements**: Include color, iconography, layout, copy, animation, elevation, typography, and illustration.

### Purpose

- Ensures consistency across branding, components, and processes.
- Centralizes various design and process guidelines in one place.
- Simplifies maintaining consistency across products and teams.
- Improves scalability and communication between designers and developers.

## Design System Structure

### Core Sections

1. **Visual Styles**
   - Define core visual design elements such as typography, color palettes, and iconography.
   - Express the brand consistently and improve the user experience.
   - Example: Google includes hex codes for blue, red, yellow, and green in its design system to ensure consistent brand colors.
2. **Guidelines**
   - Include design principles, editorial guidelines, and implementation rules.
   - Provide clear rules for applying styles and components consistently across products.
3. **UI Components**
   - Reusable interface elements and features shared across a product or brand (e.g., buttons, dialogs, gestures).
   - Form the foundation for consistent visual and functional design.
4. **Supporting Code**
   - Provides ready-to-use code snippets or component libraries for developers.
   - Ensures that visual designs translate correctly into working products.

### UI Pattern Hierarchy

- **Elements**: Smallest visual units like text, color, and icons.
- **Components**: Combinations of elements (e.g., button, form field).
- **Modules**: Groups of components (e.g., header, navigation bar).
- **Templates**: Collections of modules forming complete pages.

## Benefits of Design Systems

### Consistency

- Enforces uniformity in visual and interactive elements.
- Makes it easier for designers to follow standards and for users to recognize interface patterns.
- Example: Dog walker app defines buttons as orange (#FA7B17) with rounded edges and SF Pro Display font.

### Brand Identity

- Reinforces a company’s brand across all digital products.
- Example: Google Material uses four signature colors (blue, red, yellow, green), Google Sans font, and rounded corners across all Google apps.

### Scalability

- Maintains performance and visual quality as teams and products grow.
- Simplifies onboarding new designers and speeds up design iteration.

### Efficiency and Cost Savings

- Streamlines workflows with predefined standards and reusable components.
- Reduces repetitive design decisions, saving both time and resources.

### Collaboration

- Aligns designers and developers through shared standards and reusable component code.
- Reduces friction during design handoffs and ensures smoother implementation.

## Working with Design Systems

### By Company Size

- **Large companies**: Typically have established design systems (e.g., Google Material). Designers follow existing standards.
- **Small companies/startups**: Designers may help build a new system — a challenge and valuable learning opportunity.

### Contribution Examples

- Updating colors, typography, components, or templates in the style guide.
- Documenting usage guidelines and accessibility standards.

## Design System Libraries

### Overview

- Design system libraries: Collections of design resources that guide designers and developers in building consistent, scalable products.
- Go beyond simple style guides by including principles, guidelines, and ready-to-use components.
- Enable both UX designers and developers to work cohesively.

### Google Material Design

#### Overview

- **Material Design**: Google’s public design system (material.io).
- **Google Material**: Internal version used across Google’s product teams.
- Provides unified design principles, components, and implementation guidance across Android, Web, and Flutter.

#### Educational Value

- Helps new UX designers learn UI principles, accessibility, and design best practices.
- Google made Material Design public to promote learning, transparency, and design excellence.

#### Navigation and Structure

**Homepage Sections**:

- Hero area with “Get Started” button.
- News, launches, and update highlights.

**Navigation Rail (Left Sidebar)**:

- Home
- Get Started
- Develop
- Foundations
- Styles
- Components
- Blog

**Key Sections**:

- **Develop**: Implementation docs for Android, Flutter, and Web with tutorials and code examples.
- **Foundations**: Accessibility, adaptive design, tokens, layout, gestures, text input, and glossary.
- **Styles**: Visual design elements — color, typography, icons, motion, and elevation.
- **Components**: Categorized UI building blocks (Action, Navigation, Text Input, etc.) with documentation and tutorials.
- **Blog**: Updates, tutorials, accessibility tips, and design stories.

#### Material Figma Design Kit

- Found under _Get Started → Design_ section.
- Includes ready-to-use Material components in Figma (sticker sheets).
- Accessible via “Open in Figma.”
- Speeds up prototyping and ensures consistency across platforms.

### Shopify Polaris

#### Overview

- **Polaris**: Shopify’s public design system for building consistent, seller-friendly e-commerce experiences.
- Provides guidelines for design, development, and UX under _polaris.shopify.com_.

#### Homepage Structure

- **Guides**: Advice on internationalization and app integration.
- **Core Sections**:
  - Content: Voice, tone, and writing for UI text.
  - Design: Visual elements (color, typography, icons).
  - Components: Reusable UI elements.
  - Experiences: Layouts and interaction patterns.
- **Resources**: Figma and Sketch UI kits for integration into projects.
- **What’s New**: Latest updates and improvements.

#### Foundations

- Accessibility: Inclusive design practices.
- Internationalization: Localization support.
- Information Architecture: Organizing content for optimal navigation.
- Mobile: Guidelines for responsive design.

#### Content Guidelines

- Voice and tone consistency.
- Grammar and naming conventions.
- Action-oriented writing for usability.

#### Design Section

- Focuses on spacing, interaction states, and layout.
- Mirrors Material Design’s structure but tailored for Shopify’s e-commerce brand.

## Popular Design Systems

- [Google Material Design](https://material.io/resources)
- [Shopify Polaris](https://polaris.shopify.com/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/)
- [Microsoft Fluent Design System](https://www.microsoft.com/design/fluent/#/)
- [Airbnb Design System](https://design.google/library/airbnb-invites-you-in)
- [U.S. Web Design System](https://designsystem.digital.gov/)

## Sticker Sheets (Design Kits)

### Definitions

- **Sticker sheets / Design kits**: Collections of reusable design elements and components forming part of a design system.
- **Purpose**: Maintain consistency, simplify collaboration, and reduce rework.

### Structure

- Contain commonly used **elements** (colors, icons, nav bars) and **components** (buttons, dropdowns).
- Serve as a **visual library** that can be reused across projects.

### In Figma

- **Component**: Main version of a reusable design object.
- **Instance**: Copy of the component that updates automatically when the original changes.
- Updating the base component propagates to all instances.

### How to Create a Sticker Sheet

1. Create a blank frame.
2. Add frequently used UI elements (buttons, chips, dropdowns, profile cards).
3. Show visual states (active, hover, pressed, disabled).

Example: White version (inactive) vs. orange version (active) of a reviews icon.

### Benefits

- Promotes visual and behavioral consistency.
- Enables faster collaboration.
- Simplifies onboarding and iteration.
- Prevents inconsistencies (e.g., corner shapes, spacing).

## Using Components from Existing Design Systems in Mockups

### Overview

- Purpose: Use **elements and components** from public systems like Material or Fluent to build mockups efficiently.
- Typical in UX roles — ensures speed, scalability, and brand alignment.

### Incorporating Design Systems

- Reuse components and customize typography, color, or spacing.
- Combine custom elements with existing system components for flexibility.

## Material Design System in Figma

### Getting Started

1. Open the **Material Design UI Kit** in Figma.
2. Navigate to the **Material Theme** page — includes styles for typography, color, elevation, and states.

### Key Concepts

#### Elevation

- Visual depth and hierarchy in UI layers.
- Example:
  - Screen background: elevation 0
  - Buttons: elevation 4
  - Alerts: higher elevation for prominence

#### States

- Represent interactive feedback (e.g., pressed, hover, disabled).
- **Ripple overlay**: Material’s signature feedback effect for touch interactions.

## Best Practices and Takeaways

- Design systems save time and ensure cohesive, user-friendly interfaces.
- Explore multiple systems (Material, Fluent, Human Interface, Polaris).
- Customize responsibly — maintain structure, adjust for brand.
- Practice improves both speed and polish.

## Get Inspiration from Design Systems

### Importance of Visual Consistency

- Design systems create a recognizable and cohesive brand identity.
- Example: Everyday consumer products use consistent colors, fonts, and icons for brand recall.

### Example: Artniche (Arts Magazine)

- Applies consistent typography, color palette, and button design across app and website for visual harmony.

### Principle

- The number of elements depends on the product’s goals.
- Goal: Strengthen brand consistency, streamline collaboration, and improve design quality.

## Real-World Design System Examples

- **Google Material Design**
- **Shopify Polaris**
- **Microsoft Fluent**
- **Salesforce Lightning**
- **Atlassian Design System**
- **Uber Base Web**

### Accessing Design Systems in Figma

1. Visit **Figma Community**.
2. Search for brand design systems.
3. Click **Duplicate** to copy into your drafts.
4. Reuse or customize as needed.

## Showcasing a Design System in Your Portfolio

### Example

- **Google UX Designer Dane** showcased his app “Pocket,” highlighting typography, iconography, and buttons.
- Demonstrates understanding of visual systems and design rationale.

### Best Practices

- Document fonts, colors, icons, and component choices.
- Even minimal systems show process and consistency.
- Adds professional depth to your portfolio.

## Designing for Accessibility — Insights from Shabi (Interaction Designer at Google)

### Role and Focus

- Shabi works in Google’s **Design Systems** team, focusing on accessibility in components.
- Ensures interactive elements like buttons and inputs are usable by all users.

### Assistive Technologies

- **Assistive technology (AT)**: Helps users with disabilities interact with interfaces.
- Example: Screen readers announce element roles (“Cancel button”).

### Inclusive Design Approach

- Engage with people who have disabilities for authentic feedback.
- Visit local communities and accessibility organizations to understand real needs.
- Design _with_ users, not just _for_ them.

### Challenges

- Accessibility is often added late instead of being designed upfront.
- Inclusive design should be integrated from the beginning.

### Core Principle

- Designing inclusively benefits all users, improving overall usability and equity.
- Accessibility-first design leads to better, more human-centered products.

## References

- Figma, [Components, styles, and shared library best practices](https://www.figma.com/best-practices/components-styles-and-shared-libraries/when-to-start-creating-components/)
- Medium, [10 tips on using components in Figma](https://medium.com/design-with-figma/10-tips-on-using-components-in-figma-c7db9c5e7fe1)
- [Thrive from Lisa](https://www.lisasuefischer.com/archive#/thrive/)
- [10 Best Design Systems and How to Learn (and Steal) From Them](https://designerup.co/blog/10-best-design-systems-and-how-to-learn-and-steal-from-them/)
