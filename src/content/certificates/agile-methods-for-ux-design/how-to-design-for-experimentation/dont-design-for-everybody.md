---
title: "Don’t Design for Everybody"
---

## Continuous Shipping in Agile

### Common Misinterpretation

- Shipping unfinished work: Often wrongly interpreted as releasing poorly designed features.
- Velocity over quality myth: Some teams prioritize speed instead of thoughtful design.
- Correct mindset: Release working features quickly to gather feedback—not broken experiences.

### Core Principle

- Continuous release: Get real features in front of real users quickly.
- Learning in the wild: True usefulness and usability are validated after launch.
- Risk reduction: Research and prototyping reduce risk, but post-launch validation is still necessary.

### Key Concern

- Frequent updates: May confuse or frustrate users.
- Incomplete features: Risk of exposing users to broken experiences.
- Solution: Release to smaller groups instead of everyone at once.

## Beta Testers

### Definition

- Beta testers: Volunteer users who opt in to test new or unfinished features before general release.

### Benefits

- Early feedback: Identify major usability and functional issues.
- Lower risk: Avoid disrupting the entire user base.
- Controlled exposure: Especially important for established products.

### Limitations

- Tolerant audience: May overlook issues that regular users would dislike.
- Not fully representative: Cannot predict full user adoption or satisfaction.

### Safety Rule

- No unsafe features: Even beta users must not experience data loss or irreversible harm.
- Rough edges allowed: Minor bugs are acceptable; critical failures are not.

## Partial Rollouts

### Definition

- Partial rollout: Release a feature to a small percentage (e.g., ≤10%) of the user base.

### Purpose

- Catch missed issues: Identify problems not found in beta.
- Gauge broader reaction: Detect unexpected complaints from typical users.

### Gradual Expansion

1. Release to small segment: Monitor feedback and metrics.
2. Iterate: Improve based on findings.
3. Expand gradually: Increase access incrementally.
4. Full release (GA): Make available to all users when stable.

### Waiting Lists

- Controlled onboarding: Limit access to new products.
- Capacity management: Expand user base as confidence increases.

## Feature Flags

### Definition

- Feature flags: Technical controls that allow features to be turned on or off instantly.

### Purpose

- Controlled visibility: Decide who can access a feature.
- Rapid response: Disable problematic features quickly.
- Management tools: Often controlled via dashboards by product teams.

## Impact on Designers

### Cross-Functional Responsibility

- Agile teams: Collaborative and cross-functional.
- Designer input: Designers may influence release decisions.
- Advocacy: Recommend limited testing before general availability when risks exist.

### Designing for Partial Feedback

- Risk-first approach: Test risky components early.
- Incremental design: Validate core pieces before building dependent systems.

#### Example: Profile System Design

1. Build core profile page: Validate required information first.
2. Test with small group: Collect real usage feedback.
3. Iterate on structure: Refine fields and layout.
4. Design onboarding flow: Only after profile structure is validated.

### Strategic Design Order

- Validate foundation first: Avoid redesigning interconnected systems.
- Reduce interface disruption: Prevent unnecessary changes for all users.
- Improve real-world insight: Gain feedback from working products, not just prototypes.

## Key Takeaways

- Shipping early ≠ shipping to everyone.
- Small releases: Enable fast learning with minimal disruption.
- Beta + partial rollout + feature flags: Tools for safe experimentation.
- Designer role: Understand release strategies and advocate for controlled testing.
- Balanced tradeoff: Avoid perfection paralysis while preventing mass release of broken features.
