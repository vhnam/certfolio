---
title: Why Object-Oriented UI Design is Your Secret Career Advantage
---

## Why Object-Oriented UI Design Matters

### The Opportunity for Designers

- Object-Oriented UI Design (OOUI): A design approach that organizes interfaces around **objects, attributes, and operations** instead of features and screens.
- Object-oriented thinking: A structured method developers have used since the **1990s** to manage complex systems.
- Missed opportunity: Many designers still rely on **feature-driven design**, while OO principles could greatly improve interface clarity.

Benefits for designers:

- Creates **clear and coherent interfaces**
- Improves collaboration with developers
- Helps manage complex systems
- Produces interfaces that feel **natural and intuitive**

## Understanding Interfaces Through Objects

### Core Principle of OOUI

Object-oriented UI design focuses on the **things users interact with** and how those things relate.

- Objects: Core concepts users recognize (e.g., photo, message, profile).
- Attributes: Properties or details of an object.
- Operations: Actions users can perform on the object.

Instead of starting with features, designers start with **user-recognizable objects**.

### Example: Instagram as an Object-Oriented UI

Instagram can be described using an object-oriented conceptual model.

Key objects:

- Home
- Feed
- Post
- Profile
- Reel
- Comment
- Message
- Content

Relationships between objects:

- Home **has a** feed.
- Feed **contains** many posts.
- Post **has** content.
- Post **has** comments.
- Post **links to** a profile.
- Reel **is a type of** post.

These relationships form the **conceptual model** that makes the interface easy to understand.

### Types of Object Relationships

- Has-a relationship: One object contains another.
- Is-a relationship: One object is a type of another object.
- Part-of relationship: One object is a component of another.

When these relationships match users’ expectations:

- Navigation becomes predictable
- Users understand system structure
- Interfaces feel natural and trustworthy

## Feature-First vs Object-Oriented Design

### Feature-First Design

Traditional UX workflows often follow this process:

1. Designers imagine a feature.
2. Designers create UI to support the feature.
3. Repeat until the product feels complete.

Problem:

- Features become **disconnected pieces**
- Interfaces grow messy as complexity increases
- Users struggle to understand system structure

### Example: Travel Booking Interface (Feature-Based)

A feature-driven design might include:

- Seat selection
- Meal preferences
- Share itinerary

These features are added separately and may not connect conceptually.

### Object-Oriented Design Approach

Instead of features, designers start with the **central object**.

Example object:

- Reservation

Attributes of reservation:

- Flights
- Passengers
- Seats
- Meals

Operations of reservation:

- Book
- Change
- Cancel
- Share

Outcome:

- Features emerge naturally from the **central object**
- The interface becomes **consistent and logical**

## Benefits of Object-Oriented UI Design

Object-oriented thinking improves both design quality and collaboration.

Advantages:

- Better alignment between **design and development**
- Clearer communication with engineers
- Easier management of complex products
- Interfaces scale more gracefully
- Reduced redesigns and bugs
- More intuitive user experiences

Instead of patching features together, designers create systems that **grow naturally from core concepts**.

## Conceptual Models in UI Design

### What Is a Conceptual Model

- Conceptual model: The underlying structure of objects and relationships that explains how a system works.

A strong conceptual model helps users:

- Predict what will happen
- Understand navigation
- Build confidence while using the product

### Example: Elevator Conceptual Models

Two different conceptual models exist for the same system.

#### User Conceptual Model

![User's conceptual model of an elevator.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/master-the-object-oriented-principles-behind-every-great-ui/object-oriented-ui-design-illustrations-users-model.avif)

Objects visible to users:

- Call button
- Elevator door
- Floor selector
- Floor indicator

Typical interaction:

1. Press call button.
2. Watch indicator to see elevator arrival.
3. Enter elevator.
4. Select floor.
5. Watch floor indicator.

Users only need to understand **how to use the elevator**, not how it works internally.

#### Engineer Conceptual Model

![Engineer's conceptual model of an elevator.](../../../../assets/images/object-oriented-ui-design-build-interfaces-users-love/master-the-object-oriented-principles-behind-every-great-ui/object-oriented-ui-design-illustrations-engineers-model.avif)

Engineers model the system differently.

Objects may include:

- Motors
- Control systems
- Sensors
- Safety mechanisms
- Door control logic

Engineers require deeper understanding to **diagnose and control the system**.

Key insight:

- Designers focus on the **user’s conceptual model**, not the engineering one.

## Modeling Objects in UI Design

Designers often represent objects using **class diagrams**.

### Class Diagrams

- Class diagram: A diagram that shows objects and their relationships.
- Origin: **Unified Modeling Language (UML)** from object-oriented software design.

These diagrams are similar to:

- Entity-relationship diagrams used in database design.

### Key Elements of Object Models

#### Objects

- Represent real concepts users interact with.

Examples:

- Reservation
- Post
- Profile
- Message

#### Attributes

- Attributes: Information or data belonging to an object.

Example:

- Floor Indicator attribute → current floor

#### Operations (Methods)

- Operations: Actions users can perform on objects.

Example:

- Call Button method → call

Example state attribute:

- Call Button attribute → pushed state

Objects can contain:

- Only attributes
- Only operations
- Or both

## The Key Takeaway

Object-oriented UI design focuses on **conceptual objects that users already understand**.

Instead of designing disconnected features:

- Identify core objects (e.g., reservation, account, basket).
- Define their attributes.
- Define their operations.

Benefits:

- Interfaces become **consistent and scalable**
- Complex systems become easier to understand
- Designers communicate better with developers
- Products reflect **how people naturally think**

By adopting object-oriented thinking, designers move from **improvising features** to **building coherent systems that feel inevitable to users**.
