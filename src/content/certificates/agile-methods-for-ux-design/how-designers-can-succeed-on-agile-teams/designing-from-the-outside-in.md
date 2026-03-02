---
title: Designing from the Outside In
---

## The Problem in Agile Teams

### Limited Head Start for Design

- Simultaneous work: Design and engineering often receive stories at the same time.
- Sprint zero limitation: Even with a one-sprint head start, large features may not fit comfortably.
- Time pressure: Research, ideation, testing, and specification must happen quickly.

### Example Scenario: Onboarding Improvement

- Goal: Increase onboarding completion from 50% to 70%.
- Completion definition:
  - Upload resume
  - Add personal description
  - Select skills
- Required work:
  - Research why users drop off
  - Prototype and test solutions
  - Define UI changes, error states, notifications
  - Specify edge cases and navigation changes

### Agilefall Anti-Pattern

- Agilefall: Forcing full waterfall design before engineering begins.
- Risk:
  - Designers become bottlenecks.
  - Large features cannot realistically be completed in one sprint.
  - Teams attempt to “finish everything first” before development.

## What Is Designing from the Outside In?

### Definition

- Designing from the outside in: Identify and start big-picture or structural work before finalizing all interface details.
- Goal: Enable parallel work between design and engineering.

### Core Principle

- Separate:
  - Structural/technical foundations (“plumbing”)
  - Interface and interaction details
- Collaborate closely so engineers can begin implementation while design refines specifics.

## How It Works in Practice

### Step 1: Define the Big Picture

- Clarify:
  - What makes a “complete” onboarding?
  - What user outcomes are required?
- Choose direction:
  - Wizard flow (step-by-step)
  - Editable profile with nudges
  - Progress bar or checklist
  - Reminder emails or notifications

### Step 2: Start Parallel Engineering Work

Engineers can begin work that does not depend on final UI details:

- Build resume upload infrastructure.
- Set up wizard framework.
- Create notification/email system backend.
- Implement analytics and tracking for completion metrics.

Designers simultaneously:

- Refine layouts and flows.
- Write error messages.
- Define interaction details.
- Test prototypes with users.

### Step 3: Avoid Bottlenecks

- No single team waits for full specifications.
- Large features become manageable by overlapping work.
- Feedback cycles start sooner.

## When It’s Not Necessary

- Small, incremental changes may not require this approach.
- Example:
  - Adding a “most recent job title” field.
  - Minor interaction adjustments.
- These can often be decided in direct collaboration with engineering.

## Benefits of Designing from the Outside In

### Faster Delivery of Large Features

- Parallel work reduces delays.
- Engineers are not idle waiting for detailed specs.
- Designers are not pressured to finalize every edge case upfront.

### Better Alignment with Agile Principles

- Reduces large handoffs.
- Encourages collaboration.
- Gets features in front of users sooner.
- Enables faster feedback and iteration.

## Key Takeaways

- Avoid agilefall: Don’t squeeze full waterfall design into a sprint.
- Identify big-picture engineering work early.
- Enable parallel progress between design and engineering.
- Use collaboration to prevent bottlenecks.
- Ship sooner to learn sooner—the core of agility.
