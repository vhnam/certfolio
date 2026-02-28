---
title: How Does Accessibility Testing Differ From Other Kinds of Testing?
---

## Types of Testing

### Usability Testing

- Usability testing: Task-based evaluation using a think-aloud protocol to discover usability issues.
- Environment: Any device, any location (e.g., lab-based or remote).
- Focus: Open discovery of issues as users attempt realistic tasks.

Key characteristics:

- Think-aloud method
- Task-based scenarios
- Flexible setup
- Observational research

### Accessibility Testing

- Accessibility testing: Think-aloud, task-based testing conducted with assistive technology on the user’s own device and configurations.
- Environment: Preferably in the user’s home or workplace.
- Moderation style: Chair-side (researcher sits beside participant).
- Focus: Open discovery of barriers encountered with assistive technology.

Key characteristics:

- Think-aloud protocol
- Assistive technology (user’s device/configs)
- Chair-side moderation
- Real-world environment

### Code-Level Testing

- Code-level testing: Technical validation of code quality and compliance.
- Focus areas:
  - Code efficiency
  - Errors
  - Conformance to guidelines
  - Debugging

Purpose:

- Ensure the system functions correctly from a technical perspective.

### QA / User Acceptance Testing (UAT)

- QA testing: Verifies implemented features match specifications.
- User Acceptance Testing: Confirms the product works as designed before release.

Key distinction:

- QA/UAT: Tests what was built.
- Accessibility/Usability testing: Tests whether it works for users and meets real needs.

## Accessibility Testing Fundamentals

### Why Accessibility Testing Is Essential

- Core process element: Not a “nice to have,” but a required part of accessibility optimization.
- Real-world validation: Reveals issues beyond guidelines and automated checks.
- Industry momentum: Increasing recognition across organizations that accessibility testing must be embedded in workflows.

### Accessibility Testing vs. Usability Testing

Similarities:

- Think-aloud protocol
- Task-based scenarios
- Metrics collection
- Open discovery of issues

Differences:

- Assistive technology required.
- Conducted with the user’s actual device and personalized configurations.
- Typically moderated chair-side.
- All materials read aloud.

## Testing in the User’s Natural Environment

### User Device and Configuration

- Personalized setups: Many users customize screen readers (e.g., speed, verbosity, shortcuts).
- Comfort zones: Configurations reflect disability type, tech proficiency, and preference.
- Lab risk: Default setups may not reflect real-world usage.

Best practice:

- Test using the participant’s own device and assistive technology settings.

### Lab vs. In-Home Testing

#### Lab Testing

Requires:

- Dedicated accessibility lab
- Licensed and fully configured assistive technologies
- Staff and budget support

Risks:

- Technical issues (e.g., demo software expiring)
- Time lost troubleshooting instead of testing
- Artificial environment

#### In-Home or Workplace Testing

Advantages:

- Authentic setup
- Reduced logistics for participants
- Higher ecological validity
- More accurate insights

Recommendation:

- Conduct accessibility testing in the user’s natural environment whenever possible.

## Accessibility Testing Methodology

### Core Best Practices

Accessibility testing follows usability testing best practices:

- Think Aloud
- Gather metrics:
  - Success Rate
  - Time on Task
  - Errors / Confusions
  - Subjective Satisfaction

### Accessibility-Specific Adjustments

#### Read Everything Aloud

The moderator should read:

- Tasks
- Subjective satisfaction questionnaires

Rationale:

- Avoid inaccessible documents (e.g., non-optimized PDFs).
- Reduce cognitive and technical load on participants.
- Increase comfort and efficiency.

#### Chair-Side Moderation

- Chair-side: Researcher sits beside the participant.
- Enables:
  - Real-time clarification
  - Better observation of assistive technology use
  - Improved data collection
  - Participant comfort

Remote or one-way mirror setups are typically less practical due to the complexity of assistive technology interaction.

## Metrics and Data Collection

Accessibility testing collects standard usability metrics:

1. Success rate: Whether users complete the task.
2. Time on task: Duration required to complete tasks.
3. Errors/confusions: Points of breakdown or misunderstanding.
4. Subjective satisfaction: User-reported experience rating.

Key principle:

- QA confirms functionality.
- Accessibility testing confirms usability with assistive technology in real-world conditions.
