---
title: Build on Stories to Create Solutions Users Need
---

## From Persona Stories to Detailed Stories of Use

### Purpose

Persona stories and user stories are **brief placeholders for functionality**.

They must be expanded into **detailed stories of use** before implementation to:

- Reveal missing details
- Avoid incorrect assumptions
- Align design with real user needs
- Clarify how the solution should work

Without elaboration, designers and developers risk creating **misaligned or unusable solutions**.

### Types of Story Expansion

Stories can be expanded in several formats:

- Text-based narratives
- Visual representations
- A combination of both

Common approaches include:

- Use cases
- Design maps

## Narrative Approach: Use Cases

### Definition

- Use cases: Text-based narratives describing **step-by-step interactions between users and a system**.

Use cases help:

- Explain how users interact with the system
- Detail expected system responses
- Clarify interactions required for implementation

### Important Consideration

Use cases should describe **real user behavior**, not imagined workflows.

This requires grounding use cases in:

- User research
- Persona insights
- Observed behaviors

## Visual Approach: Design Maps

![A design map](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/master-the-object-oriented-principles-behind-every-great-ui/object-oriented-ui-design-illustrations-design-map.avif)

### Definition

- Design maps: Graphical representations of stories of use that link **personas, stories, constraints, and design artifacts**.

Design maps typically use:

- Sticky notes or digital equivalents
- Visual flows of user steps
- Links to sketches, wireframes, or prototypes

### What Design Maps Show

Design maps help visualize:

- Who: The persona interacting with the system
- What: The task or action being performed
- How: The interaction steps and interface elements involved

They also include:

- Team comments
- Questions
- Design ideas

This approach allows teams to **see the full interaction flow and collaborate effectively**.

## Refining the Conceptual Model

### Conceptual Objects

Expanding stories of use reveals the **core concepts users interact with**.

These are called:

- Conceptual objects: The primary “things” users interact with in a system.

Examples:

- Booking
- Flight
- Seat
- Credit card

### Attributes

- Attributes: The properties or details associated with an object.

Examples:

- Passport number
- Expiry date
- Travel date
- Seat number

Attributes represent information users expect to **view or modify**.

### Operations

- Operations: Actions users perform on objects.

Examples:

- Confirm check-in
- Update credit card details
- Select a seat

Operations represent **user-driven actions within the interface**.

## Example: Expanding a Story of Use

Example story:

- Sandra checks in for her flight.

During expansion, designers might identify:

Objects:

- Seat
- Booking

Attributes:

- Passport number

Operations:

- Confirm check-in

These elements may need to be **added to the conceptual model** if they are not already present.

## Conceptual Models from a User Perspective

Object-oriented UI design uses **structures similar to software engineering models**, including:

- Objects
- Attributes
- Operations

However, the key difference is perspective:

- The model is built from the **user’s point of view**, not the system’s internal architecture.

Later in the design process:

- Objects are represented through **views** in the interface.

Examples of views include:

- Windows
- Dialogs
- Forms
- Pop-ups

These views allow users to **interact with objects and perform operations**.

## Managing New Concepts and Features

### Avoiding Unnecessary Complexity

Expanding stories may reveal **new concepts or features**.

Before adding them, designers should evaluate:

- Whether the concept is essential for the **primary persona**
- Whether it increases **interaction complexity**

Adding too many concepts can lead to:

- Feature creep
- Complex interfaces
- Reduced usability

Maintaining a clear conceptual model helps keep the solution **focused and coherent**.

## Key Takeaways

- User and persona stories are **short placeholders for functionality**.
- Before implementation, they must be expanded into **detailed stories of use**.
- Stories can be elaborated using **use cases (narratives)** or **design maps (visual workflows)**.
- Expanding stories reveals the system’s **objects, attributes, and operations**.
- These elements form the **conceptual model of the interface**.
- The conceptual model should reflect the **user’s perspective**, not just technical structure.
- New concepts should only be added when they are **important to primary personas**, to avoid unnecessary complexity.
