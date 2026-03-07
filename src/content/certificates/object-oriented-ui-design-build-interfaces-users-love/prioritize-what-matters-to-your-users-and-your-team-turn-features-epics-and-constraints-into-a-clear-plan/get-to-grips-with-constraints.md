---
title: Get to Grips with Constraints
---

## Understanding Constraints

![Categories of software requirements showing functional requirements associated with stories of use and nonfunctional requirements as constraints.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/prioritize-what-matters-to-your-users-and-your-team-turn-features-epics-and-constraints-into-a-clear-plan/object-oriented-ui-design-illustrations-stories-of-use.avif)

### Definition of Constraints

- Constraints: Conditions or limits that determine **how a system must work**.
- Also called: **Non-functional requirements**.
- Role: Define the **boundaries within which design and development operate**.

Unlike functional requirements, constraints do **not describe user tasks**, but they strongly influence design decisions.

Examples of constraints:

- Must support tablets
- Personal data must be encrypted
- System must comply with WCAG 2.x Level AA accessibility standards

Constraints must be **clearly identified early** because they may affect:

- One specific user story
- Every user story in the system

## Functional vs Non-Functional Requirements

### Functional Requirements

- Functional requirements: Define **what the system does**.
- Source: Usually derived from **stories of use** such as user stories, persona stories, and use cases.

Examples:

- User checks out of a hotel
- User completes a purchase
- User manages account settings

These describe **user goals and interactions**.

### Non-Functional Requirements

- Non-functional requirements: Define **how the system performs or operates**.
- Purpose: Ensure the system meets **technical, legal, and quality standards**.

Examples:

- Security requirements
- Accessibility standards
- Device compatibility
- Performance targets

These requirements often influence **multiple features and workflows**.

## Categories of Constraints

### Technology Constraints

Technology constraints relate to **implementation choices and technical environments**.

Examples:

- Programming language
- Supported platforms
- Device compatibility
- System architecture

Most technology constraints have **minimal direct impact on user behavior**, but some strongly influence UI design.

Example:

- Supporting mobile devices affects layout, navigation, and interaction patterns.

### Quality of Service Constraints

Quality of service constraints describe **performance and operational qualities** of a system.

Common categories:

- Performance
- Scalability
- Portability
- Compatibility
- Reliability
- Availability
- Maintainability
- Security
- Localization
- Usability

These characteristics define how well the system must perform under different conditions.

## Constraints That Influence User Stories

Some constraints create **additional stories of use**.

Examples:

- Security constraint:
  - User chooses two-factor authentication method.
- Localization constraint:
  - User selects preferred language.

These constraints introduce **new user interactions** needed to satisfy the requirement.

### Measurable Usability Requirements

Constraints must be **measurable**.

Example:

- Poor constraint:
  - The system should be usable.
- Proper constraint:
  - 90% of users must complete key tasks in **60 seconds or less**.

Accessibility constraints are often included under usability.

Example:

- System must comply with **WCAG 2.x Level AA** accessibility guidelines.

## Example: Functional vs Non-Functional Requirements

### Toaster Example

Functional requirement example:

- Number of toaster slots
- Configuration allowing multiple users to toast bread simultaneously

These directly influence **how the product is used**.

Non-functional requirement example:

- Electrical compatibility with a country’s voltage and plug type

This requirement does **not change how users toast bread**, but determines **whether the device works in a specific environment**.

### Invisible Constraints

Some constraints affect **system implementation without changing user behavior**.

Example:

- End-to-end encryption in a messaging system.

Users continue using the system normally, but the system must meet **security standards behind the scenes**.

## Key Takeaways

### Constraints Define System Boundaries

Constraints (non-functional requirements):

- Establish the **conditions a system must meet**
- Influence architecture, design decisions, and user experience
- Prevent late-stage design changes and technical rework

### Two Major Constraint Categories

Constraints generally fall into two groups:

- Technology constraints: Implementation and platform limitations.
- Quality of service constraints: Performance, security, reliability, usability, and other system qualities.

### Designing with Constraints

Effective design requires understanding both:

- Functional requirements: What the system does.
- Non-functional requirements: How the system must operate.

By identifying constraints early, teams can:

- Avoid costly redesigns
- Maintain consistent system quality
- Deliver reliable and user-centered products
