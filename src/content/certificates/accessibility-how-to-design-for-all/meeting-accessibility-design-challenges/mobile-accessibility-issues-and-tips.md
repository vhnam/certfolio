---
title: Mobile Accessibility Issues and Tips
---

## Core Principles (Mobile = Web Foundations Applied)

Mobile accessibility follows the same core principles as web accessibility:

- Proper **labeling** of UI elements
- Sufficient **color contrast**
- Clear **headings and structure**
- Logical **focus management**
- Accessible **forms and controls**
- Screen reader compatibility

You are not learning a new discipline — you are applying WCAG principles through iOS and Android accessibility APIs.

Mobile is also legally governed (e.g., 21st Century Communications and Video Accessibility Act in the U.S.), making compliance critical.

## The 8 Key Mobile Accessibility Categories

1. **Label UI elements**
2. **Group content to reduce discovery overload**
3. **Create natural groupings for complex content**
4. **Provide easy-to-follow navigation**
5. **Make touch targets large (44–48px minimum)**
6. **Ensure adequate color contrast**
7. **Use cues other than color**
8. **Provide accessible media controls (pause, captions, alt formats)**

These apply across both native and hybrid apps.

## Screen Reader Behavior (VoiceOver & TalkBack)

All mobile UI must behave properly with screen readers:

- Buttons must read clearly
- Text fields must have labels
- Headings must be structured
- Images need alt text
- Tables require proper headers
- Forms must associate labels programmatically
- Query results must be announced (even if focus does not move)

If dynamic content changes, assistive tech must be informed.

## Navigation & Structure Requirements

### Text Resizing

- Must function at **200% zoom minimum**
- Do not disable zoom
- Large fonts must not break layout

### Clear Titles & Tabs

- Tabs must announce:
  - Role
  - Current state
  - Position (e.g., “Tab 1 of 3”)

### Menus (Especially Hamburger Menus)

Common failures:

- Missing accessibility label
- No visible title
- Braille readers detect “link” but cannot activate

Fixes:

- Add programmatic labels
- Consider visible text like “Menu” or “Site Map”
- Ensure correct focus return when dismissed

## Touch Targets (44–48px Minimum)

Minimum sizing:

- 44px (Apple)
- 48px (Google recommended)

For retina displays:

- 88–96px true size

Small icons and tightly spaced controls create barriers for:

- Users with motor impairments
- Users with tremors
- Users using adaptive pointing devices

Design for “fat finger friendly” interactions.

## Avoid Infinite Scrolling

Infinite scroll is problematic for:

- Keyboard users
- Screen reader users
- Users needing orientation

Replace with:

- “Load more results” button
- Optional auto-load after user confirmation

## Custom Controls Must Follow Name–Role–Value

Every UI element must expose via accessibility API:

1. **Name** – What is it?
2. **Role** – What kind of control?
3. **Value/State** – What is its current condition?
4. **Notifications** – Does it announce changes?
5. **Input Method Support** – Works with touch, keyboard, screen reader?
6. **Focus Management** – Moves into modals and returns properly?

## Specific Component Requirements

### Must Be Accessible:

- Accordions (announce expanded/collapsed)
- Autocomplete suggestions (must be announced)
- Carousels (pause/stop required)
- Rating controls (announce value)
- Sortable tables (announce new sort state)
- Toggle buttons (announce state clearly)
- Progress bars (descriptive labels)
- Sliders (visible + programmatic label)

## Forms: Visible Boundaries Matter

Modern minimal form design often fails accessibility.

Problems:

- No visible outlines
- No visible labels
- Low contrast fields

Impact:

- Hard for mobility-impaired users
- Hard for cognitive disabilities
- Difficult with adaptive devices

Solution:

- Clearly defined field boundaries
- Visible labels
- Large click targets
- Strong contrast

## Supporting Large Fonts

Issues:

- Font scaling inconsistent across apps
- Developer limitations on iOS
- Android support improves in v7+

Solutions:

- Support dynamic font sizing
- Respect system font scaling
- Use zoom/magnifier features
- Meet WCAG 1.4.4 Resize Text

## Keyboard & Bluetooth Accessibility

Mobile devices may not have physical keyboards, but must support:

- Bluetooth keyboard navigation
- Platform conventions
- Switch Access / Switch Control
- Braille displays

Challenges:

- Inconsistent adaptive keyboard handling
- Sticky keys / repeat control issues

Follow:

- WCAG 2.1.1 Keyboard
- Section 508 keyboard equivalents

## No-Touch Access (Switch Control)

Apps must support:

- Android Switch Access
- iOS Switch Control
- Voice Access
- External switches
- Braille displays

All switch controls must have spoken text labels.

## Notifications & Dynamic Content

Avoid silent state changes.

Must:

- Announce success/failure
- Announce value changes
- Warn before session timeout
- Save incomplete data
- Focus modals properly
- Mark dialogs as modal for assistive tech

## Platform Accessibility Features

### Android

- TalkBack
- Switch Access
- BrailleBack
- Select to Speak
- Magnification
- Large Display Size
- High Contrast Text
- Color Correction
- Accessibility Scanner
- Accessibility Test Framework (Espresso/Robolectric)

### iOS

- VoiceOver
- Zoom & Magnifier
- Large & Bold Text
- Button Shapes
- On/Off Labels
- Speech Screen
- Guided Access
- Color Filters
- Reduce White Point
- Increase Contrast
- LED Flash Alerts
- Subtitles & Captions
- Mono Audio

## Testing Strategy

Test with:

- TalkBack (Android)
- VoiceOver (iOS)
- Switch Access
- Keyboard navigation
- Android Accessibility Scanner
- Automated accessibility tests
- Real users when possible

If it works with TalkBack, it generally works with BrailleBack and Select to Speak.

## Design Mindset Shift

Mobile accessibility is not:

- A final QA step
- A screen reader-only issue
- A checklist exercise

It is:

- Structural clarity
- Reduced cognitive load
- Clear grouping
- Predictable navigation
- Explicit feedback
- Inclusive interaction models

Design every screen assuming:

- No touch
- No vision
- No hearing
- Reduced precision
- Cognitive overload

If it still works — you’ve likely built something truly accessible.

## References

- Apple, [Accessibility Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Introduction/Introduction.html)
- Google, [Build accessible apps](https://developer.android.com/guide/topics/ui/accessibility/index.html)
- W3C, [Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile](https://www.w3.org/TR/mobile-accessibility-mapping/)
- Google, [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps.html)
- Automattic.Design, [Improving Accessibility with Dynamic Font Sizes](https://a8cdesignflow.wordpress.com/2017/07/31/improving-accessibility-with-dynamic-font-sizes/)
- Rebecca Franks, [Android Accessibility – Making your app Switch Access Compatible](https://riggaroo.dev/android-accessibility-switch-access/)
- Tecla, [What is Switch Control Mode in Apple's iOS?](https://gettecla.com/blogs/news/15538916-what-is-switch-control-mode-in-apples-ios)
- Google, [Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor)
