---
title: "How to Find Your Way Around Requirements: Features, Epics, and Constraints"
---

## Understanding Features

### Definition of Features

- Feature: A **characteristic of a solution** that delivers value to users.
- Nature of Features: Often loosely defined and may combine **multiple requirements**.
- Scope: Can exist in both **physical products** and **software systems**.

Examples of software features:

- Shopping basket in an e-commerce system
- Hotel self-check-in functionality
- End-to-end encryption in messaging platforms

Features often represent a **bundle of requirements** rather than a single capability.

## Types of Requirements Within Features

### Functional Requirements

- Functional requirements: Actions or tasks a system **must perform for users**.
- Description: Typically expressed through **stories of use** (use cases, user stories, persona stories).
- Focus: Defines **what the system does**.

Examples:

- Adding items to a shopping basket
- Checking in or out of a hotel
- Managing product listings

### Non-Functional Requirements

- Non-functional requirements: Conditions describing **how the system must operate**.
- Also called: **Constraints**.
- Impact: Affect multiple features or stories of use.

Examples:

- End-to-end encryption
- Mobile-friendly design
- Security standards

## Example: WooCommerce Feature Structure

### Feature Groups

WooCommerce demonstrates how features often represent **large groups of requirements**.

Key feature areas:

- Product Management: Manage physical, digital, and variable products.
- Inventory Management: Track stock levels and alerts.
- Payment Integration: Connect payment gateways such as PayPal or Stripe.
- Shipping Options: Configure shipping rates, free shipping, or pickup.
- Tax Management: Automatically calculate taxes based on location.
- Coupons and Discounts: Create promotional offers.
- Order Management: Manage orders from the admin dashboard.
- Customer Accounts and Guest Checkout: Allow accounts or guest purchases.
- Mobile-Friendly: Responsive shopping experience.
- Analytics and Reporting: Access sales and customer insights.
- Extensibility: Extend functionality through plugins.
- SEO-Friendly: Optimized for search engines.
- Security: Secure payments and regular updates.
- Multilingual Support: Translation plugin compatibility.
- Product Reviews: Enable customer reviews.

#### Feature vs Epic Example

- Product Management: Often treated as an **epic** due to its complexity.
- Mobile-Friendly Design: A **non-functional requirement** influencing many features.

## Managing Feature Complexity

### Impact on the User Interface

Adding new features increases UI complexity, especially when they introduce **new conceptual objects**.

Evaluation criteria:

- Number of **new concepts introduced**
- User **familiarity with those concepts**

Example scenarios:

- Checkout feature: Usually easy to understand because users are familiar with it.
- Group purchase feature: Introduces unfamiliar concepts like:
  - Shared billing
  - Payment ownership
  - Group management

New concepts require additional:

- Screens
- Interaction flows
- Rules and states

Without careful design and testing, complexity can **confuse users**.

### Impact on Development

Adding major features during development can create structural problems.

Common issues:

- Design erosion: Gradual loss of system clarity caused by uncoordinated changes.
- Coupling: High interdependence between system components.

#### Design Erosion

- Design erosion: The **progressive degradation of system structure** as incremental changes accumulate.
- Result: Systems become harder to maintain, understand, and modify.

#### Coupling

- Coupling: The **degree of dependency between components** in a system.
- Problem: Highly coupled systems make changes risky because modifications in one area affect others.

## Object-Oriented Design Concepts

### Encapsulation

- Encapsulation: Objects hide their internal implementation.
- Principle: Users interact with **what the object does**, not **how it works**.
- Benefit: Systems remain flexible even when internal implementation changes.

Example:

- A mechanical watch and a digital watch both provide the **same time function**, even though their internal mechanisms differ.

### Object Behavior and Attributes

Objects are defined by:

- Operations/Services: What the object **does**.
- Attributes: Data or properties that influence behavior.

Key design insight:

- Behavior changes may require **new objects**.
- Attribute changes alone usually **do not justify new objects**.

## Object-Oriented UI Example: Smartwatch

A smartwatch demonstrates object-oriented design principles.

Key objects/services:

- Activity tracking service
- GPS tracking for runs
- Relaxation or breathing exercises
- Weather display
- Heart rate monitoring

Characteristics:

- Services are largely **independent objects**
- Low coupling improves flexibility
- Each object provides **specific functionality**

UI structure example:

- Menu: An object controlling navigation.
- Views: Interfaces that allow users to interact with underlying objects.

## Key Takeaways

### Features Are Combinations of Requirements

A feature often includes:

- Functional requirements: What the system must do.
- Non-functional requirements: Constraints on how it works.
- Epics: Large feature groups made of multiple stories.

This combination makes features **more complex than they initially appear**.

### Evaluating Features

When assessing new features, consider:

- User value: Does it support user goals?
- Conceptual complexity: Does it introduce unfamiliar ideas?
- System structure: Will it increase coupling or design erosion?

Good feature decisions help:

- Maintain **usable interfaces**
- Preserve **clean system architecture**
- Keep teams aligned around **user-focused goals**
