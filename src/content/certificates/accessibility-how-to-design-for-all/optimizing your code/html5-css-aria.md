---
title: "HTML5, CSS + ARIA"
---

- **Accessibility is fundamentally good coding**
  - Clean HTML5 structure, well-organized CSS, and careful ARIA usage
  - Responsive design naturally supports accessibility

- **Use native HTML5 semantics first**
  - Elements like `header`, `nav`, `main`, and `footer` provide built-in meaning
  - These often remove the need for ARIA when used correctly

- **ARIA is not required—but can be powerful**
  - ARIA enhances semantics when native HTML is insufficient
  - Misused ARIA can make interfaces **less accessible**
  - Use ARIA **strategically**, not everywhere

- **ARIA document landmark roles enable fast navigation**:
  - **`banner`** – site-oriented content (logo, site name, page title)
  - **`navigation`** – areas containing navigation links
  - **`main`** – the central content of the page
  - **`search`** – site search functionality
  - **`article`** – stand-alone content that makes sense out of context from the rest of the document. Examples include a blog post, a comment on a blog, or a forum post. A blog post may be identified as an `article`, and individual comments within that post may also be marked up as `article`.
  - **`complementary`** – supporting content related to the main content
  - **`contentinfo`** – footer information such as copyright and footnotes

- Landmarks help screen reader users **understand page structure** and **jump directly to key sections**.

- **ARIA is not a replacement for HTML**
  - Prefer native elements over ARIA roles whenever possible
  - Example: use `<nav>` instead of `role="navigation"`

- **Hiding content requires care**
  - Not read by screen readers:
    - `display: none`
    - `visibility: hidden`
    - HTML `hidden` attribute
    - `aria-hidden="true"`

  - **Best practice**:
    - Use a **CSS visually-hidden class** for content that should remain available to screen readers
    - This approach works reliably across browsers and assistive technologies

| Method                    | Action on View                                                              | Action on Screen Readers | Compatibility    |
| ------------------------- | --------------------------------------------------------------------------- | ------------------------ | ---------------- |
| CSS: `visibility: hidden` | Hides element from view but original space remains occupied                 | Not readable             | Works everywhere |
| CSS: `display: none`      | Hides element and removes it from layout flow                               | Not readable             | Works everywhere |
| HTML5 `hidden` attribute  | Same behavior as `display: none`                                            | Not readable             | IE 11+           |
| `aria-hidden="true"`      | Content is visible but hidden from assistive technologies                   | Not readable             | IE 11+           |
| CSS `.visuallyHidden`     | Hides element visually while keeping it available to assistive technologies | Readable                 | Works everywhere |

- **Cross-browser reliability matters**
  - Choose techniques that behave consistently across browsers and screen readers
  - Reducing browser-specific behavior lowers maintenance and accessibility risk

**Key takeaway:**
Build accessibility on semantic HTML5 first, enhance thoughtfully with ARIA landmark roles, and rely on proven CSS techniques for visibility and focus. Good accessibility is the result of deliberate, standards-based coding—not shortcuts.
