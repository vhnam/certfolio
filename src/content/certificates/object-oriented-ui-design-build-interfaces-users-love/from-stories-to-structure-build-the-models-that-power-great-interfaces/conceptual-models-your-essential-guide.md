---
title: "Conceptual Models: Your Essential Guide"
---

## Essential Perspective and Conceptual Models

### Conceptual Model

- Conceptual model: A **structure that defines the key objects and relationships users interact with in a system**.
- Purpose: Provide a **clear foundation for intuitive interface design**.
- Basis: Built from **concepts and terms used by users**, discovered through research and stories of use.

Key characteristics:

- Focuses on **problem understanding rather than solutions**.
- Represents **objects and relationships in the user domain**.
- Acts as a bridge between **user needs and system implementation**.

### Example: Hotel Reservation Conceptual Model

Core objects in the example model:

- Hotel
- Guest
- Room
- Reservation

Important relationships:

- Hotel **has rooms**.
- Guest **stays in a room**.
- Reservation represents the **relationship between guest and hotel**.

Concept:

- Reservation is an **association class** connecting two objects.

### User’s Conceptual Model

- User’s conceptual model: A **designer’s model of what users are expected to understand** about the system.
- Goal: Reflect how users naturally think about tasks such as **booking a hotel room**.

## Perspectives in Object-Oriented Design

### Essential Perspective

- Essential perspective: The **highest level of abstraction**.
- Focus: **Core objects and relationships**.
- Characteristics:
  - Minimal detail
  - No views
  - No technical implementation

Purpose:

- Understand the **problem domain** before designing solutions.

### Specification Perspective

- Specification perspective: The stage where designers **develop possible solutions**.
- Added elements:
  - Views
  - Operations
  - Attributes

Purpose:

- Transform abstract concepts into **structured design solutions**.

### Implementation Perspective

- Implementation perspective: The **most detailed stage**.
- Focus: Ensuring the design can be **fully implemented technically**.

Typical outputs:

- Detailed prototypes
- Interface components
- System behaviors

## UML for Representing Relationships

### Unified Modeling Language (UML)

- UML: A **visual language used to model objects and relationships in systems**.
- Benefit: Helps designers and developers **communicate structure clearly**.

### UML Class Diagrams

- Class diagram: A diagram where each **class represents a type of object**.
- Objects created from a class are called **class instances**.

Common relationships shown in UML:

#### Association

- Association: A **general relationship between objects**.
- Example: Guest **stays in** a room.

#### Association Class

- Association class: A **class representing the relationship between two objects**.
- Example: Reservation connects **Guest** and **Hotel**.

#### Aggregation

- Aggregation: A **“has-a” relationship** between objects.
- Symbol: **Hollow diamond**.

Example:

- Hotel **has** rooms.

![A hotel reservation system conceptual model from the specification perspective.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-hotel-reservation-specification-perspective.avif)

## Elaborating Conceptual Models

Conceptual models evolve by adding **three types of detail**.

### Attributes

- Attributes: **Characteristics of objects**.
- Example:
  - Room type
  - Number of beds
  - Reservation dates
  - Cost

Discovery process:

1. Review stories of use.
2. Identify **nouns in user descriptions**.
3. Classify them as **objects or attributes**.

### Operations

- Operations: **Actions users can perform on objects**.
- Equivalent to **calls-to-action in interfaces**.

Typical UI representations:

- Buttons
- Links
- Menu items

Examples:

- View rooms
- Select room
- Check in
- Cancel

### Views

- Views: **Interfaces where users interact with objects**.
- Purpose: Enable interaction with system objects.

Typical UI forms:

- Dialogs
- Pop-ups
- Forms
- Screens

Example:

- HotelCheckinView where staff select rooms and complete check-in.

![A hotel reservation system conceptual model from the implementation perspective.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/from-stories-to-structure-build-the-models-that-power-great-interfaces/object-oriented-ui-design-illustrations-hotel-checkin-view.avif)

Important rule:

- Views appear **only in specification and implementation perspectives**, not the essential perspective.

## Example: Hotel Check-in View

Key parts of a UML view model:

#### Stereotype

- Indicates the **type of object**, such as a view.

#### Class Name

- Written in **PascalCase**.
- Example: `HotelCheckinView`.

#### Attributes

- Represent **UI fields**.
- May include:
  - Room availability
  - Number of beds
  - Dates
  - Guest details

Some attributes:

- Are **temporary interface values**.
- Others belong to **persistent objects**.

#### Operations

- Actions users perform within the view.
- Examples:
  - View rooms
  - Select room
  - Check in
  - Cancel

## UML Interaction Models

Additional UML diagrams can help model interactions.

Example:

- Sequence diagrams: Show **interaction between users and system objects**.

Purpose:

- Identify:
  - Required views
  - Required operations
  - System interaction flow

## Managing Complexity in Object-Oriented Design

Two important concepts help manage system complexity.

### Inheritance

- Inheritance: A class **inherits attributes and operations from another class**.
- Relationship type: **“is-a” relationship**.
- Symbol: **Hollow arrow**.

Example:

- Member **is a** RegisteredUser.

Implications:

- Member receives all:
  - Attributes
  - Operations of RegisteredUser.

Additional behaviors may be added in the subclass.

Warning:

- Inheritance should **not be used between unrelated classes**.

### Composition

- Composition: A class **contains another class as part of itself**.
- Relationship type: **strong “has-a” relationship**.
- Symbol: **Solid diamond**.

Example:

- Member **has** login credentials.
- Member **has** user preferences.

Characteristics:

- The contained objects **must exist with the parent object**.
- They cannot exist independently.

Comparison:

- Aggregation (hollow diamond): Objects can exist independently.
- Composition (solid diamond): Objects are **integral parts** of the parent.

## Key Takeaways

- Conceptual models define **core objects and relationships** in a system.
- The design process progresses through three perspectives:
  - Essential
  - Specification
  - Implementation
- UML diagrams help visualize:
  - Objects
  - Relationships
  - Interactions
- Conceptual models evolve by adding:
  - Attributes
  - Operations
  - Views
- Understanding **inheritance and composition** helps designers manage complexity and collaborate effectively with developers.
