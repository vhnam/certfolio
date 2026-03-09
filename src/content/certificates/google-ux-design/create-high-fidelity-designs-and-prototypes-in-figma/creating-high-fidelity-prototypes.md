---
title: "Creating high-fidelity prototypes"
description: ""
---

## Contents (TOCS)

```md
- Understand high-fidelity prototypes
- Explore gestures and motion
- Module 3 review
```

## High-Fidelity Prototypes

### Definitions

- **Prototype**: An early model of a product demonstrating functionality.
- **Low-fidelity prototype**: Interactive design using placeholders for content and basic navigation.
- **High-fidelity prototype**: Detailed, interactive design closely matching the final product with realistic visuals and content.

### Key Differences

| Aspect       | Low-Fidelity Prototype    | High-Fidelity Prototype               |
| ------------ | ------------------------- | ------------------------------------- |
| **Focus**    | Structure and flow        | Realistic visuals and interactivity   |
| **Content**  | Placeholder text or lines | Real or realistic content             |
| **Purpose**  | Identify usability issues | Simulate final experience for testing |
| **Fidelity** | Simple and conceptual     | Detailed and polished                 |

## Core Components of a High-Fidelity Prototype

1. **Visual Elements**
   - Include finalized design content: color, typography, icons, and imagery.
   - Confirm all text, graphics, and external links are accurate.
   - Replace placeholders with realistic content (e.g., replace “Dog Walker A” with actual names and profile photos).
2. **Navigation**
   - Ensure smooth user movement between screens.
   - Reflect the main user flow defined earlier.
   - Add buttons, back arrows, and exit (X) icons for intuitive navigation.
   - **Navigation Checklist:**
     - How does the user get from one screen to another?
     - How easy is it to locate navigation icons?
     - Where does the user journey end?
3. **Interactivity**
   - Connect screens to simulate real app interactions.
   - Incorporate gestures and motion for natural, responsive behavior.
   - Ensure transitions mirror real app flow and logic.

## Creating a High-Fidelity Prototype in Figma

### Overview

There are **six main steps** to creating a high-fidelity prototype in Figma:

1. Lay out mockups
2. Connect screens
3. Add interaction details
4. Adjust animation
5. Complete for all screens
6. Share your work

### Step 1: Lay Out the Mockups

1. Create a **new page** in the same Figma file as your mockups.
2. Copy and paste your mockup frames into this new page.
3. Arrange them according to the **user flow** (e.g., Home → Select Date → Choose Dog Walker → Confirm Booking).

### Step 2: Connect the Screens

1. Select an **interactive element** (e.g., “Book Appointment” button).
2. Switch to **Prototype mode** in the right panel.
3. Click the blue **plus icon** (prototype node) on the hotspot.
4. Drag the **arrow (connection)** to the target frame.
5. Define the **starting frame** (first connected frame becomes the starting point).
6. Repeat for all interactions in the user journey.

**Tip:** Arrange screens in logical order before connecting them to maintain a smooth navigation flow.

### Step 3: Add Interaction Details

Each interaction includes **three parts**:

1. **Trigger** — What initiates it (e.g., “On Tap,” “On Click,” “After Delay”).
2. **Action** — Defines what happens (e.g., “Navigate To” another frame).
3. **Destination** — Specifies the target frame or overlay.

Example: “Book Appointment” button → Navigate To → “Appointment Details” screen.

### Step 4: Adjust the Animation

- Controls how screens transition during navigation.
- Figma provides **8 transition types** (e.g., Instant, Move In, Slide In, Push).

**Example:**

1. “Book Appointment” → Slide In (Up) for new screen.
2. “X” button → Slide Out (Down) for returning to home screen.

**Tip:** Keep transitions consistent (use the same direction for open/close animations) to enhance clarity.

### Step 5: Complete for All Screens

- Repeat the process across every connected screen.
- Test and refine gestures, transitions, and animation speed.
- Ensure each step supports intuitive navigation and feedback.

### Step 6: Share Your Work

1. Click **Share** in the top-right corner.
2. Adjust permissions:
   - **View** for usability testing.
   - **Edit** for collaboration.
3. Share link with stakeholders or teammates for feedback.

## Gestures and Motion in High-Fidelity Prototypes

### Definitions

- **Gesture:** Touch-based interaction with a device (tap, swipe, drag, pinch). Describes how users interact.
- **Motion:** Animation or movement that gives feedback, provides context, and improves engagement.

### Common Gestures

- **Swipe:** Move horizontally or vertically to navigate between screens.
- **Tap:** Single touch to select or activate items.
- **Drag:** Tap, hold, and move to reorder or reveal hidden elements.
- **Pinch:** Move two fingers together/apart to zoom in or out.

### Gestures Across Platforms

| Platform             | Guidelines                       | Example                                      |
| -------------------- | -------------------------------- | -------------------------------------------- |
| **iOS (Apple)**      | Human Interface Guidelines (HIG) | Undo text: swipe three fingers right to left |
| **Android (Google)** | Material Design Guidelines       | Undo text: tap and hold, then press delete   |

**Insight:** Use gestures that feel natural to each platform; test across devices to ensure usability and consistency.

### Motion in UX Design

**Purpose:**

- Focuses user attention.
- Provides feedback (e.g., confirming a completed action).
- Communicates hierarchy and transitions.

**Examples:**

- **Add-to-cart animation** confirms successful actions.
- **iOS Jiggle Mode:** Press and hold icons to edit layout.
- **Android App Menu Motion:** Press and hold → bounce and reveal contextual menu.

### Accessibility in Gestures and Motion

1. **Provide Alternatives to Gestures**
   - Offer multiple ways to complete an action (e.g., swipe or button press).
   - Example: Gmail’s “Swipe to archive” or “Tap Archive button.”
2. **Control Motion Speed and Duration**
   - Avoid excessive or overly long animations.
   - W3C recommends **under five seconds** for animations.
3. **Allow Users to Disable Motion**
   - Provide toggles for autoplay or looping animations.
   - Example: YouTube’s autoplay toggle supports user control.

**Key Principle:** Gestures and motion should enhance usability—not exclude or overwhelm users.

## Designing for Accessibility — Insights from Jen, Head of Google Accessibility UX

### Mission and Approach

- Jen’s team ensures all Google products are **usable and accessible**.
- Accessibility empowers users with disabilities to work, learn, and engage equally.
- Tools include **screen readers**, **pinch-to-zoom**, **captions**, and **magnifiers**.

### Accessibility Across Design Phases

1. **Research Phase:**
   - Involve users with disabilities in interviews and testing.
   - Builds authentic understanding of real-world needs.
2. **Design Phase:**
   - Apply inclusive principles: high contrast, readable text, representative imagery.
   - Prioritize usability for all ability levels.
3. **Testing & Iteration:**
   - Include accessibility testing and post-launch feedback loops.

### Co-Design and Impact

- Co-designing with people with disabilities results in more inclusive products.
- Accessibility enhances quality for everyone — not just specific users.

**Key Takeaway:**

> Accessibility **is good design**. It improves usability, creativity, and the overall product experience.

## Creating and Sharing an Interactive Prototype in Figma

### Setup and Workflow

1. Duplicate your design page for prototyping.
2. Enter **Prototype Mode**.
3. Create connections:
   - **Hotspot:** Interactive trigger (e.g., menu icon).
   - **Connection:** Defines behavior between frames.
   - **Destination:** Target screen.

**Example:**  
Menu icon → Menu page → “Home” text → back to Home screen.

### Customizing Interactions and Animations

- **Default:** “Instant” (no animation).
- **Recommended:** Use “Move In,” “Move Out,” or “Push” for smoother transitions.
- Set direction (Left, Right, Up, Down) and adjust **duration** and **easing**.

**Tip:** Reverse animations for returning actions to maintain visual logic.

### Expanding the Prototype

- Add more interactions for screens like **Profile** and **Search**.
- Use “Push” for horizontal page transitions.
- Add **Back** or **Cancel** buttons for easy navigation.

**Bonus:** The **Back Action** in Figma automatically returns users to the previous frame.

### Sharing and Collaboration

1. Click **Share** → “Anyone with link → Can View.”
2. Copy link to share with team or stakeholders.
3. Use **Observation Mode** to watch testers interact in real time.
4. Leave **comments** (`C` shortcut) directly on screens for feedback.

### Incorporating Feedback

- Add requested UI interactions (e.g., Like, Bookmark, Comment).
- Improve usability (e.g., add Back icon to menu).
- Use **components** and **auto layout** for faster updates.

## Enhancing High-Fidelity Prototypes with Sound and Video

### Sound in UX Design

**Purpose:**

- Provides feedback and confirmation for actions.
- Enhances emotional engagement.

**Examples:**

- Notification ping (Google Chat).
- Success/failure sounds for uploads/downloads.

**Best Practices:**

- Use sound **sparingly** and **contextually**.
- Include sound toggles or mute controls.
- Match tone to context (avoid harsh or inconsistent sounds).

### Video in UX Design

**Purpose:**

- Boosts engagement, immersion, and storytelling.
- Example: Netflix autoplay previews draw attention to content.

**Best Practices:**

- Include volume, replay, and stop controls.
- Provide captions and transcripts.
- Allow users to toggle autoplay or auto-mute.

### Accessibility Considerations

- **Sound:** Offer visual/text feedback for users who cannot hear.
- **Video:** Ensure captions, transcripts, and controls are available.

**Goal:**  
Design multimedia experiences that are **inclusive**, **optional**, and **enhance usability**.

### Final Takeaway

High-fidelity prototypes combine **visuals**, **navigation**, **interactivity**, **motion**, **sound**, and **video** to simulate a real product experience.  
Designers must balance realism and accessibility — ensuring every interaction is **engaging, intuitive, and inclusive**.

## References

- Material Design, [Gestures](https://m3.material.io/foundations/interaction/gestures)
- Nielsen Norman Group, [The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/#:~:text=Summary%3A%20Animation%20in%20UX%20must,metaphors%2C%20and%20to%20enhance%20signifiers.&text=Share%20this%20article%3A&text=Motion%20is%20most%20often%20appropriate,induce%20delight%20or%20entertain%20users)
- Medium, [Motion Manifesto](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc)
- Toptal, [Sound Advice: A Quick Guide to Designing UX Sounds](https://www.toptal.com/designers/ux/ux-sounds-guide)
- Nielsen Norman Group, [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)
- UX Planet, [Best Practices for Video](https://uxplanet.org/best-practices-for-video-e279efcfe7eb)
