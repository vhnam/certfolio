---
title: "Testing and iterating on designs"
description: ""
---

## Contents (TOCS)

```md
- Plan a usability study
- Conduct a usability study
- Analyze and synthesize usability study results
- Iterate on high-fidelity designs
- Document and share designs
- Module 5 review
```

## Planning a UX Research Study

### Overview

A UX research plan is a **step-by-step guide** to study users and their needs. It contains **seven elements** that structure and guide the research process.

### Seven Elements of a UX Research Plan

1. **Project Background**
   - Explains the situation leading to the need for research.
   - Answers: _“What led you to conduct this research?”_
   - Acts as a brief summary for stakeholders.
2. **Research Goals**
   - Define what you aim to solve or learn.
   - Fit into one of three categories depending on product life cycle stage.
   - Answers: _“How will research results impact design decisions?”_
3. **Research Questions**
   - Specific, actionable questions the study aims to answer.
   - Not the same as participant interview questions.
   - Avoid leading or vague phrasing.
4. **Key Performance Indicators (KPIs)**
   - Quantitative measures of success or progress.
   - Examples:
     - Time spent on tasks
     - Use of navigation vs. search
     - Error rates, drop-off rates, conversion rates
     - System Usability Scale (SUS)
   - Answers: _“What would indicate progress toward our goal?”_
5. **Methodology**
   - Describes how the research will be conducted.
   - Includes steps for data collection and analysis.
6. **Participants**
   - Defines who will take part in the study.
   - Ensures the right audience and metrics are being studied.
7. **Script / Discussion Guide**
   - List of questions to ask participants during the study.
   - Guides the moderator through the usability test.

### Key Reminder

- The **research plan** connects **project goals**, **methods**, and **metrics** into one cohesive framework.

## Conducting a UX Research Study

### Overview

This is the **second step** in the UX research process — **conducting the research**.  
It focuses on running **usability studies** to evaluate how easily users can complete key tasks.

### Usability Studies

- **Definition:**  
  A research method used to assess how easy it is for participants to complete core tasks in a product.
- **Purpose:**  
  Researchers observe participants using a prototype to identify usability issues and improve the design.

### Types of Usability Studies

#### 1. Moderated Studies

- A **moderator** guides participants through the study in real time.
- **Moderator’s role:**
  - Assign tasks to participants.
  - Observe interactions.
  - Collect feedback and ask follow-up questions.
- **Advantages:**
  - Real-time clarification and rapport building.
  - In-depth understanding through follow-up questions.

#### 2. Unmoderated Studies

- Participants complete tasks **independently**, without a moderator.
- Usually **recorded on video** for later review.
- **Advantages:**
  - Participants complete tasks in their own space and time.
  - Encourages honest, natural feedback.

### Multiple Usability Studies

- Conducted at **different stages** of the design process:
  - Example: low-fidelity prototype → high-fidelity prototype.
- **Reason:**  
  Each design version offers new insights to improve the user experience.
- **Timing consideration:**  
  The later the study, the **more costly** it is to implement changes.

### Study Size

- Recommended starting point: **around five participants.**
  - Enough to gather useful data.
  - Keeps costs and time manageable.

### Key Takeaway

- **Conducting research** means observing users in action to identify pain points.
- Choose between **moderated or unmoderated** methods based on goals and resources.
- Repeated usability studies throughout design help refine and validate the product.

## Analyzing and Synthesizing UX Research Data

### Overview

This is **step three** in the UX research process — **analyze and synthesize the data** gathered during usability studies.  
The goal is to transform raw observations into **actionable insights** that guide design improvements.

### Definition of Insights

- **Insight:** An observation that helps you understand users or their needs from a new perspective.
- **Purpose:** Explains what the data means and how it can inform design decisions.

### Four Steps to Turn Observations into Insights

1. **Gather Data**
   - Collect all notes, observations, and feedback from the usability study.
   - Include every detail from all observers.
2. **Organize Data**
   - Structure the collected information consistently.
   - Common methods:
     - **Affinity diagramming**
     - **Spreadsheet note-taking**
3. **Find Themes**
   - Identify recurring patterns or behaviors across participants.
   - Themes reveal shared pain points or successes.
4. **Create Insights**
   - Develop a list of clear, actionable insights based on the themes.
   - Strong insights:
     - Are grounded in real data.
     - Answer the research questions from the study plan.
     - Are easy to understand.
     - Build empathy for users.
     - Inspire direct design action.

### Key Takeaway

Synthesizing data transforms scattered observations into meaningful insights that help the design team **improve the user experience**.  
The next step after this process is **iterating on high-fidelity designs**.

## Iterating on High-Fidelity Designs

### Overview

This is **step four** in the UX research process — **iterating on your designs** based on feedback from usability studies.  
Iteration involves refining mockups or prototypes in Figma to improve the user experience.  
Although updating prototypes is possible, it’s often **time- and cost-intensive**, so UX designers typically start by making updates to **static mockups** first.

### Example Project: Dog Walker App

Two main **insights** from the latest usability study were addressed:

1. **Users struggled to select a date from the calendar.**
2. **Users couldn’t see the price per dog walker until the end of the scheduling flow.**

### Fixing the Date Selection Issue

1. **Identify the problem:**
   - The date picker (scrolling wheel) lacked a weekday view.
   - Users had to check a separate calendar to find specific days (e.g., Mondays).
2. **Design solution:**
   - Replace the wheel with a **calendar pop-up** accessed via a drop-down menu.
   - Create drop-down menus for **Day**, **Time**, and **Duration** fields.
   - Adjust layout spacing to accommodate the new components.
3. **Implementation in Figma:**
   - Duplicate existing screens for new versions.
   - Use the **Material Design** library for icons.
   - Source a **calendar component** from the **Figma Community** instead of building from scratch.
   - Customize colors, fonts, and spacing to match the app’s visual style.
4. **Prototype testing:**
   - Test calendar interaction — ensure smooth drop-down expansion and alignment.
   - Confirm that the new scheduling system works intuitively.

### Fixing the Pricing Transparency Issue

1. **Identify the problem:**
   - Pricing was visible only at the end of the booking process.
2. **Design solution:**
   - Add **price per dog walker** on the homepage beside the **rating** and **distance**.
   - Use consistent spacing and alignment.
   - Example: “$20/hr” for hourly rate based on session pricing.
3. **Implementation in Figma:**
   - Duplicate the homepage.
   - Add **price text and dollar icons** from the Material Design library.
   - Apply consistent color and spacing styles.
   - Copy pricing info to all relevant pages (Browse, Profile).

### Finalizing the Iteration

- **Clean up:** Remove outdated mockups and integrate new screens into the main user flow.
- **Test:** Run the updated prototype from start to finish to verify usability.
- **Outcome:** Improved scheduling flow and clear pricing information enhance the user experience.

### Key Takeaway

Iteration is a continuous process in UX design:

- Gather insights → Refine mockups → Test again.
- Each cycle improves usability and clarity.
  Designers should now **apply feedback from their own usability studies** to update their projects before moving on to stakeholder review or further testing.

## Finalizing and Handing Off Designs

### Overview

After prototyping, testing, gathering feedback, and iterating, designers must decide **when to stop iterating** and **finalize their designs** for handoff to engineering.  
Finalization is a critical step that balances design quality with production readiness.

### When Is a Design “Final”?

Avoid stopping iteration solely because of limited **time or budget** — those factors matter but shouldn’t determine design quality.  
Instead, evaluate your design using three key questions:

1. **True Representation:**  
   Are the designs a complete and accurate reflection of the intended user experience?
2. **Finalized Assets:**  
   Have all placeholder elements — text, icons, and images — been replaced with finalized versions?
3. **Independent Usability:**  
   Can users interact with and understand the design **without external guidance**?

If the answer to all three is **yes**, the design is ready for **handoff to engineering**.

### Designer Mindset

- It’s natural to feel uncertain about stopping iteration — design work can always be improved.
- However, **no product is ever truly finished**; most will evolve through updates after launch.
- Over time, UX designers develop confidence in recognizing when a design is ready for release.

### Key Takeaway

Finalize your design when it:

- Accurately represents the intended experience,
- Uses complete, real assets,
- And is understandable to users independently.

Once these conditions are met, move forward with **engineering handoff**, knowing iteration will continue post-launch as part of the product lifecycle.

## Identifying When a Design Is Complete

### Overview

Determining when a design is truly **complete** can be challenging, especially after multiple iterations.  
To decide whether a design is ready for **handoff to engineering**, evaluate it against key criteria to ensure quality, usability, and consistency.

### Key Questions to Determine Design Completion

Ask yourself the following:

1. **Intended Experience:**  
   Do the designs accurately represent the intended user experience?
2. **Finalized Assets:**  
   Have all placeholder text, icons, and imagery been replaced with finalized assets?
3. **Independent Usability:**  
   Can users interact with and interpret the designs without external help?
4. **Design System Consistency:**  
   Do the designs follow the existing design system?
5. **Platform Conventions:**  
   Do the designs align with common interaction patterns for their respective platforms (e.g., Android, iOS)?
6. **Error Handling:**  
   Do users have a clear and understandable path when something goes wrong?
7. **Accessibility:**  
   Is the design inclusive and accessible to all users?

If you can confidently answer **“yes”** to all of these, your designs are ready to move forward.

### What Completion Means

- The design fulfills the **initial project scope** and addresses the **user problem** it set out to solve.
- Once complete, designs can be **handed off to engineers** for production.

### Continuous Improvement

Even after handoff or launch:

- Expect to **iterate** based on real-world user feedback.
- Recognize that **no design is ever fully done** — improvements and updates are part of ongoing UX practice.
- Experience helps designers feel more confident in recognizing when a design is polished enough for production.

## Handoff to Engineering

### Overview

After completing your **high-fidelity prototype**, the next major step is the **design handoff** — transferring your finalized designs to engineers for production.  
While most specs are already embedded in **Figma**, designers may still need to document **edge cases** and **accessibility details** to ensure a smooth transition.

### Common Handoff Scenarios

#### 1. **Relay-Style Handoff (Typical in Small Teams or Agencies)**

- Designers complete all design details before passing work to engineers.
- Once handed off, designers usually move on to other projects.
- Works like a **relay race** — one team finishes their “lap” before the next begins.

#### 2. **Collaborative Handoff (Typical in Large Companies like Google)**

- Designers and engineers **work simultaneously** on different parts of the product.
- Example:
  - Engineers may start on the **user profile** or **shopping cart**.
  - Designers continue refining the **homepage** or **navigation**.
- **Advantages:** Faster progress.
- **Risks:** Some rework may be required if overlapping changes occur.

### Best Practices for Entry-Level UX Designers

- You may not decide the handoff process, but you’ll be **actively involved** in it.
- **Build strong relationships** with cross-functional teammates (engineers, PMs, QA) to ensure a smooth workflow.
- Stay organized and document clearly — include specs, interactions, and accessibility notes.

### Technical Logistics

- Figma simplifies collaboration by providing:
  - Design specs (colors, dimensions, spacing)
  - Interactive prototypes
  - Shared files for engineers
- A Figma demo video follows this lesson to show **how to collaborate effectively during handoff**.

### Key Takeaway

There’s **no single correct way** to hand off designs — it depends on team size, workflow, and company structure.  
Whether sequential or collaborative, successful handoff requires **clear communication, thorough documentation,** and **team alignment.**

## Collaboration and Handoff in Figma

### Overview

Design is a **collaborative process** involving multiple stakeholders — PMs, writers, researchers, designers, and developers.  
Figma enables real-time teamwork by allowing different roles to **comment, edit, inspect, and export** within the same file.  
This section concludes the _Figma for Beginners_ series, highlighting collaboration, file organization, and developer handoff best practices.

### Collaboration in Figma

#### Stakeholder Roles

- **PMs:** Brainstorm ideas and provide feedback through comments.
- **Writers:** Suggest or edit in-product copy directly.
- **Researchers & Designers:** Share and test prototypes for usability.
- **Developers:** Inspect design properties, copy code snippets, and export assets.

#### Best Practice

- **Share early and often** to foster collaboration with the right people at the right time.
- Embrace **open design** — team members can view and contribute to files at any stage.

### File Organization & Thumbnails

- Create a **custom thumbnail** (1920×960 px, safe area 1600 px wide) to help teammates quickly understand a file’s purpose.
- Include:
  - File status
  - Visual preview or illustration
  - Team or ownership info
  - Hyperlinks to pages, frames, or documentation (e.g., specs, requirements)
- Right-click → **“Set as thumbnail”** to display it in the file browser.

### Inviting Collaborators

- Invite teammates with either:
  - **Edit access:** Full design permissions.
  - **View access:** Can comment and export assets (free access).
- Invite developers early for feasibility feedback or later for handoff.
- Files can also be **embedded** in tools like product management systems or design documentation.

### Viewer Mode Features

When joining a file as a **viewer**, the interface is simplified:

- Access to:
  - **Move**, **Comment**, and **Hand** tools.
  - **Presentation view** for prototype interaction.
  - Settings for **layout grids**, **rulers**, or **pixel preview**.
- **Inspect panel:** Displays:
  - Layer names, read-only properties, and **code snippets**.
  - Style names that match production code.
  - Component descriptions or linked documentation.
- **Export panel:**
  - Export icons, images, and assets.
  - Choose file formats: PNG, JPG, PDF, or SVG.
  - Set export multipliers (e.g., 1x, 2x) for various resolutions.
  - Option to **disable exporting or copying** via the Share modal.

### Learning & Support

- Explore the **Figma Community** for shared design files and components.
- For help, click the **question mark icon** → access the **Help Center** or video tutorials.
- Continuous practice is the best way to improve Figma proficiency.

### Key Takeaway

Figma streamlines **team collaboration, feedback, and developer handoff** by centralizing all design activities in one shared platform.  
With tools for communication, inspection, and export, it ensures everyone — from PMs to engineers — can work efficiently and stay aligned.

## Creating UX Case Studies for Your Portfolio

### Overview

A **case study** is a summarized presentation of a design project.  
It showcases your **design process, problem-solving ability, collaboration skills, and final outcomes** — all of which recruiters and hiring managers look for in a UX portfolio.  
Each major project should have its own case study that tells a clear, visual, and concise story of how you improved the user experience.

### Why Case Studies Matter

- Demonstrate your **UX knowledge** and **team collaboration**.
- Show your ability to **see a project from concept to completion**.
- Help recruiters quickly understand your process and impact.

### Structure of a Strong UX Case Study

#### 1. **Title & Hero Image**

- Include a **project title** and a **hero image** (banner) that captures attention.
- Provides an overview of the product and highlights your **visual design skills**.

#### 2. **Your Role**

- Clearly define **your responsibilities** and **contributions** within the team.
- Example: “Led user research and created final visual assets.”

#### 3. **Project Summary / Challenges**

- Summarize the **goal**, **vision**, and **user problems** your design addressed.
- Present challenges in a **numbered list** for clarity and context.

#### 4. **Research Phase**

- Highlight key **research questions**, **methods**, and **insights** (not every detail).
- Include visuals such as:
  - Affinity diagrams
  - Personas
  - Competitive analysis summaries
- Focus on **what you learned**, not just what you did.

#### 5. **Ideate & Prototype**

- Show the evolution of your ideas:
  - Paper wireframes (clean examples only)
  - Low-fidelity prototypes
  - Usability study insights and iterations
- Demonstrate how **feedback shaped your design decisions**.

#### 6. **Final Designs & Style Guide**

- Include:
  - Your **sticker sheet / style guide**
  - **High-fidelity mockups** or **GIFs** of final prototypes
  - **Carousel images** to show multiple screens
- Explain how your final design **solves each problem** listed at the start.

#### 7. **Key Takeaways**

- Reflect on what you learned:
  - Insights, challenges, surprises
  - Improvements you’d make next time
- Optionally include **real data** (e.g., downloads, user metrics) for real-world projects.

#### 8. **Extra Details (Optional)**

- Add **links** to supporting materials (slide decks, PDFs, or project pages).
- Keep your main case study **concise**, using links for deeper details.

### Presentation & Feedback

- Follow the **five steps of the design process** (Empathize → Define → Ideate → Prototype → Test) to tell a cohesive story.
- Keep the layout **visual, skimmable, and narrative-driven**.
- Share your draft with peers, friends, or UX communities to get **constructive feedback**, like a portfolio critique.

### Key Takeaway

A great UX case study:

- **Tells a story** of improving the user experience,
- **Shows your process** and decision-making,
- **Highlights collaboration**, and
- **Reflects on growth and learning**.

Once complete, add your case studies to your portfolio to confidently showcase your work to recruiters and hiring managers.

## Building Your UX Case Study for Your Portfolio

### Overview

Now that you’ve completed your final mobile app designs, it’s time to **showcase your work** through a **case study** in your UX portfolio.  
A strong case study highlights your **design process, decision-making, and growth** — helping employers understand how you approach real-world problems.

### Ten Essential Elements of a UX Case Study

1. **Your Role in the Project**
   - Explain your specific responsibilities.
   - Mention collaborators if applicable.
   - For solo projects, note that you handled **all stages** of the design process.
2. **Project Goal**
   - Clearly state the **purpose** and **objective** of the project.
   - Connect it to **user needs** identified during research.
3. **Target Audience**
   - Describe the **users** you designed for and the **problems** you aimed to solve.
4. **Key Challenges or Constraints**
   - Identify challenges like **time**, **budget**, or **technical limits** that shaped your process.
5. **Research Conducted**
   - Summarize your **research methods** and **rationale** for choosing them.
   - Explain **what insights** the research uncovered and how they informed your design.
6. **Initial Concepts or Design Strategy**
   - Outline your **design process** and reasoning behind major decisions.
   - Support decisions with **data** or **usability findings** when possible.
7. **Sketches or Wireframes**
   - Include visuals such as:
     - Paper sketches
     - Wireframes
     - Low-fidelity prototypes
   - Show how your ideas evolved visually.
8. **Results of User Testing**
   - Summarize your **usability testing** results.
   - Explain **what you learned**, what issues arose, and how you addressed them.
9. **Final Polished Designs**
   - Display your **high-fidelity prototypes** or **mockups**.
   - This is your visual highlight — make it engaging and polished.
10. **Conclusion**
    - Reflect on **what you learned** from the project.
    - Discuss **future directions** or **next steps** for the product.

### Updating Your Portfolio

- Continuously **revise your portfolio** as you complete new work.
- Emphasize how you **learned, adapted, and iterated** during the design process.
- Employers value designers who:
  - Accept and apply **feedback** from stakeholders and users.
  - Demonstrate **growth and flexibility** through iterations.

### Key Takeaway

Your case study should tell a **complete, cohesive story** of your design journey — from problem discovery to final solution — while reflecting your **critical thinking, creativity, and user-centered approach.**

## References

- Medium, [Tips for deciding if your design is ready for production](https://medium.com/@andreas.johansson.dev/ux-process-how-do-you-know-when-your-design-is-done-a-simple-14-point-checklist-21b747e82954)
- UX Planet, [Guidance on determining design readiness](https://uxplanet.org/how-do-i-know-if-my-design-is-finished-a996543820b4)
- Prototypr, [Trip Tribe: A tale of UX auditing and designing through gifs](https://blog.prototypr.io/trip-tribe-a-tale-of-ux-auditing-and-designing-through-gifs-4a878d405765)
- InVision, [How to write a UX case study](https://www.invisionapp.com/inside-design/how-to-write-a-ux-case-study/)
- Adobe XD, [Case Study Template and Example](https://xd.adobe.com/ideas/perspectives/leadership-insights/ux-case-study-template/)
- Shabi, [Scapes](https://www.shabnamkashani.com/augmented-reality-project-with-google)
