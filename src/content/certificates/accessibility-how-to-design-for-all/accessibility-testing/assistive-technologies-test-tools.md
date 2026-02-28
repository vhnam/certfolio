---
title: "Assistive Technologies: Test Tools"
---

## Assistive Technology (AT)

### Core Assistive Technologies

- Magnifiers: Screen enlargement tools (e.g., ZoomText, MAGic, built-in mobile magnifiers).
- Screen readers: Convert on-screen content into speech or Braille (e.g., JAWS – PC, VoiceOver – iOS, NVDA – Windows, TalkBack – Android).
- Keyboard: Primary non-mouse navigation method.
- Digital Braille (Brailler): Hardware device that outputs Braille and allows tactile navigation.
- Closed captioning: Text equivalent for audio in video content.
- Speech input: Voice dictation for entering text.
- Alternative input devices:
  - Head pointer
  - Single switch device
  - Motion tracking systems

## Assistive Technology by Disability Type

### Blind

- Screen readers (JAWS, VoiceOver, NVDA, TalkBack)
- Keyboard
- Digital Braille display (when applicable)

### Low Vision

- Magnifiers (ZoomText, MAGic, built-in tools)
- Keyboard
- Sometimes screen reader (hybrid usage)

### Mobility Impairments

- Speech input
- Alternative input devices (head pointer, switch device, motion tracking)
- Keyboard

### Cognitive Disabilities

- No specific AT required
- Emphasis on:
  - Plain language
  - Reduced complexity
  - Clear structure

### Deaf & Hard of Hearing (HOH)

- Closed captioning
- Speech-related tools where relevant

## What to Include in Accessibility Testing Scope

### Keyboard Accessibility

- Test for keyboard accessibility: All functionality must work without a mouse.
- Tab focusability and tab order: Logical and predictable navigation sequence.
- Keyboard functionality: Arrow keys, Enter, Space, Escape, Shift+Tab, etc.
- Keyboard functionality with screen reader on: Validate combined interaction.
- Visual focus indicator: Clearly visible focus state.
- Keyboard traps: Ensure users can move forward and backward freely.

### Effective Focus Management

Test focus behavior in:

- Form validation
- Dialogs and modals
- Dynamic content (e.g., AJAX updates)
- Pop-ups and overlays

Common issue:

- Mouse bias: Interfaces designed primarily for mouse interaction create barriers for keyboard and screen reader users.

## Use the User’s Assistive Technology

### Why Test with the User’s Technology?

Prefer testing in the user’s home or workplace.

Benefits:

- Observe organic issues: Real-world behavior on their actual device.
- Use existing configurations: Respect user’s custom settings.
- Increase comfort: Familiar environment reduces stress.
- Avoid friction:
  - Old versions
  - Different machines
  - Different layouts
  - Misconfigured assistive tech

Best practice:

- Profile user’s assistive technology in advance (device, OS, version, configuration).

## Do a Dry Run

Accessibility testing requires more planning than standard usability testing.

### Purpose of a Dry Run

1. Validate logistics: Ensure everything is ready.
2. Test assistive technology setup: Confirm compatibility.
3. Identify configuration issues: Especially if testing in a lab.
4. Allow preliminary participant test: Have a user perform a short trial.

Recommendation:

- Strongly prefer testing in the user’s home.
- If testing in a corporate lab, perform at least one rehearsal session.

## Prepare Support Resources

### Coordinate in Advance

- Sign language interpreter: Arrange if needed.
- Support person: Allow friend or family member to attend.
- Advocate/interpreter briefing: Share task types and session format beforehand.

### Provide Alternative Formats

- Braille documents: Available online or locally if required.
- Printed materials: Large font if necessary.

Best practice:

- Read tasks and questions aloud to avoid reliance on printed or PDF documents.
- Frame session as informal research rather than a “test” to reduce participant stress.

## Moderator Preparation & Comfort

- Moderator confidence: Directly affects participant comfort.
- Calm delivery: Reduces anxiety and improves data quality.
- Focus on moderation: Avoid simultaneously moderating and note-taking when possible.
- Respect user’s preferred speed: Allow screen reader speech rate as normally used.

## Key Preparation Principles

- Include the appropriate assistive technologies based on disability type.
- Validate keyboard and focus behavior before user sessions.
- Use the participant’s own device and configurations whenever possible.
- Conduct a dry run.
- Prepare logistical and support resources in advance.
- Prioritize comfort, clarity, and smooth moderation.
