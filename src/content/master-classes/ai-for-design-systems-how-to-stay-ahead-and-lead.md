---
title: "AI for Design Systems: How to Stay Ahead and Lead"
description: "Learn how to use AI to speed up and optimize design systems work."
platform: "IxDF"
tags: ["ai", "design-systems", "workshop"]
speakers:
  [
    {
      name: "Jarvis Moore",
      title: "Senior Design Lead, Design Systems at Microsoft",
    },
  ]
---

## Introduction and Speaker Background

Jarvis, Senior Design Lead at Microsoft and a self-described “huge design systems nerd,” opens the Master Class by sharing his passion for design systems. He has studied documentation sites, built components, taught UX and design systems at universities and boot camps, and mentored others. Like many in the audience, he is actively trying to keep pace with the rapid evolution of AI. His goal for the session is to explain how the AI revolution is specifically transforming design systems, emphasizing that by 2028 the AI design software market is projected to reach over $13 billion. He encourages participants who have been hesitant about AI to start implementing it now, noting that design systems practitioners often lag in adoption and that the community must actively shape how AI integrates into the field.

## Three Levels of AI in Design Systems

The Master Class breaks AI down into three progressive levels that build on one another.

Here’s a **much deeper dive** into the **Level 1: LLMs and SLMs** section, expanded with practical details, real-world examples, step-by-step guidance, and actionable advice suitable for a Master Class:

### Level 1: LLMs and SLMs (Large / Small Language Models)

Level 1 is the **foundation** of using AI in design systems. It consists of Large Language Models (LLMs) and Small Language Models (SLMs). The main difference is scale: LLMs (like ChatGPT or Claude) have billions of parameters and broad knowledge, while SLMs are smaller, faster, and sometimes more specialized.

**Common tools in this level**:

- ChatGPT (OpenAI)
- Claude (Anthropic)
- Gemini (Google)
- Copilot (Microsoft)
- Other emerging models

You primarily interact with them through **natural language prompting**. Advanced features include multi-turn conversations (the model remembers previous messages) and the ability to create **custom GPTs** (in ChatGPT) or **custom agents** (in Copilot).

#### Why Level 1 Matters for Design Systems

Most design systems teams are overwhelmed with repetitive, knowledge-heavy tasks. Level 1 tools can absorb your documentation, token libraries, and processes, then act as always-available assistants. This frees senior designers and maintainers from answering the same questions repeatedly.

#### High-Impact Use Cases for Design Systems

1. **Token Management GPT**
   - Suggests consistent token names following your naming convention
   - Checks new tokens against existing ones to prevent duplication or conflicts
   - Validates accessibility (contrast ratios, color usage)
   - Helps migrate or refactor tokens when design language changes
   - Explains why a certain token name is preferred
2. **Component Naming Assistant**
   - Analyzes a new component’s purpose, variants, and behavior
   - Suggests clear, scalable names that fit your existing taxonomy
   - Flags potential naming collisions
   - Recommends how to structure variants (size, state, type, etc.)
   - Especially useful for complex or compound components
3. **Design System Contribution Assistant**
   - Guides contributors step-by-step through your contribution process
   - Checks if a proposed component already exists or overlaps with something in the system
   - Maps design tokens correctly
   - Suggests required Figma layer structure, variants, and documentation sections
   - Explains success criteria and common pitfalls
   - Can even generate a first draft of the contribution ticket or pull request description

#### How to Create a Custom GPT (Step-by-Step)

Creating a custom GPT requires **no coding**. Here’s the practical process:

1. **Go to ChatGPT** → Click “Explore GPTs” → “Create a GPT”
2. **Describe the purpose clearly**. Example prompt you can use:
   > “You are an expert Design Systems Token Manager for our company. You know our token naming conventions, accessibility guidelines, and current token library. Help me name new tokens consistently, check for conflicts, suggest improvements, and ensure accessibility compliance.”
3. **Upload knowledge files** (this is what makes it powerful):
   - Your token JSON / design token file
   - Naming convention documentation
   - Accessibility guidelines (color, contrast, typography)
   - Component library overview
   - Contribution playbook
4. **Configure behavior**:
   - Set instructions for tone (professional, helpful, precise)
   - Define output format (e.g., always show suggested name + reasoning + alternatives)
   - Add constraints (never suggest deprecated tokens, always reference existing ones)
5. **Test and refine** in the preview pane. Ask it real questions from your team and improve the instructions until responses are accurate and useful.
6. **Decide sharing settings**:
   - Private (only you)
   - Team-only (link shared internally)
   - Public (discoverable in GPT store)

**Pro tip**: Start with one focused GPT (e.g., Token Manager) rather than trying to make a “do-everything” assistant. Focused GPTs perform significantly better.

#### Real-World Benefits Observed

- Reduces time spent answering repeated Slack/Teams questions about tokens or naming
- New designers onboard faster because they have a 24/7 knowledgeable assistant
- Fewer naming inconsistencies across the system
- Faster, higher-quality contributions from non-core team members
- Maintainers spend less time on routine reviews and more time on strategic improvements

#### Limitations of Level 1 (Important to Understand)

- Can hallucinate if not properly grounded with your files
- Doesn’t have real-time access to your live design system unless you keep uploading updated files
- Best for knowledge-based or advisory tasks, not for fully autonomous actions
- Quality heavily depends on how well you write instructions and what knowledge you provide

#### Getting Started Recommendations (This Week)

- **Day 1–2**: Experiment with regular prompting on token naming and component questions using ChatGPT or Claude.
- **Day 3–4**: Create your first custom GPT (start with Token Management).
- **Day 5–7**: Upload your actual token library and guidelines, then test it with 5–10 real scenarios from your team. Refine the instructions based on the outputs.

Here’s a **detailed deep dive** into the **Level 2: AI Workflows** section from the Master Class, expanded with clear explanations, real-world examples, step-by-step guidance, benefits, limitations, and practical advice:

### Level 2: AI Workflows

AI workflows represent the next step after mastering basic prompting and custom GPTs. While Level 1 focuses on single conversations with an LLM, **Level 2 connects multiple AI models and external tools** to create automated, end-to-end processes.

Think of it as building a small “assembly line” where information flows automatically from one tool to another, with AI handling the reasoning or generation at key steps. This level significantly reduces manual work for repetitive multi-step tasks that designers and design systems teams face daily.

#### Core Concept

An AI workflow is a **connected sequence of AI-powered tasks**. Instead of manually copying information between apps, the workflow triggers automatically when a certain event happens (e.g., a message in Slack) and completes the full process with minimal human intervention.

**Key characteristics**:

- Combines one or more GPTs/LLMs with external tools
- Handles multi-step processes
- Reduces repetitive manual effort
- Runs automatically once set up
- More powerful than a single GPT because it integrates with the tools your team already uses

#### Real-World Example from the Master Class

**Slack → Documentation → GPT → Response Workflow**

1. A designer posts a question in a dedicated Slack channel (e.g., #design-system-help).
2. Zapier detects the new message (trigger).
3. Zapier pulls the latest relevant documentation from Notion.
4. The documentation + the original question is sent to a custom GPT with a well-crafted prompt.
5. The GPT generates a helpful, accurate response.
6. Zapier posts the response back into the same Slack thread.

**Result**: Team members get fast, consistent answers without maintainers having to reply manually every time. The GPT is grounded in your actual documentation, so responses are more reliable than a generic chat.

This type of workflow makes your custom GPTs accessible inside the everyday tools (Slack, Notion, Figma, Jira, etc.) that designers and developers already live in.

#### Popular Tools for Building AI Workflows

- **Zapier** — Easiest for beginners, visual interface, hundreds of app integrations
- **Make.com** (formerly Integromat) — More powerful and flexible than Zapier
- **OpenAI API** — Used when you need custom code or more control
- Other options: n8n, Microsoft Power Automate, or direct API connections

Most teams start with **Zapier** because it requires little to no coding.

#### Practical Workflow Ideas for Design Systems Teams

Here are concrete, high-value workflows you can build:

1. **Contribution Request Workflow**
   - Trigger: New ticket or form submission requesting a new component
   - Actions: Pulls design specs from Figma → sends to GPT for review → checks against existing components → generates initial contribution checklist → posts summary in Slack + creates a draft ticket
2. **Documentation Update Workflow**
   - Trigger: New component merged in GitHub
   - Actions: Extracts component details → sends to GPT with documentation template → generates draft docs → saves to Notion → notifies the design systems team
3. **Token Audit Workflow**
   - Trigger: Scheduled daily/weekly
   - Actions: Scans token JSON → GPT checks for naming inconsistencies, deprecated usage, accessibility issues → generates report → posts summary in Slack
4. **Design Handoff Assistance**
   - Trigger: New Figma comment or status change
   - Actions: Pulls component specs → GPT suggests token mappings and code structure → posts recommendations in the design-dev channel

#### Step-by-Step: How to Build Your First Simple Workflow (Using Zapier)

1. **Sign up / Log in to Zapier**
2. **Create a new Zap**
3. **Set the Trigger**
   - Example: “New Message Posted in Channel” (Slack)
   - Filter to only specific channels (e.g., #design-system-questions)
4. **Add Action Steps**
   - Action 1: Find or retrieve relevant documentation (Notion “Find Database Item” or “Search”)
   - Action 2: Send data to OpenAI/ChatGPT (use your custom GPT if possible, or a well-written prompt)
   - Action 3: Format the response nicely
   - Action 4: Post the answer back to Slack (in the original thread)
5. **Test thoroughly**
   - Run test messages with real questions your team asks
   - Check accuracy and response quality
   - Refine the prompt sent to the GPT
6. **Turn it on**

**Time investment**: Building your first simple workflow usually takes 30–90 minutes once you’re familiar with the interface.

#### Benefits of Moving to Level 2

- Makes AI accessible to the whole team without everyone needing their own ChatGPT account or custom GPT
- Reduces response time for common questions dramatically
- Improves consistency (everyone gets answers based on the same documentation)
- Frees design systems maintainers from repetitive support work
- Creates a foundation for more advanced automation

#### Limitations and Challenges

- Initial setup is manual and requires careful planning (you must map every step)
- Workflows are rigid — they follow the exact sequence you define
- Debugging can be time-consuming when something breaks
- Requires maintenance when tools change (e.g., Notion updates its API)
- Data privacy: Be cautious about what sensitive information flows through the workflow

#### Recommendations for Getting Started with Level 2

- Start with **one high-pain, high-frequency task** (e.g., answering common questions in Slack)
- Keep the workflow simple for your first attempt (3–5 steps maximum)
- Use your best Level 1 custom GPT as the “brain” of the workflow
- Document the workflow clearly so others on the team understand how it works
- Measure results: Track how many manual replies were avoided and how much time was saved

### Level 3: AI Agents

Level 3 represents the most advanced and powerful stage of AI integration into design systems. While Level 1 (LLMs/GPTs) provides intelligent conversation and Level 2 (AI Workflows) automates predictable multi-step processes, **AI agents** are autonomous systems that can pursue complex goals with minimal ongoing human guidance.

#### What Makes AI Agents Different?

AI agents are **goal-oriented, reasoning, and action-taking systems**. Key capabilities include:

- **Reasoning**: They can analyze a situation, break down problems, and decide the best path forward.
- **Decision-making**: They evaluate options and choose actions based on context and goals.
- **Autonomous action**: They can interact with tools, APIs, and platforms to execute tasks.
- **Self-improvement**: They learn from feedback, outcomes, and new data over time.
- **Handling uncertainty**: Unlike rigid workflows, agents can adapt to unexpected scenarios or incomplete information.

In short, workflows follow a fixed recipe you design. Agents act more like a capable colleague who understands the goal and figures out _how_ to achieve it, even when the path isn’t perfectly predefined.

#### Why Level 3 Matters for Design Systems

Design systems involve many dynamic, interconnected responsibilities: maintaining consistency, auditing usage, guiding contributions, evolving components, and scaling across products. Agents have the potential to take ownership of these ongoing responsibilities, reducing the cognitive and operational load on the core team while keeping human oversight where it matters most (strategic decisions, ethics, and creativity).

#### Key Considerations When Building AI Agents

Building effective agents requires careful planning across four critical areas:

1. **System Prompt and Personality**
   - Define the agent’s role clearly (e.g., “You are an expert Design Systems Guardian focused on consistency, accessibility, and scalability”).
   - Set expertise level, tone of voice (professional yet approachable, aligned with your brand), and communication style.
   - Include boundaries: what the agent should never do, when to ask for human confirmation, and how to escalate complex issues.
2. **Comprehensive Knowledge Base**
   - Feed the agent your complete design system assets: token libraries, component specifications, accessibility guidelines, contribution processes, brand rules, and historical decisions.
   - Keep this knowledge updated regularly — agents perform best when grounded in accurate, current information.
   - Include examples of good vs. bad patterns so the agent can learn quality standards.
3. **Tool Connections (The “Action” Layer)**
   - Agents need access to the tools where work actually happens:
     - Figma (via API or plugins)
     - Storybook / component libraries
     - GitHub / version control
     - Documentation sites (Notion, ZeroHeight, etc.)
     - Design handoff tools
     - Analytics platforms (for usage data)
   - The richer the tool integrations, the more autonomous the agent can become.
4. **Feedback Mechanisms and Continuous Improvement**
   - Build loops so the agent receives corrections when outputs are off.
   - Track performance metrics (accuracy, usefulness, time saved).
   - Allow the team to rate responses or flag issues to train the agent over time.
   - Regularly review and refine the agent’s knowledge and behavior.

#### Promising Agent Ideas for Design Systems

Here are realistic, high-value agent concepts:

- **Collaborative Design Agent**
  - Joins design critiques (via Zoom integration or shared documents).
  - Suggests alternatives, validates decisions against system rules.
  - Explores edge cases and accessibility concerns in real time.
  - Learns individual designer preferences and team patterns over time.
- **System Implementation & Audit Agent**
  - Continuously analyzes product usage data.
  - Runs automated design audits across the product suite.
  - Identifies drift, inconsistent implementations, or under-used components.
  - Suggests improvements and prioritizes new or updated components for the roadmap.
  - Helps maintain long-term system health without manual audits.
- **Contribution & Onboarding Agent**
  - Guides new contributors through the full contribution process.
  - Reviews proposed components for overlap, quality, and fit.
  - Generates documentation drafts, token mappings, and variant recommendations.
  - Answers questions and provides personalized help during onboarding.

#### Current Reality and Implementation Guidance

True fully autonomous agents are still emerging and often require more technical setup than Levels 1 or 2. Many teams start by enhancing workflows with agent-like behavior or using platforms that simplify agent creation (such as custom GPTs with advanced tools, LangChain-based agents, or enterprise solutions like Microsoft Copilot Studio).

**Practical starting advice**:

- Begin with **narrow, well-defined goals** rather than trying to build a “super agent” that does everything.
- Combine Level 1 and Level 2 first (a strong custom GPT + automated workflows) before adding true agent autonomy.
- Focus on high-frequency, high-value pain points where autonomy delivers clear ROI.
- Always include human review gates for critical decisions (especially those affecting accessibility, brand, or user experience).

#### Benefits of Level 3 Agents

- Dramatically reduce repetitive and audit-style work
- Provide 24/7 expert support at scale
- Enable proactive system maintenance instead of reactive fixes
- Help scale design systems across large or distributed organizations
- Free senior team members to focus on strategy, innovation, and mentorship

#### Challenges and Risks

- Higher complexity in setup and maintenance
- Need for robust governance to prevent unwanted autonomous actions
- Potential for compounding errors if feedback loops are weak
- Privacy and security concerns when connecting many tools
- Risk of over-reliance — agents should augment, not replace, human judgment

#### Path Forward

The speaker emphasizes that Level 3 is not an immediate requirement for every team. Master Level 1 (custom GPTs) and Level 2 (workflows) first. Once those deliver consistent value and your team has built strong prompting and integration skills, you can thoughtfully explore agent capabilities for the most impactful areas of your design system.

The future of design systems will likely involve a blend of all three levels, with agents handling ongoing intelligence and maintenance while humans provide strategic direction, creativity, and ethical oversight.

Here is a **detailed, in-depth deep dive** into the remaining sections of the Master Class, written in the same educational, practical style as the previous expansions.

## Looking to the Future

The speaker highlights two transformative trends that will fundamentally change how design systems are built, maintained, and experienced. Design systems will shift from static collections of components to dynamic, intelligent foundations that power adaptive and personalized experiences at scale.

### Adaptive Components

Adaptive components are UI elements that **automatically change their appearance, behavior, layout, or content** in real time based on contextual signals — without designers having to manually create and maintain dozens of variants.

**Core idea**: Instead of building separate variants for light/dark mode, mobile/desktop, high-contrast, or different user needs, you define one intelligent component that adapts itself responsibly.

**Realistic examples**:

- **Input fields** that dynamically adjust masking, validation rules, placeholder text, or error messages based on user locale, past behavior, or device type.
- **Card or list components** that reprioritize content (e.g., move the most relevant action to the top), change layout density, or simplify visual hierarchy when cognitive load or screen real estate is limited.
- **Theme and accessibility adaptations** that automatically switch to high-contrast modes, adjust font sizes/weights for readability, or modify colors for different types of color blindness — triggered by user settings or environmental conditions (e.g., bright sunlight detected via device sensors).
- **Navigation or dashboard elements** that collapse, expand, or reorder themselves based on the user’s current task, frequency of use, or accessibility preferences.

**Role of design systems**: Design systems become the single source of truth and guardrails. They define the rules, constraints, and fallback behaviors so that adaptive logic stays consistent, accessible, and on-brand across the entire product ecosystem. Without a strong design system, adaptive components risk becoming fragmented and chaotic.

### Hyper-Personalized Interfaces

Hyper-personalization goes beyond basic theming or responsive design. It uses **real-time behavioral data, user history, preferences, and AI reasoning** to deliver highly relevant experiences tailored to the individual at that specific moment.

**Realistic examples**:

- **Dashboards** that rearrange widgets and prioritize information based on the user’s most frequent tasks or recent activity.
- **Mobile apps** that start simple for new users (progressive disclosure) and gradually introduce advanced features and complexity as the user gains proficiency.
- **Homepage or marketing pages** that change tone, detail level, imagery, and call-to-action based on whether the user appears to be a beginner, expert, or decision-maker.
- **Product descriptions or configuration tools** that adapt language complexity and technical depth according to the user’s demonstrated expertise.
- **Token-level personalization** — fonts, spacing, contrast ratios, or even component variants that adjust automatically based on the user’s accessibility profile or device context.

**Role of design systems**: They act as the **foundational enabler**. A robust design system provides the modular building blocks, consistent tokens, accessibility rules, and brand guardrails that allow personalization to happen safely and scalably. Without this foundation, hyper-personalization quickly leads to inconsistent, inaccessible, or off-brand experiences.

In the future, design systems will need to support both **consistency at scale** and **dynamic, context-aware variation** — a balance that only thoughtful systems thinking can achieve.

## Ethical Considerations and Governance

As AI becomes deeply embedded in design systems, the speaker emphasizes that technical capability must be matched with strong ethical frameworks. We cannot treat these powerful tools as “set and forget.”

**Key ethical priorities**:

- **Mitigating bias** — In training data, generated designs, color choices, content tone, and decision logic. Regular audits are essential.
- **Transparency in AI decision-making** — Users and teams should understand why a component adapted or personalized in a certain way when needed.
- **Protecting user privacy** — Especially critical with adaptive and hyper-personalized systems that rely on behavioral data, history, and preferences. Collect only what is necessary and be transparent about usage.
- **Clarifying ownership** — Who owns AI-generated assets, variants, or code? How do we prevent unintentional plagiarism or uncredited use of external patterns?
- **Agent governance** — For Level 3 agents: establish clear boundaries for autonomy, escalation rules for sensitive decisions, regular bias and quality audits, privacy-by-design principles, and accessibility as a non-negotiable foundation (never optional).

**Practical recommendation**: Create an internal **AI Governance Framework** for your design system that includes:

- Review processes for any new AI-powered feature or agent
- Guidelines for data usage and user consent
- Accessibility testing requirements that run automatically
- Human oversight checkpoints for high-impact changes

Accessibility must remain a hard constraint — agents and adaptive systems should never sacrifice it in the name of personalization.

## Essential Skills for Tomorrow’s Design Systems Practitioners

The role of design systems practitioners is evolving rapidly. Technical component-building skills remain important, but new capabilities will determine who thrives.

**Core skills to develop**:

- **Advanced systems thinking** — Understanding how dynamic data, user context, and AI-driven evolution affect the entire ecosystem, not just individual components.
- **High AI fluency and prompt engineering** — Knowing how to effectively guide LLMs, workflows, and agents to produce reliable, high-quality outputs.
- **Data-aware design** — Using real usage analytics, adoption metrics, and behavioral signals to continuously evolve tokens, components, and patterns.
- **Conversational UX expertise** — Designing natural, helpful interactions with AI assistants, agents, and personalized interfaces.
- **AI governance and ethical oversight** — Ability to evaluate bias, privacy implications, transparency, and long-term societal impact.
- **Strategic leadership** — Driving responsible AI adoption within the organization instead of having it imposed by external teams or hype.

**Emerging roles** that are already appearing or will become common:

- **AI Systems Designers** — Specialists who design intelligent, adaptive component systems.
- **AI Ops / Design System Automation Engineers** — Focus on building and maintaining reliable workflows and agents.
- **AI Enablement Designers** — Help the broader organization adopt and use design system AI tools effectively.
- **Systems Intelligence Designers** — Combine deep design systems knowledge with AI to create self-improving, learning systems.

The most valuable practitioners will be those who can **bridge human-centered design principles with AI capabilities** — using technology to amplify creativity and consistency while protecting what makes design fundamentally human.

## Practical Steps to Get Started Today

The speaker strongly recommends a **progressive, low-risk approach**: “Start small but think big.” Instead of trying to jump straight into complex AI agents, build confidence and capability level by level. This reduces overwhelm and helps you demonstrate real value before scaling up.

### 1. Master Level 1 First – LLMs & Custom GPTs (Foundation Phase)

**Why start here?**  
Level 1 is the easiest entry point with almost zero technical setup. It gives immediate wins and helps you understand how AI thinks and responds.

**Concrete actions you can take right now:**

- **Learn effective prompting**  
  Practice writing clear, specific prompts. Focus on context, role, constraints, and desired output format. Test the same request with different levels of detail to see how the quality changes.
- **Create 2–3 simple custom GPTs tailored to your design system**  
  Examples that deliver quick value:
  - **Token Management GPT**: Upload your token JSON/schema or naming conventions. Use it to suggest new token names, check for conflicts, ensure accessibility contrast compliance, and maintain consistency.
  - **Component Naming Assistant**: Feed it your existing component library and taxonomy rules. Ask it to name new components while avoiding redundancy and improving clarity.
  - **Contribution Guide GPT**: Upload your contribution process documentation, templates, and guidelines. It can walk designers or developers step-by-step through submitting a new component, suggest required variants, and explain token mapping.

**Tips for building effective custom GPTs:**

- Use the “Create a GPT” interface in ChatGPT (or equivalent in Copilot).
- Upload relevant files: token libraries, Figma guidelines, accessibility standards, documentation pages.
- Test the GPT thoroughly in the preview pane.
- Decide early whether it stays private or is shared with your team.

**Goal at this stage**: Spend 1–2 weeks experimenting. Measure time saved on repetitive tasks (e.g., naming tokens or answering contribution questions). Use these small wins to build confidence and gather examples for stakeholders.

### 2. Move to Level 2 – Build Simple AI Workflows (Automation Phase)

Once you’re comfortable with Level 1, connect your GPTs to the tools your team already uses.

**Practical workflow ideas:**

- Slack → GPT → Response: Someone asks a design system question in a dedicated Slack channel → Zapier catches it → sends context + documentation to your custom GPT → posts the answer back in Slack.
- Notion documentation + GPT: Automatically pull latest guidelines when a question is asked.
- Figma + GPT: Export component specs or screenshots → get suggestions on naming, variants, or accessibility improvements.

**Tools to explore for workflows:**

- Zapier (easiest for beginners)
- Make.com
- OpenAI API (more flexible but requires more setup)

**Key advice:**

- Start with **one** workflow that solves a real pain point (e.g., reducing repetitive questions in Slack).
- Document the time saved and quality of responses.
- Expect the initial setup to feel manual — this is normal. Once built, it runs with little ongoing effort.

**Milestone**: After 2–4 weeks, you should have at least one automated workflow that multiple team members can benefit from.

### 3. Progress to Level 3 – Explore AI Agents (Advanced Phase)

Only move here after Levels 1 and 2 are working well.

**Focus areas when building agents:**

- Define a clear **goal** (e.g., “Help maintain and improve our design system documentation and components”).
- Build a strong **knowledge base** (all your docs, token files, contribution guidelines, accessibility rules).
- Connect **tools** so the agent can act (Figma, Storybook, GitHub, Notion, Slack, etc.).
- Set up **feedback loops** so the agent learns from corrections and improves over time.

**Early agent ideas worth exploring:**

- A design critique companion that reviews components against system rules.
- An audit agent that scans product usage and flags inconsistencies or underused patterns.
- A contribution assistant that guides users end-to-end and even suggests improvements.

**Realistic expectation**: Full autonomous agents are more technically complex and may require developer support or platforms like Cursor, Replit Agents, or custom setups. Start by researching and prototyping small agent behaviors rather than aiming for a perfect production agent immediately.

### 4. General Best Practices Across All Levels

- **Demonstrate value early and often**  
  Track time saved, quality improvements, or reduced back-and-forth. Share these metrics with your team and leadership to gain buy-in for bigger experiments.
- **Respect data privacy and company policies**  
  Begin with non-sensitive, generally available information. Use company-approved tools (e.g., enterprise Copilot) when possible. Turn off training on personal data in free ChatGPT accounts.
- **Stay iterative**  
  Treat every GPT, workflow, or agent as a prototype. Continuously refine based on real usage and feedback.
- **Balance automation with human oversight**  
  AI handles repetitive work, but final decisions on quality, accessibility, and brand alignment should remain with designers.
- **Document your journey**  
  Keep notes on what worked, what didn’t, and lessons learned. This becomes valuable knowledge for your team and future scaling.

### Final Mindset

Start small (one custom GPT this week).  
Think big (imagine agents that actively maintain and evolve your entire design system).  
Be strategic — the goal is not to replace human judgment but to free designers from tedious tasks so they can focus on creativity, strategy, and user needs.

By following this leveled approach, you build skills gradually, reduce risk, prove value step-by-step, and position yourself (and your design system) to thrive as AI becomes a core part of the design toolkit.
