---
title: "What Use Case Narratives Tell You About Key OO Concepts"
---

## Purpose of Use Case Narratives

### From Diagrams to Real Interaction

Use case diagrams provide a **high-level overview of system interactions**, but the deeper understanding comes from **use case narratives**.

Use case narratives:

- Describe **step-by-step interactions between actors and the system**.
- Clarify how the system behaves during real usage scenarios.
- Help teams align around expected behavior.

These narratives are usually **text-based**, unlike UML diagrams.

### Collaboration in Creating Use Cases

Use cases should ideally be created collaboratively by:

- UX designers
- Developers
- Product stakeholders

When grounded in **real user research**, use cases reflect actual user needs rather than assumptions.

## Structure of Use Case Narratives

### Actor and System Interaction

A common format presents the interaction as a **two-column table**:

| Actor Action            | System Response           |
| ----------------------- | ------------------------- |
| User performs an action | System reacts or responds |

This format helps visualize the **interaction loop between user and system**.

### Avoiding Premature Design

In early design stages, use cases should **avoid low-level interface details**, such as:

- Button clicks
- Key presses
- Specific UI controls

Instead, they should focus on **intent and system behavior**.

Premature interface details can limit design exploration and reduce flexibility.

## Swim Lanes for Multiple Actors

### What Swim Lanes Represent

Columns in use case narratives are called **swim lanes**.

They represent **different actors or systems involved in the interaction**.

Common examples include:

- Customer
- Your system
- External system (e.g., payment processor)

Most use cases contain **two or three swim lanes**, though more are possible.

### Actors in a System

Actors include **anything that interacts with the system**, such as:

- Users
- External services
- Other software systems

Actors are often represented using **persona names** for greater user-centered focus.

## Identifying Objects from Use Cases

### Nouns as Clues

Use case narratives help reveal **important conceptual objects** in a system.

A simple technique is to **identify nouns in the narrative**.

Examples from a flight booking scenario:

- Flight
- Airport
- Date
- Seat
- Price

These nouns often represent key elements of the system.

### Objects vs Attributes

Not all nouns become objects.

Two categories emerge:

#### Objects

Objects are **independent entities users interact with**.

Examples:

- Flight
- Available flights list
- Saved flights

Objects usually make sense **on their own**.

#### Attributes

Attributes describe **properties belonging to objects**.

Examples:

- Date
- Region
- Language
- Currency
- Round trip indicator

Attributes **cannot exist independently** and belong to an object.

Example:

- _Date_ → attribute of **Flight**
- _Currency_ → attribute of **User profile**

Understanding this distinction helps designers build a **clear conceptual model**.

## Example: “Check Availability” Use Case

A simplified flight booking scenario might involve the following steps:

1. User selects region, language, and currency.
2. System asks for flight details such as airports and travel dates.
3. User provides the requested details.
4. System displays a list of available flights with prices.
5. User selects an outward and return flight if applicable.
6. System confirms the selection and provides options to book or save.
7. The booking process begins if the user proceeds.

From this narrative, designers can identify:

### Objects

- Flight
- Available flights list
- Saved flights

### Attributes

- Region
- Language
- Currency
- Trip type (one-way or round trip)
- Travel dates

## Solution Objects vs Domain Objects

Some objects belong to the **problem domain**, while others are part of the **system solution**.

### Domain Objects

These represent real-world concepts users care about.

Examples:

- Flight
- Seat
- Airport

### Solution Objects

These exist because of how the system works.

Examples:

- Available flights list
- Saved flights

A **view** often represents these solution objects in the interface.

Views act as **windows into the conceptual model**, forming the user interface.

## Key Takeaways

- Use case narratives describe **interactions between actors and the system**.
- Swim lanes help represent **multiple actors or systems** involved in a scenario.
- Avoid premature design details during early requirements analysis.
- Nouns in narratives often reveal **objects and attributes** in the system.
- Objects represent independent entities users interact with.
- Attributes describe properties of those objects.
- Identifying these concepts helps designers build a **clear conceptual model for object-oriented UI design**.
