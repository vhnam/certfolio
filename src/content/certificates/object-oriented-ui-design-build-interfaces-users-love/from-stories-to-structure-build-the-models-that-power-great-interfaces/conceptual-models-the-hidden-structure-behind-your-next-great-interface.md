---
title: "Conceptual Models: The Hidden Structure Behind Your Next Great Interface"
---

![Conceptual model for Amazon.co.uk](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/conceptual-model-for-amazon-uk.avif)

## Understanding Conceptual Models

### Definition

- Conceptual model: A **diagram or framework representing key concepts and relationships** users interact with in a system.
- Purpose: Help users understand **how a system works through the interface**.
- Representation: Often shown as **block diagrams or entity-relationship structures**.

Key characteristics:

- Based on **user research and stories of use**.
- Focuses on **concepts meaningful to users**.
- Provides a **foundation for designing the interface structure**.

### Role in Interface Design

Conceptual models help prevent interfaces from becoming:

- A collection of **unrelated features**.
- Difficult to understand or navigate.

Instead, they provide:

- A **clear structure** for the UI.
- A consistent way to **communicate system concepts to users**.

Important principle:

- Any concept in the system must be **visible or understandable through the interface**.

Otherwise:

- Users will eventually encounter hidden complexity.
- Confusion will occur at critical moments.

## How Conceptual Models Appear in Design

### Initial Conceptual Models

- Initial models: **Simple block diagrams** showing main objects and relationships.

Typical elements include:

- Core objects in the system
- Relationships between objects
- High-level user interactions

As design progresses, models include more details such as:

- Interface structure
- User operations
- Interaction flows

## Example: Amazon’s Conceptual Model

### Core Concepts in Amazon's Interface

Across many years of interface changes, the **core conceptual model remains stable**.

Main concepts include:

- Shopping basket
- Account
- Departments
- Search

### Consistency Over Time

Amazon’s interface evolved visually, but the **underlying conceptual model stayed the same**.

![Amazon.co.uk's Homepage in 2002](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-amazon2002.avif)

![Amazon.co.uk's Homepage in 2009](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-amazon2009.avif)

![Amazon.co.uk's Homepage in 2016](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-amazon2016.avif)

![Amazon.co.uk's Homepage in 2025](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-amazon2025.avif)

Key observation:

- UI layouts changed (tabs, flyout menus, reorganized navigation).
- Core concepts remained consistent.

Benefits:

- Users retain **familiarity with the system**.
- Interfaces remain **trustworthy and predictable**.

## Aligning Interfaces with Users’ Mental Models

### Users’ Mental Model

- Mental model: How users **believe a system works**.
- Goal of design: Ensure the interface **matches this mental understanding**.

Key rule:

- Use **terms and concepts from user research**.

Example:

- If users say **“appointments”**, avoid renaming them **“events”** just for technical abstraction.

Reason:

- Technical terminology may confuse users.

## Identifying Concepts from User Research

### Extracting Objects and Attributes

Concepts in conceptual models often come from **stories of use**.

Process:

1. Review user interviews and stories of use.
2. Identify important **nouns**.
3. Classify them as:
   - Objects
   - Attributes

Example:

- Appointment → Object
- Date or time → Attribute

These objects become the **building blocks of the conceptual model**.

## Conceptual Models vs System Models

### User’s Model

- User’s model: How users **think the system works**.
- Focus: **Simple, understandable interactions**.

Example: Elevator interaction

1. Press call button.
2. Watch floor indicator.
3. Elevator arrives and door opens.
4. Select destination floor inside.

![User's model of an elevator](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-users-model-elevator.avif)

Characteristics:

- Simple
- Familiar
- Task-oriented

### Engineer’s Model

- System model: How the **system actually operates internally**.

Characteristics:

- Complex
- Mechanism-focused
- Includes internal components and processes

Example elements:

- Control systems
- Sensors
- Motor operations
- System states

![Engineer's model of an elevator](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-engineers-model.avif)


Purpose:

- Help engineers **build the system**, not explain it to users.

## Risks of Misaligned Models

Example: Destination dispatch elevators

Process:

1. Select destination floor in lobby.
2. Assigned to a specific elevator.
3. No floor selection buttons inside elevator.

Problem:

- Efficient for the system.
- Confusing for users accustomed to traditional elevators.

Lesson:

- Changing a **well-established conceptual model** can cause confusion.

## Communication Between Designers and Developers

Even though designers and developers use different perspectives:

- Designers focus on the **user conceptual model**.
- Developers focus on the **system model**.

Shared diagrams and terminology help:

- Improve communication
- Reduce misunderstandings
- Ensure the system supports **user needs and technical constraints**

## Key Takeaways

- Conceptual models define **how users understand and interact with a system**.
- They are based on **user research and stories of use**.
- Strong conceptual models remain **stable even as interfaces evolve**.
- Designers must align:
  - **User mental models**
  - **Interface structure**
- Distinguishing between **user models and system models** helps create intuitive products that bridge **human understanding and technical implementation**.

## References

- Interaction Design Foundation, [Conceptual Models](https://ixdf.org/literature/topics/conceptual-models)
