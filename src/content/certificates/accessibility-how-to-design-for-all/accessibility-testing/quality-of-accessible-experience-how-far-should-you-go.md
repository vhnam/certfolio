---
title: "Quality of Accessible Experience: How Far Should You Go?"
---

## Accessibility Is About Impact, Not Just Compliance

As **Steve Krug** says:

> “The one argument for accessibility that doesn’t get made nearly often enough is how extraordinarily better it makes some people’s lives. How many opportunities

A key question in accessibility work is: **How far should you go?**

You’ll often hear about **A, AA, and AAA levels** under Web Content Accessibility Guidelines (WCAG). Most organizations aim for **AA compliance**, since that is the commonly accepted legal and industry target.

But accessibility isn’t just about checking boxes. As emphasized in the course, the real argument for accessibility is how profoundly it improves people’s lives. When you conduct accessibility testing and observe real users, that impact becomes tangible. It deepens empathy — both usability empathy and accessibility empathy.

Compliance is the baseline. Impact is the goal.

## AA vs AAA: The Difference That Makes the Difference

Most teams target **WCAG AA** for compliance. That’s a practical and reasonable objective.

However:

- You can technically “meet” guidelines.
- And still create an experience that doesn’t truly work well.

There’s a subtle but critical gap between:

- Passing guidelines
- And delivering a smooth, functional, usable experience

That gap is where accessibility testing becomes powerful. It reveals whether the design actually works in real-world use — not just whether it technically passes.

AAA can serve as a quality lens:

- Not always required
- But useful for checking whether you’re leaving meaningful improvements “on the table”

Accessibility testing lifts the veil. It shows what is _really_ happening when someone uses assistive technology.

## The Double Loop: Test, Fix, Retest

One essential practice is the **double loop of QA**:

1. Conduct accessibility testing
2. Fix issues
3. Retest

In many cases, one strong iteration cycle is enough. But if teams are new to:

- JavaScript accessibility
- ARIA patterns
- Complex interaction models

Then additional iteration may be necessary.

Accessibility is not a one-time event — especially in Agile environments. With continuous updates, features can break. So teams should:

- Perform periodic spot checks
- Use automated checkers
- Re-test with users
- Triangulate between:
  - Guidelines
  - Tools
  - Real users

That triangle keeps quality grounded.

## Consistency Is the Real Challenge

One major lesson from the course: **Consistency is critical.**

It’s not enough for one version of a product to be accessible while another isn’t. Accessibility must be systematic — not accidental.

This is why accessibility maturity and structured programs matter. You can’t rely on a single designer or developer working in isolation. Accessibility must be embedded into processes.

## The Facebook Example: Same Platform, Different Experience

Facebook provides a powerful illustration of inconsistency.

### Desktop Site (facebook.com)

When tested with a screen reader:

- The comment box could be filled in.
- But there was **no accessible way to post the comment**.
- The “Comment” button did not behave correctly.
- Focus moved but did not trigger submission.
- The interaction appeared complete — but the comment never posted.

From a compliance perspective, many parts might appear functional. But from a user perspective, the feature was effectively broken.

The user could not perform a basic social action.

### Mobile Site (m.facebook.com)

On the mobile web version:

- The “Comment” button was properly exposed.
- The comment field behaved correctly.
- The comment successfully posted.
- Navigation was cleaner and less cluttered.
- Focus management worked as expected.

Same company. Same brand. Same feature.

Two entirely different accessibility outcomes.

## Why This Matters

This example shows:

- Accessibility isn’t binary.
- Compliance doesn’t guarantee usability.
- Different product versions can diverge in quality.
- Without an accessibility program, inconsistencies appear.

The mobile version worked because it was designed with simpler structure and clearer interaction patterns. The desktop version, despite being more feature-rich, created barriers.

This is the “rubber meets the road” moment:
Not “Does it pass?”
But “Does it actually work?”

## Final Takeaway

Aim for AA compliance — yes.

But don’t stop there.

Use accessibility testing to:

- Validate real interaction
- Reveal hidden friction
- Catch inconsistencies across platforms
- Strengthen empathy

Accessibility maturity isn’t about chasing AAA badges.

It’s about delivering experiences that genuinely work — consistently — for everyone.
