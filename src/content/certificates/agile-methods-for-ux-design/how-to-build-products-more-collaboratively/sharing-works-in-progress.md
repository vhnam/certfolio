---
title: Sharing Works in Progress
---

## Why Designers Avoid Sharing Early Work

### Common Reasons

- Agency training: Designers are expected to present **polished deliverables** to clients.
- Design school habits: Work is evaluated mainly based on **final outputs**.
- Siloed organizations: Designers often interact with other teams only during **formal handoffs or presentations**.

### Effects of These Environments

- Designers feel pressure to show **perfect work**.
- Unfinished ideas may be perceived as **low-quality work**.
- Collaboration becomes limited because feedback happens **too late in the process**.

## Why Sharing Work Early Is Important

### Problems with Waiting for Final Designs

When designers do not share early work:

- Teams may spend time designing **features that are impossible to build**.
- Designs may **fail to meet business goals**.
- Implementation issues may appear **too late to fix easily**.

### Benefits of Early Collaboration

Sharing work in progress allows teams to:

- Get early feedback from **engineering, product, marketing, and legal teams**
- Validate ideas with **users**
- Prevent wasted design effort
- Enable **parallel work across teams**

## Working in Parallel with Engineers

### Concerns Designers Often Have

- Engineers might start building **unfinished designs**
- Changes later may cause **rework or wasted effort**

These concerns are valid but should not prevent early sharing.

### Safe Parallel Collaboration

Designers should share work with a **clear explanation of confidence levels**.

- Explain which parts of the design are **final or stable**
- Clarify which elements are **still being explored**
- Identify what is **likely to change**

This helps engineers know **where it is safe to start implementation**.

## Example: Designing an Onboarding Flow

### Design Scenario

Example feature: **Profile creation flow for job seekers**

Designers might decide to:

- Split the onboarding into **multiple screens**
- Add a **progress indicator** to guide users

Possible progress indicators include:

- Progress bar
- Checklist

### Engineering Work That Can Start Early

Even if the visual indicator is undecided, engineers can begin work on:

- Navigation between screens
- Data input handling
- Autosave functionality
- Progress tracking

This work is **independent of final visual design**.

### Early Technical Feedback

Early collaboration may reveal technical challenges.

Example:

- Resume parsing may be **difficult or unreliable**

The team can then decide:

- Whether the feature is worth the complexity
- Or whether to design an **alternative solution**

## Prioritizing Design Decisions

### Importance of Design Prioritization

Parallel work only succeeds when designers **prioritize the right decisions first**.

Design decisions should be ordered so that:

- Early decisions **do not require major changes later**
- Engineers can build **stable foundations first**

### Example Dependency

Some decisions affect the whole system.

- Amount of data collected from users:
  Determines number of steps in the onboarding flow.

Other decisions are less critical.

- Visual style of the progress indicator:
  Does not affect the underlying data structure.

### Design Dependency Rule

- Structural decisions first
- Interaction details later
- Visual polish last

## Collaboration and Expertise

### Shared Decisions vs. Expert Decisions

Not all decisions need to be made by the entire team.

- Designers handle **interaction and experience design**
- Engineers handle **technical implementation**
- Product managers guide **business priorities**

However, sharing **early high-impact decisions** ensures the whole team works toward the same solution.

## Key Takeaway

### Agile Collaboration Principle

- Agile design requires **sharing work in progress frequently**.
- Designers should communicate **which parts of the design are stable and which are evolving**.

### Benefits

- Enables **parallel work between design and engineering**
- Reveals **technical constraints earlier**
- Prevents wasted design effort
- Helps teams **solve the right problems together**
