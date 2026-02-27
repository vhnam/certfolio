---
title: Javascript
---

## JavaScript Is Not the Enemy

JavaScript is perfectly fine to use—even heavily—**as long as the experience is accessible**. Most modern websites and web applications rely on JavaScript, AJAX, and libraries like jQuery.

Accessibility problems come from **how JavaScript is implemented**, not from JavaScript itself.

Dynamic interfaces are allowed by accessibility guidelines, **but they must remain usable by assistive technologies**.

## Making JavaScript Accessible

Dynamic JavaScript must expose the **name, role, state, and properties** of interface elements correctly.
This is typically done by:

- Using **ARIA markup** appropriately
- Updating ARIA states dynamically when UI changes
- Ensuring all interactions are reachable and operable via **keyboard**

ARIA may need to change in real time as JavaScript updates the interface.

## ARIA as a Partner to JavaScript

ARIA complements JavaScript by providing semantic meaning that native HTML alone may not express for custom widgets.

ARIA helps assistive technologies understand:

- **What an element is** (role)
- **What state it is in** (selected, expanded, checked)
- **How it behaves** (interactive patterns)

This partnership is especially important for custom components such as tabs, accordions, tree views, and dynamic forms.

## Keyboard Focus Is Essential

Any JavaScript-driven interaction must:

- Be **fully keyboard accessible**
- Maintain **logical focus order**
- Provide **clear and predictable focus movement**

Without proper focus control, users can become lost, disoriented, or unable to continue interacting with the interface.

## Controlling Dynamic Updates

When content updates dynamically (AJAX, client-side rendering):

- Users must have **control** over updates (e.g., via a button or link)
- Updates should not occur unexpectedly
- Important changes must be communicated clearly

This prevents confusion and ensures users understand when and why something changed.

## Announcing Dynamic Changes

JavaScript should use ARIA to announce critical state changes, such as:

- A tab being selected
- A checkbox being checked or unchecked
- A tree view expanding or collapsing

ARIA can announce these changes so screen reader users receive immediate feedback.

Without these announcements, users may perform actions **without knowing anything happened**.

## Why This Matters in Practice

When state changes are not communicated:

- Users don’t know what action occurred
- Forms become difficult or impossible to complete
- Confidence and usability collapse

This is especially dangerous in **high-stakes interfaces** like banking, checkout flows, or form-heavy applications.

## Key Takeaway

JavaScript is accessibility-safe **when paired with correct ARIA markup, keyboard support, focus management, and clear state announcements**.

Used properly, **JavaScript and ARIA together enable rich, usable, and inclusive web experiences**—not barriers.
