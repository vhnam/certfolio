---
title: Shape the Future of AI UX with Design Patterns
---

## Interaction Challenges in AI Products

AI is a dynamic field with new interaction challenges emerging with every product and use case. Overarching themes and general interaction problems have surfaced from designing AI-powered products and analyzing dozens of others.

Key pattern categories identified:

- Calling / summoning AI (providing user control to decide when to use AI)
- Mutual learning (educating users and capturing feedback)
- Building trust (addressing unpredictability, unreliability, and inaccuracy)
- Content generation, editing, and augmentation
- Error handling and prevention (accountability, control, and recovery)

## Summoning / Calling AI

Users need non-intrusive ways to access AI without constant interruption during focused work. Provide controls for when users want AI assistance versus handling tasks themselves.

Common interface patterns:

- Highlighting text and right-click
- Persistent buttons always visible on-screen
- Side panels and AI drawers
- Contextual popups and suggestions
- Summoning spells: shortcuts, special keys, or voice commands (e.g., "Hey AI")

Challenge: Identify the right moments when users are open to AI augmentation.

## Mutual Learning

In machine learning applications, both user and system learn from each other in a continuous loop. The system teaches what it can and cannot do while learning from user patterns, actions, and feedback.

Education patterns:

- Prompt templating and custom instructions
- Persistent context tutorials
- Generative wizards (interactive AI-generated guides)
- Capturing user feedback

This creates a beautiful mutual adaptation process.

## Building Trust

AI systems can be unpredictable, so transparency is essential to address privacy concerns, lack of understanding, and fears.

Core principles (from Microsoft):

- Make clear what the system can do
- Make clear how well the system can do what it can do

Recommended approaches:

- Introduction templates explaining core benefits and primary limitations
- Showing confidence scores
- Low performance alerts
- Asking for user consent
- Disclaimers
- Demonstrated thinking (explanations of why the system made a decision)

Example structure:

> This [feature] will help you by [core benefits]. Right now, it's not able to [primary limitations]. Over time, it will change to become more relevant to you. You can help it get better by [user actions].

## Content Generation, Editing, and Augmentation

The primary current application of AI is its generative nature: creating content, ideas, refining, editing, and augmenting human work.

Two main presentation patterns:

- Contextual suggestions (small models or signifiers appearing near the work area)
- Conversational spaces (side panels augmenting work or full playgrounds like ChatGPT)

Examples of augmentation:

- Grammar correction
- Suggested continuations
- Predictive text (e.g., Gmail's "Add more of" or "Continue with")
- Generating similar assets

Industry is experimenting but expected to converge on accepted standards.

## Error Handling and Prevention

Provide accountability and user control when things go wrong.

Key patterns:

- Admitting when wrong and apologizing for inaccuracy
- Offering ways out (e.g., stop generating)
- Supporting efficient dismissal of suggestions
- Undo automated actions
- Correcting classification errors

These help maintain user sense of control.

## Microsoft’s HAX Design Guidelines

Microsoft’s comprehensive Human-AI Interaction (HAX) toolkit includes these key guidelines:

### 1. Make Clear What the System Can Do

- Capability clarity: Communicate what the AI can and cannot do.
- Transparency: Avoid misleading expectations.

#### Supporting Insight

- Trust foundation:
  - Clearly introduce features, benefits, and limitations

### 2. Make Clear How Well the System Can Do It

- Expectation setting: Indicate accuracy and uncertainty.
- Disclosure: Show confidence, limitations, and risks.

#### Supporting Insight

- Trust-building patterns:
  - Confidence scores
  - Disclaimers
  - Performance alerts
  - Explanations of system behavior

### 3. Time Services Based on Context

- Context awareness: Trigger AI at the right moment.
- Non-intrusiveness: Avoid interrupting focused work.

### 4. Show Contextually Relevant Information

- Relevance: Align outputs with user context.
- Situational awareness: Deliver the right info at the right time.

### 5. Match Relevant Social Norms

- Cultural alignment: Adapt tone and communication style.
- Localization: Respect social expectations.

### 6. Mitigate Social Biases

- Bias prevention: Avoid reinforcing stereotypes.
- Inclusivity: Ensure fair representation.

### 7. Support Efficient Invocation

- Accessibility: Let users summon AI when needed.
- Control: Users decide when AI is used.

#### Supporting Insight

- “Calling AI” patterns:
  - Highlighting text
  - Right-click actions
  - Persistent buttons
  - Side panels / drawers
  - Contextual suggestions
  - Keyboard shortcuts / voice commands

### 8. Support Efficient Dismissal

- Non-obtrusive design: Easy to ignore AI.
- Respect user focus: Avoid forcing interactions.

### 9. Support Efficient Correction

- Editability: Users can refine outputs.
- Control loop: Keep humans in charge.

#### Supporting Insight

- Error recovery patterns:
  - Undo actions
  - Stop generation
  - Correct outputs
  - Provide escape routes

### 10. Scope Services When in Doubt

- Uncertainty handling: Limit actions when unsure.
- Clarification: Ask instead of assuming.

### 11. Make Clear Why the System Did What It Did

- Explainability: Show reasoning behind outputs.
- Transparency: Build user trust.

#### Supporting Insight

- Explanation patterns:
  - “Why this result”
  - Demonstrated reasoning
  - Algorithm transparency

### 12. Remember Recent Interactions

- Continuity: Maintain short-term memory.
- Efficiency: Avoid repeated inputs.

### 13. Learn from User Behavior

- Personalization: Adapt to user patterns.
- Feedback loop: Improve over time.

#### Supporting Insight

- Mutual learning loop:
  - System learns from user behavior
  - User learns system capabilities
  - Continuous adaptation between both

### 14. Update and Adapt Cautiously

- Stability: Avoid breaking workflows.
- Gradual change: Improve safely.

### 15. Encourage Granular Feedback

- Feedback collection:
  - Ratings
  - Likes/dislikes
  - Corrections
- Continuous improvement: Learn from feedback.

#### Supporting Insight

- Learning mechanisms:
  - Prompt templates
  - Custom instructions
  - AI-generated tutorials
  - Feedback capture systems

### 16. Convey the Consequences of User Actions

- Transparency: Explain impact of actions.
- Guidance: Inform before/after interactions.

### 17. Provide Global Controls

- Customization: Let users adjust AI behavior.
- Discoverability: Keep controls accessible.

### 18. Notify Users about Changes

- Communication: Inform about updates.
- Expectation management: Help users adapt.

## Beyond Text Prompts: Innovative Patterns

Traditional text prompts place burden on users who often don’t know exactly what to ask. Better interfaces should guide exploration with nudges.

Emerging patterns:

- **Daemons**: Background characters with different personalities/temperatures (critical, creative, summarizer) to explore AI output through various lenses.
- **Branches**: Explore cause-and-consequence chains for deeper discovery.
- **Fine-tuning and versioning**: Quick refinement of output via context menus or selections.
- **Actionable parts**: Apply specific actions to selected portions of AI output (find evidence, generate questions, synthesize, critique).

## The Takeaway

Five broad categories of AI design patterns:

- Calling/summoning AI
- Mutual learning
- Building trust
- Generating content and ideas
- Error prevention and handling

Many patterns adapt existing interface heuristics to AI contexts. There is still ample room for innovation. Base all decisions on sound research and rigorous testing. Experiment, innovate, and help shape responsible AI experiences.

## References

- Interaction Design Foundation, [How to Elevate the User Experience of AI with Design Patterns](https://ixdf.org/master-classes/design-patterns-for-ai-ux)
