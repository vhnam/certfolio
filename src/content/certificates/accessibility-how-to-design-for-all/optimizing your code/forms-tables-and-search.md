---
title: Forms, Tables and Search
---

Forms, tables, search, and autocomplete are core interaction patterns—and also some of the most common sources of accessibility failures. Getting them right depends on **explicit structure, clear labeling, meaningful grouping, and predictable announcements**.

## Forms Accessibility

### Form Labels (Non-Negotiable)

- **Every form control must have a clear, understandable label** that conveys its purpose.
- Labels are critical for:
  - Screen reader users
  - Keyboard-only users
  - Users with cognitive or memory challenges

#### Common Issues

- Missing labels
- Labels not programmatically associated with inputs
- Placeholder text used instead of labels

#### Best Practices

- Use `<label>` for every input.
- Associate labels programmatically:
  - `<label for="field-id">` must match the input’s `id`.
- If a visible label is not possible:
  - Use a **visually hidden label** (CSS positioning, not `display: none`).
- Use `aria-labelledby` only when a `<label>` cannot be used.

> Placeholders are not labels. They disappear and are unreliable for assistive technologies.

### Form Instructions

- Instructions must be **programmatically associated** with the input they apply to.
- Use `aria-labelledby` to reference:
  - The label text
  - The instruction text
- Important behavior:
  - When both `<label>` and `aria-labelledby` are present, **screen readers announce `aria-labelledby` instead of the label text**.

#### Required Fields

- Indicate required fields using:
  - The word **“required”** in the label, or
  - A visible symbol (e.g. `*`) next to the label text
- Always:
  - Provide a global explanation of required indicators at the top of the form
  - Use `aria-required="true"`
- Never rely on color alone.

### Form Grouping

- **Related form controls must be grouped together** to provide context.
- Grouping improves comprehension, navigation speed, and error recovery.

#### Best Practices

- Use `<fieldset>` to group related controls.
- Use `<legend>` as the **first child** of `<fieldset>`:
  - Acts as a heading
  - Is announced by screen readers for every control in the group
- When `<fieldset>` cannot be used:
  - Use `role="group"` + `aria-labelledby`
  - Use `role="radiogroup"` + `aria-labelledby` for radio buttons
- Use `<optgroup>` for grouping options in `<select>` elements.
- Separate logical sections (e.g. Shipping vs Billing) into distinct groups.

### Layout and Flow

- Prefer **single-column, vertical forms**:
  - Faster to complete
  - Easier for keyboard and screen reader users
- Avoid multi-column forms:
  - They disrupt reading order and tab flow
  - Screen readers may jump unpredictably between columns

### Error Handling

- Errors must be:
  - Easy to find
  - Easy to navigate
  - Clearly announced
- Recommended pattern:
  - Error summary at the top of the form
  - Links that move focus directly to each error
- Errors should be announced when focus lands on the field.
- Never rely on color alone to indicate errors.

## Tables Accessibility

### Tables as a Visual Metaphor

- Tables visually imply relationships—but **screen readers cannot see layout**.
- Relationships must be explicitly defined.

### Semantic Structure

- Use:
  - `<th>` for header cells
  - `<td>` for data cells
- Associate headers and data:
  - Use `scope="row"` or `scope="col"`
- Without explicit associations:
  - Screen readers read values with no context
- With correct markup:
  - Screen readers announce header cells before each data cell

### Additional Elements

- Use `<caption>` to describe the table’s purpose.
- Use:
  - `<thead>` for header rows
  - `<tfoot>` for footer rows
- Users must understand:
  - Number of rows and columns
  - Header–cell relationships

### Complex and Responsive Tables

- Keep tables as simple as possible.
- In responsive layouts:
  - Tables may become stacked or list-like
  - Captions may become headings
- Preserve semantic meaning regardless of layout.

## Search Accessibility

### Search Forms

- Search is a **critical form interaction**.
- Common issues:
  - `<fieldset>` without a `<legend>`
  - Missing form control labels
- Best practices:
  - Use `<fieldset>` with a descriptive `<legend>` (e.g. “Find a location near you”)
  - Ensure the search input has a proper label
- Remember:
  - `<legend>` text is announced for every control in the fieldset.

### Accessible Autocomplete / Typeahead

An accessible autocomplete must communicate state changes clearly.

#### Expected Behavior

- When the search field gains focus:
  - An initial instruction is announced.
- When results are returned:
  - Result count and instructions are announced.
- When navigating suggestions with arrow keys:
  - Each suggestion is spoken aloud.

#### Structural Requirements

- Input uses:
  - `aria-autocomplete`
  - `aria-expanded`
  - `aria-owns`
  - `aria-activedescendant`
- Results list uses:
  - `role="listbox"`
- Each suggestion uses:
  - `role="option"`
  - `aria-selected`

Autocomplete must be **fully keyboard operable** and **fully screen-reader understandable**.

## Key Takeaways

- Labels, instructions, and grouping must be explicit and programmatic.
- Forms should be linear, predictable, and task-focused.
- Tables require semantic markup to convey meaning.
- Search and autocomplete must announce instructions, results, and focus changes.
- Accessibility is about making **relationships and intent explicit**, not relying on visual layout.

Accessibility here isn’t visual polish—it’s **clarity, structure, and respect for how users actually navigate**.

## References

- W3C Web Accessibility Initiative, [Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/)
- W3C Web Accessibility Initiative, [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/)
- haltersweb, [Accessible Autocomplete](https://haltersweb.github.io/Accessibility/autocomplete.html)
