---
title: "Use Cases: The Ideal Bridge Between Requirements and Design?"
---

## What Use Cases Are

### Definition

Use cases describe **how a system interacts with external entities** such as users or other systems.

They focus on:

- **What the system does**, not how it works internally.
- The **interaction between actors and the system**.

Use cases were introduced in the 1980s by **Ivar Jacobson** to help bridge the gap between:

- Requirements
- Implementation

They treat the system as a **black box**, meaning the internal structure is not considered.

### Purpose

Use cases help teams:

- Understand how a system will be used.
- Translate requirements into realistic interaction scenarios.
- Identify how the system should respond to external events.

Historically, use cases became a **dominant method of specifying software systems** before Agile practices became widespread.

## Components of a Use Case

Use cases usually consist of **two main parts**.

### Use Case Diagrams

Use case diagrams provide a **visual overview of system interactions**.

Key elements include:

- **Actor**: An external entity interacting with the system (user or another system).
- **System**: The product being designed.
- **Stimulus**: An action initiated by an actor.
- **Response**: The system’s reaction to that action.

Important characteristics:

- The diagram summarizes system functionality.
- It does **not represent time or sequence**.
- Earlier or more common use cases are often placed near the top.

Use case diagrams are commonly part of the **Unified Modeling Language (UML)**.

### Actors and Roles

Actors represent entities interacting with the system.

Examples:

- Customer
- Passenger
- Manager
- External system

Actors represent **roles**, not necessarily individual people.

However, traditional roles are often **not user-centered** because they provide limited insight into user needs or behavior.

## Use Case Narratives

Alongside diagrams, each use case typically includes a **written narrative** describing the interaction.

### Core Elements

A typical use case narrative includes:

- **Name**: A descriptive name for the use case.
- **Actors**: The entities (users or other systems) interacting with the system.
- **Goal**: What the actor is trying to achieve through this interaction.
- **Pre-conditions**: Any conditions that must be true before the use case can be initiated.
- **Basic Flow**: The typical sequence of interactions between the actor and the system.
- **Alternative Flows**: Variations on the basic flow, covering exceptions and other possibilities.
- **Post-conditions**: The state of the system after the use case has been completed.

### Example Structure

Example use case: _Reserve Seat Online_

Basic flow:

1. Passenger logs into the booking platform.
2. System displays flight and seat availability.
3. Passenger selects a seat.
4. System updates the reservation.
5. System confirms the change.

Alternative flow:

- Selected seat is unavailable → system prompts the user to choose another seat.

Pre-conditions and post-conditions clarify **system state before and after the interaction**.

## Strengths and Limitations of Use Cases

### Advantages

Use cases help teams:

- Structure system behavior clearly.
- Identify interactions between users and systems.
- Create shared understanding among stakeholders.

They provide a **systematic way to translate requirements into interactions**.

### Limitations

Use cases also have drawbacks:

- They can be **time-consuming to create**.
- They often focus on **“sunny-day scenarios”**, where everything works correctly.
- They may overlook **error situations and edge cases**.
- They are often written **without real user research**, relying on assumptions.

Because of this, use cases alone do **not guarantee usability or good user experience**.

## Level of Detail in Stories of Use

The appropriate detail level depends on **the stage of the design process**.

### Early Design Stages

At the beginning of the process:

- Avoid describing **specific interface interactions**.
- Focus on **user intentions and goals**.

Example:

Good early-stage description:

- Sandra provides the outbound travel date.

Premature detail:

- Sandra selects the outbound date using a pop-up calendar.

Adding implementation details too early leads to **premature design**, which can limit creativity and flexibility.

### Later Design Stages

As the design progresses:

- Interaction details become necessary.
- Prototypes often communicate interactions **better than written descriptions**.

## Key Takeaways

- Use cases were introduced to **bridge the gap between requirements and system design**.
- They describe how external actors interact with a system treated as a **black box**.
- A complete use case includes both **visual diagrams** and **written narratives**.
- Narratives capture **basic flows and alternative flows**, including exceptions.
- Use cases provide structure but may rely on assumptions rather than user research.
- The level of detail in stories of use should match the **stage of the design process**.
- Avoid **premature design** by delaying detailed interface decisions until later stages.
