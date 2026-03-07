---
title: Which Features Matter Most? Let Your Personas Show You
---

## Prioritizing Features Based on User Needs

### The Challenge of Feature Prioritization

Projects often accumulate many feature requests, and stakeholders may believe their ideas are the most important.

Key problem:

- Feature lists grow quickly.
- Teams struggle to agree on priorities.
- Decisions risk being driven by **opinions instead of user needs**.

User-centered design addresses this by prioritizing **features that matter most to key personas**.

## Persona-Weighted Feature Matrix

### Definition

- Persona-Weighted Feature Matrix: A prioritization tool that evaluates features based on **how valuable they are to different personas**.
- Purpose: Help teams decide **which features should be built first**.

The matrix compares:

- Personas (columns)
- Features or stories of use (rows)

Items that can appear as rows:

- Individual features
- User stories
- Use cases
- Epics

### Core Principle

Feature priority is determined by combining two factors:

- Importance of each persona
- Value of the feature for that persona

This approach ensures that development focuses on **features that benefit the most important users**.

## Matrix Components

### Persona Weights

- Persona weight: Represents the **relative importance of each persona**.

Common weighting approaches:

- Distribute **100% across personas**
- Use a **1–5 scale** for importance

Example:

- Persona 1: Primary persona with highest weight
- Persona 2: Secondary persona
- Persona 3: Less critical persona

### Feature Scores

Each feature is scored based on how it affects a persona.

Scoring scale:

- -1: Feature harms the persona
- 0: Neutral impact
- +1: Helpful to the persona
- +2: Persona strongly values the feature

Design trade-offs are common because a feature that benefits one persona may negatively affect another.

![Persona-weighted feature matrix showing a table with personas and features, with weights and scores for each feature.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/prioritize-what-matters-to-your-users-and-your-team-turn-features-epics-and-constraints-into-a-clear-plan/object-oriented-ui-design-illustrations-persona-weighted-feature-matrix.avif)

## Calculating Feature Priority

### Weighted Priority Formula

The priority score is calculated by multiplying:

- Persona weight × feature score

Then summing the results across all personas.

Example calculation:

1. Persona A weight: 60
2. Persona B weight: 40
3. Feature scores:
   - Persona A: +2
   - Persona B: +1

Calculation:

```
(2 × 60) + (1 × 40) = 160
```

The final score represents the **overall importance of that feature**.

Features with higher scores should typically be prioritized.

![Example calculation of feature priority showing the formula and the calculation results.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/prioritize-what-matters-to-your-users-and-your-team-turn-features-epics-and-constraints-into-a-clear-plan/object-oriented-ui-design-illustrations-feature-matrix.avif)

## Collaboration When Using the Matrix

### Cross-Team Participation

The matrix is most effective when created collaboratively.

Participants typically include:

- UX designers
- Product managers
- Developers

Benefits of collaboration:

- Shared understanding of user priorities
- Alignment between design and development
- Decisions based on **research rather than opinions**

### Managing Personas in the Matrix

In smaller systems:

- Usually **one primary persona** exists.

Possible strategies:

- Combine other users into a **secondary persona**
- Include **users of competing products** to ensure the design remains competitive

## Design Considerations

### Negative Feature Impact

The -1 score should be used carefully.

In well-designed interfaces:

- Features rarely harm users if designed properly.

Techniques like **progressive disclosure** can reduce negative impact by:

- Hiding advanced functionality
- Revealing complexity only when needed

However, design decisions sometimes benefit one persona while making tasks harder for another.

## Key Takeaways

### Data-Driven Feature Prioritization

The persona-weighted feature matrix helps teams:

- Prioritize features objectively
- Focus on the most valuable user needs
- Reduce stakeholder conflict over feature decisions

### Benefits for Product Teams

Using the matrix helps teams:

- Align around user research
- Make transparent prioritization decisions
- Build products that serve **key personas first**

This approach transforms feature prioritization from **opinion-driven debates into structured, user-centered decisions**.

## References

- Interaction Design Foundation, [Progressive Disclosure](https://ixdf.org/literature/topics/progressive-disclosure)
- John Pruitt, Tamara Adlin, [The Persona Lifecycle: Keeping People in Mind Throughout Product Design (Interactive Technologies)](https://www.amazon.com/Persona-Lifecycle-Throughout-Interactive-Technologies/dp/0125662513)
- Tamara Adlin, John Pruitt, [The Essential Persona Lifecycle: Your Guide to Building and Using Personas](https://www.amazon.com/Essential-Persona-Lifecycle-Building-Personas/dp/0123814189)
